import { cn, isPlaceholder } from '@/lib/utils'

/**
 * Availability is the single most time sensitive fact on the site, so it gets
 * a badge rather than a line in a definition list. The dot is decorative; the
 * text carries the meaning, so it still reads without colour.
 */
export function AvailabilityBadge({ status, className }: { status: string; className?: string }) {
  if (isPlaceholder(status)) {
    return (
      <span className={cn('inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-step--1 text-accent', className)}>
        {status}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-accent bg-accent-soft px-3.5 py-1.5 font-mono text-step--1 font-medium uppercase tracking-[0.1em] text-accent',
        className,
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {status}
    </span>
  )
}
