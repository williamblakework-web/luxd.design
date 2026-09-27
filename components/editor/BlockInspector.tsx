'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'
import type { Block } from '@/lib/schema'
import { blockLabel } from '@/lib/schema'
import { useEditor } from './EditorProvider'

const INPUT =
  'w-full rounded border border-line bg-bg px-3 py-2 text-step--1 text-ink placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
const LABEL = 'block font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted mb-1.5'
const TAB =
  'px-3 py-2 font-mono text-step--1 uppercase tracking-wider text-ink-muted border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-ink'

/**
 * Field level editing for the selected block. Radix Dialog for the shell,
 * Radix Tabs to keep content separate from layout settings, so the panel
 * stays legible as block types gain options.
 */
export function BlockInspector({
  block,
  projectSlug,
  open,
  onOpenChange,
}: {
  block: Block
  projectSlug: string
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { dispatch } = useEditor()

  function patch(next: Record<string, unknown>) {
    dispatch({ type: 'updateBlock', projectSlug, blockId: block.id, patch: next })
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50 animate-overlay-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[min(40rem,94vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded border border-line bg-bg p-6 shadow-2xl animate-content-in">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-step-1">{blockLabel(block.type)}</Dialog.Title>
              <Dialog.Description className="mt-1 font-mono text-step--1 text-ink-muted">
                {block.id}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <Tabs.Root defaultValue="content">
            <Tabs.List className="mb-5 flex border-b border-line" aria-label="Block settings">
              <Tabs.Trigger value="content" className={TAB}>
                Content
              </Tabs.Trigger>
              <Tabs.Trigger value="layout" className={TAB}>
                Layout
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="content" className="space-y-4 focus-visible:outline-none">
              <ContentFields block={block} patch={patch} />
            </Tabs.Content>

            <Tabs.Content value="layout" className="space-y-4 focus-visible:outline-none">
              <LayoutFields block={block} patch={patch} />
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

/* ---------------------------------------------------------------------------
   Field primitives
   --------------------------------------------------------------------------- */

function Text({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className={LABEL}>{label}</label>
      <input className={INPUT} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}

function Area({
  label,
  value,
  onChange,
  hint,
  rows = 5,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  hint?: string
  rows?: number
}) {
  return (
    <div>
      <label className={LABEL}>{label}</label>
      <textarea className={INPUT} rows={rows} value={value} onChange={(event) => onChange(event.target.value)} />
      {hint ? <p className="mt-1 text-step--1 text-ink-muted">{hint}</p> : null}
    </div>
  )
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} className="h-4 w-4 accent-accent" />
      <span className="text-step--1 text-ink">{label}</span>
    </label>
  )
}

/** One entry per line keeps list editing fast without a nested form. */
const LINE_HINT = 'One per line.'
const toLines = (values: string[]) => values.join('\n')
const fromLines = (value: string) => value.split('\n').filter((line) => line.trim() !== '')

/* ---------------------------------------------------------------------------
   Per type fields
   --------------------------------------------------------------------------- */

function ContentFields({ block, patch }: { block: Block; patch: (next: Record<string, unknown>) => void }) {
  switch (block.type) {
    case 'hero':
      return (
        <>
          <Text label="Eyebrow" value={block.eyebrow ?? ''} onChange={(v) => patch({ eyebrow: v })} />
          <Text label="Heading" value={block.heading} onChange={(v) => patch({ heading: v })} />
          <Area label="Lede" value={block.lede ?? ''} onChange={(v) => patch({ lede: v })} rows={3} />
        </>
      )

    case 'text':
      return (
        <>
          <Text label="Eyebrow" value={block.eyebrow ?? ''} onChange={(v) => patch({ eyebrow: v })} />
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Area
            label="Paragraphs"
            value={toLines(block.paragraphs)}
            onChange={(v) => patch({ paragraphs: fromLines(v) })}
            hint="One paragraph per line."
            rows={8}
          />
        </>
      )

    case 'list':
      return (
        <>
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Area
            label="Items"
            value={block.items.map((item) => (item.term ? `${item.term} :: ${item.body}` : item.body)).join('\n')}
            onChange={(v) =>
              patch({
                items: fromLines(v).map((line) => {
                  const [term, body] = line.split(' :: ')
                  return body ? { term: term.trim(), body: body.trim() } : { body: line.trim() }
                }),
              })
            }
            hint="One per line. Use 'Term :: body' to add a bold term."
            rows={8}
          />
        </>
      )

    case 'quote':
      return (
        <>
          <Area label="Quote" value={block.quote} onChange={(v) => patch({ quote: v })} rows={4} />
          <Text label="Attribution" value={block.attribution ?? ''} onChange={(v) => patch({ attribution: v })} />
        </>
      )

    case 'statement':
      return <Area label="Statement" value={block.text} onChange={(v) => patch({ text: v })} rows={3} />

    case 'metricsGrid':
      return (
        <>
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Area
            label="Metrics"
            value={block.metrics.map((metric) => `${metric.value} :: ${metric.label}`).join('\n')}
            onChange={(v) =>
              patch({
                metrics: fromLines(v).map((line) => {
                  const [value, label] = line.split(' :: ')
                  return { value: (value ?? '').trim(), label: (label ?? '').trim() }
                }),
              })
            }
            hint="One per line, as 'value :: label'."
            rows={6}
          />
        </>
      )

    case 'mediaGrid':
      return (
        <>
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Area
            label="Media"
            value={block.items.map((item) => `${item.src} :: ${item.alt}`).join('\n')}
            onChange={(v) =>
              patch({
                items: fromLines(v).map((line, index) => {
                  const [src, alt] = line.split(' :: ')
                  const existing = block.items[index]
                  return {
                    ...(existing ?? { aspect: '16/9' as const, kind: 'image' as const }),
                    src: (src ?? '').trim(),
                    alt: (alt ?? '').trim(),
                  }
                }),
              })
            }
            hint="One per line, as 'path :: alt text'."
            rows={6}
          />
        </>
      )

    case 'comparison':
      return (
        <>
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Area label="Summary" value={block.summary ?? ''} onChange={(v) => patch({ summary: v })} rows={3} />
          <Text
            label="Before label"
            value={block.before.label}
            onChange={(v) => patch({ before: { ...block.before, label: v } })}
          />
          <Area
            label="Before notes"
            value={toLines(block.before.notes)}
            onChange={(v) => patch({ before: { ...block.before, notes: fromLines(v) } })}
            hint={LINE_HINT}
            rows={3}
          />
          <Text
            label="After label"
            value={block.after.label}
            onChange={(v) => patch({ after: { ...block.after, label: v } })}
          />
          <Area
            label="After notes"
            value={toLines(block.after.notes)}
            onChange={(v) => patch({ after: { ...block.after, notes: fromLines(v) } })}
            hint={LINE_HINT}
            rows={3}
          />
        </>
      )

    case 'embed':
      return (
        <>
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Text
            label="Source URL"
            value={block.media.src}
            onChange={(v) => patch({ media: { ...block.media, src: v } })}
          />
          <Text
            label="Accessible description"
            value={block.media.alt}
            onChange={(v) => patch({ media: { ...block.media, alt: v } })}
          />
          <Text label="Fallback text" value={block.fallbackText} onChange={(v) => patch({ fallbackText: v })} />
        </>
      )

    case 'testimonialSlider':
      return (
        <>
          <Text label="Heading" value={block.heading ?? ''} onChange={(v) => patch({ heading: v })} />
          <Area
            label="Testimonial ids"
            value={toLines(block.testimonialIds)}
            onChange={(v) => patch({ testimonialIds: fromLines(v) })}
            hint={LINE_HINT}
            rows={4}
          />
        </>
      )

    default:
      return <p className="text-step--1 text-ink-muted">No editable content fields for this block.</p>
  }
}

function LayoutFields({ block, patch }: { block: Block; patch: (next: Record<string, unknown>) => void }) {
  switch (block.type) {
    case 'mediaGrid':
      return (
        <>
          <div>
            <label className={LABEL}>Columns</label>
            <select
              className={INPUT}
              value={block.columns}
              onChange={(event) => patch({ columns: Number(event.target.value) })}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <Toggle label="Open items in a lightbox" value={block.lightbox} onChange={(v) => patch({ lightbox: v })} />
        </>
      )

    case 'list':
      return <Toggle label="Numbered list" value={block.ordered} onChange={(v) => patch({ ordered: v })} />

    case 'embed':
      return (
        <div>
          <label className={LABEL}>Aspect ratio</label>
          <select
            className={INPUT}
            value={block.media.aspect}
            onChange={(event) => patch({ media: { ...block.media, aspect: event.target.value } })}
          >
            {['16/9', '4/3', '3/2', '1/1', '9/16', 'auto'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )

    default:
      return <p className="text-step--1 text-ink-muted">This block has no layout options.</p>
  }
}
