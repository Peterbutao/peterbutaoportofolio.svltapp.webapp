# Peter Rodrigues Butao — Portfolio

A single-page portfolio for **Peter Rodrigues Butao** — Project Development Specialist, Web & UI/UX Designer, and Software Developer based in Malawi. The site presents his M&E consulting practice, coding projects, UI/UX work, experience, and community impact in one clean, animated experience.

---

## 🌐 About the Site

Live at **peterbutao.pages.dev** — a fast, responsive, content-first portfolio with a single scrollable landing page plus dedicated detail routes for each project and design. It showcases over 10 real projects (web apps, mobile apps, dashboards, CLI tools, and Python/NPM packages), PDF design work, and M&E consulting services.

The design language is minimal and high-contrast: warm off-white background, bold black typography, and a signature yellow accent (`#FFCC00`), driven by CSS design tokens for consistent theming.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | **SvelteKit 2** (Svelte 5) |
| Language | JavaScript (with some TS in components) |
| Animations | **GSAP 3** |
| Styling | Scoped component styles + global CSS design tokens |
| Adapter | `@sveltejs/adapter-cloudflare` |
| Hosting | Cloudflare Pages (`wrangler.toml`) |
| Build tooling | Vite 8, `svelte-check` |

---

## ✨ Features

### 🎬 Animated Hero
- GSAP-powered entrance animation with staggered role tags
- Looping "pulse" glow effect around the profile photo
- Interactive role tags that drift with the mouse and float idle
- "HIRE TALENT" mailto CTA

### 🧭 Sticky Navigation
- Fixed nav with frosted-glass (`backdrop-filter`) bar
- Scroll-aware shadow state
- Mobile hamburger menu with animated icon and slide-down drawer

### 🏢 Trusted Organisations
- Grid of organisation logos with hover tooltips
- Graceful text fallback when an image fails to load

### 🎨 UI/UX Designs
- Card grid of design case studies with hover lift + image zoom
- Dedicated design detail pages (`/UI/UX-designs/[slug]`)
- "View all" gallery page

### 💻 Coding Projects
- 10+ project cards with animated, cycling action buttons (Details / GitHub / Live Link)
- Individual project pages (`/projects/[slug]`) with full case-study layout
- Data-driven from a single `projects.js` source file

### 📊 M&E Consulting
- Consulting section with a scrolling logo marquee
- M&E service checklist (framework design, data analysis, dashboards, donor compliance)
- LinkedIn CTA

### 🛠️ Services
- Four expertise cards: project management, design, software development, and education/community
- Inline tag chips and external profile links

### 💼 Experience & Community
- Work experience cards (FAO, BEFIT IWW) with photos and LinkedIn links
- Community leadership/volunteer section with LinkedIn post link

### 📬 Contact
- Direct email + phone rows
- Social chips (Twitter, Facebook, Instagram, LinkedIn, GitHub)
- Inline digital **business card** with QR code and downloadable PDF

### 🔍 SEO & Accessibility
- Meta description and title
- `robots.txt` + `sitemap.xml`
- `aria-label` on interactive elements, semantic HTML, keyboard-friendly tooltips

---

## 📁 Key Structure

```
src/
├── app.css                    # Global styles & design tokens
├── lib/
│   ├── data/                  # projects.js, designs.js (content source)
│   └── components/            # Landingpage, Projects, UIDesigns, Services, ...
└── routes/
    ├── +layout.svelte         # Nav + footer shell
    ├── +page.svelte           # Single-page main content
    ├── projects/[slug]/       # Project detail pages
    └── UI/UX-designs/[slug]/  # Design detail pages
```

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--wt` | `#FAFAF8` | Background |
| `--yl` | `#FFCC00` | Accent / highlight |
| `--bk` | `#0D0D0D` | Text / dark |
| `--gray` | `#6B7280` | Muted text |
| `--max-w` | `800px` | Max content width |

---

Built with ❤️ using SvelteKit
