'use client'

import { useState } from 'react'
import type { Media } from '@/lib/schema'
import { aspectClass, cn } from '@/lib/utils'

interface AspectMediaProps {
  media: Media
  className?: string
  /** Eager only for the first image on a page. */
  priority?: boolean
  fallbackText?: string
  /**
   * 'cover' fills the frame and crops, which is what thumbnails and grid
   * cells want. 'contain' fits the whole asset inside the frame, which is
   * what a lightbox wants: nothing is cropped away from a screen someone
   * opened specifically to read.
   *
   * This is a prop rather than a class override because both settings are
   * `object-*` utilities on the same element, and an override passed through
   * className is not guaranteed to win the specificity race.
   */
  fit?: 'cover' | 'contain'
}

/**
 * Every piece of media on the site goes through here, so three things are
 * guaranteed: the container holds its aspect ratio before anything loads,
 * a missing or failed asset degrades to a labelled placeholder rather than
 * a broken image icon, and embeds are sandboxed.
 */
export function AspectMedia({
  media,
  className,
  priority = false,
  fallbackText,
  fit = 'cover',
}: AspectMediaProps) {
  const [failed, setFailed] = useState(false)
  const missing = !media.src || media.src.trim() === ''
  const showFallback = missing || failed
  const objectFit = fit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded border border-line bg-bg-soft',
        aspectClass(media.aspect),
        className,
      )}
    >
      {showFallback ? (
        <Fallback media={media} reason={missing ? 'missing' : 'failed'} text={fallbackText} />
      ) : media.kind === 'video' ? (
        <video
          className={cn('h-full w-full', objectFit)}
          src={media.src}
          controls
          playsInline
          preload="metadata"
          aria-label={media.alt}
          onError={() => setFailed(true)}
        />
      ) : media.kind === 'figma' || media.kind === 'loom' || media.kind === 'embed' ? (
        <iframe
          className="h-full w-full border-0"
          src={media.src}
          title={media.alt}
          loading="lazy"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          onError={() => setFailed(true)}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={cn('h-full w-full', objectFit)}
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function Fallback({ media, reason, text }: { media: Media; reason: 'missing' | 'failed'; text?: string }) {
  const message =
    text ?? (reason === 'missing' ? 'Media not yet added' : 'This media could not be loaded')

  return (
    <div className="absolute inset-0 grid place-items-center p-6">
      <div className="flex max-w-sm flex-col items-center gap-2 text-center">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-muted" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 15 4.5-4.5 3 3L15 9l6 6" />
        </svg>
        <p className="font-mono text-step--1 text-ink-muted">{message}</p>
        {media.alt ? <p className="text-step--1 text-ink-muted">{media.alt}</p> : null}
      </div>
    </div>
  )
}
