'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'
import { validateDocument } from '@/lib/schema'
import { useEditor } from './EditorProvider'

const TAB =
  'px-3 py-2 font-mono text-step--1 uppercase tracking-wider text-ink-muted border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-ink'

/**
 * Persistence, deliberately kept as a plain JSON payload rather than a
 * proprietary save format. Export writes the whole document. Import validates
 * against the schema before replacing anything, so a malformed paste is
 * rejected with readable reasons instead of corrupting the live document.
 */
export function ExportDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { state, dispatch } = useEditor()
  const [importText, setImportText] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [copied, setCopied] = useState(false)

  const json = JSON.stringify(state.document, null, 2)

  async function copy() {
    try {
      await navigator.clipboard.writeText(json)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setErrors(['Clipboard access was refused. Select the text and copy it manually.'])
    }
  }

  function download() {
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `portfolio-${new Date().toISOString().slice(0, 10)}.json`
    link.click()
    URL.revokeObjectURL(url)
    dispatch({ type: 'markClean' })
  }

  function runImport() {
    let parsed: unknown
    try {
      parsed = JSON.parse(importText)
    } catch {
      setErrors(['That is not valid JSON.'])
      return
    }

    const result = validateDocument(parsed)
    if (!result.ok || !result.document) {
      setErrors(result.errors.slice(0, 12))
      return
    }

    dispatch({ type: 'replaceDocument', document: result.document })
    setErrors([])
    setImportText('')
    onOpenChange(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-ink/50 animate-overlay-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[85vh] w-[min(46rem,94vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded border border-line bg-bg p-6 shadow-2xl animate-content-in">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-step-1">Export and import</Dialog.Title>
              <Dialog.Description className="mt-1 text-step--1 text-ink-muted">
                The whole portfolio document as JSON. Import validates against the schema before replacing anything.
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

          <Tabs.Root defaultValue="export">
            <Tabs.List className="mb-5 flex border-b border-line" aria-label="Export or import">
              <Tabs.Trigger value="export" className={TAB}>
                Export
              </Tabs.Trigger>
              <Tabs.Trigger value="import" className={TAB}>
                Import
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="export" className="focus-visible:outline-none">
              <div className="mb-3 flex gap-2">
                <button
                  type="button"
                  onClick={download}
                  className="rounded bg-accent px-4 py-2 font-mono text-step--1 uppercase tracking-wider text-accent-contrast hover:bg-accent-hover"
                >
                  Download JSON
                </button>
                <button
                  type="button"
                  onClick={copy}
                  className="rounded border border-line px-4 py-2 font-mono text-step--1 uppercase tracking-wider text-ink hover:bg-bg-soft"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <textarea
                readOnly
                value={json}
                rows={16}
                className="w-full rounded border border-line bg-bg-soft p-3 font-mono text-[0.72rem] leading-relaxed text-ink-2"
                aria-label="Document JSON"
              />
              <p className="mt-2 text-step--1 text-ink-muted">
                To promote this to production, replace the files in lib/content with the contents of this payload, or
                point loadDocument at wherever you persist it.
              </p>
            </Tabs.Content>

            <Tabs.Content value="import" className="focus-visible:outline-none">
              <textarea
                value={importText}
                onChange={(event) => setImportText(event.target.value)}
                rows={14}
                placeholder="Paste a previously exported document"
                className="w-full rounded border border-line bg-bg p-3 font-mono text-[0.72rem] leading-relaxed text-ink"
                aria-label="Paste document JSON"
              />
              {errors.length > 0 ? (
                <ul className="mt-3 space-y-1 rounded border border-line bg-bg-soft p-3" role="alert">
                  {errors.map((error, index) => (
                    <li key={index} className="font-mono text-step--1 text-ink-2">
                      {error}
                    </li>
                  ))}
                </ul>
              ) : null}
              <button
                type="button"
                onClick={runImport}
                disabled={importText.trim() === ''}
                className="mt-3 rounded bg-accent px-4 py-2 font-mono text-step--1 uppercase tracking-wider text-accent-contrast hover:bg-accent-hover disabled:opacity-40"
              >
                Validate and replace
              </button>
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
