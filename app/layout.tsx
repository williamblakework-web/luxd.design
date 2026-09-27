import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { EditorProvider } from '@/components/editor/EditorProvider'
import { EditorChrome } from '@/components/editor/EditorChrome'
import { portfolioDocument } from '@/lib/content'

export const metadata: Metadata = {
  metadataBase: new URL('https://luxd.co.uk'),
  title: {
    default: 'William Blake · Senior Product Designer (UX)',
    template: '%s · William Blake',
  },
  description:
    'Senior Product Designer working in regulated, data heavy environments. FinTech, AI, automotive and enterprise tooling for EY, Barclaycard, Vodafone, Faculty, IBM and Adaptavist.',
  openGraph: {
    type: 'website',
    siteName: 'William Blake',
    title: 'William Blake · Senior Product Designer (UX)',
    description: 'Complex systems, designed so someone can own them.',
  },
  robots: { index: true, follow: true },
}

/**
 * Applied before first paint so a stored theme choice never flashes the
 * wrong palette. Storage access is wrapped because private browsing throws.
 */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('luxd-theme');
    if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23131316'/%3E%3Crect x='9' y='9' width='14' height='14' fill='%231F2ACC'/%3E%3C/svg%3E"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <EditorProvider initialDocument={portfolioDocument}>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div className="h-[7px] bg-ink" aria-hidden="true" />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <EditorChrome />
        </EditorProvider>
      </body>
    </html>
  )
}
