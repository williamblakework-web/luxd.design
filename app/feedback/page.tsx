import type { Metadata } from 'next'
import { testimonials } from '@/lib/content'
import { TestimonialCard } from '@/components/site/TestimonialCard'

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'What clients and colleagues have said about working with William Blake.',
}

export default function FeedbackPage() {
  return (
    <>
      <section className="container-page pt-section">
        <span className="eyebrow eyebrow-rule">Feedback</span>
        <h1 className="mt-6 text-step-4">What people said afterwards</h1>
        <p className="mt-5 max-w-[46ch] text-step-1 text-ink-2">
          Unedited, attributed, and from the people who were in the room.
        </p>
      </section>

      <section className="container-page py-section">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  )
}
