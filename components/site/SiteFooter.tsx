import { siteMeta } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="mt-section border-t border-line py-8 no-print">
      <div className="container-page">
        <p className="font-mono text-step--1 leading-loose text-ink-muted">
          {siteMeta.name} &middot; {siteMeta.role} &middot;{' '}
          <a href={siteMeta.website} className="text-ink-muted underline-offset-4 hover:text-accent">
            londonuxdesign.co.uk
          </a>{' '}
          &middot;{' '}
          <a href={`mailto:${siteMeta.email}`} className="text-ink-muted underline-offset-4 hover:text-accent">
            {siteMeta.email}
          </a>{' '}
          &middot; {siteMeta.phone}
        </p>
      </div>
    </footer>
  )
}
