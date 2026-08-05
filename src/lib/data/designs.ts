export interface Design {
  slug: string;
  title: string;
  desc: string;
  details: string;
  date: string;
  thumb: string;
  tags: string[];
  src: string;
}

export const designs: Design[] = [
  {
    slug: '1',
    title: 'fyf annual report 2026',
    desc: 'A polished annual report visual designed to communicate programme progress, outcomes, and impact with clarity and authority.',
    details: 'This annual report layout presents FYF programme highlights through a structured visual story, balancing data, milestones, and narrative messaging. The design focuses on readability, stakeholder-friendly presentation, and a professional tone that makes impact reporting feel clear, credible, and engaging.',
    date: '2026',
    thumb: '/UI-designs/uipng-1.webp/',
    tags: ['Annual Report', 'Impact', 'UX'],
    src: '/UI-designs/uipng-1.webp/'
  },
  {
    slug: '2',
    title: 'Youth Arise Webpage design',
    desc: 'A clean campaign-focused webpage concept that presents Youth Arise with a clear, persuasive digital narrative and strong brand presence.',
    details: 'This webpage design frames Youth Arise through a modern layout that balances programme storytelling, organisational credibility, and audience engagement. The structure is built to communicate key messages quickly while leaving room for strong calls to action, community trust, and polished visual identity.',
    date: '2024',
    thumb: '/UI-designs/uipng-2.webp',
    tags: ['Webpage', 'Campaign', 'Brand'],
    src: '/UI-designs/uipng-2.webp'
  },
  {
    slug: '3',
    title: 'Infographic for an education programme',
    desc: 'An infographic concept that translates education programme milestones and programme outcomes into a simple, audience-friendly visual story.',
    details: 'This design communicates programme progress through a strong information hierarchy, clear labels, and intentionally grouped content blocks. It helps stakeholders understand key achievements and priorities at a glance, making educational reporting more accessible and easier to share across teams and audiences.',
    date: '2024',
    thumb: '/UI-designs/uipng-3.webp',
    tags: ['Infographic', 'Education', 'Reporting'],
    src: '/UI-designs/uipng-3.webp'
  },
  {
    slug: '4',
    title: 'Brochure for the Transform Project',
    desc: 'A brochure design that presents the Transform Project through a polished, branded print-ready layout with clear messaging and visual flow.',
    details: 'This brochure concept is structured to introduce the Transform Project in a clean, professional way that supports both awareness and credibility. The layout organizes project information into an easy-to-follow narrative, helping audiences connect the programme’s purpose, goals, and value proposition at a glance.',
    date: '2024',
    thumb: '/UI-designs/uipng-4.webp',
    tags: ['Brochure', 'Transform Project', 'Print'],
    src: '/UI-designs/uipng-4.webp'
  },
  {
    slug: '5',
    title: 'Brochure for the BEFIT Project',
    desc: 'A brochure layout designed to communicate the BEFIT Project with clarity, consistency, and a strong organisational identity.',
    details: 'The BEFIT brochure concept focuses on presentational readability and visual hierarchy, so the project’s key messages land quickly and professionally. It is shaped to support stakeholder communication by balancing concise text, clear structure, and persuasive visual design in a print-friendly format.',
    date: '2024',
    thumb: '/UI-designs/uipng-5.webp',
    tags: ['Brochure', 'BEFIT', 'Communication'],
    src: '/UI-designs/uipng-5.webp'
  },
  {
    slug: '6',
    title: 'Infographic - Annual progress presentation',
    desc: 'A presentation-ready infographic that captures annual progress in a concise, executive-friendly visual format.',
    details: 'This annual progress design is tailored for presentation environments where performance needs to be communicated quickly and confidently. It presents key progress themes, indicators, and outcomes with a layout that promotes readability, storytelling, and polished stakeholder communication.',
    date: '2024',
    thumb: '/UI-designs/uipng-6.webp',
    tags: ['Infographic', 'Presentation', 'Progress'],
    src: '/UI-designs/uipng-6.webp'
  },
];

export function getDesignBySlug(slug: string): Design | undefined {
  return designs.find((design) => design.slug === slug);
}
