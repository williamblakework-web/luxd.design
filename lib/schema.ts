import { z } from 'zod'

/* ===========================================================================
   Portfolio content schema
   ---------------------------------------------------------------------------
   One source of truth for three consumers:

     1. The rendered site       reads it through BlockRenderer
     2. The editor bridge       mutates it and validates before commit
     3. Export / import         serialises it as a JSON payload

   Every block carries a stable `id`. The editor addresses blocks by id, so
   reordering never breaks a reference and an export can be diffed against a
   previous one.
   =========================================================================== */

/* ---------------------------------------------------------------------------
   Primitives
   --------------------------------------------------------------------------- */

export const mediaSchema = z.object({
  src: z.string().min(1),
  alt: z.string(),
  /** Intrinsic size. Present on images so layout never shifts while loading. */
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  /** Governs the container, so a missing asset still holds its space. */
  aspect: z.enum(['16/9', '4/3', '3/2', '1/1', '9/16', 'auto']).default('16/9'),
  caption: z.string().optional(),
  kind: z.enum(['image', 'video', 'figma', 'loom', 'embed']).default('image'),
})
export type Media = z.infer<typeof mediaSchema>

export const metricSchema = z.object({
  /** The number itself, as a string so units and symbols travel with it. */
  value: z.string().min(1),
  label: z.string().min(1),
  /** Optional one line of provenance: how it was measured, over what period. */
  note: z.string().optional(),
})
export type Metric = z.infer<typeof metricSchema>

export const categorySchema = z.enum([
  'FinTech',
  'Telecom',
  'AI',
  'Automotive',
  'Enterprise',
  'Data',
  'Community',
])
export type Category = z.infer<typeof categorySchema>

/* ---------------------------------------------------------------------------
   Blocks
   Each variant is a discriminated member on `type`. Adding a block means
   adding a member here, a renderer in components/blocks, and an entry in
   BLOCK_REGISTRY at the foot of this file.
   --------------------------------------------------------------------------- */

const blockBase = { id: z.string().min(1) }

export const heroBlockSchema = z.object({
  ...blockBase,
  type: z.literal('hero'),
  eyebrow: z.string().optional(),
  heading: z.string().min(1),
  lede: z.string().optional(),
  media: mediaSchema.optional(),
})

export const textBlockSchema = z.object({
  ...blockBase,
  type: z.literal('text'),
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  /** Each entry renders as its own paragraph. */
  paragraphs: z.array(z.string()).min(1),
})

export const listBlockSchema = z.object({
  ...blockBase,
  type: z.literal('list'),
  heading: z.string().optional(),
  ordered: z.boolean().default(false),
  items: z.array(z.object({ term: z.string().optional(), body: z.string() })).min(1),
})

export const mediaGridBlockSchema = z.object({
  ...blockBase,
  type: z.literal('mediaGrid'),
  heading: z.string().optional(),
  columns: z.union([z.literal(1), z.literal(2), z.literal(3)]).default(2),
  /** Dense screen sets open in a lightbox rather than crushing the page. */
  lightbox: z.boolean().default(true),
  items: z.array(mediaSchema).min(1),
})

export const metricsGridBlockSchema = z.object({
  ...blockBase,
  type: z.literal('metricsGrid'),
  heading: z.string().optional(),
  metrics: z.array(metricSchema).min(1),
})

export const comparisonBlockSchema = z.object({
  ...blockBase,
  type: z.literal('comparison'),
  heading: z.string().optional(),
  summary: z.string().optional(),
  before: z.object({ label: z.string().default('Before'), media: mediaSchema, notes: z.array(z.string()).default([]) }),
  after: z.object({ label: z.string().default('After'), media: mediaSchema, notes: z.array(z.string()).default([]) }),
})

export const testimonialSliderBlockSchema = z.object({
  ...blockBase,
  type: z.literal('testimonialSlider'),
  heading: z.string().optional(),
  /** Ids resolved against the testimonials collection. */
  testimonialIds: z.array(z.string()).min(1),
})

export const quoteBlockSchema = z.object({
  ...blockBase,
  type: z.literal('quote'),
  quote: z.string().min(1),
  attribution: z.string().optional(),
})

export const statementBlockSchema = z.object({
  ...blockBase,
  type: z.literal('statement'),
  text: z.string().min(1),
})

export const embedBlockSchema = z.object({
  ...blockBase,
  type: z.literal('embed'),
  heading: z.string().optional(),
  media: mediaSchema,
  /** Shown if the embed fails to load, so a dead link never renders as a 404 box. */
  fallbackText: z.string().default('This embed could not be loaded.'),
})

export const blockSchema = z.discriminatedUnion('type', [
  heroBlockSchema,
  textBlockSchema,
  listBlockSchema,
  mediaGridBlockSchema,
  metricsGridBlockSchema,
  comparisonBlockSchema,
  testimonialSliderBlockSchema,
  quoteBlockSchema,
  statementBlockSchema,
  embedBlockSchema,
])

export type Block = z.infer<typeof blockSchema>
export type BlockType = Block['type']
export type BlockOf<T extends BlockType> = Extract<Block, { type: T }>

