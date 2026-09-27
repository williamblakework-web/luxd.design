import type { About } from '@/lib/schema'

export const about: About = {
  heading: 'I work on the systems that carry consequences.',
  bio: [
    'Eight years of client facing product design, mostly in places where a wrong interface has a cost beyond a bad review: money moving between accounts, regulatory limits, analyst decisions on a merger, a filter that half a company\'s reporting quietly depends on.',
    'My work sits in complex, regulated, data heavy environments. FinTech and crypto infrastructure, AI and machine learning platforms, enterprise and internal tooling, automotive, and service design across the seam where a customer facing product meets the back office system behind it.',
    'I run London UX Design, and I take the kind of brief that arrives as a screen request and turns out to be a question about who owns a decision.',
  ],
  /** Rendered as pills under the intro copy on the home and about pages. */
  featuredSkills: [
    'Product Design',
    'UX Strategy',
    'Design Systems',
    'AI / ML Interfaces',
    'Data Visualisation',
    'User Research',
    'Prototyping',
    'FinTech & Enterprise',
  ],
  timeline: [
    {
      id: 'luxd',
      period: '[ADD PERIOD]',
      organisation: 'London UX Design',
      role: 'Founder and Senior Product Designer',
      description: 'Independent practice working with clients on regulated products, internal tooling and AI interfaces.',
    },
    {
      id: 'faculty',
      period: '[ADD PERIOD]',
      organisation: 'Faculty',
      role: 'Product Designer',
      description: 'Sole designer through growth from twenty to two hundred people. Platform navigation, environments and internal tooling for a data science workbench.',
    },
    {
      id: 'ey',
      period: '[ADD PERIOD]',
      organisation: 'EY',
      role: 'Product Designer',
      description: 'End to end delivery of a Watson backed due diligence platform for merger and acquisition analysts.',
    },
    {
      id: 'ibm',
      period: '[ADD PERIOD]',
      organisation: 'IBM',
      role: 'Product Designer',
      description: 'Client pitches and delivery across automotive and enterprise, including the Ford EVme concept.',
    },
    {
      id: 'vodafone',
      period: '[ADD PERIOD]',
      organisation: 'Vodafone',
      role: 'Product Designer',
      description: 'Cross market device trade in, condition assessment and quote flows.',
    },
    {
      id: 'barclaycard',
      period: '[ADD PERIOD]',
      organisation: 'Barclaycard',
      role: 'Product Designer',
      description: 'Chargeback dispute workflows, modernising a legacy paper based process.',
    },
    {
      id: 'npower',
      period: '[ADD PERIOD]',
      organisation: 'npower',
      role: 'Product Designer',
      description: 'Customer and internal systems in the energy sector.',
    },
  ],
  skillGroups: [
    {
      id: 'practice',
      label: 'Practice',
      skills: ['Product design', 'Service design', 'Information architecture', 'Interaction design', 'Design systems'],
    },
    {
      id: 'research',
      label: 'Research',
      skills: ['Moderated research', 'Usability testing', 'Paper prototyping', 'Workshop facilitation', 'Desk research'],
    },
    {
      id: 'domains',
      label: 'Domains',
      skills: ['Regulated FinTech', 'AML and compliance', 'Enterprise tooling', 'AI and ML platforms', 'Data visualisation'],
    },
    {
      id: 'delivery',
      label: 'Delivery',
      skills: ['Figma', 'HTML and CSS prototyping', 'Build specifications', 'Engineering handoff', 'Token systems'],
    },
  ],
}
