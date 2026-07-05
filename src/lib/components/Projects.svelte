<script>
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
        href={`/projects/${p.slug}`}
        logoSrc={p.logoSrc}
      />
    </li>
  {/each}
</ul>

<a href="/" class="view-all">VIEW ALL CODING PROJECTS</a>

<style>
  .projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: center;
    margin-bottom: 22px;
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