/* ---------------------------------------------------------------------------
   Projects
   --------------------------------------------------------------------------- */

export const tldrSchema = z.object({
  role: z.string().min(1),
  timeline: z.string().min(1),
  /** The TL;DR banner shows up to four. Beyond that use a metricsGrid block. */
  impact: z.array(metricSchema).default([]),
  technologies: z.array(z.string()).default([]),
})
export type Tldr = z.infer<typeof tldrSchema>

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, 'lowercase, digits and hyphens only'),
  title: z.string().min(1),
  client: z.string().min(1),
  year: z.string().min(1),
  categories: z.array(categorySchema).min(1),
  /** One or two lines. Used on cards and in page metadata. */
  summary: z.string().min(1),
  thumbnail: mediaSchema.optional(),
  tldr: tldrSchema,
  blocks: z.array(blockSchema).default([]),
  status: z.enum(['published', 'draft']).default('draft'),
  featured: z.boolean().default(false),
  /** Confidential work that is walked through rather than published. */
  confidential: z.boolean().default(false),
})
export type Project = z.infer<typeof projectSchema>

/* ---------------------------------------------------------------------------
   Supporting collections
   --------------------------------------------------------------------------- */

export const clientSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: categorySchema,
  /** Optional single colour SVG so it holds up in both themes. */
  logo: z.string().optional(),
  /** Slugs of related projects, rendered as cards beside the logo grid. */
  projectSlugs: z.array(z.string()).default([]),
})
export type Client = z.infer<typeof clientSchema>

export const testimonialSchema = z.object({
  id: z.string().min(1),
  /** The line that gets pulled out and set large. */
  highlight: z.string().min(1),
  quote: z.string().min(1),
  author: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
  avatar: z.string().optional(),
  companyLogo: z.string().optional(),
  projectSlug: z.string().optional(),
})
export type Testimonial = z.infer<typeof testimonialSchema>

/**
 * Engagements are the long tail: named pieces of work that sit under the
 * client logos on the Clients page as plain categorised lists. They are not
 * projects, because most have no case study and never will, but they are the
 * evidence of range that a logo grid alone does not carry.
 */
export const engagementCategorySchema = z.enum(['internal', 'projects', 'bids'])
export type EngagementCategory = z.infer<typeof engagementCategorySchema>

export const engagementSchema = z.object({
  id: z.string().min(1),
  /** Rendered verbatim, e.g. "IBM - Watson Analytics". */
  label: z.string().min(1),
  category: engagementCategorySchema,
  /** Set where a full case study exists, which turns the entry into a link. */
  projectSlug: z.string().optional(),
})
export type Engagement = z.infer<typeof engagementSchema>

export const ENGAGEMENT_CATEGORY_LABELS: Record<EngagementCategory, string> = {
  internal: 'Internal',
  projects: 'Projects',
  bids: 'Bid and proposals',
}

export const timelineEntrySchema = z.object({
  id: z.string().min(1),
  period: z.string().min(1),
  organisation: z.string().min(1),
  role: z.string().min(1),
  description: z.string(),
})
export type TimelineEntry = z.infer<typeof timelineEntrySchema>

export const skillGroupSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  skills: z.array(z.string()).min(1),
})
export type SkillGroup = z.infer<typeof skillGroupSchema>

export const aboutSchema = z.object({
  heading: z.string().min(1),
  bio: z.array(z.string()).min(1),
  /**
   * The headline capability set, rendered as pills under the intro copy on
   * both the home page and the about page. Distinct from skillGroups, which
   * is the fuller categorised breakdown further down the about page.
   */
  featuredSkills: z.array(z.string()).default([]),
  timeline: z.array(timelineEntrySchema).default([]),
  skillGroups: z.array(skillGroupSchema).default([]),
})
export type About = z.infer<typeof aboutSchema>

export const siteMetaSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  practice: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  website: z.string().url(),
  location: z.string().min(1),
  availability: z.string().min(1),
})
export type SiteMeta = z.infer<typeof siteMetaSchema>

/* ---------------------------------------------------------------------------
   The document
   This whole object is what the editor mutates and what export writes out.
   --------------------------------------------------------------------------- */

export const portfolioDocumentSchema = z.object({
  /** Bumped when the shape changes, so an old export can be migrated. */
  version: z.literal(1),
  updatedAt: z.string(),
  meta: siteMetaSchema,
  projects: z.array(projectSchema),
  clients: z.array(clientSchema),
  engagements: z.array(engagementSchema).default([]),
  testimonials: z.array(testimonialSchema),
  about: aboutSchema,
})
export type PortfolioDocument = z.infer<typeof portfolioDocumentSchema>

/* ---------------------------------------------------------------------------
   Editor state
   Kept separate from the document. Nothing here is exported to production.
   --------------------------------------------------------------------------- */

export type EditorMode = 'view' | 'edit'

