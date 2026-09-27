# William Blake · Portfolio site

A static portfolio site. No build step, no framework, no dependencies. Open `index.html` in a browser or drop the folder on any host.

## Structure

```
.
├── index.html                    Home: hero, approach, selected work, clients, quote, contact
├── work.html                     Full case study index
├── about.html                    Background, clients, method
├── 404.html                      Not found page
├── robots.txt                    Crawler rules
├── sitemap.xml                   URL list for search engines
├── work/
│   ├── instabridge.html          Case study 01
│   └── enhanced-search.html      Case study 02
└── assets/
    ├── css/site.css              The whole design system, one file, commented by section
    ├── js/site.js                Theme toggle, nav state, scroll reveal, footer year
    └── img/                      Case study screenshots
```

## Design system

Everything lives in CSS custom properties at the top of `assets/css/site.css`.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#0B0B0C` | Page ground |
| `--bg-soft` | `#F6F7FA` | `#141418` | Callouts, hover states |
| `--ink` | `#0E0E10` | `#F2F2F3` | Primary text |
| `--ink-2` | `#3A3D47` | `#C6C8D0` | Body text |
| `--ink-muted` | `#5C5F6B` | `#9CA0AC` | Captions, labels |
| `--accent` | `#2F3BFF` | `#8A93FF` | Eyebrows, links, marks |
| `--line` | `#E3E4EA` | `#26262B` | Hairlines |

The dark accent is lightened deliberately. `#2F3BFF` on a near black ground fails contrast, `#8A93FF` passes.

**Type.** Space Grotesk for display, IBM Plex Sans for body, IBM Plex Mono for eyebrows and labels. Loaded from Google Fonts. Every size is a fluid `clamp()` on a `--step-*` scale, so nothing needs breakpoint overrides.

**Theme.** The page follows the system setting until someone presses the toggle, and then remembers that choice in `localStorage`. An inline script in each `<head>` applies the stored preference before first paint, so there is no flash of the wrong theme. Storage failures are caught, so private browsing degrades to system preference rather than breaking.

## Editing content

**Add a case study.** Copy `work/instabridge.html`, change the content, then add a `.work-item` block to both `index.html` and `work.html`. The furniture classes available inside a case study:

- `.case-head` with `.meta-grid` for the Context / Role / Timeframe / Tools header
- `.whose-work` for the box separating your decisions from AI assisted output
- `.num-head` + `.num` for numbered section headings
- `.pull` for a black inset statement
- `.numbered-list` for i / ii / iii points
- `.step-grid` for three across explanatory columns, add `.is-active` to highlight one
- `.statement` for the full bleed closing line
- `figure` + `figcaption` for screenshots

**Placeholders to fill.** Search the project for `[ADD` and you will find them all:

- `index.html` · `[ADD AVAILABILITY]` in the hero meta
- `work/instabridge.html` · `[ADD TIMEFRAME]`
- `work/enhanced-search.html` · `[ADD TIMEFRAME]`

**Impact numbers.** Neither case study contains metrics, because none were in the source material. Both will read considerably harder with real figures (support contact reduction, completion rate, audit time, adoption). The natural home is the final section of each case study.

**Clients.** `index.html` lists client names as text in `.client-grid`. If you want real logos, drop SVGs into `assets/img/` and swap the text for `<img>` inside each `<li>`. Keep them one colour so they hold up in dark mode.

## Before launch

- [ ] Replace `https://luxd.co.uk/` in the `canonical`, `og:url` and `sitemap.xml` entries if the domain differs
- [ ] Fill the `[ADD ...]` placeholders
- [ ] Add an Open Graph image, `assets/img/og.png`, 1200 by 630, and reference it with `<meta property="og:image">`
- [ ] Confirm the Russell Gowers quote on the home page is cleared for publication
- [ ] Decide whether the in preparation case studies stay listed or come out until written

## Deploying

Any static host works. The site is plain files with no server requirements.

- **Netlify or Vercel**: drag the folder into the dashboard, or connect a repository. No build command, publish directory is the project root.
- **GitHub Pages**: push to a repository, then Settings, Pages, deploy from branch root.
- **Traditional hosting**: upload the folder by SFTP to the web root.

## Performance and accessibility notes

- No JavaScript framework. One 4 KB script, deferred behaviour only, and the site works fully with JavaScript disabled apart from the theme toggle.
- Images carry explicit `width` and `height` so nothing shifts as they load, and everything below the fold is `loading="lazy"`.
- Every page has a skip link, a single `<h1>`, semantic landmarks, and visible focus rings.
- Colour is never the only signal, touch targets clear 44 px, and both themes were checked against WCAG AA for body text.
- `prefers-reduced-motion` disables the reveal animation and all transitions.
- A print stylesheet strips the navigation and prints case studies as readable documents.
