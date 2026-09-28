import type { Testimonial } from '@/lib/schema'

/**
 * `highlight` is the line pulled out and set large on the card. `quote` is the
 * fuller passage underneath it. Quotes are as written by their authors, edited
 * only for length where a passage ran long.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'russell-gowers',
    highlight:
      'Will eventually delivered thirty seven screens, all of which provide, we believe, 100% coverage of the requirements Ford sent to us.',
    quote:
      'I just wanted to call out what a superb job Will has done on the EVme mockup. Bearing in mind that Will has only known about this brief since Friday last week, I would say that the quality of his work is outstanding. We initially discussed seven or eight app screens, which should be reasonable for any designer in a three day period. Will eventually delivered thirty seven, all clean, stylish and consistent with Ford\'s existing app library. Will and I were working on the designs until about 11pm on Monday night, his commitment to the project was absolutely superb. I really do think that this illustration will help demonstrate to Ford that we should not only be delivering the mobile app but that we have a very serious design capability too.',
    author: 'Russell Gowers',
    role: 'GBS Senior Managing Consultant, Automotive SME',
    company: 'IBM',
  },
  {
    id: 'phil-larby',
    highlight:
      'Some high value projects have been transformed from heading for failure to being resounding successes.',
    quote:
      'Will has proven himself to be a capable design consultant and troubleshooter, and he has directly contributed to turning around failing projects, to client satisfaction, and to IBM winning further business. Due to the reputation he is building as a direct result of these projects, he has been asked for by name to take on roles above his current band. For many of these Will was brought in at the last minute to rescue a project in trouble. This has often been in very high pressure situations and has required long hours and good interpersonal and communication skills.',
    author: 'Phil Larby',
    role: 'Line Manager',
    company: 'IBM',
  },
  {
    id: 'andrew-cox',
    highlight:
      'Without their help the project would definitely not have met the deadline, and potentially have become a failure rather than the roaring success it has become.',
    quote:
      'I had an emergency on my Mortgage Agent Assist project where we had lost our UI developer and the tool was not nearly finished. The deadlines were extremely tight, so I had to put out an SOS call. This project is incredibly high profile with lots of other potential buyers waiting to see how the pilot went. Will was brought on with only days to complete the work and I cannot speak highly enough of his attitude, skill, work ethic and determination. The speed with which he was able to understand, work on and ultimately deliver on one of the most complicated code bases I have ever worked with speaks volumes.',
    author: 'Andrew Cox',
    role: 'Senior Technical Consultant, RBS Mortgage Agent Assist',
    company: 'IBM GBS',
  },
  {
    id: 'jazmin-curzon',
    highlight:
      'Had it not been for the custom dashboard you and the team created, I am certain we would not have been able to sell the second phase of the project.',
    quote:
      'A massive thank you for your hand in delivering the ARIA dashboard for Diageo. You were integral to the delivery of the tool. This was a demanding project with short, perhaps unrealistic deadlines, and you went above and beyond to ensure it was delivered to an exceptional standard. The level of skill you demonstrated was far beyond my expectation. Despite the short deadline your attention to detail and the overall finish of the dashboard was impeccable. The dashboard was shown to the client last week and they were blown away.',
    author: 'Jazmin Curzon',
    role: 'Strategy Consultant, Diageo Innovation R+D',
    company: 'IBM GBS',
  },
  {
    id: 'nikhil-kulkarni',
    highlight:
      'Will joined the project with no prior knowledge of credit card processing and chargebacks, and ensured he understood how the portal fitted into the end to end customer journey.',
    quote:
      'Will quickly developed a prototype using Sketch and presented it to the project team for feedback and updates. He worked with a customer experience team member to prepare for customer feedback sessions, facilitated a review session with stakeholders which he managed very well and presented confidently, and worked with a UI developer to produce high fidelity prototype screens for handover to UI build. Will was always positive and enthusiastic on the engagement.',
    author: 'Nikhil Kulkarni',
    role: 'Senior Management Consultant, Financial Services',
    company: 'IBM',
    projectSlug: 'barclaycard-axe-the-fax',
  },
  {
    id: 'dimitris-raftopoulos',
    highlight:
      'William embraced the challenge with a positive attitude and started doing really quick and effective work on paper prototyping, which significantly helped our project get off to an amazing start.',
    quote:
      'Working with William has been a great pleasure and his support on project DaisEY has been appreciated both by IBMers and the client. We started with William as the only UX resource for the UX effort needed. I was really impressed by William\'s agility and fearless can do attitude. I also appreciated his tendency to look out for trends and best practices and tailor them to the client\'s needs. I really enjoyed the professional way William handled user testing interviews.',
    author: 'Dimitris Raftopoulos',
    role: 'Senior Managing Consultant, Cognitive Analytics',
    company: 'IBM',
    projectSlug: 'ey-watson-due-diligence',
  },
  {
    id: 'ken-priyadarshi',
    highlight: 'A great example of UX leading the three connected legs of scope.',
    quote:
      'William from the UX and design team led an amazing design session with me and the IBM team this evening. He showed a paper prototype that connected a lot of the dots we have been talking about. Excellent work, and a true agile deliverable and scope definition in action.',
    author: 'Ken Priyadarshi',
    role: 'Global TAS Technology Officer',
    company: 'EY',
    projectSlug: 'ey-watson-due-diligence',
  },
  {
    id: 'paul-andrew-smith',
    highlight:
      'You have done an outstanding job of turning this around in a very short timescale.',
    quote:
      'I sat and reviewed all of the screens last night and, as Russell says, they are visually great and really help bring the story to life and demonstrate our understanding of the requirements here. I am very grateful for your dedication to getting this done. Brilliant job.',
    author: 'Paul Andrew Smith',
    role: 'GBS Account Lead for Ford Motor Company and Ford Credit, Partner, Industrial Sector',
    company: 'IBM',
  },
  {
    id: 'samuel-fry',
    highlight:
      'Tasked with two separate concepts in six weeks, involving workshops, interviews, user flows, screens and playback. That was a lot to handle.',
    quote:
      'Will joined the Dunton Innovation Lab at Ford as a User Experience Designer. He did a great job working to tight deadlines, understanding complex processes and delivering very useful outputs which should lead to some interesting projects. Will is very passionate about his work, which he demonstrates through his day to day enthusiasm and willingness to work quickly.',
    author: 'Samuel Fry',
    role: 'Senior Consultant, iX, Ford Dunton Innovation Lab',
    company: 'IBM iX',
  },
  {
    id: 'jack-mclear',
    highlight:
      'You demonstrated expertise and provided insight into how the technology worked, and really helped deliver an excellent app which the project team at npower love.',
    quote:
      'Thanks for your work on the npower app. We are planning to demonstrate it to the client at the orals and are excited to do so. You demonstrated IBM\'s core value of uniting to get it done when you stayed late to work on the app above your other client commitments. The quality of your work is high and you performed at the level expected of a band 7.',
    author: 'Jack McLear',
    role: 'Senior Technical Consultant, Watson IoT and SCM',
    company: 'IBM',
  },
  {
    id: 'des-smith',
    highlight:
      'With limited oversight you rapidly assimilated a considerable amount of information, and came up with strong, design led ways of displaying some complex ideas.',
    quote:
      'Thanks for your time and efforts supporting the Vodafone VSS bid, in particular taking a disparate set of slides and shaping them into a more coherent and client friendly format. You worked well to the deadlines and were willing to put in the extra effort where required. You did much of it in a void and with inputs from at least three different people, which you had to balance.',
    author: 'Des Smith',
    role: 'Partner, European Lead for Interactive Experience, Comms Sector',
    company: 'IBM',
  },
  {
    id: 'lis-goodrich',
    highlight:
      'I went away for a week and by the time I got back it was all done and ready for go live.',
    quote:
      'We were against the clock to update the European CIC website from its old platform to Client Vantage. In a very short space of time you understood the requirements and independently took ownership of the migration and design of the website. You had to learn a new tool, experiment with the design layout, and find and create content. Your attitude when I approached you at short notice was very positive and you worked extra hours to achieve a tight deadline. I am really pleased with the output.',
    author: 'Lis Goodrich',
    role: 'UKI CIC Growth Leader, Client Vantage Portal',
    company: 'IBM GBS',
  },
  {
    id: 'teresa-badhan',
    highlight:
      'The advert is now running in Winchester station, Southampton station and a local newspaper.',
    quote:
      'I worked with Will on a Hursley advertising campaign, where he supported the recruitment team in putting together a recruitment advert for train stations in the locality. Will was extremely easy to work with. He took direction well and captured our requirements effectively, while giving creative input on how to better the campaign and make the advert eye catching and memorable. He worked well with another designer, proving he can share ideas and work with others to deliver.',
    author: 'Teresa Badhan',
    role: 'European Recruitment Partner (UK), GBS',
    company: 'IBM',
  },
]

export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id)
}
