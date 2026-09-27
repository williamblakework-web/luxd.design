import type { Project } from '@/lib/schema'

/* ===========================================================================
   Project catalogue
   ---------------------------------------------------------------------------
   Array order is display order. The first published entry gets the featured
   treatment on the home page.

   Placeholder convention: anything wrapped in [ADD ...] is a real gap, not
   filler. Grep the project for "[ADD" to find every one of them.

   Metrics are deliberately unfilled. Inventing a conversion lift would make
   the strongest part of a case study the least trustworthy part, so the
   labels are in place and the values are waiting for you.
   =========================================================================== */

export const projects: Project[] = [
  /* ------------------------------------------------------------------ 01
     The practice itself. Only case study where the strategy, brand,
     commercial model and build were all one person's call.
     ---------------------------------------------------------------------- */
  {
    slug: 'london-ux-design',
    title: 'London UX Design (LUXD)',
    client: 'London UX Design',
    year: '[ADD YEAR]',
    categories: ['Community', 'Enterprise'],
    summary:
      'Productising a design practice into a fixed price service: positioning, commercial model, site architecture and build for londonuxdesign.co.uk.',
    // Drop a screenshot of the live site at this path and it appears. Until
    // then AspectMedia renders a labelled placeholder rather than a broken image.
    thumbnail: {
      src: '/media/london-ux-design/site.png',
      alt: 'The londonuxdesign.co.uk home page',
      aspect: '16/9',
      kind: 'image',
      width: 1440,
      height: 900,
    },
    status: 'published',
    featured: true,
    confidential: false,
    tldr: {
      role: 'Founder. Product strategy, positioning, brand, site architecture, design and build.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC]', label: 'Enquiries per month' },
        { value: '[ADD METRIC]', label: 'Enquiry to signed proposal rate' },
        { value: '3 weeks', label: 'Quoted build turnaround' },
      ],
      technologies: ['Positioning', 'Service design', 'Brand identity', 'Web build', 'Local search'],
    },
    blocks: [
      {
        id: 'lux-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'Building the thing rather than being hired onto it',
        paragraphs: [
          'Most portfolio work happens inside somebody else\'s constraints. This is the one case where the strategy, the positioning, the pricing, the brand and the build were all mine to set, which makes it the clearest evidence of judgement rather than execution.',
          'The problem was the one every independent practice hits. Design services are sold as bespoke engagements, which means every enquiry needs a scoping call, a custom proposal and a negotiation before anyone knows whether it is worth having. That is expensive at the top of the funnel and it filters out exactly the small business clients who need the work most.',
        ],
      },
      {
        id: 'lux-reframe',
        type: 'text',
        eyebrow: 'Strategy',
        heading: 'Productising the engagement',
        paragraphs: [
          'The reframe was to stop selling design hours and start selling a defined outcome at a published price. A website build is a fixed fee. Ongoing care is a monthly subscription that starts at launch. The scope is written and returned within two working days, and the build lands in three weeks.',
          'Publishing the price does two jobs at once. It disqualifies the wrong enquiries before they cost a call, and it removes the single biggest source of anxiety for a small business owner commissioning design work, which is not knowing what the final number will be.',
        ],
      },
      {
        id: 'lux-statement',
        type: 'statement',
        text: 'We do partnerships, not projects.',
      },
      {
        id: 'lux-model',
        type: 'list',
        heading: 'The commercial model, stated on the site',
        ordered: false,
        items: [
          { term: 'Build', body: 'A fixed fee covering the whole build, the same across every package.' },
          { term: 'Care', body: 'A monthly fee starting at launch, with the first three months included in the build.' },
          { term: 'Payment', body: 'Half on signature, half on delivery. No staged invoicing to chase.' },
          { term: 'Timing', body: 'Written scope inside two working days. Build inside three weeks.' },
          { term: 'After launch', body: 'A two week fix period included, so the first real traffic is covered.' },
        ],
      },
      {
        id: 'lux-services',
        type: 'text',
        eyebrow: 'Architecture',
        heading: 'Three services that stand alone and compose',
        paragraphs: [
          'The offer is modular: the site build, local search optimisation, and AI handling of inbound enquiries. Each works on its own, and each is more useful with the others, which is what makes an upsell feel like a next step rather than a pitch.',
          'That modularity drove the site architecture. Rather than one undifferentiated services page, each package gets its own surface with its own scope and price, and the navigation is built around the decision a visitor is actually making, which is not what does he do but what will this cost me and when will it be live.',
        ],
      },
      {
        id: 'lux-ai',
        type: 'text',
        eyebrow: 'Position',
        heading: 'Being explicit about where the machine is used',
        paragraphs: [
          'The site states plainly that the design work is done by a person with a design degree and ten years of practice, and that AI is used for admin and code but never for the visible design.',
          'That claim is a differentiator now and it will be table stakes soon, but the reason to make it is simpler than positioning. Clients commissioning design in 2026 are right to ask, and a practice that answers before being asked earns a different kind of conversation.',
        ],
      },
      {
        id: 'lux-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Where it stands',
        paragraphs: [
          '[ADD: enquiry volume, conversion from enquiry to signed proposal, retained care clients, and revenue split between build and recurring. The recurring share is the number that proves the model, because it is the difference between a practice and a job.]',
          '[ADD: what running this changed about how you work for other clients. That transfer is the part a hiring director cannot get from anywhere else on the site.]',
        ],
      },
      {
        id: 'lux-embed',
        type: 'embed',
        heading: 'The live site',
        media: {
          src: 'https://londonuxdesign.co.uk',
          alt: 'londonuxdesign.co.uk, the live practice site',
          aspect: '16/9',
          kind: 'embed',
          caption: 'londonuxdesign.co.uk',
        },
        fallbackText: 'The live site is at londonuxdesign.co.uk. It declines to render in a frame, which is the correct behaviour.',
      },
    ],
  },

  /* ------------------------------------------------------------------ 02 */
  {
    slug: 'enhanced-search-adaptavist',
    title: 'Adaptavist Search Experience',
    client: 'Adaptavist',
    year: '[ADD YEAR]',
    categories: ['Enterprise', 'Data'],
    summary:
      'Saved filter management for Jira organisations running on hundreds of shared JQL queries, rebuilt around ownership, sync state, and the working modes admins actually use.',
    thumbnail: {
      src: '/media/enhanced-search/sort.png',
      alt: 'Saved filters panel with the sort menu open',
      aspect: '16/9',
      kind: 'image',
      width: 1440,
      height: 1024,
    },
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Designer. Information architecture, interaction model, UI.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC]', label: 'Reduction in filter support tickets' },
        { value: '[ADD METRIC]', label: 'Time to triage a stale filter' },
        { value: '3', label: 'Densities replacing 3 proposed screens' },
      ],
      technologies: ['Atlassian Design System', 'Jira Cloud', 'JQL', 'Figma'],
    },
    blocks: [
      {
        id: 'es-problem',
        type: 'text',
        eyebrow: 'Problem',
        heading: 'A personal shortcut that became shared infrastructure',
        paragraphs: [
          'A saved JQL filter starts life as a convenience for one person. At organisational scale it turns into infrastructure that nobody owns. Boards depend on it. Reports depend on it. Teams inherit filters from people who have left, and a filter edited upstream quietly changes what a downstream board shows.',
          'The list that held all of this was flat and undifferentiated. A filter synced this morning and a filter abandoned two years ago looked identical. Provenance, permission, and sync state existed in the data but not in the interface, so every question about a filter meant opening it, and every audit meant opening all of them.',
        ],
      },
      {
        id: 'es-reframe',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Ownership as the organising idea',
        paragraphs: [
          'I treated this as a service problem rather than a list problem. The question the interface has to answer is not what filters exist, but who is accountable for this one and whether the person looking at it can act.',
          'Every card answers that on its face. Created by and last synced sit on the card itself. The permission position, that a filter is shared and only editable by its creator, is stated in words rather than implied by a disabled control. That single change removes the most common dead end in the old flow, which was discovering a lack of permission only after attempting an edit.',
        ],
      },
      {
        id: 'es-statement',
        type: 'statement',
        text: 'Who owns this, when did it last work, and am I allowed to fix it?',
      },
      {
        id: 'es-density',
        type: 'comparison',
        heading: 'One list, three working modes',
        summary:
          'Admins scan for a known filter, review a handful, or audit everything. The instinct is three screens. I built one list with three densities, because the alternative fragments a single mental model across separate places.',
        before: {
          label: 'Compact',
          media: {
            src: '/media/enhanced-search/compact.png',
            alt: 'Compact density showing filter names with colour markers, favourite and sync controls only',
            aspect: '4/3',
            kind: 'image',
            width: 1440,
            height: 1024,
          },
          notes: ['Name, colour marker, favourite, sync control', 'Built for finding one known item in a long list'],
        },
        after: {
          label: 'Full',
          media: {
            src: '/media/enhanced-search/full.png',
            alt: 'Full view of a filter card showing created by, last synced, description and permission statement',
            aspect: '4/3',
            kind: 'image',
            width: 1440,
            height: 1024,
          },
          notes: ['Adds description and permission statement inline', 'Built for audit, handover and cleanup'],
        },
      },
      {
        id: 'es-sync',
        type: 'text',
        eyebrow: 'Process',
        heading: 'Sync state gets its own view',
        paragraphs: [
          'Sync failure used to be an individual discovery. Someone notices a board is wrong, investigates, and eventually finds a filter that never synced. Each instance costs an investigation, and the set of stale filters is never visible as a set.',
          'I promoted Not Synced to a sort mode and a view in its own right, so the entire stale population surfaces as one triage queue. A global JQL Sync Status indicator in the header carries the same information at system level, answering the question that otherwise starts every support thread: is the problem this filter or the whole integration.',
        ],
      },
      {
        id: 'es-screens',
        type: 'mediaGrid',
        heading: 'The shipped interface',
        columns: 2,
        lightbox: true,
        items: [
          {
            src: '/media/enhanced-search/sort.png',
            alt: 'Sort menu open showing Alphabetical, Most recently created, Private first and Not Synced',
            caption: 'Four sort modes, each matched to a task rather than to a data column.',
            aspect: '4/3',
            kind: 'image',
            width: 1440,
            height: 1024,
          },
          {
            src: '/media/enhanced-search/notsynced.png',
            alt: 'Expanded grid showing a Not Synced group of filter cards',
            caption: 'Not Synced as a working queue rather than an error state.',
            aspect: '4/3',
            kind: 'image',
            width: 1440,
            height: 1024,
          },
          {
            src: '/media/enhanced-search/regular.png',
            alt: 'Regular density showing creator and last synced metadata',
            caption: 'Regular is the default, because most sessions are maintenance.',
            aspect: '4/3',
            kind: 'image',
            width: 1440,
            height: 1024,
          },
          {
            src: '/media/enhanced-search/folder.png',
            alt: 'New folder creation panel with a name field and save action',
            caption: 'Folder creation stays in the panel. No modal, no reason to postpone organising.',
            aspect: '4/3',
            kind: 'image',
            width: 1440,
            height: 1024,
          },
        ],
      },
      {
        id: 'es-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'What changed',
        paragraphs: [
          'Ownership is visible without opening anything. Stale filters are triageable as a group instead of one discovery at a time. Structure holds at the point where a team has more filters than any one person can remember, and the same card model carries from the narrow sidebar to the full width grid.',
          'The underlying move is small and repeatable. Take the facts a system already holds about provenance and state, and put them where the decision is made rather than one click away from it.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 03 */
  {
    slug: 'vodafone-mobile-trade-in',
    title: 'Vodafone Mobile Trade-In',
    client: 'Vodafone',
    year: '[ADD YEAR]',
    categories: ['Telecom'],
    summary:
      'A cross market mobile diagnostic and trade in flow, designed so a device valuation reads as transparent rather than arbitrary.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Designer. Flow design across markets.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC]', label: 'Trade in completion rate' },
        { value: '[ADD METRIC]', label: 'Markets shipped into' },
        { value: '4', label: 'Diagnostic steps before a guaranteed quote' },
      ],
      technologies: ['Cross market design', 'Responsive web'],
    },
    blocks: [
      {
        id: 'vod-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'Asking someone to grade their own device',
        paragraphs: [
          'Trading in a phone requires the customer to assess its condition honestly, then trust that the number they are quoted reflects that assessment. Both halves are fragile. Overstate the condition and the final offer drops on inspection, which reads as a bait and switch. Understate it and the customer walks away from money they were owed.',
          'The flow had to work across European markets, each with its own device mix and commercial terms.',
        ],
      },
      {
        id: 'vod-approach',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'A guided diagnostic rather than a form',
        paragraphs: [
          'The assessment was structured as a short sequence of plain condition questions, each phrased around what the customer can actually see. The cosmetic test asks whether the device is in good working order and free of scratches, cracks or other damage, then qualifies that with concrete examples of what counts as slight wear against what counts as damage.',
          'Supporting copy carried the commercial promise alongside the questions: a guaranteed quote, an easy and transparent process, and responsible reuse or recycling of the device. The quote holds for seven days, so the customer is never forced to decide inside the flow.',
        ],
      },
      {
        id: 'vod-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: ['[ADD: completion rate, quote to dispatch conversion, or reduction in valuation disputes at inspection.]'],
      },
    ],
  },

  /* ------------------------------------------------------------------ 04 */
  {
    slug: 'gfk-channel-hierarchy',
    title: 'GfK Data Visualization Platform',
    client: 'GFK',
    year: '[ADD YEAR]',
    categories: ['Data', 'Enterprise'],
    summary:
      'A point of sale data visualisation platform simplifying nested channel sales hierarchies for manufacturers of tech durables, with a permissions model governing who sees which level.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Designer. Research, prototyping, permissions model, UI.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC]', label: 'Reduction in time to read a hierarchy' },
        { value: '[ADD METRIC]', label: 'Research participants' },
        { value: '[ADD METRIC]', label: 'Hierarchy levels supported' },
      ],
      technologies: ['Paper prototyping', 'Moderated research', 'Figma'],
    },
    blocks: [
      {
        id: 'gfk-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'Point of sale tracking for manufacturers of tech durables',
        paragraphs: [
          'GFK provides point of sale tracking data for manufacturers such as Lenovo and Panasonic. The product, known as Market Intelligence, is a core part of the business and carries its highest volume of paying clients.',
          'Clients pay a subscription based on the frequency of data delivery, weekly costing more than monthly, and on the complexity of their needs, meaning the number of products and geographical locations they track. Channel hierarchy is how that data is structured, and it nests deeply enough that reading it was the job rather than the starting point.',
        ],
      },
      {
        id: 'gfk-research',
        type: 'text',
        eyebrow: 'Process',
        heading: 'Research before pixels',
        paragraphs: [
          'I set up the research questions and prepared a script for moderated sessions, each running about an hour. Sessions opened by establishing what participants did for a living, what experience they had of data visualisation tools, and how they understood the term parent and child, before inviting them to explore two prototypes.',
          'Paper prototyping came first, testing different methods of viewing the hierarchy before committing to a direction. [ADD: which method won and why.]',
        ],
      },
      {
        id: 'gfk-permissions',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Granularity as a permissions question',
        paragraphs: [
          'Different users are entitled to different depths of the same hierarchy. Rather than treat that as an access control setting applied after the fact, the visualisation was designed around it: lower tiers see a restricted view, and users with higher visibility permissions see more levels, without the interface changing shape underneath them.',
        ],
      },
      {
        id: 'gfk-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: ['[ADD: adoption, comprehension gains from testing, or commercial effect on the Market Intelligence product.]'],
      },
    ],
  },

  /* ------------------------------------------------------------------ 05 */
  {
    slug: 'ey-watson-due-diligence',
    title: 'Watson AI M&A Application',
    client: 'EY',
    year: '[ADD YEAR]',
    categories: ['AI', 'Enterprise'],
    summary:
      'An AI driven due diligence platform using IBM Watson to automate merger and acquisition analysis, intended to replace the several tools analysts were using in parallel.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: true,
    tldr: {
      role: 'Product Designer, end to end from kick off to release.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC]', label: 'Tools consolidated into one platform' },
        { value: '[ADD METRIC]', label: 'Analyst hours saved per engagement' },
        { value: '[ADD METRIC]', label: 'Time to first insight' },
      ],
      technologies: ['IBM Watson', 'Design thinking', 'Blind data room testing'],
    },
    blocks: [
      {
        id: 'ey-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'Due diligence spread across too many tools',
        paragraphs: [
          'Analysts conducting merger and acquisition due diligence were moving between several applications to assemble a single view of a target company. The brief was to break down an incredibly complex application intended to aid and replace those tools.',
          'This was a true end to end delivery, from the official kick off date through to release. [ADD: the specific friction analysts reported, and what the old tool chain cost them.]',
        ],
      },
      {
        id: 'ey-process',
        type: 'list',
        heading: 'How the engagement was structured',
        ordered: true,
        items: [
          { term: 'Design thinking workshops', body: 'Framing sessions with EY and IBM stakeholders to agree the problem before scoping a solution.' },
          { term: 'IBM onboarding', body: 'Understanding how due diligence is actually conducted, from the people who conduct it.' },
          { term: 'Use case creation', body: 'Test and success criteria defined up front, so the build had something to be measured against.' },
          { term: 'Solution walkthroughs', body: 'Regular demos against those use cases rather than a single reveal at the end.' },
          { term: 'Watson capability', body: 'Building the AI capability into the analyst workflow rather than bolting it alongside.' },
          { term: 'Blind data room tests', body: 'Validation against real material with the answers withheld from participants.' },
          { term: 'Documentation and proposal', body: 'End to end requirements, solution architecture, and the commercial proposal.' },
        ],
      },
      {
        id: 'ey-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          '[ADD: what shipped, what it replaced, and the measured effect on analyst throughput or engagement time. This is the section a hiring director reads first.]',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 06 */
  {
    slug: 'barclaycard-axe-the-fax',
    title: 'Axe the Fax',
    client: 'Barclaycard',
    year: '[ADD YEAR]',
    categories: ['FinTech'],
    summary:
      'A redesign of chargeback dispute workflows, modernising a legacy credit card process that still moved on paper.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Designer.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC]', label: 'Reduction in dispute resolution time' },
        { value: '[ADD METRIC]', label: 'Fax volume removed' },
        { value: '[ADD METRIC]', label: 'Cases handled per agent per day' },
      ],
      technologies: ['Service design', 'Process mapping', 'Legacy systems'],
    },
    blocks: [
      {
        id: 'bc-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'A dispute process running on fax',
        paragraphs: [
          'Chargeback disputes are a regulated, deadline driven process with money and liability moving between a cardholder, a merchant and two banks. At Barclaycard, significant parts of that process were still being carried by fax, which meant no state, no audit trail in the system of record, and no way for an agent to answer where a case had got to.',
          '[ADD: the scale of the problem, how many cases or how much fax volume, and which parts of the chain were affected.]',
        ],
      },
      {
        id: 'bc-approach',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'One version of the truth for a case',
        paragraphs: [
          'A dispute is a single object that several parties act on at different times. The redesign treated it that way: one record carrying its own state, deadlines, evidence and history, so that the answer to where is this case now came from the system rather than from someone\'s memory of a fax.',
          '[ADD: the specific workflow decisions, what agents saw, and how deadline pressure was surfaced.]',
        ],
      },
      {
        id: 'bc-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: ['[ADD: resolution time, fax volume removed, agent throughput, or compliance effect.]'],
      },
    ],
  },

  /* ------------------------------------------------------------------ 07 */
  {
    slug: 'faculty-navigation',
    title: 'Faculty AI Navigation',
    client: 'Faculty',
    year: '2020',
    categories: ['AI', 'Enterprise'],
    summary:
      'A scalable navigation system for a data science deployment workbench, designed while the company grew from twenty people to two hundred.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Sole Product Designer.',
      timeline: '2020',
      impact: [
        { value: '20 to 200', label: 'Company headcount across the period' },
        { value: '[ADD METRIC]', label: 'Reduction in navigation depth' },
        { value: '[ADD METRIC]', label: 'Task completion improvement' },
      ],
      technologies: ['Design system', 'Platform IA', 'Figma'],
    },
    blocks: [
      {
        id: 'fac-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'A platform outgrowing its own navigation',
        paragraphs: [
          'Faculty is an AI company whose platform gives data scientists a workbench for building and deploying models: projects, environments, servers, datasets, and published models, each with their own lifecycle.',
          'I was the sole designer through growth from twenty people to two hundred. The navigation had been built for a product with a handful of surfaces and was being asked to carry a platform. [ADD: the specific breakdown, whether it was discoverability, depth, or naming.]',
        ],
      },
      {
        id: 'fac-approach',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Designing for the version of the product that does not exist yet',
        paragraphs: [
          'Navigation designed around today\'s feature set fails at the next release. The system needed to absorb surfaces that had not been built, which meant organising around durable concepts rather than current screens.',
          '[ADD: the organising model you landed on, and the two or three alternatives you rejected.]',
        ],
      },
      {
        id: 'fac-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: ['[ADD: how the system held up as the product grew, and any measured effect on task completion or support volume.]'],
      },
    ],
  },

  /* ------------------------------------------------------------------ 08
     Promoted from draft: this is the closest real match in the catalogue to
     an "EVM / smart contract tooling" case study (Ethereum-side of a
     cross-chain bridge), so it fills that slot with real, fully-written
     content instead of an invented placeholder project of the same shape.
     ---------------------------------------------------------------------- */
  {
    slug: 'instabridge',
    title: 'Instabridge',
    client: 'Instabridge',
    year: '[ADD YEAR]',
    categories: ['FinTech'],
    summary:
      'A cross-chain swap platform for moving assets between Ethereum and Radix, designed so custody, cost and compliance limits stay legible through an irreversible transaction.',
    thumbnail: {
      src: '/media/instabridge/login.png',
      alt: 'Instabridge login screen',
      aspect: '16/9',
      kind: 'image',
      width: 1440,
      height: 900,
    },
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Designer, end to end. Research, flow, design system, handoff spec.',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '6', label: 'Screens from login to transaction detail' },
        { value: '9', label: 'Components covering every screen' },
        { value: '[ADD METRIC]', label: 'Support contacts during bridging' },
      ],
      technologies: ['IBM Plex Sans', 'Figma', 'HTML and CSS prototype'],
    },
    blocks: [
      {
        id: 'ib-problem',
        type: 'text',
        eyebrow: 'Problem',
        heading: 'The problem is trust, not the form',
        paragraphs: [
          'Moving value between two independent ledgers is not a UI exercise. The user hands funds to a bridge, waits through a settlement process they cannot observe, and has no way to confirm anything is happening until it either completes or does not.',
          'Ethereum and Radix have different finality behaviour, different wallet software, and no shared source of truth. Nothing in the interface can be inherited from either chain.',
        ],
      },
      {
        id: 'ib-statement',
        type: 'statement',
        text: 'Where is my money right now? Who controls it? What happens if this fails?',
      },
      {
        id: 'ib-compliance',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Compliance as interface, not as blocker',
        paragraphs: [
          'AML tiers were scoped as a backend rule that would throw an error when breached. I moved them onto the dashboard as a permanent object: current tier, monthly limit consumed against limit remaining, and a direct path to raise it.',
          'A limit the user can see is a planning input. A limit the user discovers at submission is a failure state, and failure states in a financial product are expensive twice over, once in abandoned transactions and again in support contact.',
        ],
      },
      {
        id: 'ib-screens',
        type: 'mediaGrid',
        heading: 'The flow',
        columns: 2,
        lightbox: true,
        items: [
          { src: '/media/instabridge/login.png', alt: 'Login screen', caption: 'Entry point.', aspect: '16/9', kind: 'image', width: 1440, height: 900 },
          { src: '/media/instabridge/dashboard.png', alt: 'Dashboard with both wallets connected', caption: 'Both chains and the compliance position in one view.', aspect: '16/9', kind: 'image', width: 1440, height: 900 },
          { src: '/media/instabridge/swap.png', alt: 'Swap panel', caption: 'Fees disclosed before commitment.', aspect: '16/9', kind: 'image', width: 1440, height: 900 },
          { src: '/media/instabridge/success.png', alt: 'Success state with transaction history', caption: 'Confirmation and record are the same object.', aspect: '16/9', kind: 'image', width: 1440, height: 900 },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 09
     New slot. No real content exists for this yet anywhere in the project's
     history — every substantive field below is a placeholder, not a
     summarised or lightly-dressed guess. Fill from the real engagement,
     or delete this entry if it never shipped.
     ---------------------------------------------------------------------- */
  {
    slug: 'larks-community-initiative',
    title: 'Larks Community Initiative',
    client: '[ADD CLIENT NAME]',
    year: '[ADD YEAR]',
    categories: ['Community'],
    summary: 'Community platform design focusing on scalable content orchestration and user engagement.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: '[ADD ROLE]',
      timeline: '[ADD TIMELINE]',
      impact: [
        { value: '[ADD METRIC e.g., +150% active monthly engagement]', label: 'Engagement' },
        { value: '[ADD METRIC e.g., 3x faster content creation workflows]', label: 'Content velocity' },
      ],
      technologies: ['[ADD TECHNOLOGIES]'],
    },
    blocks: [
      {
        id: 'larks-summary',
        type: 'text',
        eyebrow: 'Executive summary',
        heading: 'The brief',
        paragraphs: [
          '[ADD: scalability bottlenecks in community management — the specific problem statement as it was actually briefed, not a category description.]',
        ],
      },
      {
        id: 'larks-complexity',
        type: 'text',
        eyebrow: 'System complexity',
        heading: 'Multi-role permissions and live activity',
        paragraphs: [
          'Multi-role permission structures and real-time activity feeds. [ADD: the specific scaling problem this solved, and any constraints — moderation, compliance, or data — that shaped it.]',
        ],
      },
      {
        id: 'larks-ownership',
        type: 'text',
        eyebrow: 'Ownership model',
        heading: 'Governance tools for the operators, not the platform team',
        paragraphs: [
          'Self-serve content governance tools built directly for community operators. [ADD: what specifically made them able to run it without depending on you after handoff.]',
        ],
      },
      {
        id: 'larks-process',
        type: 'text',
        eyebrow: 'Process',
        heading: '[ADD HEADLINE]',
        paragraphs: [
          '[ADD: research, wireframes, the component system, and how it was handed off.]',
        ],
      },
      {
        id: 'larks-outcomes',
        type: 'metricsGrid',
        heading: 'Outcomes',
        metrics: [
          { value: '[ADD METRIC e.g., +150% active monthly engagement]', label: 'Platform retention and growth' },
          { value: '[ADD METRIC e.g., 3x faster content creation workflows]', label: 'Content creation growth' },
        ],
      },
    ],
  },
]

/** Published projects in catalogue order. The first is the lead case study. */
export const publishedProjects = projects.filter((project) => project.status === 'published')
export const leadProject = publishedProjects[0]
export const supportingProjects = publishedProjects.slice(1)

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
