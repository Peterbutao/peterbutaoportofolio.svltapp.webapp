import { ProjectSchema, validateData } from '$lib/utils/validation';

export const projects = validateData(ProjectSchema.array(), [
  {
    slug: '1',
    title: 'LUANAR timetable application',
    desc: 'A responsive student timetable planner built to make academic scheduling clearer and easier to follow.',
    details: 'This app helps students view class schedules, organise weekly routines, and stay on top of academic commitments in one place. The experience is focused on clarity, speed, and a mobile-friendly workflow so important information is always easy to access.',
    date: '2025',
    thumb: '/Projects/pro.webp',
    projecttype: "app",
    github: "https://github.com/Peterbutao/luanarapp-svelte-capacitor",
    src: "https://luanarapp.pages.dev/app"
  },
  {
    slug: '2',
    title: 'BEFIT Auto Analysis',
    desc: 'Automated data analysis tool, transforms raw school data into Excel reports with insights and dashboards.',
    details: 'BEFIT Auto Analysis is a Python-based tool designed to streamline School TOT (Time on Task) data processing. It converts raw datasets into a well-structured Excel workbook containing cleaned data, pivot tables, and interactive dashboards. The tool helps monitoring and evaluation teams quickly generate insights, track performance indicators, and support data-driven decision-making. Built for efficiency and scalability, it reduces manual work while improving accuracy and reporting speed.',
    date: '2026',
    thumb: '/Projects/pro1.webp',
    projecttype: "pip package",
    github: "https://github.com/Peterbutao/analysis_auto/",
    src: "https://pypi.org/project/befit-auto-analysis/"
  },
  {
  slug: '3',
  title: 'Groceries Budget app',
  desc: 'A simple budgeting tool that helps users plan grocery spending and manage household costs with confidence.',
  details: 'Designed for everyday use, this app combines expense tracking with practical budgeting features so users can monitor what they spend and plan ahead with ease. It focuses on a clean interface, quick data entry, and helpful insights that make money management feel effortless.',
  date: '2025',
  thumb: '/Projects/pro2.webp',
  projecttype: "app",
  github: "https://github.com/Peterbutao/groceries-listapp-svelte-cordova",
  src: "https://groceriesapp.pages.dev/"
  },
  {
  slug: '4',
  title: 'Claradens dental clinic webpage',
  desc: 'A modern, responsive business website designed to showcase services and strengthen online presence.',
  details: 'Claradens is a professionally designed website built to present business information in a clear, engaging, and accessible way. The platform focuses on user experience, fast performance, and responsive design, ensuring seamless browsing across desktop and mobile devices. It serves as a digital front for the brand, helping communicate services, build credibility, and improve customer engagement through a clean and intuitive interface.',
  date: '2025',
  thumb: '/Projects/pro3.webp',
  projecttype: "app",
  github: "https://github.com/Peterbutao/claradens-dental-clinic-webapp-nextjs",
  src: "https://claradens.pages.dev/"
  },
  {
  slug: '5',
  title: 'Rotaract Member managegment SYS  and Webpage',
  desc: 'A responsive website and member management system designed to streamline club operations and showcase community impact.',
  details: 'The Rotaract Lilongwe platform combines a modern website with a member management system to support both public engagement and internal coordination. It allows the club to share events, initiatives, and community service activities while also managing member records, participation, and communication in one place. Built with a focus on usability, performance, and responsiveness, the system enhances both the organization’s digital presence and its operational efficiency.',
  date: '2026',
  thumb: '/Projects/pro4.webp',
  projecttype: "website",
  github: "https://github.com/Peterbutao/rac-website",
  src: "https://rotaractlilongwe.com/"
  },
  {
    slug: '6',
    title: 'Terminal Search Engine',
    desc: 'An AI-powered terminal search tool that brings web results and intelligent answers directly into your command line.',
    details: 'Termsearch is a developer-focused CLI that enables fast, efficient web searches without leaving the terminal. It integrates DuckDuckGo for sourcing results and leverages AI via OpenRouter to generate clear, summarized answers. The tool supports both one-shot and interactive modes, allowing users to explore, open, and refine search results seamlessly. Designed to be lightweight, cross-platform, and intuitive, termsearch enhances productivity by combining real-time search, AI summarization, and a clean command-line experience.',
    date: '2026',
    thumb: '/Projects/pro5.webp',
    projecttype: "NPM package",
    github: "https://github.com/Peterbutao/terminalsearch-nodejs",
    src: "https://www.npmjs.com/package/terminalsearchengine"
  },
  {
    slug: '7',
    title: "Find Your Feet — Performance Dashboard",
    desc: "A live, browser-based performance dashboard for FYF programme that pulls data directly from Google Sheets and provides real-time insights into school-level activity, officer performance, and weekly trends.",
    details: "FYF Dashboard is a zero-backend, single-page application built with Vite and Chart.js. It fetches data via the Google Visualization API from a shared spreadsheet containing summary, allocations, and weekly sheet data. Features include colour-coded performance bands (Excellent → Critical), four dashboard tabs (Overview, Officer Performance, School Performance, Weekly Trends), drill-down officer analysis, week-on-week change tracking, and batched session usage logging. Deployed on Cloudflare Pages with live data sourced from Google Sheets — no database or server required.",
    date: '2026',
    thumb: '/Projects/pro6.webp',
    projecttype: "Javascript Analytics Dashboard",
    github: "https://github.com/Peterbutao/fyf-dashboard",
    src: "https://befit-fyf.pages.dev/"
  },
  {
    slug: '8',
    title: 'LUANAR ANOVA Statistics',
    desc: 'A web-based statistical tool designed to simplify ANOVA analysis for students and researchers through an intuitive and structured interface.',
    details: 'This application provides a clean and focused environment for performing Analysis of Variance (ANOVA) calculations. It features structured data input, automated computation of key statistical values such as sum of squares, mean squares, and degrees of freedom, and presents results in a clear tabular format. With its responsive design, academic-focused layout, and streamlined workflow, the platform enhances productivity and makes statistical analysis more accessible and efficient.',
    date: '2026',
    thumb: '/Projects/pro7.webp',
    projecttype: "Javascript Analytics Dashboard",
    github: "https://github.com/Peterbutao/anova-statistics-electron",
    src: "https://anova-online.pages.dev/"
  },
  {
    slug: '9',
    title: 'Stories by Dambula Jedidiah',
    desc: 'A responsive literary portfolio showcasing original poetry and stories through a clean, modern, and reader-focused digital experience.',
    details: 'Designed and developed a creative portfolio website for author and poet Dambula Jedidiah. The platform serves as a digital home for poems and stories centered on themes of love, loss, trauma, healing, and joy. The project features a minimalist visual identity, responsive layouts for desktop and mobile devices, immersive typography, interactive call-to-action elements, and an elegant content presentation strategy that keeps readers focused on the narrative. By blending storytelling with modern web design, the website strengthens the author’s online presence while creating an engaging and memorable reading experience.',
    date: '2026',
    thumb: '/Projects/pro8.webp',
    projecttype: "website",
    github: "https://github.com/Peterbutao/dambula-portofolio-svlt",
    src: "https://dambula.pages.dev/"
  },
  {
    slug: '10',
    title: 'Nthanzi Lathu M&E Dashboard',
    desc: 'A responsive project monitoring dashboard for tracking climate project implementation, milestones, timelines, and performance indicators.',
    details: 'Designed and developed a Monitoring & Evaluation (M&E) dashboard for the Youth Arise Network Nthanzi Lathu Climate Project. The platform centralizes project tracking by providing activity management, progress monitoring, KPI reporting, and timeline visualization through an interactive Gantt chart. Features include status tracking (Completed, In Progress, Not Started), category filtering, project phase management, progress analytics, and responsive desktop/mobile layouts. The solution improves transparency, reporting efficiency, and strategic decision-making by enabling stakeholders to monitor project implementation and long-term outcomes across the 2025–2031 project lifecycle.',
    date: '2026',
    thumb: '/Projects/pro9.webp',
    projecttype: "Javascript Analytics Dashboard",
    github: "https://github.com/Peterbutao/Nthanzi_lathu-vite-vanilla",
    src: "https://nthanzilanthu.pages.dev/"
  }
]);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
