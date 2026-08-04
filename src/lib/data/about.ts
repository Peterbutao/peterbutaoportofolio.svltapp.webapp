import { siteConfig } from '$lib/config/site';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Profile {
  role: string;
  location: string;
  email: string;
  phones: string[];
  linkedin: string;
  summary: string;
}

export interface WorkItem {
  role: string;
  org: string;
  period: string;
  place: string;
  points: string[];
}

export interface SkillCategory {
  area: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  org: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years in communications & stakeholder engagement' },
  { value: 77, suffix: '', label: 'Schools reached by digital education programme' },
  { value: 1437, suffix: '', label: 'Teachers trained across two districts' },
  { value: 3400, suffix: '+', label: 'Students trained in climate & leadership' },
  { value: 2315, suffix: '', label: 'Trees planted in community campaigns' },
  { value: 15, suffix: '+', label: 'Storytelling pieces for donor audiences' }
];

export const profile: Profile = {
  role: 'Communications & Stakeholder Engagement Professional | M&E Background',
  location: siteConfig.contact.location,
  email: siteConfig.contact.email,
  phones: [siteConfig.contact.phone, siteConfig.contact.phoneSecondary],
  linkedin: siteConfig.socials.linkedin,
  summary:
    'Communications and stakeholder engagement professional with a five-year track record of representing programmes to government, donor, and partner audiences across education, agriculture, and community development in Malawi. Experience includes briefing district and national government structures (Lilongwe District Executive Committee, Ministry of Education Joint Sector Review), producing donor and management reporting, designing and building a full public-facing organisational website, and sustaining an active public communications practice across education, climate, and youth advocacy campaigns. Combines a monitoring and evaluation background with hands-on writing, storytelling, web platform, and multi-stakeholder coordination experience, and is comfortable managing field teams and competing priorities under deadline.'
};

export const highlights: string[] = [
  'Designed, built, and launched the public website and membership platform for the Rotaract Club of Lilongwe (SvelteKit, TypeScript, Postgres), covering impact statistics, service areas, projects, events, and online member registration, taking full ownership of the organisation\'s primary digital channel end to end.',
  'Briefed the Lilongwe District Executive Committee on results from a 77-school digital education programme.',
  'Represented a national digital learning initiative at the Ministry of Education\'s Annual Joint Sector Review, before the Minister of Education and development partners.',
  'Facilitated 18+ government transition meetings, securing full district ownership of a donor-funded programme.',
  'Coordinated public campaigns with 5+ partner organisations, including Rotary International, FDH Financial Holdings, and Lilongwe City Council.',
  'Published 15+ storytelling pieces on education, climate, and youth advocacy for donor and public audiences.',
  'Showcased government education work at the national launch of Africa\'s End Learning Poverty (ELPAf) campaign.'
];

export const work: WorkItem[] = [
  {
    role: 'Acting District Coordinator',
    org: 'Find Your Feet',
    period: '2025 - 2026',
    place: 'Lilongwe & Ntcheu, Malawi',
    points: [
      'Led stakeholder and government relations for a tablet-based learning programme across 77 schools in 2 districts, supervising 10 field officers and maintaining full government and community buy-in.',
      'Authored briefing materials and led presentations to district education authorities and the District Executive Committee, communicating programme results to non-technical audiences.',
      'Reported programme performance including a 92% learner improvement in critical thinking, 31% increase in punctuality, and 18% enrolment growth to donors and government stakeholders.'
    ]
  },
  {
    role: 'Monitoring & Evaluation Specialist',
    org: 'Find Your Feet',
    period: '2025 - Present',
    place: 'Lilongwe & Ntcheu, Malawi',
    points: [
      'Produced analytical reports and donor-facing communications from 100+ complex datasets, translating findings into material used directly in programme decision-making.',
      'Coordinated messaging and reporting with donors and government stakeholders across all programme monitoring activities.',
      'Developed tools, checklists, and reporting frameworks used to communicate progress consistently across all project milestones.'
    ]
  },
  {
    role: 'School Performance Officer',
    org: 'Find Your Feet',
    period: '2024 - 2025',
    place: 'Lilongwe & Ntcheu, Malawi',
    points: [
      'Trained 1,437 teachers across two districts, developing training and communication materials for digital device use and troubleshooting.',
      'Facilitated 59 school-level and 13 ADC-level sessions, building relationships with local authorities to support programme delivery.'
    ]
  },
  {
    role: 'Project Managing Officer, FLR-FAO Agriculture Project',
    org: 'Find Your Feet',
    period: '2023 - 2024',
    place: 'Ntcheu, Malawi',
    points: [
      'Led donor and government-facing coordination for a rural livelihoods project, training 502 farmers in beekeeping and 214 in mushroom production.',
      'Delivered capacity-building sessions and communications materials for 34 government extension officers.'
    ]
  },
  {
    role: 'M&E Consultant (Short-Term Engagement)',
    org: 'NRCS, funded by Tilitonse Foundation, Comic Relief, and DFID',
    period: '2026',
    place: 'Southern Malawi',
    points: [
      'Facilitated development of a Results-Based Management framework for a multi-donor funded programme, communicating directly with a consortium of international funding partners.'
    ]
  },
  {
    role: 'Research Assistant',
    org: 'Development Fund of Norway',
    period: '2024',
    place: 'Lilongwe, Malawi',
    points: [
      'Prepared research reports and stakeholder presentations, ensuring findings were clearly communicated to non-specialist audiences.'
    ]
  }
];

