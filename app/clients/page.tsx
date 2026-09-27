import type { Metadata } from 'next'
import Link from 'next/link'
import { clients, engagements, publishedProjects, CLIENT_CATEGORY_ORDER, getProject } from '@/lib/content'
import { ENGAGEMENT_CATEGORY_LABELS, type EngagementCategory } from '@/lib/schema'
import { ProjectCard } from '@/components/case-study/ProjectCard'

const ENGAGEMENT_ORDER: EngagementCategory[] = ['internal', 'projects', 'bids']

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Client work across FinTech, AI, enterprise, telecom, automotive and data.',
}

export default function ClientsPage() {
  const grouped = CLIENT_CATEGORY_ORDER.map((category) => ({
    category,
    entries: clients.filter((client) => client.category === category),
  })).filter((group) => group.entries.length > 0)

  // A client can point at several projects, and several clients at one project.
  const linkedSlugs = Array.from(new Set(clients.flatMap((client) => client.projectSlugs)))
  const linkedProjects = linkedSlugs
    .map((slug) => getProject(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project) && project!.status === 'published')

  return (
    <>
      <section className="container-page pt-section">
        <span className="eyebrow eyebrow-rule">Clients</span>
        <h1 className="mt-6 text-step-4">Who the work was for</h1>
        <p className="mt-5 max-w-[46ch] text-step-1 text-ink-2">
          Grouped by sector, because the domain is usually what matters. {clients.length} organisations across{' '}
          {grouped.length} sectors.
        </p>
      </section>

      <section className="container-page py-section">
        <div className="space-y-14">
          {grouped.map((group) => (
            <div key={group.category}>
              <div className="mb-5 flex items-center gap-4">
                <h2 className="font-mono text-step--1 uppercase tracking-[0.14em] text-accent">{group.category}</h2>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
                <span className="font-mono text-step--1 text-ink-muted">{group.entries.length}</span>
              </div>

              {/* Borders live on the cells, so a short final row leaves no
                  phantom filled cell where the grid background shows through. */}
              <ul className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4">
                {group.entries.map((client) => {
                  const primary = client.projectSlugs[0]
                  const inner = (
                    <span className="grid min-h-[96px] place-items-center bg-bg p-5 text-center font-display text-step--1 font-medium text-ink-2 transition-colors group-hover:text-accent">
                      {client.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={client.logo} alt={client.name} className="max-h-8 w-auto" />
                      ) : (
                        client.name
                      )}
                    </span>
                  )

                  return (
                    <li key={client.id} className="group border-b border-r border-line">
                      {primary ? (
                        <Link href={`/work/${primary}`} className="block focus-visible:outline-none">
                          {inner}
                        </Link>
                      ) : (
                        inner
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* The long tail, as plain categorised lists. A logo grid shows who the
          work was for. This shows what the work actually was. */}
      <section className="container-page pb-section" aria-labelledby="engagements-heading">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <span className="eyebrow eyebrow-rule">Engagements</span>
          <h2 id="engagements-heading" className="text-step-3">
            Named work
          </h2>
        </div>

        <div className="grid gap-10 border-t border-line pt-8 md:grid-cols-3">
          {ENGAGEMENT_ORDER.map((category) => {
            const entries = engagements.filter((engagement) => engagement.category === category)
            if (entries.length === 0) return null

            return (
              <div key={category}>
                <h3 className="mb-4 font-mono text-step--1 uppercase tracking-[0.14em] text-accent">
                  {ENGAGEMENT_CATEGORY_LABELS[category]}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {entries.map((engagement) => (
                    <li key={engagement.id} className="text-step--1 text-ink-2">
                      {engagement.projectSlug ? (
                        <Link
                          href={`/work/${engagement.projectSlug}`}
                          className="text-ink-2 underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
                        >
                          {engagement.label}
                        </Link>
                      ) : (
                        engagement.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {linkedProjects.length > 0 ? (
        <section className="container-page pb-section" aria-labelledby="client-work-heading">
          <div className="mb-10 flex items-baseline gap-4">
            <span className="eyebrow eyebrow-rule">Case studies</span>
            <h2 id="client-work-heading" className="text-step-3">
              The work itself
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
            {linkedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-10 font-mono text-step--1 text-ink-muted">
            {publishedProjects.length} published case studies in total.
          </p>
        </section>
      ) : null}
    </>
  )
}
