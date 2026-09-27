import type { Client, Engagement } from '@/lib/schema'

/**
 * The logo grid. Grouped by sector so the Clients page reads as a map of
 * domains rather than a wall of marks. `logo` is optional: without one the
 * grid falls back to a typographic wordmark, which holds up in both themes
 * and never 404s.
 */
export const clients: Client[] = [
  // FinTech
  { id: 'barclaycard', name: 'Barclaycard', category: 'FinTech', projectSlugs: ['barclaycard-axe-the-fax'] },
  { id: 'lloyds', name: 'Lloyds Banking Group', category: 'FinTech', projectSlugs: [] },
  { id: 'rbs', name: 'RBS', category: 'FinTech', projectSlugs: [] },
  { id: 'rbsi', name: 'RBSI', category: 'FinTech', projectSlugs: [] },

  // AI
  { id: 'faculty', name: 'Faculty', category: 'AI', projectSlugs: ['faculty-navigation'] },
  { id: 'ibm-watson', name: 'IBM Watson', category: 'AI', projectSlugs: ['ey-watson-due-diligence'] },
  { id: 'watson-iot', name: 'Watson IoT', category: 'AI', projectSlugs: [] },
  { id: 'weather-company', name: 'The Weather Company', category: 'AI', projectSlugs: [] },

  // Enterprise
  { id: 'ey', name: 'EY', category: 'Enterprise', projectSlugs: ['ey-watson-due-diligence'] },
  { id: 'ibm', name: 'IBM', category: 'Enterprise', projectSlugs: [] },
  { id: 'adaptavist', name: 'Adaptavist', category: 'Enterprise', projectSlugs: ['enhanced-search-adaptavist'] },
  { id: 'diageo', name: 'Diageo', category: 'Enterprise', projectSlugs: [] },
  { id: 'discovery', name: 'Discovery Channel', category: 'Enterprise', projectSlugs: [] },
  { id: 'npower', name: 'npower', category: 'Enterprise', projectSlugs: [] },
  { id: 'thames-water', name: 'Thames Water', category: 'Enterprise', projectSlugs: [] },

  // Telecom
  { id: 'vodafone', name: 'Vodafone', category: 'Telecom', projectSlugs: ['vodafone-mobile-trade-in'] },
  { id: 'sky', name: 'Sky', category: 'Telecom', projectSlugs: [] },

  // Automotive
  { id: 'ford', name: 'Ford', category: 'Automotive', projectSlugs: [] },

  // Data
  { id: 'gfk', name: 'GFK', category: 'Data', projectSlugs: ['gfk-channel-hierarchy'] },
  { id: 'ordnance-survey', name: 'Ordnance Survey', category: 'Data', projectSlugs: [] },
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

  // Projects
  { id: 'ey-ma', label: 'EY - Mergers and Acquisitions', category: 'projects', projectSlug: 'ey-watson-due-diligence' },
  { id: 'rbsi-currency', label: 'RBSI - Currency Trading Platform', category: 'projects' },
  { id: 'lloyds-innovation', label: 'Lloyds Banking Group - Innovation Centre', category: 'projects' },
  { id: 'rbs-mortgage', label: 'RBS - Mortgage Agent Assist', category: 'projects' },
  { id: 'ford-innovation', label: 'Ford - Innovation Centre', category: 'projects' },
  { id: 'ibm-cic', label: 'IBM - Client Innovation Centre', category: 'projects' },
  { id: 'barclaycard-fax', label: 'Barclaycard - Axe the Fax', category: 'projects', projectSlug: 'barclaycard-axe-the-fax' },
  { id: 'diageo-flavour', label: 'Diageo - Flavour Combiner', category: 'projects' },
  { id: 'os-getoutside', label: 'Ordnance Survey - #GetOutside', category: 'projects' },

  // Bid and proposals
  { id: 'bid-sky', label: 'Sky', category: 'bids' },
  { id: 'bid-ford', label: 'Ford', category: 'bids' },
  { id: 'bid-thames', label: 'Thames Water', category: 'bids' },
  { id: 'bid-discovery', label: 'Discovery Channel', category: 'bids' },
  { id: 'bid-vodafone', label: 'Vodafone', category: 'bids' },
]
