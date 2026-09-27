'use client'

import { useState } from 'react'
import type { BlockOf } from '@/lib/schema'
import { AspectMedia } from '@/components/media/AspectMedia'
import { Lightbox } from '@/components/media/Lightbox'
import { cn } from '@/lib/utils'

const COLUMN_CLASS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}

export function MediaGridBlock({ block }: { block: BlockOf<'mediaGrid'> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-5 text-step-2">{block.heading}</h2> : null}

      <div className={cn('grid gap-5', COLUMN_CLASS[block.columns] ?? COLUMN_CLASS[2])}>
        {block.items.map((item, index) => (
          <figure key={index} className="m-0">
            {block.lightbox ? (
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group block w-full text-left"
                aria-label={`Enlarge: ${item.alt}`}
              >
                <AspectMedia media={item} className="transition-opacity group-hover:opacity-90" />
              </button>
            ) : (
              <AspectMedia media={item} />
            )}
            {item.caption ? (
              <figcaption className="mt-3 font-mono text-step--1 text-ink-muted">{item.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {block.lightbox ? (
        <Lightbox items={block.items} openIndex={openIndex} onClose={() => setOpenIndex(null)} />
      ) : null}
    </section>
  )
}

/**
 * Before and after. Stacks on small screens rather than shrinking two screens
 * side by side until neither is readable.
 */
export function ComparisonBlock({ block }: { block: BlockOf<'comparison'> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const items = [block.before.media, block.after.media]
  const sides = [block.before, block.after]

  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-3 text-step-2">{block.heading}</h2> : null}
      {block.summary ? <p className="prose-measure mb-6 text-pretty">{block.summary}</p> : null}

      <div className="grid gap-6 lg:grid-cols-2">
        {sides.map((side, index) => (
          <figure key={index} className="m-0">
            <div className="mb-3 flex items-center gap-3">
              <span
                className={cn(
                  'font-mono text-step--1 uppercase tracking-[0.12em]',
                  index === 0 ? 'text-ink-muted' : 'text-accent',
                )}
              >
                {side.label}
              </span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>

            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full text-left"
              aria-label={`Enlarge ${side.label}: ${side.media.alt}`}
            >
              <AspectMedia media={side.media} className="transition-opacity group-hover:opacity-90" />
            </button>

            {side.notes.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-2">
                {side.notes.map((note, noteIndex) => (
                  <li key={noteIndex} className="flex gap-3 text-step--1 text-ink-2">
                    <span className="text-accent" aria-hidden="true">
                      &middot;
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
            ) : null}
          </figure>
        ))}
      </div>

      <Lightbox items={items} openIndex={openIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}

export function EmbedBlock({ block }: { block: BlockOf<'embed'> }) {
  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-5 text-step-2">{block.heading}</h2> : null}
      <AspectMedia media={block.media} fallbackText={block.fallbackText} />
      {block.media.caption ? (
        <p className="mt-3 font-mono text-step--1 text-ink-muted">{block.media.caption}</p>
      ) : null}
    </section>
  )
}
