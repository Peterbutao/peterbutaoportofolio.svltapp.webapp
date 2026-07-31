export const designs = [
  // {
  //   slug: 'finance-dashboard-concept',
  //   title: 'Finance Dashboard Concept',
  //   desc: 'A clean financial overview dashboard with real-time analytics, spending breakdowns, and intuitive data visualization.',
  //   details: 'This dashboard concept focuses on clarity and usability, giving users a comprehensive view of their financial health. It features interactive charts, category-based spending insights, and a responsive layout that works seamlessly across devices.',
  //   date: '2025',
  //   thumb: '/designs/pro1.png',
  //   tags: ['Dashboard', 'Finance', 'Data Viz'],
  //   src: '/UI-designs/uidesigns-1.pdf'
  // },
  {
    slug: 'fyfannual',
    title: 'fyf annual report 2026',
    desc: 'A modern shopping experience with streamlined product discovery, smooth checkout flow, and engaging product showcases.',
    details: 'The redesign reimagines the mobile shopping journey with a focus on product discovery and conversion. Key improvements include a simplified navigation structure, rich product cards, and a frictionless checkout process that reduces cart abandonment.',
    date: '2025',
    thumb: '/UI-designs/uipng-1.png',
    tags: ['E-Commerce', 'Mobile', 'UX'],
    src: '/UI-designs/ANNUAL-REPORT.pdf'
  },
  // {
  //   slug: 'travel-booking-platform',
  //   title: 'Travel Booking Platform',
  //   desc: 'An inspiring travel booking interface that combines stunning visuals with effortless trip planning and booking.',
  //   details: 'Designed to inspire wanderlust, this platform blends beautiful destination imagery with a powerful booking engine. Users can explore curated destinations, compare options, and complete bookings in just a few taps — all within a visually immersive experience.',
  //   date: '2024',
  //   thumb: '/designs/pro4.png',
  //   tags: ['Travel', 'Booking', 'Web App'],
  //   src: '/UI-designs/uidesigns-3.pdf'
  // },
  // {
  //   slug: 'health-tracker-mobile-app',
  //   title: 'Health Tracker Mobile App',
  //   desc: 'A wellness companion app for tracking activity, sleep, nutrition, and personal health goals in one place.',
  //   details: 'This health tracker brings together activity logging, sleep analysis, nutrition tracking, and goal setting into a cohesive mobile experience. The interface uses calming colors, clear progress indicators, and personalized insights to keep users motivated on their wellness journey.',
  //   date: '2024',
  //   thumb: '/designs/pro5.png',
  //   tags: ['Health', 'Mobile', 'Wellness'],
  //   src: '/UI-designs/uidesign-4.pdf'
  // }
];

export function getDesignBySlug(slug) {
  return designs.find((design) => design.slug === slug);
}