export const volunteer: WorkItem[] = [
  {
    role: 'Program Performance & Accountability Officer',
    org: 'Courageous Kids Foundation',
    period: '2025 - Present',
    place: 'Blantyre, Malawi',
    points: [
      'Produced monthly and quarterly reports for management, donors, and partners, improving reporting accuracy by 25%.',
      'Designed 5+ tracking and reporting tools to strengthen programme communications with stakeholders.'
    ]
  },
  {
    role: 'Director of Community Service',
    org: 'Rotaract Club of Lilongwe',
    period: '2025 - Present',
    place: 'Lilongwe, Malawi',
    points: [
      'Facilitated training in climate justice, advocacy, and leadership to 3,400+ students, and led public-facing community initiatives including a 2,315-tree planting campaign.',
      'Coordinated multi-institution communications and partnerships with Rotary, FDH, the Water Board, City Council, and school administrations.',
      'Designed and built the club\'s public website and membership management platform (SvelteKit, TypeScript, Postgres), becoming the organisation\'s owned digital home for its impact reporting, projects, and events.'
    ]
  },
  {
    role: 'M&E Assistant',
    org: 'Centre for Child Development & Research (CCDR)',
    period: '2023 - Present',
    place: 'Lilongwe, Malawi',
    points: [
      'Contributed to 5+ funding proposals and supported development of NGO monitoring frameworks and communications policies.'
    ]
  },
  {
    role: 'Digital Skills Facilitator',
    org: 'Dzuka Africa Organisation',
    period: '2024',
    place: 'Blantyre, Malawi',
    points: [
      'Trained 57 students in digital skills for entrepreneurship, developing learning materials and facilitating virtual sessions.'
    ]
  }
];

export const education: EducationItem[] = [
  { degree: 'MSc Project Management', org: 'Malawi School of Government (MSG)', period: '2026 - 2028 (in progress)' },
  { degree: 'BSc Seed Systems', org: 'Lilongwe University of Agriculture & Natural Resources (LUANAR)', period: '2018 - 2023' },
  { degree: 'Certificate in Project Management', org: 'Shape Research & Skills Consultancy / Dzuka Africa Org', period: '2023 - 2024' }
];

export const certifications: Certification[] = [
  { name: 'MEAL Essentials Certificate', issuer: 'DisasterReady.org', year: '2025' },
  { name: 'Climate Leadership for Community Action', issuer: 'Digital Opportunity Trust', year: '2025' },
  { name: 'YAN Volunteer Programme — Certificate of Completion', issuer: 'Youth Arise Network', year: '2025' },
  { name: 'Effective Supervisory Management & Personal Effectiveness', issuer: 'Market Force (Pvt) Ltd', year: '2025' }
];

export const skills: SkillCategory[] = [
  {
    area: 'Communications & Stakeholder Engagement',
    skills: ['Government Relations', 'Donor Reporting', 'Public Speaking', 'Briefing Materials', 'Campaign Coordination', 'Media Relations']
  },
  {
    area: 'Monitoring & Evaluation',
    skills: ['Data Analysis', 'Reporting Frameworks', 'Indicator Development', 'Impact Assessment', 'Survey Design', 'Database Management']
  },
  {
    area: 'Web & Software Development',
    skills: ['SvelteKit', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'UI/UX Design']
  },
  {
    area: 'Project Management',
    skills: ['Strategic Planning', 'Team Leadership', 'Budget Management', 'Timeline Coordination', 'Risk Assessment', 'Quality Assurance']
  }
];
