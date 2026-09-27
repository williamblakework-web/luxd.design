import type { Testimonial } from '@/lib/schema'
import { cn, isPlaceholder } from '@/lib/utils'

/** Initials stand in for an avatar, so a missing image never breaks the card. */
function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const placeholder = isPlaceholder(testimonial.highlight)

  return (
    <figure className="m-0 flex h-full flex-col rounded-card border border-line bg-bg p-6 sm:p-8">
      <blockquote className="flex-1">
        <p
          className={cn(
            'font-display font-medium leading-snug text-ink',
            placeholder ? 'font-mono text-step-0 font-normal text-accent' : 'text-step-1',
          )}
        >
          {testimonial.highlight}
        </p>
        {testimonial.quote && testimonial.quote !== testimonial.highlight ? (
          <p className={cn('mt-4 text-step--1 leading-relaxed text-ink-2', isPlaceholder(testimonial.quote) && 'font-mono text-accent')}>
            {testimonial.quote}
          </p>
        ) : null}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
        {testimonial.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={testimonial.avatar}
            alt=""
            className="h-11 w-11 shrink-0 rounded-full border border-line object-cover"
            width={44}
            height={44}
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-bg-soft font-mono text-step--1 text-ink-muted"
          >
            {initials(testimonial.author)}
          </span>
        )}

        <div className="min-w-0">
          <cite className="block not-italic font-semibold text-ink">{testimonial.author}</cite>
          <span className="block font-mono text-step--1 text-ink-muted">
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ''}
          </span>
        </div>

        {testimonial.companyLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={testimonial.companyLogo} alt={testimonial.company} className="ml-auto h-6 w-auto shrink-0 opacity-80" />
        ) : null}
      </figcaption>
    </figure>
  )
}
