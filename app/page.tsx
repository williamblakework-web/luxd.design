import Link from 'next/link'
import { leadProject, supportingProjects, publishedProjects, clients, siteMeta, about } from '@/lib/content'
import { ProjectCard } from '@/components/case-study/ProjectCard'
import { AvailabilityBadge } from '@/components/site/AvailabilityBadge'
import { SkillPills } from '@/components/site/SkillPills'
import { AspectMedia } from '@/components/media/AspectMedia'
import { ApproachIcon, type ApproachIconName } from '@/components/site/ApproachIcon'

/** Sectors actually represented in the client list, not a figure typed in by hand. */
const sectorCount = new Set(clients.map((client) => client.category)).size

const APPROACH = [
  {
    title: 'Ownership before interface',
    icon: 'ownership' as ApproachIconName,
    body: 'Most hard UI problems are ownership problems wearing a UI costume. Who is accountable for this record, who is allowed to change it, and what happens when it fails. Answer that and the screen usually designs itself.',
  },
  {
    title: 'One version of the truth',
    icon: 'truth' as ApproachIconName,
    body: 'Customer facing products and the back office systems behind them tend to disagree. I design for a single shared account of state across both, because two versions of the truth is where the support cost lives.',
  },
  {
    title: 'Compliance as material',
    icon: 'compliance' as ApproachIconName,
    body: 'Regulatory limits, AML tiers and safer gambling constraints are not checkboxes applied after the fact. Surfaced early they are planning information. Surfaced late they are failure states.',
  },
  {
    title: 'Build it, do not describe it',
    icon: 'prototype' as ApproachIconName,
    body: 'Working prototypes beat annotated wireframes in every stakeholder room I have been in. I build the real thing early, in code where it helps, so decisions are made against something people can use.',
  },
  {
    title: 'Handoff is the deliverable',
    icon: 'handoff' as ApproachIconName,
    body: 'A Figma link is not a specification. Token tables, component inventories and written build specs let engineering rebuild the work in any stack without making design decisions on the way.',
  },
  {
    title: 'AI used openly',
    icon: 'ai' as ApproachIconName,
    body: 'Gemini for market and desk research, Claude for spec writing and rapid artifact generation. Every case study states plainly which decisions are mine and which output was machine assisted.',
  },
]

export default function WorkHomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="container-page py-section">
        <div className="flex flex-wrap items-center gap-4">
          <span className="eyebrow eyebrow-rule">{siteMeta.role}</span>
          <AvailabilityBadge status={siteMeta.availability} />
        </div>

        <h1 className="mt-6 max-w-[15ch] text-step-5">Complex systems, designed so someone can own them.</h1>

        <p className="mt-8 max-w-[38ch] text-step-1 text-ink-2">
          Ten years of product design, mostly enterprise and B2B SaaS, in regulated, data heavy environments. FinTech, AI, automotive,
          and the internal tooling that holds them together.
        </p>

        <SkillPills skills={about.featuredSkills} className="mt-8 max-w-3xl" />

        {/* Counts are derived rather than typed in, so the headline figures
            cannot drift away from the catalogue the way a hardcoded number
            does the moment a case study is added or pulled. */}
        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {[
            { value: String(publishedProjects.length), label: 'Published case studies' },
            { value: '10', label: 'Years in product design' },
            { value: String(clients.length), label: `Organisations across ${sectorCount} sectors` },
            { value: '7', label: 'LUXD client engagements' },
          ].map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-step-3 font-bold tracking-tight text-ink">{stat.value}</dd>
              <dt className="mt-1 font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <p className="mt-8 font-mono text-step--1 text-ink-muted">
          {siteMeta.location} &middot; Also runs{' '}
          <a
            href={siteMeta.website}
            className="text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            London UX Design
          </a>
          , a design and AI practice, alongside contract work
        </p>
      </section>

      {/* ------------------------------------------------------------ Approach
          Carries the accent as a full band, so the method reads as its own
          territory rather than as another content section. */}
      <section className="border-y border-accent/30 bg-accent-soft py-section" aria-labelledby="approach-heading">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-baseline gap-4">
            <span className="eyebrow eyebrow-rule">Approach</span>
            <h2 id="approach-heading" className="text-step-3 text-accent">
              How the work gets done
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {APPROACH.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-card border border-accent/30 bg-bg/40 p-5 transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-accent hover:bg-bg hover:shadow-[0_8px_24px_-12px_rgb(var(--accent)/0.45)] motion-reduce:hover:translate-y-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-step--1 text-accent">{String(index + 1).padStart(2, '0')}</span>
                  <ApproachIcon name={item.icon} />
                </div>
                <h3 className="mt-3 text-step-1 text-ink">{item.title}</h3>
                <p className="mt-2 text-step--1 text-ink-2">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Selected work */}
      <section className="container-page py-section" aria-labelledby="work-heading">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <span className="eyebrow eyebrow-rule">Selected work</span>
          <h2 id="work-heading" className="text-step-3 text-accent">
            Case studies
          </h2>
        </div>

        {/* Lead case study, given the room it is worth */}
        {leadProject ? (
          <article className="group mb-16 border-t-[3px] border-accent pt-8">
            <Link href={`/work/${leadProject.slug}`} className="grid gap-8 focus-visible:outline-none lg:grid-cols-2 lg:items-center">
              <AspectMedia
                media={
                  leadProject.thumbnail ?? {
                    src: '',
                    alt: `${leadProject.title} for ${leadProject.client}`,
                    aspect: '16/9',
                    kind: 'image',
                  }
                }
                className="transition-opacity group-hover:opacity-90"
                priority
              />

              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-step--1 text-accent">01</span>
                  <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-accent-contrast">
                    Lead case study
                  </span>
                </div>

                <h3 className="text-step-3 text-ink transition-colors group-hover:text-accent">{leadProject.title}</h3>
                <p className="mt-3 max-w-[52ch] text-ink-2">{leadProject.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {leadProject.tldr.technologies.slice(0, 5).map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-block font-mono text-step--1 text-accent">
                  Read the case study &rarr;
                </span>
              </div>
            </Link>
          </article>
        ) : null}

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- Contact */}
      <section id="contact" className="container-page scroll-mt-24 pb-section" aria-labelledby="contact-heading">
        <div className="grid items-end gap-8 border-t-[7px] border-ink pt-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 id="contact-heading" className="mt-4 text-step-3">
              Working on something complicated?
            </h2>
            <p className="prose-measure mt-4">
              Regulated products, internal tooling, AI interfaces, and the messy middle where a customer facing product
              meets the system behind it. That is the work I want.
            </p>
            <AvailabilityBadge status={siteMeta.availability} className="mt-5" />
            <div className="mt-5 flex flex-col gap-1">
              <a href={`mailto:${siteMeta.email}`} className="w-fit border-b border-line pb-0.5 font-mono text-step--1 text-ink hover:border-accent hover:text-accent">
                {siteMeta.email}
              </a>
              <a href={`tel:${siteMeta.phone.replace(/\s/g, '')}`} className="w-fit border-b border-line pb-0.5 font-mono text-step--1 text-ink hover:border-accent hover:text-accent">
                {siteMeta.phone}
              </a>
            </div>
          </div>
          <a
            href={`mailto:${siteMeta.email}`}
            className="inline-flex min-h-[48px] items-center rounded bg-accent px-6 py-3.5 font-mono text-step--1 uppercase tracking-wider text-accent-contrast hover:bg-accent-hover"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </>
  )
}
