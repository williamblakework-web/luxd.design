'use client'

import { useEffect, useState } from 'react'
import { useEditor } from './EditorProvider'
import { ExportDialog } from './ExportDialog'
import { cn } from '@/lib/utils'

/**
 * The persistent editor bar. Hidden entirely unless editor mode is switched
 * on, so the public site carries no editing affordances.
 *
 * Enable with ?edit=1 in the URL, or Ctrl/Cmd + E.
 */
export function EditorChrome() {
  const { state, dispatch, isEditing } = useEditor()
  const [available, setAvailable] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('edit') === '1') setAvailable(true)

    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'e') {
        event.preventDefault()
        setAvailable(true)
        dispatch({ type: 'setMode', mode: state.mode === 'edit' ? 'view' : 'edit' })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dispatch, state.mode])

  // Warn before losing unsaved edits.
  useEffect(() => {
    if (!state.dirty) return
    function onBeforeUnload(event: BeforeUnloadEvent) {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [state.dirty])

  if (!available) return null

  return (
    <>
      <div className="fixed bottom-4 left-1/2 z-[60] w-[min(46rem,94vw)] -translate-x-1/2 rounded border border-line bg-bg/95 p-2 shadow-2xl backdrop-blur no-print">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch({ type: 'setMode', mode: isEditing ? 'view' : 'edit' })}
            className={cn(
              'rounded px-3 py-2 font-mono text-step--1 uppercase tracking-wider transition-colors',
              isEditing ? 'bg-accent text-accent-contrast' : 'border border-line text-ink hover:bg-bg-soft',
            )}
            aria-pressed={isEditing}
          >
            {isEditing ? 'Editing' : 'Edit mode'}
          </button>

          <span className="h-5 w-px bg-line" aria-hidden="true" />

          <button
            type="button"
            onClick={() => dispatch({ type: 'undo' })}
            disabled={state.past.length === 0}
            className="rounded px-3 py-2 font-mono text-step--1 text-ink-muted hover:bg-bg-soft hover:text-ink disabled:opacity-40"
          >
            Undo
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'redo' })}
            disabled={state.future.length === 0}
            className="rounded px-3 py-2 font-mono text-step--1 text-ink-muted hover:bg-bg-soft hover:text-ink disabled:opacity-40"
          >
            Redo
          </button>

          <span className="h-5 w-px bg-line" aria-hidden="true" />

          <button
            type="button"
            onClick={() => setExportOpen(true)}
            className="rounded border border-line px-3 py-2 font-mono text-step--1 text-ink hover:bg-bg-soft"
          >
            Export / import
          </button>

          <span className="ml-auto font-mono text-step--1 text-ink-muted">
            {state.dirty ? 'Unsaved changes' : 'No changes'}
            {state.selectedBlockId ? ' · block selected' : ''}
          </span>
        </div>

        {isEditing ? (
          <p className="mt-2 px-1 font-mono text-[0.7rem] text-ink-muted">
            Click a block to select it. Use the toolbar to edit, reorder, insert or delete. Ctrl or Cmd + E leaves edit mode.
          </p>
        ) : null}
      </div>

      <ExportDialog open={exportOpen} onOpenChange={setExportOpen} />
    </>
  )
}
