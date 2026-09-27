'use client'

import { useState } from 'react'
import * as Toolbar from '@radix-ui/react-toolbar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tooltip from '@radix-ui/react-tooltip'
import { BLOCK_REGISTRY, blockLabel, createBlockId, type Block } from '@/lib/schema'
import { useEditor } from './EditorProvider'
import { BlockInspector } from './BlockInspector'

const ITEM = 'grid h-9 w-9 place-items-center rounded text-ink-muted hover:bg-bg-soft hover:text-ink data-[disabled]:opacity-40'

/**
 * The overlay toolbar that attaches to the selected block. Radix Toolbar
 * handles roving focus, so the whole strip is one tab stop with arrow key
 * movement inside it.
 */
export function BlockToolbar({ block, projectSlug }: { block: Block; projectSlug: string }) {
  const { dispatch } = useEditor()
  const [inspectorOpen, setInspectorOpen] = useState(false)

  return (
    <>
      {/* Sits clear of the content rather than over its first line. */}
      <div className="absolute -top-11 left-0 z-30 flex items-center gap-2">
        <span className="rounded-t bg-accent px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-accent-contrast">
          {blockLabel(block.type)}
        </span>
      </div>

      <Tooltip.Provider delayDuration={400}>
        <Toolbar.Root
          className="absolute -top-12 right-0 z-30 flex items-center gap-0.5 rounded border border-line bg-bg p-1 shadow-lg"
          aria-label="Block actions"
          onClick={(event) => event.stopPropagation()}
        >
          <ToolbarButton label="Edit content" onClick={() => setInspectorOpen(true)}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </ToolbarButton>

          <ToolbarButton
            label="Move up"
            onClick={() => dispatch({ type: 'moveBlock', projectSlug, blockId: block.id, direction: 'up' })}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </ToolbarButton>

          <ToolbarButton
            label="Move down"
            onClick={() => dispatch({ type: 'moveBlock', projectSlug, blockId: block.id, direction: 'down' })}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </ToolbarButton>

          <Toolbar.Separator className="mx-1 h-5 w-px bg-line" />

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Toolbar.Button className={ITEM} aria-label="Insert block after this one">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </Toolbar.Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={6}
                align="end"
                className="z-50 w-64 rounded border border-line bg-bg p-1 shadow-xl"
              >
                <DropdownMenu.Label className="px-2 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted">
                  Insert after
                </DropdownMenu.Label>
                {BLOCK_REGISTRY.map((definition) => (
                  <DropdownMenu.Item
                    key={definition.type}
                    onSelect={() =>
                      dispatch({
                        type: 'insertBlock',
                        projectSlug,
                        afterBlockId: block.id,
                        block: definition.create(createBlockId(definition.type)),
                      })
                    }
                    className="cursor-pointer rounded px-2 py-2 text-step--1 outline-none data-[highlighted]:bg-bg-soft"
                  >
                    <span className="block font-medium text-ink">{definition.label}</span>
                    <span className="block text-step--1 text-ink-muted">{definition.description}</span>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <ToolbarButton
            label="Delete block"
            onClick={() => dispatch({ type: 'removeBlock', projectSlug, blockId: block.id })}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
            </svg>
          </ToolbarButton>
        </Toolbar.Root>
      </Tooltip.Provider>

      <BlockInspector block={block} projectSlug={projectSlug} open={inspectorOpen} onOpenChange={setInspectorOpen} />
    </>
  )
}

function ToolbarButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Toolbar.Button className={ITEM} onClick={onClick} aria-label={label}>
          {children}
        </Toolbar.Button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={6}
          className="z-50 rounded border border-line bg-bg px-2 py-1 font-mono text-[0.7rem] text-ink shadow-lg"
        >
          {label}
          <Tooltip.Arrow className="fill-line" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
