import type { Tldr } from '@/lib/schema'
import { cn, isPlaceholder } from '@/lib/utils'

/**
 * The first thing on every case study: role, timeline, impact and stack.
 * A reviewer skimming six portfolios in an afternoon gets the whole shape of
 * the project without scrolling.
 */
export function TldrBanner({ tldr }: { tldr: Tldr }) {
  return (
    <section aria-label="Summary" className="rounded-card border border-line bg-bg-soft p-6 sm:p-8">
      <span className="eyebrow">TL;DR</span>

      <dl className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">Role</dt>
          <dd className="mt-1.5 text-ink">{tldr.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">Timeline</dt>
          <dd className={cn('mt-1.5 text-ink', isPlaceholder(tldr.timeline) && 'font-mono text-step--1 text-accent')}>
            {tldr.timeline}
          </dd>
        </div>
      </dl>

      {tldr.impact.length > 0 ? (
        <>
          <hr className="my-6 border-line" />
          <dl className="grid gap-6 sm:grid-cols-3">
            {tldr.impact.slice(0, 4).map((metric, index) => (
              <div key={index}>
                <dd
                  className={cn(
                    'font-display font-bold tracking-tight text-ink',
                    isPlaceholder(metric.value) ? 'font-mono text-step-0 font-normal text-accent' : 'text-step-3',
                  )}
                >
                  {metric.value}
                </dd>
                <dt className="mt-1 font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">
                  {metric.label}
                </dt>
                {metric.note ? <p className="mt-1 text-step--1 text-ink-muted">{metric.note}</p> : null}
              </div>
            ))}
          </dl>
        </>
      ) : null}

      {tldr.technologies.length > 0 ? (
        <>
          <hr className="my-6 border-line" />
          <div>
            <span className="font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">Key technologies</span>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tldr.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[0.72rem] uppercase tracking-wider text-ink-2"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </section>
  )
}
