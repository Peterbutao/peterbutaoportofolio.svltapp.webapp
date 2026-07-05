# Peter Rodrigues Butao — Portfolio

A SvelteKit portfolio website for Peter Rodrigues Butao.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── app.html                      # Root HTML shell
├── app.css                       # Global styles & design tokens
├── lib/
│   ├── index.js                  # Barrel exports
│   └── components/
│       ├── Landingpage.svelte    # Hero / intro section
│       ├── Organisations.svelte  # Trusted orgs logos
│       ├── Card.svelte           # Reusable project card
│       ├── Projects.svelte       # Coding projects grid
│       ├── Experience.svelte     # Work experience
│       ├── Services.svelte       # What I Do
│       └── Contacts.svelte       # Contact + business card
└── routes/
    ├── +layout.svelte            # Nav + footer shell
    └── +page.svelte              # Main page
```

---

## 🖼️ Assets — Place in `/static/`

| File | Description |
|---|---|
| `profile.png` | Your profile photo (shown in hero ring) |
| `logo (1).png` – `logo (6).png` | Organisation logos |
| `work/work1.jpg` | Project 1 thumbnail |
| `work/work2.jpg` | Project 2 thumbnail |
| `work/work3.jpg` | Project 3 thumbnail |
| `work/fao.jpg` | FAO work experience image |
| `work/befit.jpg` | BEFIT IWW work experience image |
| `qr.png` | QR code for business card |
| `business-card.pdf` | Downloadable business card |
| `favicon.png` | Browser favicon |

---

## ✏️ Customisation

- **Projects** — Edit the `projects` array in `src/lib/components/Projects.svelte`
- **Experience** — Edit the `experiences` array in `src/lib/components/Experience.svelte`
- **Organisations** — Edit the `orgs` array in `src/lib/components/Organisations.svelte`
- **Services** — Edit the `services` array in `src/lib/components/Services.svelte`
- **Contact info** — Update email/phone directly in `Contacts.svelte`
- **Colors / fonts** — Edit CSS variables in `src/app.css`

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
