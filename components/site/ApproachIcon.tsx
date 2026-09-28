/**
 * One mark per principle on the home page approach grid.
 *
 * Each is drawn to carry the idea rather than to decorate the corner: the
 * ownership mark is a record with a single owner attached, the truth mark is
 * two consumers reading one store, compliance is a boundary a value is tested
 * against, and so on. All are 20x20 on a shared grid, stroked in currentColor
 * so they take the accent from the parent and follow the theme.
 */
export type ApproachIconName =
  | 'ownership'
  | 'truth'
  | 'compliance'
  | 'prototype'
  | 'handoff'
  | 'ai'

export function ApproachIcon({ name }: { name: ApproachIconName }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent opacity-60 transition-opacity duration-200 group-hover:opacity-100"
      aria-hidden="true"
    >
      {name === 'ownership' ? (
        /* A record with exactly one node accountable for it. */
        <>
          <rect x="2.5" y="7" width="10" height="9" rx="1.5" />
          <line x1="5" y1="10" x2="10" y2="10" />
          <line x1="5" y1="13" x2="8.5" y2="13" />
          <circle cx="15" cy="4.5" r="2.5" />
          <path d="M14 6.8 12.2 8.6" />
        </>
      ) : name === 'truth' ? (
        /* Two surfaces reading one store rather than keeping their own. */
        <>
          <ellipse cx="10" cy="4.5" rx="5" ry="2" />
          <path d="M5 4.5v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
          <path d="M10 10.8v2.4" />
          <path d="M10 13.2H4.5v3M10 13.2h5.5v3" />
        </>
      ) : name === 'compliance' ? (
        /* A value tested against a boundary before it is allowed through. */
        <>
          <path d="M10 2.2 16 4.4v4.9c0 3.4-2.4 6.3-6 7.5-3.6-1.2-6-4.1-6-7.5V4.4Z" />
          <path d="m7.3 9.4 1.9 1.9 3.5-3.9" />
        </>
      ) : name === 'prototype' ? (
        /* A built thing with a cursor on it, not a description of one. */
        <>
          <rect x="2.5" y="3" width="15" height="10.5" rx="1.5" />
          <line x1="2.5" y1="6" x2="17.5" y2="6" />
          <path d="m9 9 4.6 4.6-1.9.5 1.3 2.4" />
        </>
      ) : name === 'handoff' ? (
        /* A spec leaving as a package, tokens and all. */
        <>
          <path d="M3 6.2 10 3l7 3.2v7.6L10 17l-7-3.2Z" />
          <path d="M3 6.2 10 9.4l7-3.2M10 9.4V17" />
        </>
      ) : (
        /* Assistance applied to work, with the work still the larger object. */
        <>
          <rect x="2.5" y="6" width="10.5" height="10" rx="1.5" />
          <line x1="5" y1="9.5" x2="10.5" y2="9.5" />
          <line x1="5" y1="12.5" x2="8.5" y2="12.5" />
          <path d="M15.5 2.5 16.4 5l2.5.9-2.5.9-.9 2.5-.9-2.5L12.1 6l2.5-.9Z" />
        </>
      )}
    </svg>
  )
}
