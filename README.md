# William Blake · Portfolio platform

Next.js 15 (App Router), TypeScript, Tailwind CSS, Radix UI. Schema driven content with an inline editor bridge.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
npm run typecheck
```

---

## 1. Directory structure

```
.
├── app/
│   ├── layout.tsx              Root shell, theme script, editor provider
│   ├── page.tsx                Work (home). Project grid
│   ├── clients/page.tsx        Category grouped client grid + project cards
│   ├── about/page.tsx          Bio, career timeline, practice areas
│   ├── feedback/page.tsx       Testimonial cards
│   ├── work/[slug]/page.tsx    Dynamic case study route
│   ├── not-found.tsx
│   └── globals.css             Token declarations and component classes
│
├── components/
│   ├── site/
│   │   ├── SiteHeader.tsx      Fixed header, active tabs, mobile drawer
│   │   ├── SiteFooter.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── TestimonialCard.tsx
│   ├── media/
│   │   ├── AspectMedia.tsx     Aspect container + fallback handling
│   │   └── Lightbox.tsx        Radix Dialog, keyboard navigable
│   ├── blocks/
│   │   ├── BlockRenderer.tsx   Schema to UI switch
│   │   ├── HeroBlock.tsx
│   │   ├── TextBlocks.tsx      text, list, quote, statement, metricsGrid
│   │   ├── MediaBlocks.tsx     mediaGrid, comparison, embed
│   │   └── TestimonialSlider.tsx
│   ├── case-study/
│   │   ├── CaseStudyTemplate.tsx
│   │   ├── TldrBanner.tsx
│   │   └── ProjectCard.tsx
│   └── editor/
│       ├── EditorProvider.tsx  Reducer, context, undo/redo
│       ├── EditorChrome.tsx    Mode bar, keyboard shortcut
│       ├── EditableBlock.tsx   Selection wrapper
│       ├── BlockToolbar.tsx    Radix Toolbar + DropdownMenu + Tooltip
│       ├── BlockInspector.tsx  Radix Dialog + Tabs, field editing
│       └── ExportDialog.tsx    JSON export and validated import
│
├── lib/
│   ├── schema.ts               Zod schema, TS types, block registry
│   ├── utils.ts
│   └── content/
│       ├── index.ts            Assembles the seed document
│       ├── meta.ts             Name, contact, availability
│       ├── projects.ts         All projects
│       ├── clients.ts
│       ├── testimonials.ts
│       └── about.ts
│
├── public/media/               Case study screenshots
├── tailwind.config.ts
└── next.config.mjs
```

---

## 2. Data schema

`lib/schema.ts` is the single source of truth. Three consumers read it: the rendered site, the editor bridge, and export/import.

```ts
PortfolioDocument {
  version: 1
  updatedAt: string
  meta: SiteMeta            // includes `availability`, rendered as a badge
  projects: Project[]       // array order is display order
  clients: Client[]         // the logo grid, grouped by sector
  engagements: Engagement[] // the long tail, as categorised text lists
  testimonials: Testimonial[]
  about: About              // includes `featuredSkills`, rendered as pills
}

