import type { Config } from 'tailwindcss'

/**
 * Every colour below is driven by a CSS custom property declared in
 * app/globals.css, so light and dark are one token set with two values.
 *
 * Contrast against its own ground, measured, not assumed:
 *   ink        18.5:1 light / 18.0:1 dark
 *   ink-2      12.1:1 light / 13.1:1 dark
 *   ink-muted   8.4:1 light /  8.7:1 dark
 *   accent      9.3:1 light /  9.3:1 dark
 * All clear WCAG AAA for body text, which needs 7:1.
 */
const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-soft': 'rgb(var(--bg-soft) / <alpha-value>)',
        'bg-invert': 'rgb(var(--bg-invert) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
        'ink-muted': 'rgb(var(--ink-muted) / <alpha-value>)',
        'ink-invert': 'rgb(var(--ink-invert) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
        'accent-soft': 'rgb(var(--accent-soft) / <alpha-value>)',
        'accent-contrast': 'rgb(var(--accent-contrast) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid scale. Nothing here needs a breakpoint override.
        'step--1': ['clamp(0.82rem, 0.80rem + 0.10vw, 0.88rem)', { lineHeight: '1.6' }],
        'step-0': ['clamp(1rem, 0.97rem + 0.15vw, 1.09rem)', { lineHeight: '1.7' }],
        'step-1': ['clamp(1.15rem, 1.08rem + 0.35vw, 1.38rem)', { lineHeight: '1.55' }],
        'step-2': ['clamp(1.45rem, 1.30rem + 0.75vw, 2rem)', { lineHeight: '1.25' }],
        'step-3': ['clamp(1.85rem, 1.55rem + 1.5vw, 2.75rem)', { lineHeight: '1.15' }],
        'step-4': ['clamp(2.4rem, 1.8rem + 3vw, 4.25rem)', { lineHeight: '1.05' }],
        'step-5': ['clamp(3rem, 1.9rem + 5.5vw, 6.5rem)', { lineHeight: '1' }],
      },
      maxWidth: {
        measure: '68ch',
        container: '1180px',
        narrow: '920px',
      },
      borderRadius: {
        DEFAULT: '4px',
        card: '6px',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 4vw, 2.5rem)',
        section: 'clamp(3.5rem, 8vw, 6.5rem)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'overlay-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'content-in': {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.97)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease both',
        'overlay-in': 'overlay-in 0.2s ease both',
        'content-in': 'content-in 0.22s ease both',
      },
    },
  },
  plugins: [],
}

export default config
