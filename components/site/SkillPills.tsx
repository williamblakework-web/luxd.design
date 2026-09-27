import { cn } from '@/lib/utils'

/**
 * The headline capability set, sitting directly under the intro copy.
 *
 * These are a list, not controls. They are not buttons and not links, because
 * nothing happens when you press them, and a control that does nothing is
 * worse than plain text for anyone navigating by keyboard or screen reader.
 * If they later filter the work, swap the li contents for real buttons and
 * wire the filter state.
 */
export function SkillPills({ skills, className }: { skills: string[]; className?: string }) {
  if (skills.length === 0) return null

  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label="Core capabilities">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-line bg-bg-soft px-4 py-2 font-mono text-step--1 text-ink-2 transition-colors hover:border-accent hover:text-accent"
        >
          {skill}
        </li>
      ))}
    </ul>
  )
}
