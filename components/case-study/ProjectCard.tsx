import Link from 'next/link'
import type { Project } from '@/lib/schema'
import { AspectMedia } from '@/components/media/AspectMedia'

/**
 * One standardised card, used on every grid. Text sits below the image rather
 * than over it: an overlay caption on an unknown screenshot is a contrast
 * gamble, and this brief explicitly rules that out.
 */
export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/work/${project.slug}`} className="flex h-full flex-col focus-visible:outline-none">
        <AspectMedia
          media={
            project.thumbnail ?? {
              src: '',
              alt: `${project.title} for ${project.client}`,
              aspect: '16/9',
              kind: 'image',
            }
          }
          className="transition-opacity group-hover:opacity-90"
        />

        <div className="flex flex-1 flex-col pt-5">
          <div className="mb-2 flex items-baseline gap-3">
            {typeof index === 'number' ? (
              <span className="font-mono text-step--1 text-ink-muted">{String(index + 1).padStart(2, '0')}</span>
            ) : null}
            <span className="font-mono text-step--1 uppercase tracking-[0.1em] text-ink-muted">{project.client}</span>
          </div>

          <h3 className="text-step-2 text-ink transition-colors group-hover:text-accent">{project.title}</h3>

          <p className="mt-2 max-w-[52ch] text-step--1 text-ink-2">{project.summary}</p>

          <ul className="mt-4 flex flex-wrap gap-2 pt-1">
            {project.categories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted"
              >
                {category}
              </li>
            ))}
            {project.confidential ? (
              <li className="rounded-full border border-line bg-bg-soft px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted">
                Confidential
              </li>
            ) : null}
          </ul>

          <span className="mt-4 font-mono text-step--1 text-accent">Read the case study &rarr;</span>
        </div>
      </Link>
    </article>
  )
}
