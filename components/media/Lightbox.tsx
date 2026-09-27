'use client'

import { useCallback, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import type { Media } from '@/lib/schema'
import { AspectMedia } from './AspectMedia'

interface LightboxProps {
  items: Media[]
  /** Index to open at. Null keeps it closed. */
  openIndex: number | null
  onClose: () => void
}

/**
 * For dense material: data charts, site maps, granular UI screens. Radix
 * Dialog gives focus trapping, escape handling and scroll locking. Arrow keys
 * move between items so a set can be reviewed without reaching for the mouse.
 */
export function Lightbox({ items, openIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(openIndex ?? 0)

  useEffect(() => {
    if (openIndex !== null) setIndex(openIndex)
  }, [openIndex])

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => (current + delta + items.length) % items.length)
    },
    [items.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, go])

  const active = items[index]
  if (!active) return null

  return (
    <Dialog.Root open={openIndex !== null} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80 animate-overlay-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(96vw,1200px)] -translate-x-1/2 -translate-y-1/2 animate-content-in focus:outline-none">
          <VisuallyHidden.Root>
            <Dialog.Title>{active.alt || 'Enlarged media'}</Dialog.Title>
            <Dialog.Description>
              Item {index + 1} of {items.length}. Use the left and right arrow keys to move between items.
            </Dialog.Description>
          </VisuallyHidden.Root>

          <div className="rounded border border-line bg-bg p-3 shadow-2xl sm:p-4">
            {/* The frame is bounded by the viewport and the asset is fitted
                inside it, so nothing is cropped from a screen someone opened
                specifically in order to read it. */}
            <AspectMedia
              media={{ ...active, aspect: 'auto' }}
              className="h-[78vh] bg-bg-soft"
              fit="contain"
              priority
            />

            <div className="mt-3 flex items-start justify-between gap-4">
              <div className="min-w-0">
                {active.caption ? <p className="text-step--1 text-ink-2">{active.caption}</p> : null}
                <p className="mt-1 font-mono text-step--1 text-ink-muted">
                  {index + 1} of {items.length}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {items.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous item"
                      className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next item"
                      className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                ) : null}
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close"
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
