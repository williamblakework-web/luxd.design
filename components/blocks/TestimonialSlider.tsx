'use client'

import { useState } from 'react'
import type { BlockOf, Testimonial } from '@/lib/schema'
import { TestimonialCard } from '@/components/site/TestimonialCard'

export function TestimonialSliderBlock({
  block,
  testimonials,
}: {
  block: BlockOf<'testimonialSlider'>
  testimonials: Testimonial[]
}) {
  const resolved = block.testimonialIds
    .map((id) => testimonials.find((testimonial) => testimonial.id === id))
    .filter((testimonial): testimonial is Testimonial => Boolean(testimonial))

  const [index, setIndex] = useState(0)

  if (resolved.length === 0) {
    return (
      <section className="my-12 rounded border border-line bg-bg-soft p-6">
        <p className="font-mono text-step--1 text-ink-muted">
          No testimonials selected for this block yet.
        </p>
      </section>
    )
  }

  const active = resolved[index]

  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-5 text-step-2">{block.heading}</h2> : null}

      <TestimonialCard testimonial={active} />

      {resolved.length > 1 ? (
        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIndex((current) => (current - 1 + resolved.length) % resolved.length)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((current) => (current + 1) % resolved.length)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <span className="font-mono text-step--1 text-ink-muted" aria-live="polite">
            {index + 1} of {resolved.length}
          </span>
        </div>
      ) : null}
    </section>
  )
}
