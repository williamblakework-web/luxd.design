import type { Metadata } from 'next'
import { about, siteMeta } from '@/lib/content'
import { cn, isPlaceholder } from '@/lib/utils'
import { AvailabilityBadge } from '@/components/site/AvailabilityBadge'
import { SkillPills } from '@/components/site/SkillPills'

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, career timeline and practice areas.',
}

export default function AboutPage() {
  return (
    <>
      <section className="container-narrow pt-section">
        <div className="flex flex-wrap items-center gap-4">
          <span className="eyebrow eyebrow-rule">About</span>
          <AvailabilityBadge status={siteMeta.availability} />
        </div>
        <h1 className="mt-6 text-step-4">{about.heading}</h1>
      </section>

      <section className="container-narrow py-section">
        <div className="space-y-5">
          {about.bio.map((paragraph, index) => (
            <p key={index} className={cn('prose-measure text-pretty', index === 0 && 'text-step-1')}>
              {paragraph}
            </p>
          ))}
        </div>

        <SkillPills skills={about.featuredSkills} className="mt-8" />

        {/* Timeline */}
        <div className="mt-20">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="eyebrow eyebrow-rule">01</span>
            <h2 className="text-step-2">Career</h2>
          </div>

          <ol className="space-y-0">
            {about.timeline.map((entry) => (
              <li key={entry.id} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <span
                  className={cn(
                    'font-mono text-step--1 uppercase tracking-[0.1em] text-ink-muted',
                    isPlaceholder(entry.period) && 'text-accent',
                  )}
                >
                  {entry.period}
                </span>
                <div>
                  <h3 className="text-step-1">{entry.organisation}</h3>
                  <p className="mt-0.5 font-mono text-step--1 text-ink-muted">{entry.role}</p>
                  <p className="mt-2 prose-measure text-step--1">{entry.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Additional engagements. Shorter IBM pieces of work with real
            numbers but no full case study: a compact grid, not case-study
            pages. Rendered only when there is something to show. */}
        {about.additionalEngagements.length > 0 ? (
          <div className="mt-20">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="eyebrow eyebrow-rule">02</span>
              <h2 className="text-step-2">Additional IBM engagements</h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {about.additionalEngagements.map((entry) => (
                <div key={entry.id} className="flex flex-col gap-2 bg-bg p-6">
                  <span className="font-mono text-step--1 uppercase tracking-[0.1em] text-ink-muted">
                    {entry.location} &middot; {entry.duration}
                  </span>
                  <h3 className="text-step-1">
                    {entry.client}, {entry.title}
                  </h3>
                  <p className="prose-measure text-step--1">{entry.description}</p>
                  {entry.metric ? (
                    <p className="mt-1 font-mono text-step--1 text-accent">{entry.metric}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Education. Rendered only when there is something to show, so the
            numbered sections below it do not leave a gap if it is emptied. */}
        {about.education.length > 0 ? (
          <div className="mt-20">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="eyebrow eyebrow-rule">{about.additionalEngagements.length > 0 ? '03' : '02'}</span>
              <h2 className="text-step-2">Education</h2>
            </div>

            <ol className="space-y-0">
              {about.education.map((entry) => (
                <li key={entry.id} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <span className="font-mono text-step--1 uppercase tracking-[0.1em] text-ink-muted">
                    {entry.institution}
                  </span>
                  <div>
                    <h3 className="text-step-1">{entry.qualification}</h3>
                    {entry.description ? (
                      <p className="mt-2 prose-measure text-step--1">{entry.description}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {/* Skills */}
        <div className="mt-20">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="eyebrow eyebrow-rule">
              {String(1 + (about.additionalEngagements.length > 0 ? 1 : 0) + (about.education.length > 0 ? 1 : 0) + 1).padStart(2, '0')}
            </span>
            <h2 className="text-step-2">Practice areas</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {about.skillGroups.map((group) => (
              <div key={group.id}>
                <h3 className="mb-3 font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-bg-soft px-3 py-1.5 text-step--1 text-ink-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-20 grid items-end gap-8 border-t-[7px] border-ink pt-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 text-step-2">Get in touch</h2>
            <div className="mt-5 flex flex-col gap-1">
              <a href={`mailto:${siteMeta.email}`} className="w-fit border-b border-line pb-0.5 font-mono text-step--1 text-ink hover:border-accent hover:text-accent">
                {siteMeta.email}
              </a>
              <a href={`tel:${siteMeta.phone.replace(/\s/g, '')}`} className="w-fit border-b border-line pb-0.5 font-mono text-step--1 text-ink hover:border-accent hover:text-accent">
                {siteMeta.phone}
              </a>
              <a href={siteMeta.website} className="w-fit border-b border-line pb-0.5 font-mono text-step--1 text-ink hover:border-accent hover:text-accent">
                londonuxdesign.co.uk
              </a>
              {siteMeta.linkedin ? (
                <a href={siteMeta.linkedin} className="w-fit border-b border-line pb-0.5 font-mono text-step--1 text-ink hover:border-accent hover:text-accent">
                  linkedin.com/in/will-blake1
                </a>
              ) : null}
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
