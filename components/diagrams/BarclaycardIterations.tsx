/**
 * Barclaycard, three attempts at the same table.
 *
 * The case study's hinge is not that there were three iterations, it is what
 * each one did to a single question: can an agent decide from the row, or do
 * they have to open the case. So the drawing puts the three tables on a shared
 * baseline and marks, under each, where the decision actually happens. The
 * modal and drawer are drawn where they sit relative to the row, because the
 * cost being argued about is the trip away from it.
 *
 * currentColor throughout so it inherits the page's ink in both themes. The
 * accent is reserved for the row being decided on and the outcome that shipped.
 */
export function BarclaycardIterations() {
  return (
    <figure className="my-12">
      <svg
        viewBox="0 0 960 400"
        className="h-auto w-full text-ink"
        /* SVG <text> defaults to fill:black, not currentColor, so without this
           every label is black on near black once the page goes dark. Setting
           it on the root lets the labels inherit the page's ink, and the marks
           that carry meaning still override it with their own class. */
        fill="currentColor"
        role="img"
        aria-label="Three iterations of the chargeback table. Iteration one puts every column on the summary row and opens a modal to act, iteration two strips the row and moves detail to a slide-over drawer so the row no longer carries enough to decide, and iteration three carries the fields research showed a decision needs on the row itself with three modal states behind it."
      >
        <defs>
          <marker id="bc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
          <marker id="bc-arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-accent" />
          </marker>
        </defs>

        {[0, 1, 2].map((col) => {
          const x = 20 + col * 320
          const label = ['01  Everything on the row', '02  Row stripped back', '03  Only what decides'][col]
          const verdict = ['Too busy to scan', 'Too thin to decide from', 'Decided from the row'][col]
          const shipped = col === 2
          return (
            <g key={col}>
              <text x={x} y={20} className="fill-accent font-mono" fontSize="12" letterSpacing="0.06em">
                {label}
              </text>

              {/* table head */}
              <rect x={x} y={34} width={280} height={22} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
              {/* column ticks: 8 on the first, 3 on the second, 5 on the third */}
              {Array.from({ length: [8, 3, 5][col] }).map((_, i) => (
                <line
                  key={i}
                  x1={x + 10 + i * (260 / [8, 3, 5][col])}
                  y1={40}
                  x2={x + 10 + i * (260 / [8, 3, 5][col]) + (col === 0 ? 18 : col === 1 ? 44 : 32)}
                  y2={40}
                  stroke="currentColor"
                  strokeWidth="3"
                  opacity="0.35"
                />
              ))}

              {/* rows, with the second one marked as the one being decided on */}
              {[0, 1, 2, 3].map((r) => {
                const y = 56 + r * 26
                const active = r === 1
                return (
                  <g key={r}>
                    <rect
                      x={x}
                      y={y}
                      width={280}
                      height={26}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity={active ? 0 : 0.25}
                    />
                    {active ? (
                      <rect x={x} y={y} width={280} height={26} fill="none" className="stroke-accent" strokeWidth="1.5" />
                    ) : null}
                    {Array.from({ length: [8, 3, 5][col] }).map((_, i) => (
                      <line
                        key={i}
                        x1={x + 10 + i * (260 / [8, 3, 5][col])}
                        y1={y + 13}
                        x2={x + 10 + i * (260 / [8, 3, 5][col]) + (col === 0 ? 14 : col === 1 ? 36 : 26)}
                        y2={y + 13}
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity={active ? 0.7 : 0.3}
                      />
                    ))}
                  </g>
                )
              })}

              {/* where the decision happens */}
              {col === 0 ? (
                <>
                  <line x1={x + 140} y1={168} x2={x + 140} y2={196} stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bc-arrow)" opacity="0.7" />
                  <text x={x + 148} y={186} className="font-mono" fontSize="11" opacity="0.7">opens modal</text>
                  <rect x={x + 40} y={200} width={200} height={62} fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                  <text x={x + 140} y={226} textAnchor="middle" fontSize="12" opacity="0.85">Chargeback summary</text>
                  <text x={x + 140} y={246} textAnchor="middle" fontSize="12" opacity="0.85">+ evidence upload</text>
                </>
              ) : col === 1 ? (
                <>
                  <line x1={x + 140} y1={168} x2={x + 140} y2={196} stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bc-arrow)" opacity="0.7" />
                  <text x={x + 148} y={186} className="font-mono" fontSize="11" opacity="0.7">opens drawer</text>
                  <rect x={x + 150} y={200} width={130} height={62} fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                  <text x={x + 215} y={226} textAnchor="middle" fontSize="12" opacity="0.85">Detail panel,</text>
                  <text x={x + 215} y={246} textAnchor="middle" fontSize="12" opacity="0.85">slides over</text>
                </>
              ) : (
                <>
                  <line x1={x + 140} y1={168} x2={x + 140} y2={196} className="stroke-accent" strokeWidth="1.5" markerEnd="url(#bc-arrow-accent)" />
                  <text x={x + 148} y={186} className="fill-accent font-mono" fontSize="11">acts in place</text>
                  {[0, 1, 2].map((m) => (
                    <rect key={m} x={x + 40 + m * 70} y={200} width={58} height={40} fill="none" className="stroke-accent" strokeWidth="1.2" opacity="0.8" />
                  ))}
                  <text x={x + 140} y={256} textAnchor="middle" className="fill-accent font-mono" fontSize="11">3 modal states</text>
                </>
              )}

              {/* verdict */}
              <line x1={x} y1={296} x2={x + 280} y2={296} stroke="currentColor" strokeWidth={shipped ? 0 : 1} opacity="0.3" />
              {shipped ? <line x1={x} y1={296} x2={x + 280} y2={296} className="stroke-accent" strokeWidth="2" /> : null}
              <text
                x={x}
                y={318}
                fontSize="13"
                className={shipped ? 'fill-accent' : undefined}
                opacity={shipped ? 1 : 0.75}
              >
                {verdict}
              </text>
              {col === 2 ? (
                <text x={x} y={340} className="font-mono" fontSize="11" opacity="0.7">
                  target: 5 seconds per row
                </text>
              ) : null}
            </g>
          )
        })}

        {/* the question every iteration was really answering */}
        <line x1={20} y1={370} x2={920} y2={370} stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <text x={20} y={390} className="font-mono" fontSize="11" opacity="0.65">
          The constant: can an agent accept or challenge from the row alone, without opening the case?
        </text>
      </svg>
      <figcaption className="mt-4 max-w-measure font-mono text-step--1 text-ink-muted">
        Redrawn from the case study rather than captured from the build. What moves across the three is the
        number of fields on the row and where the agent has to go to act on it.
      </figcaption>
    </figure>
  )
}
