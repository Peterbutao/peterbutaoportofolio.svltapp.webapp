<script>
  import Seo from '$lib/components/Seo.svelte';
  import { generateCreativeWorkSchema, generateBreadcrumbSchema, absoluteUrl } from '$lib/utils/seo';
  import { siteConfig } from '$lib/config/site';

  export let data;
  const { project } = data;

  const pagePath = `/projects/${project.slug}`;
  const creativeWork = generateCreativeWorkSchema({
    name: project.title,
    description: project.desc,
    url: absoluteUrl(pagePath),
    image: `${siteConfig.url}${project.thumb}`,
    dateCreated: project.date,
    keywords: [project.projecttype, 'Software Development', 'Web Development']
  });
</script>

<Seo
  path={pagePath}
  type="article"
  title={project.title}
  description={project.desc}
  publishedTime={project.date}
  modifiedTime={project.date}
  keywords={[project.projecttype, 'Portfolio Project', 'Peter Rodrigues Butao']}
  image={project.thumb}
  schema={[
    creativeWork,
    generateBreadcrumbSchema([
      { name: 'Home', url: `${siteConfig.url}/` },
      { name: 'Projects', url: `${siteConfig.url}/projects` },
      { name: project.title, url: absoluteUrl(pagePath) }
    ])
  ]}
/>

<article class="project-page">
  <div class="project-header">
    <img class="project-thumb" src={project.thumb} alt={project.title} decoding="async" />
    <div class="project-meta">
      <span class="project-date">{project.date}</span>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
    </div>
  </div>

  <div class="project-details">
    <p>{project.details}</p>
  </div>

  <div class="project-actions">
    <a href={`/projects/${project.slug}`} class="action-link">ABOUT PROJECT</a>
    <a href={project.github} class="action-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
    <a href={project.src} class="action-link" target="_blank" rel="noopener noreferrer">PROJECT LINK</a>
  </div>
</article>

<style>
  .project-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 120px 24px 64px;
  }

  .project-header {
    display: grid;
    gap: 24px;
  }

  .project-thumb {
    width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
    box-shadow: 0 24px 80px rgba(0,0,0,0.1);
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .project-date {
    color: var(--gray);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .project-meta h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0;
  }

  .project-meta p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--gray);
    max-width: 720px;
  }

  .project-details {
    margin-top: 42px;
    font-size: 0.95rem;
    line-height: 1.9;
    color: var(--gray);
  }

  .project-actions {
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
    .project-header {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
</style>
