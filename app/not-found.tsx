import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container-narrow py-section">
      <span className="eyebrow eyebrow-rule">Error 404</span>
      <h1 className="mt-6 text-step-4">That page does not exist.</h1>
      <p className="mt-5 prose-measure">The link may be out of date, or the address may have a typo in it.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center rounded bg-accent px-6 py-3.5 font-mono text-step--1 uppercase tracking-wider text-accent-contrast hover:bg-accent-hover"
      >
        See the work
      </Link>
    </section>
  )
}
