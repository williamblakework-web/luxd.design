'use client'

import type { ReactNode } from 'react'
import type { Block } from '@/lib/schema'
import { useEditor } from './EditorProvider'
import { BlockToolbar } from './BlockToolbar'
import { cn } from '@/lib/utils'

/**
 * Wraps every rendered block. In view mode it is a plain fragment with no
 * markup cost. In edit mode it becomes a selectable region with an overlay
 * toolbar, which is the whole point of the bridge: the editing affordance
 * attaches to the real rendered component rather than to a separate form.
 */
export function EditableBlock({
  block,
  projectSlug,
  children,
}: {
  block: Block
  projectSlug: string
  children: ReactNode
}) {
  const { state, dispatch, isEditing } = useEditor()

  if (!isEditing) return <>{children}</>

  const selected = state.selectedBlockId === block.id

  return (
    <div
      className={cn(
        'relative rounded transition-shadow',
        selected
          ? 'shadow-[0_0_0_2px_rgb(var(--accent))]'
          : 'hover:shadow-[0_0_0_1px_rgb(var(--line-strong))]',
      )}
    >
      {/* Selection target. A real button, so it is reachable by keyboard. */}
      <button
        type="button"
        onClick={() => dispatch({ type: 'selectBlock', blockId: selected ? null : block.id })}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Select ${block.type} block`}
        aria-pressed={selected}
      />

      {selected ? <BlockToolbar block={block} projectSlug={projectSlug} /> : null}

      {/* Content is inert while selected so clicks land on the selection layer. */}
      <div className={cn(selected && 'pointer-events-none')}>{children}</div>
    </div>
  )
}
