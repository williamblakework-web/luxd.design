'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/', label: 'Work' },
  { href: '/clients', label: 'Clients' },
  { href: '/about', label: 'About' },
  { href: '/feedback', label: 'Feedback' },
]

/** A case study lives under /work/, so it keeps the Work tab active. */
function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/' || pathname.startsWith('/work')
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md backdrop-saturate-150 no-print">
      <div className="container-page">
        <nav className="flex items-center justify-between gap-4 py-3" aria-label="Primary">
          <Link href="/" className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-step-0 font-bold tracking-tight text-ink">
            <span className="h-2.5 w-2.5 bg-accent" aria-hidden="true" />
            William Blake
            <span className="hidden font-mono text-step--1 font-normal tracking-wide text-ink-muted sm:inline">London UX Design</span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'border-b-2 py-1 font-mono text-step--1 uppercase tracking-[0.08em] transition-colors',
                    active ? 'border-accent text-ink' : 'border-transparent text-ink-muted hover:text-ink',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 animate-overlay-in" />
                <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-[min(20rem,85vw)] flex-col border-l border-line bg-bg p-6 shadow-2xl">
                  <VisuallyHidden.Root>
                    <Dialog.Title>Navigation</Dialog.Title>
                    <Dialog.Description>Site sections</Dialog.Description>
                  </VisuallyHidden.Root>

                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-step--1 uppercase tracking-[0.12em] text-ink-muted">Menu</span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-muted hover:text-ink"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </Dialog.Close>
                  </div>

                  <ul className="flex flex-col gap-1">
                    {NAV.map((item) => {
                      const active = isActive(pathname, item.href)
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={active ? 'page' : undefined}
                            className={cn(
                              'block rounded px-3 py-3 font-display text-step-2 font-bold tracking-tight transition-colors',
                              active ? 'text-accent' : 'text-ink hover:text-accent',
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-auto border-t border-line pt-6">
                    <a href="mailto:william@luxd.co.uk" className="font-mono text-step--1 text-ink-muted hover:text-accent">
                      william@luxd.co.uk
                    </a>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </div>
    </header>
  )
}
