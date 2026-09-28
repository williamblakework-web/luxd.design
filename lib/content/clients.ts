import type { Client, Engagement } from '@/lib/schema'

/**
 * The logo grid. Grouped by sector so the Clients page reads as a map of
 * domains rather than a wall of marks. `logo` is optional: without one the
 * grid falls back to a typographic wordmark, which holds up in both themes
 * and never 404s.
 */
export const clients: Client[] = [
  // FinTech
  { id: 'barclaycard', name: 'Barclaycard', category: 'FinTech', logo: '/media/logos/barclaycard.png', projectSlugs: ['barclaycard-axe-the-fax'] },
  { id: 'lloyds', name: 'Lloyds Banking Group', category: 'FinTech', logo: '/media/logos/lloyds.png', projectSlugs: [] },
  { id: 'rbs', name: 'RBS', category: 'FinTech', logo: '/media/logos/rbs.png', projectSlugs: [] },
  { id: 'rbsi', name: 'RBS International', category: 'FinTech', logo: '/media/logos/rbs-international.png', projectSlugs: [] },
  { id: 'radix', name: 'Radix', category: 'FinTech', projectSlugs: ['radix-kyc-aml'] },

  // AI
  { id: 'faculty', name: 'Faculty', category: 'AI', projectSlugs: ['faculty-navigation'] },
  { id: 'ibm-watson', name: 'IBM Watson', category: 'AI', logo: '/media/logos/ibm-watson.png', projectSlugs: ['ey-watson-due-diligence'] },
  { id: 'watson-iot', name: 'Watson IoT', category: 'AI', logo: '/media/logos/watson-iot.png', projectSlugs: [] },
  { id: 'weather-company', name: 'The Weather Company', category: 'AI', logo: '/media/logos/weather-company.png', projectSlugs: [] },

  // Enterprise
  { id: 'ey', name: 'EY', category: 'Enterprise', logo: '/media/logos/ey.png', projectSlugs: ['ey-watson-due-diligence'] },
  { id: 'ibm', name: 'IBM', category: 'Enterprise', logo: '/media/logos/ibm.png', projectSlugs: [] },
  { id: 'ibm-bluemix', name: 'IBM Bluemix', category: 'Enterprise', logo: '/media/logos/ibm-bluemix.png', projectSlugs: [] },
  { id: 'adaptavist', name: 'Adaptavist', category: 'Enterprise', projectSlugs: ['enhanced-search-adaptavist'] },
  { id: 'diageo', name: 'Diageo', category: 'Enterprise', logo: '/media/logos/diageo.png', projectSlugs: [] },
  { id: 'discovery', name: 'Discovery Channel', category: 'Enterprise', logo: '/media/logos/discovery-channel.png', projectSlugs: [] },
  { id: 'npower', name: 'npower', category: 'Enterprise', projectSlugs: [] },
  { id: 'thames-water', name: 'Thames Water', category: 'Enterprise', logo: '/media/logos/thames-water.png', projectSlugs: [] },
  { id: 'ptc', name: 'PTC', category: 'Enterprise', projectSlugs: [] },

  // Telecom
  { id: 'vodafone', name: 'Vodafone', category: 'Telecom', logo: '/media/logos/vodafone.png', projectSlugs: ['vodafone-mobile-trade-in'] },
  { id: 'sky', name: 'Sky', category: 'Telecom', logo: '/media/logos/sky.png', projectSlugs: [] },

  // Automotive
  { id: 'ford', name: 'Ford', category: 'Automotive', logo: '/media/logos/ford.png', projectSlugs: [] },

  // Data
  { id: 'gfk', name: 'GFK', category: 'Data', projectSlugs: ['gfk-channel-hierarchy'] },
  { id: 'ordnance-survey', name: 'Ordnance Survey', category: 'Data', logo: '/media/logos/ordnance-survey.png', projectSlugs: [] },

  // Community. LUXD's own clients are small businesses, not enterprise
  // accounts, and grouping them with IBM and EY misrepresents both.
  { id: 'bse', name: 'The British School of Excellence', category: 'Community', projectSlugs: ['london-ux-design'] },
  { id: 'jlj', name: 'JLJ Real Estate', category: 'Community', projectSlugs: ['london-ux-design'] },
  { id: 'adhd-andy', name: 'ADHD Andy', category: 'Community', projectSlugs: ['london-ux-design'] },
]

export const CLIENT_CATEGORY_ORDER = ['FinTech', 'AI', 'Enterprise', 'Telecom', 'Automotive', 'Data', 'Community'] as const

/**
 * The long tail, listed as plain text under the logo grid. Most of these will
 * never have a case study, which is the point: a logo grid shows who, and
 * this shows what. Where a case study does exist the entry links to it.
 */
export const engagements: Engagement[] = [
  // Internal
  { id: 'ibm-weather', label: 'IBM - The Weather Company', category: 'internal' },
  { id: 'ibm-watson', label: 'IBM - Watson', category: 'internal' },
  { id: 'ibm-bluemix', label: 'IBM - Bluemix', category: 'internal' },
  { id: 'ibm-watson-iot', label: 'IBM - Watson IoT', category: 'internal' },
  { id: 'ibm-watson-analytics', label: 'IBM - Watson Analytics', category: 'internal' },

  // Projects. The shorter IBM engagements (Lloyds Innovation Lab, RBS Agent
  // Assist, RBS EQ Payment, PTC Image Scanner, Ford Innovation Centre,
  // Diageo Flavour Combiner) carry their real numbers on the About page's
  // additional engagements grid rather than as a plain label here.
  { id: 'ey-ma', label: 'EY - Mergers and Acquisitions', category: 'projects', projectSlug: 'ey-watson-due-diligence' },
  { id: 'ibm-cic', label: 'IBM - Client Innovation Centre', category: 'projects' },
  { id: 'barclaycard-fax', label: 'Barclaycard - Axe the Fax', category: 'projects', projectSlug: 'barclaycard-axe-the-fax' },
  { id: 'os-getoutside', label: 'Ordnance Survey - #GetOutside', category: 'projects' },

  // Bid and proposals
  { id: 'bid-sky', label: 'Sky', category: 'bids' },
  { id: 'bid-ford', label: 'Ford', category: 'bids' },
  { id: 'bid-thames', label: 'Thames Water', category: 'bids' },
  { id: 'bid-discovery', label: 'Discovery Channel', category: 'bids' },
  { id: 'bid-vodafone', label: 'Vodafone', category: 'bids' },
]
