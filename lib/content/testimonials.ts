import type { Testimonial } from '@/lib/schema'

/**
 * `highlight` is the line pulled out and set large on the card. `quote` is the
 * full passage shown underneath it. Keep the highlight to one sentence.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'russell-gowers',
    highlight: 'Will eventually delivered thirty seven screens, all of which provide 100% coverage of the requirements Ford sent to us.',
    quote:
      'I just wanted to call out what a superb job Will has done on the EVme mockup. Bearing in mind Will has only known about this brief since Friday last week, I would say that the quality of his work is outstanding. We initially discussed seven or eight app screens, which should be reasonable for any designer in a three day period. Will eventually delivered thirty seven screens, all of which are clean, stylish, consistent with Ford\'s existing app library, and which provide 100% coverage of the requirements Ford sent to us. His commitment to the project was absolutely superb. I really do think this illustration will help demonstrate to Ford that we should not only be delivering the mobile app, but that we have a very serious design capability too.',
    author: 'Russell Gowers',
    role: 'GBS Senior Managing Consultant, Automotive SME',
    company: 'IBM',
    projectSlug: undefined,
  },
  {
    id: 'placeholder-two',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE. Two or three sentences reads best on the card.]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-three',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-four',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE. Two or three sentences reads best on the card.]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-five',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-six',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-seven',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-eight',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-nine',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-ten',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
  {
    id: 'placeholder-eleven',
    highlight: '[ADD HIGHLIGHT LINE]',
    quote: '[ADD FULL QUOTE]',
    author: '[ADD NAME]',
    role: '[ADD ROLE]',
    company: '[ADD COMPANY]',
  },
]

export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id)
}
