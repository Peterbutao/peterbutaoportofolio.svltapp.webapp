<script>
  import Seo from '$lib/components/Seo.svelte';
  import { generateCreativeWorkSchema, generateBreadcrumbSchema, absoluteUrl } from '$lib/utils/seo';
  import { siteConfig } from '$lib/config/site';

  export let data;
  const { design } = data;

  const pagePath = `/UI/UX-designs/${design.slug}`;
  const artworkSchema = generateCreativeWorkSchema({
    name: design.title,
    description: design.desc,
    url: absoluteUrl(pagePath),
    image: `${siteConfig.url}${design.thumb}`,
    dateCreated: design.date,
    keywords: design.tags,
    type: 'VisualArtwork'
  });
</script>

<Seo
  path={pagePath}
  title={design.title}
  description={design.desc}
  keywords={design.tags}
  image={design.thumb}
  schema={[
    artworkSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: `${siteConfig.url}/` },
      { name: 'UI Designs', url: `${siteConfig.url}/UI/UX-designs` },
      { name: design.title, url: absoluteUrl(pagePath) }
    ])
  ]}
/>

<article class="design-page">
  <div class="design-header">
    <img class="design-thumb" src={design.thumb} alt={design.title} decoding="async" />
    <div class="design-meta">
      <span class="design-date">{design.date}</span>
      <h1>{design.title}</h1>
      <p>{design.desc}</p>
    </div>
  </div>

  <div class="design-details">
    <p>{design.details}</p>
  </div>

  <div class="design-actions">
    <a href={design.src} target="_blank" rel="noopener" class="action-link">VIEW DESIGN</a>
  </div>
</article>

<style>
  .design-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 120px 24px 64px;
  }

  .design-header {
    display: grid;
    gap: 24px;
  }

  .design-thumb {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
    box-shadow: 0 24px 80px rgba(0,0,0,0.1);
  }

  .design-meta {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .design-date {
    color: var(--gray);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .design-meta h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0;
  }

  .design-meta p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--gray);
    max-width: 720px;
  }

  .design-details {
    margin-top: 42px;
    font-size: 0.95rem;
    line-height: 1.9;
    color: var(--gray);
  }

  .design-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 42px;
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    background: transparent;
    color: var(--bk);
    border: 1.5px solid var(--bk);
    border-radius: 999px;
    text-align: center;
    font-weight: 700;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    transition: background 0.2s, color 0.2s, transform 0.2s ease;
  }

  .action-link:hover {
    background: var(--bk);
    color: var(--wt);
    transform: translateY(-1px);
  }

  @media (min-width: 800px) {
    .design-header {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
</style>
