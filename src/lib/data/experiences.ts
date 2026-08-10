export interface Experience {
  org: string;
  role: string;
  label: string;
  desc: string;
  img: string;
  href: string;
}

export const experiences: Experience[] = [
  {
    org: 'Forest Landscape Restoration — FAO',
    role: 'Project Development Specialist',
    label: 'Programme Delivery & Coordination',
    desc: 'Supported forest landscape restoration delivery by coordinating implementation activities, strengthening stakeholder collaboration, and guiding field execution across programme sites in Malawi.',
    img: '/work/work1.webp',
    href: 'https://www.linkedin.com/in/peter-butao-7238471b4/'
  },
  {
    org: 'BEFIT IWW Programme',
    role: 'M&E Consultant',
    label: 'Monitoring, Learning & Reporting',
    desc: 'Led monitoring, evaluation, and data collection for the BEFIT IWW programme, translating evidence into clearer educational reporting, accountability systems, and actionable insights for programme improvement.',
    img: '/work/work2.webp',
    href: 'https://www.linkedin.com/in/peter-butao-7238471b4/'
  }
];
