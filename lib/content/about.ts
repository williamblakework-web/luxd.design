import type { About } from '@/lib/schema'

export const about: About = {
  heading: 'I work on the systems that carry consequences.',
  bio: [
    'I specialise in the moment a designer usually gets called in too late: several systems disagree, a legacy back end can\'t be touched, and someone still has to make a confident decision in seconds.',
    'Four years at IBM sat at the intersection of service design, product design and product management: training Watson products, building conversational apps for npower and Sky, and consulting across FinTech, automotive, telecoms and data visualisation for clients including Lloyds Banking Group, RBS, Barclaycard and EY.',
    'That widened into B2B SaaS platform work at Faculty and GfK, growth and compliance work at Vodafone, and DeFi compliance at Radix. Since October 2025 I\'ve also run LUXD, my own design and AI studio.',
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
  /** Sectors: FinTech, AI/ML, Telecoms, Automotive, Web3/DeFi, Data & Analytics, Regulated/Compliance. */
  /**
   * Employment history, not project history. EY, Barclaycard, npower, Lloyds
   * and RBS were all IBM engagements; Vodafone came through Open Reply. The
   * case studies carry the project detail, so this stays at the level of who
   * actually paid the invoice.
   */
  timeline: [
    {
      id: 'luxd',
      period: 'Oct 2025 to present',
      organisation: 'LUXD Ltd, London UX Design',
      role: 'Founder and Lead Product Designer',
      description:
        'Founded and run the studio end to end: positioning, pricing, design and delivery. Seven client engagements to date, spanning brand systems, website design, custom AI tooling and accessibility built to WCAG AA.',
    },
    {
      id: 'adaptavist',
      period: 'Oct 2024 to Feb 2025',
      organisation: 'Adaptavist, ScriptRunner',
      role: 'Senior Product Designer',
      description:
        'Led Enhanced Search for ScriptRunner on Jira. Folder creation, advanced search filters, and group, project and team based filtering for organisations running hundreds of shared JQL queries.',
    },
    {
      id: 'open-reply',
      period: 'Jan 2023 to May 2023',
      organisation: 'Open Reply, Vodafone',
      role: 'Senior Product Designer',
      description:
        'Owned discovery and delivery of a Europe wide mobile trade in platform across eight markets, balancing each market\'s regulatory requirements against the commercial goals of the business.',
    },
    {
      id: 'radix',
      period: 'Aug 2022 to Dec 2022',
      organisation: 'Radix',
      role: 'Product Designer',
      description:
        'User centric DeFi applications on the Radix public ledger. Redefined the KYC and AML onboarding journey from user research, balancing the compliance requirement against completion rates.',
    },
    {
      id: 'gfk',
      period: '2021 to 2022',
      organisation: 'GFK',
      role: 'Squad Design Lead',
      description:
        'Led the AI driven Predict and Market propositions. Promotion planning, predictive forecasting, market segmentation, competitor analysis and channel hierarchy optimisation.',
    },
    {
      id: 'faculty',
      period: '2019 to 2020',
      organisation: 'Faculty',
      role: 'Product Designer',
      description:
        'Sole designer through growth from twenty to two hundred people. Project templates, navigation and user permissions for a B2B data science deployment and workbench platform.',
    },
    {
      id: 'ibm',
      period: '2016 to 2019',
      organisation: 'IBM',
      role: 'Product Designer and Consultant',
      description:
        'Consulted across FinTech, automotive, telecoms, AI and data visualisation. Accounts included Lloyds Banking Group, RBS, Barclaycard and EY, plus Watson conversational applications for npower, Sky and other B2B clients.',
    },
  ],
  additionalEngagements: [
    {
      id: 'lbg-innovation-lab',
      client: 'Lloyds Banking Group',
      title: 'Innovation Lab',
      location: 'London and remote',
      duration: '2 months',
      description:
        'Lead user researcher for the colleague workstream on a lab engaging wealth customers earning over £250k. Interviewed 26 bank managers, private banking advisors and telephony finance consultants; produced 4 concept prototypes for senior executives.',
      metric: '26 interviews, 4 concept prototypes',
    },
    {
      id: 'rbs-agent-assist',
      client: 'RBS',
      title: 'Agent Assist',
      location: 'London and remote',
      duration: '1 month',
      description:
        'Watson based Agent Assist app for mortgage call centre response times. Client signed onto a second phase on the strength of the results.',
      metric: 'Second phase signed off',
    },
    {
      id: 'rbs-eq-payment',
      client: 'RBS',
      title: 'EQ Payment',
      location: 'Glasgow and remote',
      duration: '10 months',
      description:
        'International currency trading and payment transfer app.',
      metric: '92% client satisfaction score, 2017',
    },
    {
      id: 'ptc-image-scanner',
      client: 'PTC',
      title: 'Image Scanner',
      location: 'Hursley Labs and remote',
      duration: '10 months',
      description:
        'Updated internal tool for converting acquired businesses into IBM property.',
      metric: '75% cut in report production time',
    },
    {
      id: 'ford-innovation-centre',
      client: 'Ford',
      title: 'Innovation Centre',
      location: 'London and remote',
      duration: '3 months',
      description:
        'IBM/Ford innovation hub; led UX, UI and research with autonomy over design decisions.',
    },
    {
      id: 'diageo-flavour-combiner',
      client: 'Diageo',
      title: 'Flavour Combiner',
      location: 'London and remote',
      duration: '1 month',
      description:
        'Front end for a data modelling product using D3 to visualise flavour connections. Client extended IBM\'s use to a wider portfolio of projects.',
    },
  ],
  education: [
    {
      id: 'solent',
      institution: 'Southampton Solent University, 2011 to 2016',
      qualification: 'BSc (Hons) Business Information Technology, First Class Honours',
      description:
        'Entrepreneurship, computer science, product management, and human computer interaction and design. Final project was a user centred platform for a media company, SonarTV.',
    },
  ],
  skillGroups: [
    {
      id: 'sectors',
      label: 'Sectors',
      skills: ['FinTech', 'AI / ML', 'Telecoms', 'Automotive', 'Web3 / DeFi', 'Data & Analytics', 'Regulated / Compliance'],
    },
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
      skills: ['Regulated FinTech', 'KYC and AML', 'Enterprise tooling', 'AI and ML platforms', 'Data visualisation'],
    },
    {
      id: 'delivery',
      label: 'Delivery',
      skills: ['Figma', 'HTML and CSS prototyping', 'Build specifications', 'Engineering handoff', 'Token systems'],
    },
    {
      id: 'ibm-training',
      label: 'IBM training completed',
      skills: [
        'Global Consultancy Training',
        'Design Thinking University',
        'Internet of Things',
        'Blockchain',
        'Emerging Technologies',
        'Advanced JavaScript',
        'Agile Delivery',
        'DevOps',
        'Product Management',
      ],
    },
  ],
}
