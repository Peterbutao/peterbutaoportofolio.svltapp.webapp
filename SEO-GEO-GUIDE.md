# SEO & GEO Optimization Guide

This site is optimized for **both** traditional search engines (Google, Bing — SEO) and
generative/AI answer engines (ChatGPT, Perplexity, Claude, Gemini/GEO). This guide explains
how the system works and how to keep it correct as you edit content.

---

## 1. How it works (quick overview)

| File | Purpose |
| --- | --- |
| `src/lib/components/Seo.svelte` | One reusable component that outputs ALL page-facing meta tags (title, description, canonical, Open Graph, Twitter, robots, JSON-LD). Drop it on any page. |
| `src/lib/utils/seo.ts` | Central builders for schema.org JSON-LD (Person, Organization, WebSite, ItemList, CreativeWork, Service, ContactPage, Breadcrumb) + `absoluteUrl()`. |
| `src/routes/+layout.svelte` | Injects the site-level `Person`, `Organization`, and `WebSite` JSON-LD on every page. |
| `src/app.html` | Global fallback meta + GEO geographic tags (`geo.region`, `geo.position`, `ICBM`), `locale`, `theme-color`. |
| `src/routes/sitemap.xml/+server.ts` | Auto-generates the XML sitemap from the real project/design data (prerendered). |
| `static/robots.txt` | Crawler rules + explicit social for AI bots. |
| `static/llms.txt` | Plain-language facts + links served to LLM crawlers (GEO). |

### Build flow
Everything is **prerendered** (`+layout.js` exports `prerender = true`). The `<Seo>` JSON-LD
and meta tags are baked into static HTML at build time, so crawlers read them instantly.

---

## 2. If you only remember three rules

1. **Every route** renders a `<Seo>` component. If you create a new page, add one.
2. **Never** edit meta tags directly in each page's template — use `<Seo>` so titles,
   descriptions, and canonicals stay consistent.
3. After touching content or pages, run:
   ```powershell
   npm.cmd run check   # typecheck / svelte-check
   npm.cmd run build   # regenerates prerendered pages + sitemap
   ```

---

## 3. The `<Seo>` component — every prop

Add it to the top of a page, above the page content:

```svelte
<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  path="/about"
  title="About Peter Rodrigues Butao — M&E, Project Development & Web Development"
  description="One clear, 150–160 character plain-English summary."
  keywords={['Peter Rodrigues Butao profile', 'M&E Consultant biography']}
  type="website"              <!-- or "article" -->
  image="/about-preview.png"  <!-- optional; defaults to /profile.png -->
  publishedTime="2025-01-01"  <!-- only relevant when type="article" -->
  modifiedTime="2025-06-01"
  schema={[ ... ]}            <!-- optional JSON-LD objects -->
  noIndex                      <!-- set to true on error/noindex pages -->
/>
```

### Prop reference

| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | `string` | *required* | Page name; the site name is appended automatically → `Title | Peter Rodrigues Butao`. |
| `description` | `string` | *required* | Keep ~100–160 characters. One per page. |
| `path` | `string` | `'/'` | Route path; builds canonical + OG URL. Full URLs also accepted. |
| `type` | `'website' \| 'article'` | `'website'` | `article` injects `article:published_time`, `modified_time`, `author`. |
| `image` | `string?` | `/profile.png` | Social share image (relative or absolute). |
| `keywords` | `string[]` | `[]` | Optional SEO keywords (minor ranking weight). |
| `publishedTime` / `modifiedTime` | `string?` | — | Only relevant for `article`. |
| `schema` | `Array<Record<string, unknown>>` | `[]` | Extra JSON-LD objects for this page. |
| `noIndex` | `boolean` | `false` | Emits `noindex, nofollow`. Use on 404/private pages. |

---

## 4. Structured data you can reuse (in `src/lib/utils/seo.ts`)

Generic JSON-LD builders — all in `seo.ts`:

| Function | Emits | Where used |
|---|---|---|
| `generatePersonSchema()` | `Person` (profile, roles, sameAs) | layout (global) + About page |
| `generateOrganizationSchema()` | `Organization` | layout (global) |
| `generateWebSiteSchema()` | `WebSite` | layout (global) |
| `generateItemListSchema(items)` | `ItemList` | Projects & UI/UX index pages |
| `generateCreativeWorkSchema({...})` | `CreativeWork` / `VisualArtwork` | Project / design detail pages |
| `generateServiceSchema({name, description})` | `Service` | Services page |
| `generateContactPageSchema()` | `ContactPage` (embeds Person) | Contact page |
| `generateBreadcrumbSchema([{name, url}])` | `BreadcrumbList` | Most pages |
| `absoluteUrl(path)` | Turns `/x` into a full URL | Canonical logic |

