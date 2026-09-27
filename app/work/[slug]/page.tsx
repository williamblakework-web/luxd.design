import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/content'
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate'

export function generateStaticParams() {
  return projects.filter((project) => project.status === 'published').map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }

  return {
    title: `${project.title} · ${project.client}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${project.client}`,
      description: project.summary,
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  // Drafts stay out of the public site but remain in the document for editing.
  if (!project || project.status !== 'published') notFound()

  return <CaseStudyTemplate slug={slug} />
}
