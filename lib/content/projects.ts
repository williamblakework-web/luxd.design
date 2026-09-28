import type { Project } from '@/lib/schema'

/* ===========================================================================
   Project catalogue
   ---------------------------------------------------------------------------
   Array order is display order. The first published entry gets the featured
   treatment on the home page.

   Placeholder convention: anything wrapped in [ADD ...] is a real gap, not
   filler. Grep the project for "[ADD" to find every one of them.

   William owns LUXD Ltd, and London UX Design is the studio under it. LUXD
   leads the catalogue because it is the current, primary business, not a
   minor closing entry.
   =========================================================================== */

export const projects: Project[] = [
  /* ------------------------------------------------------------------ 01
     The practice itself. Only case study where the strategy, brand,
     commercial model and build were all one person's call.
     ---------------------------------------------------------------------- */
  {
    slug: 'london-ux-design',
    title: 'Founding LUXD',
    client: 'LUXD Ltd',
    year: '2025',
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
      role: 'Founder and Lead Product Designer. Positioning, pricing, design and delivery, end to end.',
      timeline: 'October 2025 to present',
      impact: [
        { value: 'Seven', label: 'Client engagements delivered to date', detail: 'Includes The British School of Excellence, ADHD Andy and JLJ Real Estate' },
        { value: '53 / 20 / 10', label: 'Variables, text styles and components in the brand system' },
        { value: 'WCAG AA', label: 'Accessibility standard the build is held to' },
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
          'Small businesses need a genuine brand system, an accessible site and, increasingly, AI tooling, but rarely the budget or patience for an agency process built for enterprise clients. Design services are sold as bespoke engagements, which means every enquiry needs a scoping call, a custom proposal and a negotiation before anyone knows whether it is worth having. That is expensive at the top of the funnel and it filters out exactly the small business clients who need the work most.',
        ],
      },
      {
        id: 'lux-reframe',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Productising the engagement',
        paragraphs: [
          'The reframe was to stop selling design hours and start selling a defined outcome at a published price. A website build is a fixed fee. Ongoing care is a monthly subscription that starts at launch. The scope is written and returned within two working days, and the build lands in three weeks.',
          'Built London UX Design\'s own brand system as a Figma library first: 53 variables, 20 text styles and 10 components, plus a rendered HTML guidelines page, then applied it across brand systems, website design and custom AI tooling built to WCAG AA accessibility. Publishing the price does two jobs at once. It disqualifies the wrong enquiries before they cost a call, and it removes the single biggest source of anxiety for a small business owner commissioning design work, which is not knowing what the final number will be.',
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
          'Seven client engagements delivered since October 2025, including The British School of Excellence, ADHD Andy and JLJ Real Estate. The work spans brand systems, website design, custom AI tooling and accessibility built to WCAG AA.',
          'The practice runs on its own design system: a Figma library of 53 variables, 20 text styles and 10 components, published alongside a rendered HTML guidelines page so a build can be handed to anyone without a walkthrough.',
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
    title: 'Enhanced Search for ScriptRunner',
    client: 'Adaptavist',
    year: '2024 to 2025',
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
      role: 'Product Designer. Led Enhanced Search end to end: information architecture, interaction model, UI.',
      timeline: 'October 2024 to February 2025',
      impact: [
        { value: '40 to 60%', label: 'Projected cut in average search time, final user tests', detail: 'Measured across Compact, Regular, and Full density modes' },
        { value: '3', label: 'Densities replacing 3 proposed screens', detail: 'Compact, Regular, and Full in a single workspace' },
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
          'Advanced Jira users were also losing time to search that did not reflect how they actually worked: by folder, by project, by team. The list that held all of this was flat and undifferentiated. A filter synced this morning and a filter abandoned two years ago looked identical. Provenance, permission, and sync state existed in the data but not in the interface, so every question about a filter meant opening it, and every audit meant opening all of them.',
        ],
      },
      {
        id: 'es-reframe',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Ownership as the organising idea',
        paragraphs: [
          'I ran a workshop with team members and customer service agents, then shipped folder creation, advanced search filters, and group, project and team based filtering, testing prototypes with real users before locking anything in.',
          'The question the interface has to answer is not what filters exist, but who is accountable for this one and whether the person looking at it can act. Every card answers that on its face. Created by and last synced sit on the card itself. The permission position, that a filter is shared and only editable by its creator, is stated in words rather than implied by a disabled control. That single change removes the most common dead end in the old flow, which was discovering a lack of permission only after attempting an edit.',
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
          'Final user tests projected a 40 to 60 percent cut in average search time for advanced users. The underlying move is small and repeatable. Take the facts a system already holds about provenance and state, and put them where the decision is made rather than one click away from it.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 03 */
  {
    slug: 'vodafone-mobile-trade-in',
    title: 'Mobile trade-in, eight markets',
    client: 'Vodafone',
    year: '2023',
    categories: ['Telecom'],
    summary:
      'A cross market mobile diagnostic and trade in flow across eight markets, designed so a device valuation reads as transparent rather than arbitrary.',
    thumbnail: {
      src: '/media/vodafone/fixed-price.jpg',
      alt: 'The Vodafone trade in quote screen on a phone, showing a fixed price held for seven days',
      aspect: '4/3',
      kind: 'image',
    },
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Design Lead (UX/UR/UI), via Open Reply. Owned discovery and delivery.',
      timeline: 'January to May 2023',
      impact: [
        { value: '32%', label: 'Reduction in drop off for users trading in a phone', detail: 'Significant reduction in multi-step abandonment' },
        { value: '8', label: 'Markets on one design system', detail: 'Single design system across European operating markets' },
        { value: '9', label: 'Product owners coordinated', detail: 'Kept releases aligned across nine teams' },
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
          'Each of the eight European markets had its own regulatory requirements and commercial priorities for trading in a phone, which pushed naturally toward eight different journeys, and eight places for the experience to drift apart.',
        ],
      },
      {
        id: 'vod-approach',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'One design system, not eight products',
        paragraphs: [
          'Held the platform together with a single design system rather than a market by market build, coordinating with nine product owners and their development teams to keep releases aligned. The assessment itself was structured as a short sequence of plain condition questions, each phrased around what the customer can actually see. The cosmetic test asks whether the device is in good working order and free of scratches, cracks or other damage, then qualifies that with concrete examples of what counts as slight wear against what counts as damage.',
          'Supporting copy carried the commercial promise alongside the questions: a guaranteed quote, an easy and transparent process, and responsible reuse or recycling of the device. The quote holds for seven days, so the customer is never forced to decide inside the flow. Multi language user testing and pricing experiments ran across all eight markets to keep the experience consistent where the regulation and the commercials were not.',
        ],
      },
      {
        id: 'vod-flow',
        type: 'mediaGrid',
        heading: 'The entry point, and what it promises before it asks anything',
        columns: 2,
        lightbox: true,
        items: [
          {
            src: '/media/vodafone/landing-and-quote.jpg',
            alt: 'The Vodafone trade in landing page showing an indicative value of 245 euro, why trade in with Vodafone, and a three step how it works',
            aspect: 'auto',
            width: 755,
            height: 1794,
            kind: 'image',
            caption:
              'The indicative value is shown up front and marked with an asterisk, and the conditions that could move it sit in the same block rather than in terms further down. The QR code moves the customer onto the device being traded, because the diagnostics have to run there.',
          },
          {
            src: '/media/vodafone/quote-incentive.jpg',
            alt: 'A variant of the flow ending in a quote of 170 euro, or 190 euro if the customer checks out immediately',
            aspect: 'auto',
            width: 771,
            height: 1794,
            kind: 'image',
            caption:
              'The variant carrying the commercial incentive: ten percent more for checking out immediately, on a timer. Worth testing carefully, because a countdown next to a valuation is exactly the thing that can make a transparent process read as pressure.',
          },
        ],
      },
      {
        id: 'vod-diagnostics',
        type: 'mediaGrid',
        heading: 'Four tests, each one a thing the customer can see for themselves',
        columns: 3,
        lightbox: true,
        items: [
          {
            src: '/media/vodafone/test-2-touch.jpg',
            alt: 'Touch sensitivity test, two of four, asking the user to drag a finger across a grid on the display',
            aspect: 'auto',
            width: 833,
            height: 757,
            kind: 'image',
            caption: 'Test 2, touch sensitivity. Drag across the grid and the screen reports its own dead zones.',
          },
          {
            src: '/media/vodafone/test-3-pixel.jpg',
            alt: 'Pixel test, three of four, asking the user to find and mark white dots on a black screen',
            aspect: 'auto',
            width: 833,
            height: 757,
            kind: 'image',
            caption: 'Test 3, pixel damage. Marking the dots turns an inspection the customer cannot perform into one they can.',
          },
          {
            src: '/media/vodafone/test-4-camera.jpg',
            alt: 'Rear camera test, four of four, with a browser prompt asking permission to use the camera',
            aspect: 'auto',
            width: 873,
            height: 755,
            kind: 'image',
            caption: 'Test 4, rear camera. The copy answers the permission prompt before the browser raises it: nothing is saved or shared.',
          },
        ],
      },
      {
        id: 'vod-screens',
        type: 'mediaGrid',
        heading: 'Asking, verifying, and committing',
        columns: 3,
        lightbox: true,
        items: [
          {
            src: '/media/vodafone/test-1-cosmetic.jpg',
            alt: 'Cosmetic test, one of four: is your device in good working condition and free of scratches, cracks or other damage, with a list of what counts',
            aspect: 'auto',
            width: 422,
            height: 1195,
            kind: 'image',
            caption:
              'Test 1, cosmetic. A yes or no question, with the definition of yes spelled out underneath so the customer is not guessing what slight wear means.',
          },
          {
            src: '/media/vodafone/verify-imei.jpg',
            alt: 'The verify your device screen, asking for an IMEI number with instructions for finding it',
            aspect: 'auto',
            width: 360,
            height: 800,
            kind: 'image',
            caption:
              'Verification asks for the IMEI and says exactly where to find it, three taps, in the order the phone presents them.',
          },
          {
            src: '/media/vodafone/quote.jpg',
            alt: 'The fixed price screen: Apple iPhone 11 256GB valued at 190 euro, fixed for seven days, with two separate confirmations',
            aspect: 'auto',
            width: 360,
            height: 800,
            kind: 'image',
            caption:
              'The price is stated once, tied to the results the customer produced, and held for seven days. The two confirmations are separated: one for the condition described, one for the terms.',
          },
        ],
      },
      {
        id: 'vod-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'Drop off fell 32 percent for users trading in a phone. The platform shipped into eight markets on one design system, coordinated across nine product owners and their development teams to keep releases on time.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 04 */
  {
    slug: 'ey-watson-due-diligence',
    title: 'Mergers and acquisitions platform',
    client: 'EY',
    year: '2016 to 2019',
    categories: ['AI', 'Enterprise'],
    summary:
      'An AI due diligence platform for merger and acquisition analysts, built to replace the several tools they were running in parallel.',
    thumbnail: {
      src: '/media/ey/thumb.jpg',
      alt: 'The DaisEY company summary for a target company, showing financials, news and sentiment in one view',
      aspect: '16/9',
      kind: 'image',
    },
    status: 'published',
    featured: false,
    confidential: true,
    tldr: {
      role: 'Lead UX/UR/UI Designer, via IBM. Discovery, site mapping, wireframing, moderated testing.',
      timeline: 'Kick off to beta in four months, on monthly sprint cycles.',
      impact: [
        { value: '4', label: 'Platform components under one site map', detail: 'Orchestration, Outside In, Smart Data Room, Analytics' },
        { value: '4 months', label: 'Kick off to beta release', detail: 'From zero kickoff to validated beta' },
        { value: 'Daily', label: 'Sign-off from the CTO, CDO and CEO', detail: 'EY Transaction Advisory Services leadership' },
      ],
      technologies: ['Watson Discovery', 'Watson Analytics', 'Cognos', 'Paper prototyping', 'InVision'],
    },
    blocks: [
      {
        id: 'ey-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'The largest value Watson product IBM had attempted',
        paragraphs: [
          'I was brought in off the back of FinTech work for banks, onto a merger and acquisitions platform built with one of the big four accounting firms. It sat inside a five year IBM programme aiming at the largest value Watson product in the company\'s history, staffed with subject matter experts pulled from across IBM globally, and I worked daily with EY Transaction Advisory Services\' CTO, CDO and CEO.',
          'The toolset was the full Watson suite: Discovery News, Social Media Brain, Watson Analytics and Cognos Analytics. The job was to turn that capability into something an analyst would actually choose over the several tools they were already using.',
        ],
      },
      {
        id: 'ey-kickoff',
        type: 'list',
        heading: 'What the kick off actually consisted of',
        ordered: false,
        items: [
          { term: 'Design thinking workshops', body: 'Framing the problem with the client rather than receiving a specification.' },
          { term: 'Onboarding into the domain', body: 'How due diligence is really conducted, taught by the people who conduct it.' },
          { term: 'Use cases with success criteria', body: 'Each one written with its test and its definition of done attached.' },
          { term: 'Blind data room tests', body: 'Putting the AI capability against real documents before designing around it.' },
          { term: 'End to end requirements and architecture', body: 'Documented alongside the commercial proposal, so scope and price moved together.' },
        ],
      },
      {
        id: 'ey-discovery',
        type: 'text',
        eyebrow: 'Discovery',
        heading: 'Four components, any of which could have been its own product',
        paragraphs: [
          'Discovery broke the application into four parts. Orchestration handles sign in, first time configuration, creating a project, adding people to a workspace and returning to existing work. Outside In searches a company and brings back news, social patterns and financials, with the ability to strip out terms that are not relevant, reported against financial statistics, litigation, product events, customer sentiment, employee sentiment and data breaches.',
          'Smart Data Room is where teams do the document work: classification by type such as contracts or copyright, filtering by read, unread, recently added, error, locked, open, favourite, saved snippet or tagged, plus OCR and keyword search. Analytics covers interactive visualisation, correlating internal findings against external ones, and uploading further data to supplement the analysis.',
          'Naming those four separately mattered more than it sounds. Each could plausibly have shipped as a standalone product, which is the clearest measure of how large the thing actually was.',
        ],
      },
      {
        id: 'ey-wireframes',
        type: 'mediaGrid',
        heading: 'Wireframes first, because the argument was about structure',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/ey/wire-search.jpg',
            alt: 'Low fidelity wireframes of the company search, from empty state through typing to an autocomplete list',
            aspect: 'auto',
            width: 1600,
            height: 379,
            kind: 'image',
            caption: 'The entry point, in three states. Everything downstream depends on resolving the right legal entity.',
          },
          {
            src: '/media/ey/wire-summary.jpg',
            alt: 'Wireframes of the company summary, with finance, news and social media panels and competitor and product analysis controls in a left rail',
            aspect: 'auto',
            width: 1600,
            height: 580,
            kind: 'image',
            caption:
              'Finance, news and social on one surface, each panel collapsible, with competitor and product analysis as filters in the rail rather than separate destinations. The alternative was a tab per source, which is how analysts were already working across several tools.',
          },
          {
            src: '/media/ey/wire-social.jpg',
            alt: 'Wireframes of the social media results view, showing sentiment analysis, chatter and product events compared across three companies',
            aspect: 'auto',
            width: 1600,
            height: 580,
            kind: 'image',
            caption: 'Drilling into one source keeps the comparison set, rather than dropping back to one company at a time.',
          },
          {
            src: '/media/ey/wire-export.jpg',
            alt: 'Wireframes of the export and share flow, with a shareable link and team member selection',
            aspect: 'auto',
            width: 1600,
            height: 595,
            kind: 'image',
            caption: 'Due diligence output leaves the tool and goes into a deal room, so sharing had to be designed rather than bolted on.',
          },
        ],
      },
      {
        id: 'ey-scope',
        type: 'text',
        eyebrow: 'Planning',
        heading: 'The site map existed to stop the scope moving',
        paragraphs: [
          'Deliverables were mapped per component into monthly sprint cycles targeting a beta in four months, which was only achievable given the number of experts working on it. Whiteboarding the first component proved harder than expected: too many moving parts, too many good suggestions, and a constant pull toward doing all of it at once.',
          'Scope creep was the real risk, so the response was structural. Everything agreed for beta went onto one site map, with tech assurance from the development team that what we were drawing could actually be delivered, and the rest was pushed explicitly into release one and release two.',
        ],
      },
      {
        id: 'ey-sitemap',
        type: 'mediaGrid',
        heading: 'The site map that held the scope',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/ey/sitemap.jpg',
            alt: 'The DaisEY site map: login and project creation on the left, the outside in search and results flow across the top, and the smart data room and document flows below',
            aspect: 'auto',
            width: 1600,
            height: 1237,
            kind: 'image',
            caption:
              'One page covering login, project creation, the outside in research flow, the smart data room, and every document action. This is the artefact that turned a conversation about features into a conversation about scope.',
          },
        ],
      },
      {
        id: 'ey-implementation',
        type: 'text',
        eyebrow: 'Implementation',
        heading: 'Paper, daily playbacks, then analysts who had never seen it',
        paragraphs: [
          'Wireframing started on paper to get the feel of the application, with almost daily playbacks to check direction before committing. Version one of the first component went to junior analysts flown in from America, walked through an InVision prototype.',
          'I ran those sessions on scenarios rather than instructions: here is what you are trying to achieve, show me, and I only intervene if someone is genuinely stuck. What you are looking for is not whether they can complete the task but where they expect a thing to be and it is not.',
          'That cycle ran monthly, concurrent with the UI team drafting coloured versions of earlier wireframes while the next set was still in grey. Working directly alongside development and UI at every stage is what made the beta achievable at all.',
        ],
      },
      {
        id: 'ey-search-flow',
        type: 'mediaGrid',
        heading: 'Naming the company, and excluding the noise',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/ey/search-flow.jpg',
            alt: 'High fidelity screens of the search flow: typing a company name, choosing from matches, adding alternative names, and removing irrelevant terms',
            aspect: 'auto',
            width: 1600,
            height: 1206,
            kind: 'image',
            caption:
              'Search, disambiguate, alias, exclude. A company trades under several names and shares words with things it has nothing to do with, so the analyst prunes the term set before the search runs rather than filtering results afterwards.',
          },
        ],
      },
      {
        id: 'ey-summary-screen',
        type: 'mediaGrid',
        heading: 'The company summary, built',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/ey/summary.jpg',
            alt: 'The full company summary page for a target company: company facts, latest news, social and news sentiment charts, financial performance, investors, key professionals, board members, subsidiaries and competitors',
            aspect: 'auto',
            width: 1600,
            height: 5188,
            kind: 'image',
            caption:
              'The whole summary, top to bottom. Company facts and headline financials first, then news, then sentiment, then financial detail, people and corporate structure. The order is the order an analyst builds a view in, not the order the data sources arrive in.',
          },
        ],
      },
      {
        id: 'ey-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'The beta shipped to its four month deadline with the MVP intact, which on a programme this size is the outcome that matters: the scope held. Delivered against a tight internal timeline with daily sign-off from the CTO, CDO and CEO. From there the plan was a controlled trial with a small group of real users, followed by interviews and focus groups to validate the work, with change requests expected and release one absorbing them.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 05 */
  {
    slug: 'barclaycard-axe-the-fax',
    title: 'Axe the Fax, chargebacks portal',
    client: 'Barclaycard',
    year: '2016 to 2019',
    categories: ['FinTech'],
    summary:
      'A chargeback dispute portal built to replace fax and post, designed so an agent can decide on a case in five seconds without opening it.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Senior UX Designer, via IBM. Coordinated and led the design team.',
      timeline: '3 months, Northampton and remote',
      impact: [
        { value: '1 + 3', label: 'Screen and modal states, down from a busier first draft', detail: 'Consolidated complex modal flows into a single table interface' },
        { value: '~5 seconds', label: 'Target time to read a row and decide', detail: 'All required data visible without opening overlays' },
        { value: '25 years', label: 'Age of the back end the interface had to match', detail: 'Modern UI layer designed over legacy backend systems' },
      ],
      technologies: ['Service design', 'Data tables', 'Legacy design systems', 'Moderated research'],
    },
    blocks: [
      {
        id: 'bc-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'A regulated process still moving on paper',
        paragraphs: [
          'Chargeback disputes are a deadline driven process with money and liability moving between a cardholder, a merchant and two banks. At Barclaycard significant parts of it were still carried by fax and post, which means no state, no audit trail in the system of record, and no way for an agent to answer where a case had got to.',
          'I joined an established team in Northampton: a data engineer, a solution architect, a portfolio manager, a project manager and two business analysts. The data flow and the requirements were already strong. What the work had never had was a design or usability perspective, and the deadline left no room to discover that late.',
        ],
      },
      {
        id: 'bc-poc',
        type: 'text',
        eyebrow: 'Process',
        heading: 'A proof of concept in two weeks, from requirements alone',
        paragraphs: [
          'The first task was to turn the analysts\' requirements into something that could be argued with. Two weeks of intense work produced the first working proof of concept, and the difficulty was immediately clear: the volume of data an agent needs in order to act on a dispute is large enough that the table itself becomes the design problem.',
          'The client wanted high fidelity from the first mock rather than wireframes, which is not how I would normally work at that stage. It made the vision easy to agree and every subsequent change expensive, because each revision meant rebuilding pages in detail rather than moving boxes.',
        ],
      },
      {
        id: 'bc-iterations',
        type: 'list',
        heading: 'Three attempts at the same table',
        ordered: true,
        items: [
          {
            term: 'Everything on the summary',
            body:
              'A summary screen listing chargebacks with filters, checkbox confirmation for accepting without evidence, a case id opening a chargeback summary modal, and an evidence upload modal reporting file name, type and progress with the option to remove a wrong file. Complete, and too busy to read.',
          },
          {
            term: 'Strip the table back',
            body:
              'The team agreed the summary was overloaded, so the columns were cut and the detail moved into an inline panel that slides over on click. That fixed the density and broke the job: the row no longer carried enough for an agent to decide without opening the case.',
          },
          {
            term: 'Ask which data actually decides',
            body:
              'Rather than guess at the middle ground we ran user research to establish which fields an agent genuinely needs in order to act. That set the target: view a row, decide inside five seconds, send the accepted chargeback. The heavy modal prototype came down to one screen and three modal states.',
          },
        ],
      },
      {
        id: 'bc-iterations-diagram',
        type: 'diagram',
        key: 'barclaycard-iterations',
        heading: 'What actually moved between the three',
      },
      {
        id: 'bc-note',
        type: 'quote',
        quote:
          'The second iteration was not a wasted step. It proved the density problem was real, and it proved that solving it by hiding data moved the cost onto the agent instead of removing it.',
      },
      {
        id: 'bc-proto',
        type: 'embed',
        heading: 'The clickable prototype',
        media: {
          src: 'https://marvelapp.com/1db1ba16?emb=1&iosapp=false&frameless=false',
          alt: 'Marvel prototype of the Barclaycard chargeback dispute portal',
          aspect: '4/3',
          kind: 'embed',
          caption: 'The prototype taken into stakeholder review and customer feedback sessions.',
        },
        fallbackText:
          'This is a Marvel prototype of the dispute portal. It needs a network connection to render, and the prototype must still be published on Marvel.',
      },
      {
        id: 'bc-constraint',
        type: 'text',
        eyebrow: 'Constraint',
        heading: 'Designing down to a twenty five year old back end',
        paragraphs: [
          'With the MVP approved, Barclaycard supplied a user researcher, two UI designers and a content strategist, and the work moved quickly. Two weeks of research sessions with blue chip clients surfaced changes that the team could turn around in days, and the UI development manager confirmed the result could still be built in time.',
          'Then the constraint that decides these projects arrived: the system functioning as the back end was twenty five years old, so the interface had to revert to an older Barclaycard design language rather than the current one. Compliance with a legacy system is a design material, not an afterthought, and it is cheaper to accept it at this point than to discover it in build.',
        ],
      },
      {
        id: 'bc-handoff',
        type: 'text',
        eyebrow: 'Handoff',
        heading: 'The deliverable was the documentation',
        paragraphs: [
          'After stakeholder sign off, two weeks went into the final handoff: pixel accurate UI screens plus the UX functionality guidelines, annotated, so that behaviour which is obvious in a prototype survives into a build done by someone who was not in the room.',
        ],
      },
      {
        id: 'bc-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'The portal replaced a fax and post process with a single record carrying its own state, evidence and history. The interface that shipped was the third attempt, and the one that survived contact with real agents, because the research established what a decision actually requires rather than what a requirements document listed.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 06 */
  {
    slug: 'gfk-channel-hierarchy',
    title: 'Predict & Market, channel hierarchy',
    client: 'GFK',
    year: '2021 to 2022',
    categories: ['Data', 'Enterprise'],
    summary:
      'Point of sale data for manufacturers of tech durables, where sales channels nest eight levels deep and the platform was drawing them flat.',
    thumbnail: {
      src: '/media/gfk/thumb.jpg',
      alt: 'The gfknewron segmentation view, showing distribution channels by market revenue, units and brand share',
      aspect: '16/9',
      kind: 'image',
    },
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Squad Design Lead. Research, workshop facilitation, prototyping, permissions model, UI.',
      timeline: '2021 to 2022, in two week sprints on a six week project cycle.',
      impact: [
        { value: '20', label: 'Participants in the week long design sprint', detail: 'Week-long remote sprint with executive stakeholders' },
        { value: '4', label: "Sales directors' organisations in the A/B test", detail: 'Philips, Samsung, Hitachi and Miele' },
        { value: '3', label: 'Further platform features found to share the same flaw', detail: 'Pattern extended across wider platform reporting' },
      ],
      technologies: ['Remote design sprint', 'Moderated research', 'Design systems', 'Figma'],
    },
    blocks: [
      {
        id: 'gfk-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'Point of sale tracking for manufacturers of tech durables',
        paragraphs: [
          'GfK provides point of sale tracking for manufacturers such as Lenovo and Panasonic. The product, Market Intelligence, is core to the business and carries its highest volume of paying clients. Subscriptions are priced on delivery frequency, weekly costing more than monthly, and on complexity, meaning the number of products and territories tracked.',
          'I was squad design lead on the Spotify model: one designer, two developers, a program manager and a data scientist, taking briefs from the quarterly roadmap, working in two week sprints against a six week delivery cycle.',
        ],
      },
      {
        id: 'gfk-problem',
        type: 'text',
        eyebrow: 'Problem',
        heading: 'Nested data, drawn flat',
        paragraphs: [
          'Search for Samsung, televisions, 2012 to 2013 and the segmentation page returns every channel those products sold through. Segments are the search criteria. Channels are the points of sale, split between online and offline, and they are genuinely hierarchical: a type of store sits inside a channel group, an online sale is B2B or B2C.',
          'The platform drew that hierarchy flat. Data shaped like Russian dolls was being presented as one long unstacked list, so reading the structure was the job rather than the starting point, and at eight levels deep it was close to unreadable.',
        ],
      },
      {
        id: 'gfk-research',
        type: 'text',
        eyebrow: 'Process',
        heading: 'No comparable solved it, so the team built the answer',
        paragraphs: [
          'My standard move is to find comparable products and bring management options rather than opinions. Here that failed usefully: nothing on the market addressed this shape of problem directly, and the patterns that came closest broke as soon as they met our style guidelines.',
          'So I planned and facilitated a week long remote workshop, a modified remote design sprint, running the full arc from setting the stage and mapping through sketching, deciding, prototyping and testing. Around twenty people took part across the squad and the sales department, at every level of the company, which is what turned assumptions about end user behaviour into evidence.',
        ],
      },
      {
        id: 'gfk-specs',
        type: 'mediaGrid',
        heading: 'Three ways to draw a hierarchy',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/gfk/hierarchy-permissions.jpg',
            alt: 'Annotated specification: the user sees the most granular view available to them given their subscription permissions, with named channels collapsed on the left and expanded on the right',
            aspect: 'auto',
            width: 1600,
            height: 732,
            kind: 'image',
            caption:
              'The rule that drove the design, written on the spec: the user sees the most granular view available to them given their subscription permissions, and can open higher levels if required. Granularity was an entitlement question before it was a display question.',
          },
          {
            src: '/media/gfk/hierarchy-levels.jpg',
            alt: 'Specification showing eight nested hierarchy levels expanded, with indentation and connector rails marking depth',
            aspect: 'auto',
            width: 1600,
            height: 855,
            kind: 'image',
            caption:
              'Paper prototyping produced three candidates, granular, stacked and saw. This is depth carried by indentation and a connector rail rather than a disclosure triangle per row, because at eight levels the triangles become the noise.',
          },
          {
            src: '/media/gfk/hierarchy-sorted.jpg',
            alt: 'The same hierarchy specification with a sorted A to Z annotation applied to the channels column',
            aspect: 'auto',
            width: 1600,
            height: 855,
            kind: 'image',
            caption:
              'Sorting is the case that breaks a tree. Sort the channels column alphabetically and the nesting either survives it or is abandoned for that view. The spec pins down which.',
          },
        ],
      },
      {
        id: 'gfk-testing',
        type: 'text',
        eyebrow: 'Testing',
        heading: 'Lines against dots, with the people who buy the product',
        paragraphs: [
          'Translating paper into the design system meant patterns that did not exist in it yet, so the design system manager was in the work rather than reviewing it afterwards. Weekly internal testing with sales directors narrowed the field to two: lines and dots, two different ways of showing the connection between channels.',
          'Those went into an A or B test with directors of sales at Philips, Samsung, Hitachi, Miele and other blue chip firms who use the tool to track their own sales. I set the research questions and wrote the script for the hour long sessions, opening on what participants did for a living, what data visualisation tools they had used, and what parent and child meant to them, before asking them to think aloud through both prototypes.',
          'Dots won, and not narrowly. It was overwhelmingly the preferred option.',
        ],
      },
      {
        id: 'gfk-shipped',
        type: 'mediaGrid',
        heading: 'What shipped',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/gfk/segmentation.jpg',
            alt: 'The gfknewron segmentation view: distribution channels for Samsung in Germany, with market revenue, units, brand revenue share and brand price, week on week',
            aspect: 'auto',
            width: 1600,
            height: 1701,
            kind: 'image',
            caption:
              'Segmentation in gfknewron. Totals hold the top three rows, then the channels themselves, each carrying week on week movement next to the absolute figure rather than in a separate column. Market Intelligence sits inside a rail carrying forecasting, promotion planning and retail insights, so this had to read as one view among many.',
          },
        ],
      },
      {
        id: 'gfk-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'I stayed with the development team through implementation to release, then followed up with surveys once the feature was live, because a visualisation that tests well in a session can still fail against a real week of data.',
          'The more useful outcome was the one nobody briefed. What started as a single page fix surfaced the same flaw in how data was presented across the platform, and three further features were found to share it. A segmentation ticket turned into a case for a platform wide redesign, which is the argument that could not have been made without the research.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 07 */
  {
    slug: 'faculty-navigation',
    title: 'Platform navigation rebuild',
    client: 'Faculty',
    year: '2019 to 2020',
    categories: ['AI', 'Enterprise'],
    summary:
      'A navigation bar that had run out of room for icons, rebuilt around the data science workflow rather than the feature list.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Sole designer, reporting to the CTO. Worked with a front end developer and a UI designer.',
      timeline: '2019 to 2020, company grew roughly 20 to 200 people',
      impact: [
        { value: '10x', label: 'Company headcount growth across the engagement', detail: 'From roughly 20 to 200 people' },
        { value: '5', label: 'Documented navigation failure points' },
        { value: '90%', label: 'Positive first review, one-week MVP', detail: 'Consolidated into Development, Production, and Project Settings' },
      ],
      technologies: ['Information architecture', 'Competitor analysis', 'Moderated research'],
    },
    blocks: [
      {
        id: 'fac-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'Sole designer through growth from twenty people to two hundred',
        paragraphs: [
          'Faculty builds one of the industry leading data science deployment and workbench platforms, used by clients including WPP. I worked across project templates, the navigation bar and user permissions, and gave design input to the data science consultancy arm on client projects, working end to end from discovery through to implementation. Roughly 80 percent of my time went to the main platform.',
          'I was the sole designer through growth from twenty people to two hundred, reporting to the CTO with no design brief handed down, which is the condition that produced this brief. Features had been added faster than anyone had revisited the structure holding them.',
        ],
      },
      {
        id: 'fac-problem',
        type: 'text',
        eyebrow: 'Problem statement',
        heading: 'Out of room for icons',
        paragraphs: [
          'The platform was adding features faster than the navigation bar could carry them. On smaller laptop screens the bar already required scrolling to see in full, and every new feature made the next one worse. The requirement was not a tidier bar, it was one that scales indefinitely so the work does not have to be redone at the next release.',
          'The MVP was to streamline the bar while keeping every action easy to locate. Beyond that: improve search within the bar, route people to support rather than leaving them hunting in documentation, surface when updates land, and catch navigation problems that were not strictly about the bar at all.',
        ],
      },
      {
        id: 'fac-research',
        type: 'text',
        eyebrow: 'Research',
        heading: 'What data scientists were doing instead',
        paragraphs: [
          'No spec was handed down, so I ran a heuristic review and research with Faculty\'s own data scientists in the gaps between client deliverables. I analysed how the bar had grown through prior UX research, interviewed data scientists at different skill levels, and worked directly with a front end developer and a UI designer. The findings fell into four themes: the categories that content groups into, the relationships between those structures, the labels on them, and what earns a place in primary against secondary navigation.',
          'The most telling findings were the workarounds. People kept multiple browser tabs open on the same project and switched between them rather than navigate, and they typed terminal commands instead of clicking out and back into features. When users route around your navigation, the bar is not slow, it is untrusted.',
        ],
      },
      {
        id: 'fac-findings',
        type: 'list',
        heading: 'The specific failures',
        ordered: false,
        items: [
          { term: 'Documentation read as project documentation', body: 'It linked to platform guides, but sat grouped with the project icons, so people expected a README for the project they were in.' },
          { term: 'The bar changed underneath you', body: 'Selecting a project presented a second, project specific navigation, which left people unsure where they were.' },
          { term: 'Help did not say what it did', body: 'It opened a Zendesk field. Users wanted it called support, or raise ticket, because that is what it is.' },
          { term: 'Hover to expand was unreliable', body: 'The bar expanded to show full names on hover, and the hover snapped back or triggered when it was not wanted.' },
          { term: 'A flat list of everything', body: 'No grouping at all, which is survivable once you know the product and overwhelming on day one.' },
        ],
      },
      {
        id: 'fac-competitors',
        type: 'text',
        eyebrow: 'Competitor analysis',
        heading: 'Four platforms, and the one that was not a competitor',
        paragraphs: [
          'Databricks has effectively zero nesting, which suits a deliberately simplified workbench but not ours. SageMaker carries an enormous feature set with many layers per page, and although the style is wrong for Faculty the grouping concept was useful. Domino matches our feature set most closely, and the lesson there was a negative one: its bar is permanently present, which shrinks the workspace, and users disliked it.',
          'The pattern that solved it came from outside the category. A front end developer suggested Firebase, which is not a data science platform at all but faces the same problem of too many features: expandable groupings, scrolling within the bar itself, and the ability to collapse the whole thing. Data scientists need maximum screen space to work, so a collapsible bar was not a nicety.',
        ],
      },
      {
        id: 'fac-grouping',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Grouping by workflow, not by feature count',
        paragraphs: [
          'Grouping was the hard part. The data science workflow at Faculty splits into six stages, and grouping strictly by those produced categories containing a single feature. Users found that irritating and it raised the click count, which is the opposite of the objective. A structure that is faithful to the model and worse to use is the wrong structure.',
          'The working rule was coarser and truer to how people talk about the work: input and output, development and results. Project configuration lived outside the workflow entirely but still needed a home. That produced three groups: Development, holding workspace, environments, jobs and experiments; Production, holding models, datasets, reports, apps and APIs; and Project settings, holding project details and settings.',
          'All of this had one week, because a more urgent project was already in the pipeline. The goal was explicitly an acceptable MVP rather than the complete answer, and saying so up front is what kept it deliverable.',
        ],
      },
      {
        id: 'fac-nav-diagram',
        type: 'diagram',
        key: 'faculty-navigation',
        heading: 'Eleven features, three destinations',
      },
      {
        id: 'fac-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'First internal review came back around ninety percent positive, with agreement that it solved the problem for a first attempt. The reviewer note worth repeating was that the research had found parts of comparable products that were incompatible with our workflow and rejected them, and that the result included ideas nobody had raised before, particularly not having to leave a project to navigate.',
          'It was also called implementable as it stood, with a little UI work, which for a one week MVP is the useful verdict. The requests that came back were consistent and specific: a faster way to collapse the bar without reaching for the button at the bottom, the ability to pin features, and a concern that fully expanded it was still a lot of icons at once. That last one is the honest limit of a one week answer, delivered while the company itself grew roughly tenfold.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 08 */
  {
    slug: 'radix-kyc-aml',
    title: 'KYC & AML for a public DeFi ledger',
    client: 'Radix',
    year: '2022',
    categories: ['FinTech'],
    summary:
      'User centric DeFi applications on the Radix public ledger, with the onboarding journey redefined to balance a compliance requirement against completion rates.',
    thumbnail: undefined,
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Design Lead (UX/UR/UI), working with the Head of Design.',
      timeline: 'August to December 2022',
      impact: [
        { value: '3', label: 'Projects delivered in 3 months' },
      ],
      technologies: ['Web3', 'DeFi', 'KYC and AML', 'User research'],
    },
    blocks: [
      {
        id: 'radix-context',
        type: 'text',
        eyebrow: 'Context',
        heading: 'A compliance requirement that can kill completion rates',
        paragraphs: [
          'Radix builds user centric DeFi applications and assets on its own public ledger. My scope was KYC and AML onboarding, working directly with the Head of Design, plus mentoring a junior UI designer through the engagement.',
          'Know your customer and anti money laundering checks are non negotiable in a regulated product, but handled carelessly they are also the single most reliable way to lose a user mid onboarding. The problem was never whether to ask for verification. It was how to ask without the journey reading as an interrogation.',
        ],
      },
      {
        id: 'radix-approach',
        type: 'text',
        eyebrow: 'Approach',
        heading: 'Redefining the onboarding journey from research',
        paragraphs: [
          'I redefined the onboarding journey from user research rather than from the compliance checklist outward, balancing the regulatory requirement directly against completion rates at every step. That meant treating each verification step as a piece of the product experience with its own reason stated, rather than a form the user has to get through before the real product starts.',
          'Working alongside the Head of Design kept the output consistent with Radix\'s wider design language, while mentoring a junior UI designer meant the patterns established here needed to be legible and reusable beyond the one flow.',
        ],
      },
      {
        id: 'radix-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'Delivered three separate projects within a three month window, on a compliance surface where careless design carries a direct, measurable cost in abandoned onboarding.',
          'The clearest surviving artefact of that thinking is Instabridge, the cross chain swap built on the same ledger, where the AML tier stopped being a rule the back end enforced and became an object on the dashboard.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 09 */
  {
    slug: 'instabridge',
    title: 'Instabridge, cross chain swap under an AML ceiling',
    client: 'Instabridge',
    year: '2022',
    categories: ['FinTech'],
    summary:
      'Moving assets between Ethereum and Radix, designed so custody, cost and the anti money laundering limit stay legible through a transaction that cannot be reversed.',
    thumbnail: {
      src: '/media/instabridge/dashboard.png',
      alt: 'The Instabridge dashboard showing both wallet balances, the AML tier, and how much of the monthly swap limit is consumed',
      aspect: '16/9',
      kind: 'image',
      width: 1440,
      height: 900,
    },
    status: 'published',
    featured: false,
    confidential: false,
    tldr: {
      role: 'Product Designer, end to end. Flow, compliance surface, interface.',
      timeline: '2022, alongside the wider Radix engagement',
      impact: [
        { value: '2', label: 'Ledgers reconciled in one view', detail: 'Ethereum and Radix, with different finality behaviour' },
        { value: 'Tier + limit', label: 'AML position moved from back end rule to dashboard object', detail: 'Tier, consumed, remaining, refresh date and upgrade path, all visible before a swap' },
      ],
      technologies: ['Web3', 'DeFi', 'AML tiering', 'Figma', 'HTML and CSS prototype'],
    },
    blocks: [
      {
        id: 'ib-problem',
        type: 'text',
        eyebrow: 'Problem',
        heading: 'The problem is trust, not the form',
        paragraphs: [
          'Moving value between two independent ledgers is not a layout exercise. The user hands funds to a bridge, waits through a settlement process they cannot observe, and has no way to confirm anything is happening until it either completes or does not. Ethereum and Radix have different finality behaviour, different wallet software, and no shared source of truth, so nothing in the interface can be inherited from either chain.',
          'On top of that sits an anti money laundering ceiling. Every account has a tier, each tier has a monthly ceiling, and a swap that would breach it fails. Scoped as a back end rule, that is an error message arriving after the user has committed to an amount.',
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
          'I moved the AML position onto the dashboard as a permanent object rather than leaving it as a rule that fires on submission. Current tier, when it refreshes, the ceiling, how much of it has been consumed and how much remains, and a direct path to raise it, all sitting next to the balances they govern.',
          'A limit the user can see before they choose an amount is a planning input. A limit they discover at submission is a failure state, and failure states in a financial product are expensive twice over, once in the abandoned transaction and again in the support contact that follows it.',
        ],
      },
      {
        id: 'ib-dashboard',
        type: 'mediaGrid',
        heading: 'Both chains and the compliance position in one view',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/instabridge/dashboard.png',
            alt: 'Instabridge dashboard: Ethereum and Radix wallet balances side by side, a swap action, and an account summary showing AML Tier 2 refreshing in 21 days against a 100,000 USD swap limit with 92,234.12 consumed and 8,546 remaining',
            aspect: 'auto',
            width: 1440,
            height: 900,
            kind: 'image',
            caption:
              'The two balances are given equal weight rather than a primary and a secondary, because the user is holding a position across both, not visiting one from the other. Underneath, the AML tier carries its own refresh date and the ceiling is drawn as a consumed bar, so the number that decides whether a swap is possible is legible before the swap panel opens.',
          },
        ],
      },
      {
        id: 'ib-flow',
        type: 'mediaGrid',
        heading: 'Connect, swap, confirm',
        columns: 2,
        lightbox: true,
        items: [
          {
            src: '/media/instabridge/login.png',
            alt: 'The Instabridge entry screen, connecting a Web3 wallet through MetaMask, with a link explaining how to get a wallet',
            aspect: 'auto',
            width: 1440,
            height: 900,
            kind: 'image',
            caption:
              'Entry is a wallet connection rather than an account. The link asking how to get a Web3 wallet is there because the alternative is a dead end for anyone arriving without one.',
          },
          {
            src: '/media/instabridge/swap.png',
            alt: 'The swap panel open over the dashboard, converting 100 eXRD to XRD with a direction toggle between the two amount fields',
            aspect: 'auto',
            width: 1440,
            height: 900,
            kind: 'image',
            caption:
              'The swap opens over the dashboard rather than on its own page, so the balances and the remaining allowance stay on screen while the amount is being set. The action names both assets and the direction rather than saying Confirm.',
          },
        ],
      },
      {
        id: 'ib-settlement',
        type: 'mediaGrid',
        heading: 'The part the user cannot observe',
        columns: 1,
        lightbox: true,
        items: [
          {
            src: '/media/instabridge/success.png',
            alt: 'After a swap: a success banner linking to the transaction, and a transaction history row showing 100 eXRD to 150 XRD with a status of In Flight',
            aspect: 'auto',
            width: 1440,
            height: 900,
            kind: 'image',
            caption:
              'Submitted and settled are not the same event, so the confirmation and the record are the same object. The banner links out to the transaction on chain, and the history row carries In Flight as a first class status rather than showing nothing until settlement. A bridge that goes quiet during the wait is the failure mode users describe as losing their money.',
          },
        ],
      },
      {
        id: 'ib-outcomes',
        type: 'text',
        eyebrow: 'Outcomes',
        heading: 'Results',
        paragraphs: [
          'The screens above come from a working rebuild of the flow rather than a production capture, which is how I prefer to carry this kind of work: a static image of a bridge proves nothing about whether the waiting state holds, and the rebuild is the thing you can actually click through.',
          'The transferable decision is the one about the limit. Take the constraint a system already knows about the user, and put it where the decision gets made rather than behind the button that fails.',
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