Project {
  slug, title, client, year
  categories: Category[]        // FinTech | Telecom | AI | Automotive | Enterprise | Data | Community
  summary, thumbnail?
  tldr: { role, timeline, impact: Metric[], technologies: string[] }
  blocks: Block[]
  status: 'published' | 'draft' // drafts 404 on the public site
  featured, confidential
}
```

`Block` is a discriminated union on `type`:

| Type | Purpose |
|---|---|
| `hero` | Eyebrow, heading, lede, optional media |
| `text` | Heading plus paragraphs |
| `list` | Termed or plain points, optionally numbered |
| `mediaGrid` | 1 to 3 column screens, optional lightbox |
| `metricsGrid` | Outcome figures |
| `comparison` | Before and after with per side notes |
| `testimonialSlider` | Quotes resolved by id |
| `quote` | Pulled quote |
| `statement` | Full width closing line |
| `embed` | Figma, Loom, MP4, with fallback text |

Every block carries a stable `id`. The editor addresses blocks by id, so reordering never breaks a reference.

---

## 3. Editing content

**Two routes, same schema.**

**In code.** Edit the files in `lib/content/`. This is the route for real changes you intend to commit.

**In the browser.** The editor bridge, for laying out a case study visually before committing it.

### Using the editor bridge

1. Append `?edit=1` to any URL, or press `Ctrl`/`Cmd` + `E`.
2. Press **Edit mode** in the bar at the bottom.
3. Click any block to select it. A toolbar appears above it.
4. From the toolbar: edit content, move up or down, insert a block after this one, delete.
5. **Export / import** writes the whole document as JSON.

Undo and redo are bounded to 50 steps. Leaving the page with unsaved changes prompts a confirmation.

### Promoting an export to production

The bridge holds state in memory only. Nothing persists on its own, by design: there is no CMS to drift out of sync with the repository.

1. Export the JSON.
2. Either paste the relevant sections back into `lib/content/*.ts`, or
3. Save the payload as `lib/content/document.json` and change `lib/content/index.ts` to import it.

Option 3 in full:

```ts
// lib/content/index.ts
import raw from './document.json'
import { validateDocument } from '@/lib/schema'

const result = validateDocument(raw)
if (!result.ok) throw new Error(`Invalid document:\n${result.errors.join('\n')}`)
export const portfolioDocument = result.document!
```

That validates at build time, so a malformed payload fails the build rather than reaching production.

---

## 4. Adding a block type

Four steps, all typechecked.

1. **Schema** (`lib/schema.ts`): add a Zod object and put it in the `blockSchema` union.
2. **Registry** (same file): add a `BLOCK_REGISTRY` entry with a `create` factory. It appears in the editor's insert menu automatically.
3. **Renderer**: write the component, then add a `case` to `BlockRenderer`. The `never` guard at the bottom of the switch fails the typecheck until you do.
4. **Inspector** (`BlockInspector.tsx`): add a `case` to `ContentFields`, and to `LayoutFields` if it has layout options.

---

## 5. Design system

Tokens are CSS custom properties in `app/globals.css`, surfaced to Tailwind in `tailwind.config.ts`. One token set, two values.

### Contrast, measured

The brief asked for AAA and specifically for the elimination of low contrast grey text. Every text token was computed against its own ground rather than eyeballed:

| Token | Light | Dark | AAA needs |
|---|---|---|---|
| `ink` | 18.54:1 | 18.01:1 | 7:1 |
| `ink-2` | 12.07:1 | 13.08:1 | 7:1 |
| `ink-muted` | 8.43:1 | 8.72:1 | 7:1 |
| `accent` | 9.29:1 | 9.26:1 | 7:1 |
| `accent-contrast` on `accent` | 9.29:1 | 9.26:1 | 4.5:1 |

The accent is two different blues: `#1F2ACC` on white, `#A3ABFF` on near black. A single blue cannot clear AAA on both.

### Type

Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels), loaded from Google Fonts. Sizes are fluid `clamp()` steps from `step--1` to `step-5`, so no size needs a breakpoint override.

### Media handling

Everything goes through `AspectMedia`, which guarantees four things:

- The container holds its aspect ratio from the schema before anything loads, so there is no layout shift. Measured on a case study page load: **CLS 0.0000**.
- A missing or failed asset renders a labelled placeholder, never a broken image icon or a 404 box.
- Embeds are sandboxed and lazily loaded.
- Fit is an explicit `fit` prop, `'cover'` (default) or `'contain'`, not a class override. Both settings are `object-*` utilities on the same element, so an override passed through `className` is not guaranteed to win the specificity race. Grid cells and thumbnails cover. The lightbox contains.

Dense material (charts, site maps, granular screens) opens in the `Lightbox`: focus trapped, escape to close, arrow keys to move through a set, and the asset fitted whole inside a viewport bounded frame rather than cropped.

---

## 6. Placeholders

`[ADD ...]` marks a real gap, not filler. They render tinted in the accent colour so they are impossible to miss in review. Find them all:

```bash
grep -rn "\[ADD" lib/ app/
```

The main ones:

- **Metrics.** Every `tldr.impact` value. The labels are written, the values are yours. The TL;DR banner is the first thing a hiring director reads, so this is the highest value gap to close.
- **Timelines and years** on every project.
- **Case study bodies** for Barclaycard, and the outcomes sections throughout.
- **Two testimonials** beyond the Russell Gowers quote.
- **Career periods** in `lib/content/about.ts`.

### Media still to add

- `public/media/london-ux-design/site.png` — a screenshot of the live londonuxdesign.co.uk home page, 1440 by 900. The lead case study card and its hero reference this path already, so dropping the file in is the whole job. Until then it renders a labelled placeholder rather than a broken image.
- Thumbnails for Vodafone, GFK, EY, Barclaycard and Faculty. Same pattern: set `thumbnail` on the project and drop the file under `public/media/<slug>/`.

---

## 7. Notes on the catalogue

Seven published case studies, in this order. Array order in `lib/content/projects.ts` is display order; the first published entry gets the lead treatment on the home page.

1. London UX Design
2. Enhanced Search (Adaptavist)
3. Vodafone, Europe mobile trade in
4. GFK, channel hierarchy
5. EY, Watson AI due diligence
6. Barclaycard, Axe the Fax
7. Faculty, navigation

- **Instabridge** is not in the published catalogue and sits at `status: 'draft'`. Drafts stay in the document and remain editable, but 404 on the public site. Set it to `published` to bring it in, or delete the entry.
- **No-Code EVM** has been removed entirely.
- **Ford** appears as a client, in the bid list, and in the Projects list as the Innovation Centre, but has no case study. The Russell Gowers testimonial refers to the EVme work.

### The Clients page has two layers

The **logo grid** is `clients` in `lib/content/clients.ts`, grouped by sector. The **categorised text lists** underneath are `engagements` in the same file, split into Internal, Projects, and Bid and proposals. An engagement with a `projectSlug` renders as a link to that case study; the rest are plain text. Most of these will never have a case study, which is the point: the grid shows who, the lists show what.

---

## 8. Deployment

Static by default. Every route prerenders, including all published case studies (`generateStaticParams` in `app/work/[slug]/page.tsx` enumerates the published ones).

- **Vercel**: import the repository. No configuration needed.
- **Netlify**: build `npm run build`, with the Next.js plugin.
- **Self hosted**: `npm run build && npm run start` behind a reverse proxy.

### Fully static export

Nothing here uses a server runtime, so the whole site can be emitted as flat files for any static host (S3, GitHub Pages, a plain nginx root). One line in `next.config.mjs`:

```js
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // ...
}
```

`npm run build` then writes an `out/` directory: 13 HTML files covering every route, verified building clean. The trade off is that `next/image` optimisation is disabled, which costs nothing here because `AspectMedia` uses plain `img` elements with explicit dimensions.

Before launch:

- [ ] Fill the `[ADD ...]` placeholders, metrics first
- [ ] Set the real domain in `app/layout.tsx` (`metadataBase`)
- [ ] Add an Open Graph image and reference it in the metadata
- [ ] Confirm the Russell Gowers quote is cleared for publication
- [ ] Decide whether Instabridge ships

---

## 9. Accessibility

- AAA contrast on all body text, verified by computation rather than by eye.
- Skip link, one `<h1>` per page, semantic landmarks, visible focus rings throughout.
- All interactive elements are real `button` or `a` elements. Radix supplies focus trapping, roving focus in the toolbar, and escape handling in dialogs.
- Touch targets clear 44px.
- Colour is never the only signal.
- `prefers-reduced-motion` disables animation and transitions.
- The mobile drawer, lightbox and every dialog carry titles and descriptions, visually hidden where the design does not show them.
