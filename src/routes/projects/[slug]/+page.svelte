<script context="module">
  import { error } from '@sveltejs/kit';
  import { getProjectBySlug, projects } from '$lib/data/projects';

  export function load({ params }) {
    const project = getProjectBySlug(params.slug);
    if (!project) throw error(404, 'Project not found');

    return { project, projects };
  }
</script>

<script>
  export let data;
  const { project } = data;
</script>

<article class="project-page">
  <div class="project-header">
    <img class="project-thumb" src={project.thumb} alt={project.title} />
    <div class="project-meta">
      <span class="project-date">{project.date}</span>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
    </div>
  </div>

  <div class="project-details">
    <p>{project.details}</p>
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

  @media (min-width: 800px) {
    .project-header {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
</style>
