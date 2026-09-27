import type { BlockOf } from '@/lib/schema'
import { AspectMedia } from '@/components/media/AspectMedia'

export function HeroBlock({ block }: { block: BlockOf<'hero'> }) {
  return (
    <section className="my-12">
      {block.eyebrow ? <span className="eyebrow eyebrow-rule">{block.eyebrow}</span> : null}
      <h2 className="mt-5 text-step-3">{block.heading}</h2>
      {block.lede ? <p className="mt-4 max-w-[44ch] text-step-1 text-ink-2">{block.lede}</p> : null}
      {block.media ? <AspectMedia media={block.media} className="mt-8" /> : null}
    </section>
  )
}
