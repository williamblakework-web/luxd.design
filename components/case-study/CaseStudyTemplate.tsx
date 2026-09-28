'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useEditor, useProject } from '@/components/editor/EditorProvider'
import { TldrBanner } from './TldrBanner'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

/**
 * Reads the project from the editor document rather than from a static import,
 * so edits made through the bridge appear immediately. On first render the
 * document is the seed content, which is what the server rendered, so there is
 * no hydration mismatch.
 */
export function CaseStudyTemplate({ slug }: { slug: string }) {
  const { state, dispatch } = useEditor()
  const project = useProject(slug)

  useEffect(() => {
    dispatch({ type: 'setActiveProject', slug })
    return () => dispatch({ type: 'setActiveProject', slug: null })
  }, [slug, dispatch])

  if (!project) {
    return (
      <div className="container-narrow py-section">
        <h1 className="text-step-3">Project not found</h1>
        <p className="mt-4 prose-measure">
          No project matches this address.{' '}
          <Link href="/" className="text-accent underline-offset-4">
            Back to the work
          </Link>
          .
        </p>
      </div>
    )
  }

  const published = state.document.projects.filter((candidate) => candidate.status === 'published')
  const position = published.findIndex((candidate) => candidate.slug === slug)
  const next = position > -1 ? published[(position + 1) % published.length] : undefined

  return (
    <article>
      <header className="container-narrow pt-12">
        <div className="flex flex-wrap items-baseline gap-4">
          <span className="eyebrow eyebrow-rule">{project.client}</span>
          <span className="font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">
            {project.categories.join(' / ')}
          </span>
        </div>

        <h1 className="mt-6 text-step-4">{project.title}</h1>
        <p className="mt-5 max-w-[46ch] text-step-1 text-ink-2">{project.summary}</p>

        <div className="mt-10">
          <TldrBanner tldr={project.tldr} />
        </div>
      </header>

      <div className="container-narrow">
        <BlockRenderer blocks={project.blocks} testimonials={state.document.testimonials} projectSlug={project.slug} />
      </div>

      {/* -mx-2 keeps the links optically flush with the container edge while
          the padding gives them a 44px target, which bare text links miss. */}
      <nav className="container-narrow flex flex-wrap justify-between gap-2 border-t border-line py-8" aria-label="Case study">
        <Link
          href="/"
          className="-mx-2 inline-flex min-h-[44px] items-center rounded px-2 font-mono text-step--1 text-accent underline-offset-4 hover:underline"
        >
          &larr; All work
        </Link>
        {next && next.slug !== project.slug ? (
          <Link
            href={`/work/${next.slug}`}
            className="-mx-2 inline-flex min-h-[44px] items-center rounded px-2 text-right font-mono text-step--1 text-accent underline-offset-4 hover:underline"
          >
            Next: {next.title} &rarr;
          </Link>
        ) : null}
      </nav>
    </article>
  )
}
