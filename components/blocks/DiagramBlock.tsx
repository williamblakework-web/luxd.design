import type { ReactElement } from 'react'
import type { BlockOf, DiagramKey } from '@/lib/schema'
import { BarclaycardIterations } from '@/components/diagrams/BarclaycardIterations'
import { FacultyNavigation } from '@/components/diagrams/FacultyNavigation'

/**
 * Diagrams live as components rather than as content, so the drawing sits in
 * code and the case study file stays readable. The record is typed against the
 * schema's key union, so adding a key without a drawing fails typecheck.
 */
const DIAGRAMS: Record<DiagramKey, () => ReactElement> = {
  'barclaycard-iterations': BarclaycardIterations,
  'faculty-navigation': FacultyNavigation,
}

export function DiagramBlock({ block }: { block: BlockOf<'diagram'> }) {
  const Drawing = DIAGRAMS[block.key]
  if (!Drawing) return null

  return (
    <section className="my-12">
      {block.heading ? <h2 className="mb-5 text-step-2">{block.heading}</h2> : null}
      <Drawing />
      {block.caption ? <p className="prose-measure mt-4 text-step--1 text-ink-2">{block.caption}</p> : null}
    </section>
  )
}
