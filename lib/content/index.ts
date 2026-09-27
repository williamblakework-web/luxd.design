import type { PortfolioDocument } from '@/lib/schema'
import { siteMeta } from './meta'
import { projects } from './projects'
import { clients, engagements } from './clients'
import { testimonials } from './testimonials'
import { about } from './about'

/**
 * The seed document. The editor loads this, mutates a copy in memory, and can
 * export the result as JSON. To promote an export to production, replace the
 * files in this folder with its contents, or wire the import here to read from
 * wherever you decide to persist it.
 */
export const portfolioDocument: PortfolioDocument = {
  version: 1,
  updatedAt: '2026-09-27T00:00:00.000Z',
  meta: siteMeta,
  projects,
  clients,
  engagements,
  testimonials,
  about,
}

export { siteMeta, projects, clients, engagements, testimonials, about }
export { publishedProjects, leadProject, supportingProjects, getProject } from './projects'
export { getTestimonial } from './testimonials'
export { CLIENT_CATEGORY_ORDER } from './clients'
