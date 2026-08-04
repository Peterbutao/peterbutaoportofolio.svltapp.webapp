<script lang="ts">
  import Card from './Card.svelte';
  import { projects } from '$lib/data/projects';
</script>

<div class="section-label">Portfolio</div>
<h2 class="section-title">Coding Projects</h2>
<div class="section-divider"></div>

<ul class="projects-grid">
  {#each projects as p}
    <li>
      <Card
        title={p.title}
        desc={p.desc}
        date={p.date}
        thumb={p.thumb}
        aboutHref={`/projects/${p.slug}`}
        githubHref={p.github}
        projectHref={p.src}
      />
    </li>
  {/each}
</ul>

<a href="/projects" class="view-all">VIEW ALL CODING PROJECTS</a>

<style>
  .projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin: 0 auto 18px;
    padding: 0;
    list-style: none;
  }

  .projects-grid li {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 720px) {
    .projects-grid {
      gap: 22px;
    }

    .projects-grid li {
      width: auto;
      max-width: 360px;
      flex: 1 1 340px;
    }
  }

  .view-all {
    display: block;
    border: 1.5px solid var(--bk);
    border-radius: 7px;
    padding: 13px;
    text-align: center;
    font-weight: 700;
    font-size: 0.82rem;
    letter-spacing: 0.1em;
    transition: background 0.2s, color 0.2s;
  }

  .view-all:hover {
    background: var(--bk);
    color: var(--wt);
  }
</style>
