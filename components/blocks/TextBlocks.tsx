import type { BlockOf } from '@/lib/schema'
import { cn, isPlaceholder } from '@/lib/utils'

/** Placeholder copy is tinted so unfinished content is obvious in review. */
function Paragraph({ children }: { children: string }) {
  return (
    <p className={cn('prose-measure text-pretty', isPlaceholder(children) && 'font-mono text-step--1 text-accent')}>
      {children}
    </p>
  )
}

export function TextBlock({ block }: { block: BlockOf<'text'> }) {
  return (
    <section className="my-12">
      {block.eyebrow || block.heading ? (
        <div className="mb-5 flex items-baseline gap-4">
          {block.eyebrow ? <span className="eyebrow eyebrow-rule shrink-0">{block.eyebrow}</span> : null}
          {block.heading ? <h2 className="text-step-2">{block.heading}</h2> : null}
        </div>
      ) : null}
      <div className="space-y-4">
        {block.paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </div>
    </section>
  )
}

export function ListBlock({ block }: { block: BlockOf<'list'> }) {
  const Tag = block.ordered ? 'ol' : 'ul'
  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-5 text-step-2">{block.heading}</h2> : null}
      <Tag className="flex flex-col gap-4">
        {block.items.map((item, index) => (
          <li key={index} className="flex items-start gap-5 border-t border-line pt-4">
            <span className="w-8 shrink-0 pt-0.5 font-mono text-step--1 text-accent">
              {block.ordered ? String(index + 1).padStart(2, '0') : '·'}
            </span>
            <div className="min-w-0">
              {item.term ? <strong className="block font-sans font-semibold text-ink">{item.term}</strong> : null}
              <span className={cn('block text-ink-2', isPlaceholder(item.body) && 'font-mono text-step--1 text-accent')}>
                {item.body}
              </span>
            </div>
          </li>
        ))}
      </Tag>
    </section>
  )
}

export function QuoteBlock({ block }: { block: BlockOf<'quote'> }) {
  return (
    <figure className="my-12 border-t-2 border-line-strong pt-6">
      <blockquote>
        <p className="max-w-[40ch] font-display text-step-2 font-medium leading-snug text-ink">{block.quote}</p>
      </blockquote>
      {block.attribution ? (
        <figcaption className="mt-4 font-mono text-step--1 text-ink-muted">{block.attribution}</figcaption>
      ) : null}
    </figure>
  )
}

export function StatementBlock({ block }: { block: BlockOf<'statement'> }) {
  return (
    <div className="my-12 rounded bg-bg-invert px-8 py-10 sm:px-10">
      <p className="max-w-[32ch] font-display text-step-2 font-medium leading-snug text-ink-invert">{block.text}</p>
    </div>
  )
}

export function MetricsGridBlock({ block }: { block: BlockOf<'metricsGrid'> }) {
  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-5 text-step-2">{block.heading}</h2> : null}
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {block.metrics.map((metric, index) => (
          <div key={index} className="border-t-2 border-line-strong pt-4">
            <dt className="font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">{metric.label}</dt>
            <dd
              className={cn(
                'mt-2 font-display font-bold tracking-tight text-ink',
                isPlaceholder(metric.value) ? 'text-step-0 font-mono font-normal text-accent' : 'text-step-3',
              )}
            >
              {metric.value}
            </dd>
            {metric.note ? <p className="mt-1 text-step--1 text-ink-muted">{metric.note}</p> : null}
          </div>
        ))}
      </dl>
    </section>
  )
}
