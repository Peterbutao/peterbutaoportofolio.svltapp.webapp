export const projects = [
  {
    slug: 'luanar-timetable-application',
    title: 'LUANAR timetable application',
    desc: 'A responsive student timetable planner built to make academic scheduling clearer and easier to follow.',
    details: 'This app helps students view class schedules, organise weekly routines, and stay on top of academic commitments in one place. The experience is focused on clarity, speed, and a mobile-friendly workflow so important information is always easy to access.',
    date: '2025',
    thumb: '/designs/pro.png',
    projecttype: "app",
    logoSrc: '',
    src: "https://luanarapp.netlify.app/app"
  },
  {
  slug: 'budgetpage',
  title: 'Groceries Budget app',
  desc: 'A simple budgeting tool that helps users plan grocery spending and manage household costs with confidence.',
  details: 'Designed for everyday use, this app combines expense tracking with practical budgeting features so users can monitor what they spend and plan ahead with ease. It focuses on a clean interface, quick data entry, and helpful insights that make money management feel effortless.',
  date: '2025',
  thumb: '/designs/pro3.png',
  projecttype: "app",
  logoSrc: '',
  src: "https://budgetpage.netlify.app/"
  },
  {
    slug: 'luanaranovaonline',
    title: 'luanar Anova Online',
    desc: 'A polished online presence for a creative and academic platform with modern visuals and smooth storytelling.',
    details: 'This website brings together a refined layout, thoughtful content structure, and responsive design to present the brand with confidence. It highlights the organization’s identity through engaging sections, clear navigation, and a professional digital experience.',
    date: '2024',
    thumb: '/designs/pro6.png',
    projecttype: "web app",
    logoSrc: '',
    src: "https://luanaranovaonline.netlify.app/"
  },
  // {
  //   slug: 'product-marketing-concept',
  //   title: 'Product Marketing Concept',
  //   desc: 'Campaign visuals, landing page layouts, and product storytelling design assets.',
  //   details: 'An immersive product marketing concept that combines promotional visuals with strategic content placement. It is designed to convert interest into action while maintaining a strong visual identity.',
  //   date: '2024',
  //   thumb: '/designs/pro2.png',
  //   logoSrc: '',
  //   src: "https://luanarapp.netlify.app/app"
  // },

  // {
  //   slug: 'visual-identity-refresh',
  //   title: 'Visual Identity Refresh',
  //   desc: 'Branding and digital experience design for a next-generation service platform.',
  //   details: 'This refresh project explores refined branding and visual system updates for a modern service platform. The new identity is built to feel confident, approachable, and scalable across digital touchpoints.',
  //   date: '2025',
  //   thumb: '/designs/pro6.png',
  //   logoSrc: '',
  //   src: "https://luanarapp.netlify.app/app"
  // },
  // {
  //   slug: 'web-experience-concept',
  //   title: 'Web Experience Concept',
  //   desc: 'Modern web layout and content flow designed for engagement and clarity.',
  //   details: 'A concept for a high-impact website experience that prioritizes content clarity and seamless navigation. It includes layered visuals, defined typographic scale, and a strong information hierarchy.',
  //   date: '2024',
  //   thumb: '/designs/pro5.png',
  //   logoSrc: '',
  //   src: "https://luanarapp.netlify.app/app"
  // },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