export interface EditorState {
  mode: EditorMode
  /** Block currently selected in the canvas, addressed by id. */
  selectedBlockId: string | null
  /** Project whose blocks the canvas is showing, addressed by slug. */
  activeProjectSlug: string | null
  document: PortfolioDocument
  /** Set the moment a mutation lands. Cleared on export or explicit save. */
  dirty: boolean
  /** Bounded undo stack. Older entries fall off the end. */
  past: PortfolioDocument[]
  future: PortfolioDocument[]
}

export type EditorAction =
  | { type: 'setMode'; mode: EditorMode }
  | { type: 'selectBlock'; blockId: string | null }
  | { type: 'setActiveProject'; slug: string | null }
  | { type: 'updateBlock'; projectSlug: string; blockId: string; patch: Record<string, unknown> }
  | { type: 'moveBlock'; projectSlug: string; blockId: string; direction: 'up' | 'down' }
  | { type: 'removeBlock'; projectSlug: string; blockId: string }
  | { type: 'insertBlock'; projectSlug: string; block: Block; afterBlockId?: string }
  | { type: 'updateProject'; projectSlug: string; patch: Partial<Project> }
  | { type: 'updateMeta'; patch: Partial<SiteMeta> }
  | { type: 'replaceDocument'; document: PortfolioDocument }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'markClean' }

/* ---------------------------------------------------------------------------
   Block registry
   Drives the editor's insert menu and the label shown on each block toolbar.
   --------------------------------------------------------------------------- */

export interface BlockDefinition {
  type: BlockType
  label: string
  description: string
  /** Factory for a new block of this type, pre-filled with editable defaults. */
  create: (id: string) => Block
}

export const BLOCK_REGISTRY: BlockDefinition[] = [
  {
    type: 'text',
    label: 'Text',
    description: 'Heading with one or more paragraphs.',
    create: (id) => ({ id, type: 'text', heading: 'Section heading', paragraphs: ['New paragraph.'] }),
  },
  {
    type: 'metricsGrid',
    label: 'Metrics',
    description: 'Outcome figures with labels.',
    create: (id) => ({ id, type: 'metricsGrid', metrics: [{ value: '[ADD VALUE]', label: '[ADD LABEL]' }] }),
  },
  {
    type: 'mediaGrid',
    label: 'Media grid',
    description: 'Screens or artefacts, opening in a lightbox.',
    create: (id) => ({
      id,
      type: 'mediaGrid',
      columns: 2,
      lightbox: true,
      items: [{ src: '', alt: '[ADD ALT TEXT]', aspect: '16/9', kind: 'image' }],
    }),
  },
  {
    type: 'comparison',
    label: 'Before and after',
    description: 'Two states side by side with notes.',
    create: (id) => ({
      id,
      type: 'comparison',
      before: { label: 'Before', media: { src: '', alt: '[ADD ALT TEXT]', aspect: '16/9', kind: 'image' }, notes: [] },
      after: { label: 'After', media: { src: '', alt: '[ADD ALT TEXT]', aspect: '16/9', kind: 'image' }, notes: [] },
    }),
  },
  {
    type: 'list',
    label: 'List',
    description: 'Termed or plain points.',
    create: (id) => ({ id, type: 'list', ordered: false, items: [{ body: 'New point.' }] }),
  },
  {
    type: 'quote',
    label: 'Quote',
    description: 'Pulled quote with attribution.',
    create: (id) => ({ id, type: 'quote', quote: 'New quote.', attribution: '' }),
  },
  {
    type: 'statement',
    label: 'Statement',
    description: 'Full width closing line.',
    create: (id) => ({ id, type: 'statement', text: 'New statement.' }),
  },
  {
    type: 'embed',
    label: 'Embed',
    description: 'Figma, Loom or video with a fallback.',
    create: (id) => ({
      id,
      type: 'embed',
      media: { src: '', alt: '[ADD ALT TEXT]', aspect: '16/9', kind: 'figma' },
      fallbackText: 'This embed could not be loaded.',
    }),
  },
  {
    type: 'testimonialSlider',
    label: 'Testimonials',
    description: 'Quotes pulled from the testimonial collection.',
    create: (id) => ({ id, type: 'testimonialSlider', testimonialIds: [] }),
  },
]

export function blockLabel(type: BlockType): string {
  return BLOCK_REGISTRY.find((definition) => definition.type === type)?.label ?? type
}

/* ---------------------------------------------------------------------------
   Validation helpers
   --------------------------------------------------------------------------- */

export interface ValidationResult {
  ok: boolean
  document?: PortfolioDocument
  errors: string[]
}

/** Used by import, so a malformed payload is rejected with readable reasons. */
export function validateDocument(input: unknown): ValidationResult {
  const parsed = portfolioDocumentSchema.safeParse(input)
  if (parsed.success) {
    return { ok: true, document: parsed.data, errors: [] }
  }
  return {
    ok: false,
    errors: parsed.error.issues.map((issue) => `${issue.path.join('.') || 'document'}: ${issue.message}`),
  }
}

/** Ids only need to be unique inside one document, so a counter plus time is enough. */
let idCounter = 0
export function createBlockId(prefix = 'block'): string {
  idCounter += 1
  return `${prefix}-${Date.now().toString(36)}-${idCounter.toString(36)}`
}
