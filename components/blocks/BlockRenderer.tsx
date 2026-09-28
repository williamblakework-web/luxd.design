'use client'

import type { Block, Testimonial } from '@/lib/schema'
import { TextBlock, ListBlock, QuoteBlock, StatementBlock, MetricsGridBlock } from './TextBlocks'
import { MediaGridBlock, ComparisonBlock, EmbedBlock } from './MediaBlocks'
import { TestimonialSliderBlock } from './TestimonialSlider'
import { DiagramBlock } from './DiagramBlock'
import { HeroBlock } from './HeroBlock'
import { EditableBlock } from '@/components/editor/EditableBlock'

/**
 * The single switch that turns schema into UI. Adding a block type means
 * adding a case here and a member to the union in lib/schema.ts, and nothing
 * else in the app needs to know about it.
 */
function renderBlock(block: Block, testimonials: Testimonial[]) {
  switch (block.type) {
    case 'hero':
      return <HeroBlock block={block} />
    case 'text':
      return <TextBlock block={block} />
    case 'list':
      return <ListBlock block={block} />
    case 'quote':
      return <QuoteBlock block={block} />
    case 'statement':
      return <StatementBlock block={block} />
    case 'metricsGrid':
      return <MetricsGridBlock block={block} />
    case 'mediaGrid':
      return <MediaGridBlock block={block} />
    case 'comparison':
      return <ComparisonBlock block={block} />
    case 'embed':
      return <EmbedBlock block={block} />
    case 'diagram':
      return <DiagramBlock block={block} />
    case 'testimonialSlider':
      return <TestimonialSliderBlock block={block} testimonials={testimonials} />
    default: {
      // Exhaustiveness guard: a new block type without a case fails typecheck.
      const exhaustive: never = block
      return exhaustive
    }
  }
}

export function BlockRenderer({
  blocks,
  testimonials,
  projectSlug,
}: {
  blocks: Block[]
  testimonials: Testimonial[]
  projectSlug: string
}) {
  return (
    <>
      {blocks.map((block) => (
        <EditableBlock key={block.id} block={block} projectSlug={projectSlug}>
          {renderBlock(block, testimonials)}
        </EditableBlock>
      ))}
    </>
  )
}
