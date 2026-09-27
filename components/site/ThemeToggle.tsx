'use client'

import { useEffect, useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

type Theme = 'light' | 'dark'

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  const explicit = document.documentElement.getAttribute('data-theme')
  if (explicit === 'dark' || explicit === 'light') return explicit
  return systemTheme()
}

/**
 * Follows the system setting until the viewer chooses, then remembers the
 * choice. The inline script in the layout applies it before first paint.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(currentTheme())
    setMounted(true)
  }, [])

  function toggle() {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('luxd-theme', next)
    } catch {
      /* private mode: the choice just will not persist */
    }
    setTheme(next)
  }

  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            onClick={toggle}
            aria-label={label}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
          >
            {mounted && theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={8}
            className="z-50 rounded border border-line bg-bg px-3 py-1.5 font-mono text-step--1 text-ink shadow-lg"
          >
            {label}
            <Tooltip.Arrow className="fill-line" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}
