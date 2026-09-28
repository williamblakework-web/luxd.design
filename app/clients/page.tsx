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
              {/* auto-fill rather than a fixed column count, so a sector with
                  two clients does not leave two empty cells hanging off the
                  end of the row. */}
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
                {group.entries.map((client) => {
                  const primary = client.projectSlugs[0]
                  {/* Every mark is a transparent PNG, so the grid can hold them
                      directly rather than on white plaques: grayscale at rest
                      keeps the wall quiet and puts the sector headings first,
                      and colour arrives on hover. In dark mode the same marks
                      are inverted as well as desaturated, because these are
                      dark lettered and would otherwise vanish. */}
                  const inner = (
                    <span className="grid min-h-[116px] place-items-center rounded-card border border-line bg-bg-soft p-5 text-center transition-[transform,border-color,box-shadow] duration-200 group-hover:-translate-y-1.5 group-hover:border-accent group-hover:shadow-[0_10px_24px_-14px_rgb(var(--accent)/0.5)] motion-reduce:group-hover:translate-y-0">
                      {client.logo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="logo-mark"
                          loading="lazy"
                        />
                      ) : (
                        <span className="font-display text-step--1 font-medium text-ink-2 transition-colors group-hover:text-ink">
                          {client.name}
                        </span>
                      )}
                    </span>
                  )

                  return (
                    <li key={client.id} className="group relative">
                      {primary ? (
                        <Link
                          href={`/work/${primary}`}
                          className="block focus-visible:outline-none"
                          aria-label={`${client.name}, read the case study`}
                        >
                          {inner}
                          {/* Without this nothing separates a cell that opens a
                              case study from one that is just a logo. */}
                          <span
                            className="pointer-events-none absolute bottom-2 right-2 font-mono text-[0.65rem] uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          >
                            Case study &rarr;
                          </span>
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
                {/* gap-1 plus padding on the links rather than gap-2.5 on the
                    rows: the linked entries need a 24px target, and spacing
                    them by padding keeps the list rhythm even. */}
                <ul className="flex flex-col gap-1">
                  {entries.map((engagement) => (
                    <li key={engagement.id} className="text-step--1 text-ink-2">
                      {engagement.projectSlug ? (
                        <Link
                          href={`/work/${engagement.projectSlug}`}
                          className="-mx-1 inline-flex min-h-[32px] items-center rounded px-1 text-ink-2 underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
                        >
                          {engagement.label}
                        </Link>
                      ) : (
                        <span className="inline-flex min-h-[32px] items-center">{engagement.label}</span>
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