Example of adding a breadcrumb + creative work to a detail page:

```svelte
<script>
  import Seo from '$lib/components/Seo.svelte';
  import { generateCreativeWorkSchema, generateBreadcrumbSchema, absoluteUrl } from '$lib/utils/seo';
  import { siteConfig } from '$lib/config/site';

  export let data;
  const { item } = data;
  const path = `/projects/${item.slug}`;
</script>

<Seo
  path={path}
  type="article"
  title={item.title}
  description={item.desc}
  image={item.thumb}
  publishedTime={item.date}
  schema={[
    generateCreativeWorkSchema({ name: item.title, description: item.desc, url: absoluteUrl(path), image: `${siteConfig.url}${item.thumb}` }),
    generateBreadcrumbSchema([
      { name: 'Home', url: `${siteConfig.url}/` },
      { name: 'Projects', url: `${siteConfig.url}/projects` },
      { name: item.title, url: absoluteUrl(path) }
    ])
  ]}
/>
```

> Full URLs in JSON-LD **must** be absolute — never leave `path`-style values inside schema.

---

## 5. Adding a NEW page (step-by-step)

1. Create the route, e.g. `src/routes/press/+page.svelte`.
2. Import `<Seo>` and place it as the first element with a unique `title` + `description`.
3. Add breadcrumb JSON-LD if the page can be reached from another page in the site.
4. Add the URL to the sitemap:
   - Edit `src/routes/sitemap.xml/+server.ts` → add it to the `pages` array.
5. Optionally link to it from `static/robots.txt` / `static/llms.txt` if it's a key public page.
6. Run the build so it's prerendered:
   ```powershell
   npm.cmd run build
   ```

## Adding a new project or UI/UX design

- Edit `src/lib/data/projects.ts` (or `designs.ts`). The **sitemap updates automatically** at
  build time — no extra work needed. The project/design detail pages publish their own meta and
  `CreativeWork` / `VisualArtwork` schema from the data automatically.

---

## 5. GEO / AI-engine guidelines (the "content" part)

AI answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot) read your content and pull
facts to answer queries. Optimize by:

- **Answer-first text.** Start pages/paragraphs with a clear answer, then elaborate.
  e.g. "Peter Rodrigues Butao is a project development specialist and M&E consultant based in
  Lilongwe, Malawi."
- **Explicit entities.** Keep your name, role, and location spelled out in plain language
  (already done in `Landingpage.svelte` and `llms.txt`).
- **Consistent facts.** Update `static/llms.txt` whenever contact info, titles, metrics, or
  links change. LLMs frequently read this file first.
- **Provide citations.** Descriptive `alt` text on images helps both image SEO and AI engines.
- **Keep the large headings + summary text** on the page; don't rely only on images.

### Maintaining `static/llms.txt`
It's a simple text file listing key facts and links. Keep the "Key facts" section accurate and
current. The format is friendly to LLM parsers:
```
# Name

> One-paragraph blurb.

## Key facts

- Full name: ...

## Links

- Home: https://...
```

### Maintaining `static/robots.txt`
AI and crawler permissions live here. We currently allow the major AI crawlers
(ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, etc.). If you add a bot, append a group:

```
User-agent: SomeBot
Allow: /
```

---

## 6. Checklist before a release

- [ ] All routes render a `<Seo>` with unique `title` + `description`.
- [ ] No two pages share the same `title`.
- [ ] Every page's canonical is correct (auto via `path`).
- [ ] Project/design data updated → sitemap auto-includes them.
- [ ] `llms.txt` facts are current.
- [ ] `npm.cmd run check` → 0 errors.
- [ ] `npm.cmd run build` → success; `sitemap.xml` + `robots.txt` + `llms.txt` present in output.

### Verify output
After a build, confirm tags landed in prerendered HTML:

```powershell
Get-Content -Raw ".svelte-kit\output\prerendered\pages\about.html" | Select-String -Pattern "rel=\"canonical\"", "application/ld+json"
```

---

## 7. Common pitfalls

| Pitfall | Fix |
|---|---|
| Editing titles/descriptions directly in templates | Use `<Seo>` so headers stay consistent. |
| Relative URLs inside JSON-LD | Wrap with `absoluteUrl(...)` or prefix `siteConfig.url`. |
| Forgetting to prerender a new page | Ensure `src/routes/+layout.js` still exports `prerender = true`. |
| Duplicate canonical on detail pages | Rely on `<Seo path={...}>`; never hardcode the domain in a page. |
| Adding social but skipping structured data | Add the relevant schema builder from `seo.ts`. |