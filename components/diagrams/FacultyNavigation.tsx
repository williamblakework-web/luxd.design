/**
 * Faculty, eleven features regrouped into three.
 *
 * The decision was not "add groups", it was which grouping. Strict adherence
 * to the six stage data science workflow produced categories holding a single
 * feature, so the drawing shows the flat list on the left, the eleven features
 * carried across, and the three coarser groups they landed in. The lines are
 * the argument: every feature has a destination, and the destinations are
 * uneven on purpose, because grouping by workflow stage is what made them even
 * and unusable.
 */
const DEVELOPMENT = ['Workspace', 'Environments', 'Jobs', 'Experiments']
const PRODUCTION = ['Models', 'Datasets', 'Reports', 'Apps', 'APIs']
const SETTINGS = ['Project details', 'Settings']

const ALL = [...DEVELOPMENT, ...PRODUCTION, ...SETTINGS]

const GROUPS = [
  { label: 'Development', items: DEVELOPMENT, note: 'input, the work in progress' },
  { label: 'Production', items: PRODUCTION, note: 'output, the results' },
  { label: 'Project settings', items: SETTINGS, note: 'outside the workflow entirely' },
]

export function FacultyNavigation() {
  const rowH = 26
  const topPad = 64
  const leftX = 20
  const leftW = 180
  const rightX = 480
  const rightW = 300

  // Left column: one flat row per feature, in source order.
  const leftRows = ALL.map((name, i) => ({ name, y: topPad + i * rowH }))

  // Right column: three grouped stacks, each with a header row and a gap after.
  let cursor = topPad
  const rightGroups = GROUPS.map((g) => {
    const headerY = cursor
    cursor += rowH
    const items = g.items.map((name) => {
      const y = cursor
      cursor += rowH
      return { name, y }
    })
    cursor += 14 // gap between groups
    return { ...g, headerY, items }
  })

  const height = Math.max(cursor, topPad + ALL.length * rowH) + 60
  const yOf = (name: string) => {
    for (const g of rightGroups) {
      const hit = g.items.find((i) => i.name === name)
      if (hit) return hit.y
    }
    return 0
  }

  return (
    <figure className="my-12">
      <svg
        viewBox={`0 0 960 ${height}`}
        className="h-auto w-full text-ink"
        /* SVG <text> defaults to fill:black, not currentColor, so without this
           every label is black on near black once the page goes dark. */
        fill="currentColor"
        role="img"
        aria-label="Eleven navigation features move from one flat list into three groups. Workspace, environments, jobs and experiments become Development. Models, datasets, reports, apps and APIs become Production. Project details and settings become Project settings."
      >
        <text x={leftX} y={24} className="fill-accent font-mono" fontSize="12" letterSpacing="0.06em">
          BEFORE
        </text>
        <text x={leftX} y={44} fontSize="13" opacity="0.75">
          One flat list, eleven items
        </text>

        <text x={rightX} y={24} className="fill-accent font-mono" fontSize="12" letterSpacing="0.06em">
          AFTER
        </text>
        <text x={rightX} y={44} fontSize="13" opacity="0.75">
          Three groups, collapsible
        </text>

        {/* flat list */}
        {leftRows.map((row) => (
          <g key={row.name}>
            <rect x={leftX} y={row.y} width={leftW} height={rowH - 6} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <text x={leftX + 12} y={row.y + 14} fontSize="12" opacity="0.8">
              {row.name}
            </text>
          </g>
        ))}

        {/* the moves */}
        {ALL.map((name) => {
          const from = leftRows.find((r) => r.name === name)!
          const toY = yOf(name)
          const x1 = leftX + leftW
          const x2 = rightX
          const mid = (x1 + x2) / 2
          return (
            <path
              key={name}
              d={`M ${x1} ${from.y + 10} C ${mid} ${from.y + 10}, ${mid} ${toY + 10}, ${x2} ${toY + 10}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.28"
            />
          )
        })}

        {/* grouped list */}
        {rightGroups.map((g) => (
          <g key={g.label}>
            <rect x={rightX} y={g.headerY} width={rightW} height={rowH - 6} fill="none" className="stroke-accent" strokeWidth="1.5" />
            <text x={rightX + 12} y={g.headerY + 14} className="fill-accent font-mono" fontSize="12">
              {g.label}
            </text>
            {/* Right of the group box rather than past the viewBox edge, which
                is where these notes were being clipped. */}
            <text x={rightX + rightW + 14} y={g.headerY + 14} fontSize="11" opacity="0.65">
              {g.note}
            </text>
            {g.items.map((item) => (
              <g key={item.name}>
                <rect x={rightX + 16} y={item.y} width={rightW - 16} height={rowH - 6} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <text x={rightX + 30} y={item.y + 14} fontSize="12" opacity="0.8">
                  {item.name}
                </text>
              </g>
            ))}
          </g>
        ))}

        <line x1={leftX} y1={height - 42} x2={940} y2={height - 42} stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <text x={leftX} y={height - 22} className="font-mono" fontSize="11" opacity="0.65">
          Grouped by input and output rather than by the six workflow stages, which produced groups of one.
        </text>
      </svg>
      <figcaption className="mt-4 max-w-measure font-mono text-step--1 text-ink-muted">
        Redrawn from the case study rather than captured from the platform. The uneven group sizes are the
        point: the even split was the version users rejected.
      </figcaption>
    </figure>
  )
}
