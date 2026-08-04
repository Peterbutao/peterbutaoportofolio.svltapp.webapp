<script lang="ts">
  import { services } from '$lib/data/services';
</script>

<div class="section-label">Expertise</div>
<h2 class="section-title">What I Do</h2>
<div class="section-divider"></div>

<ul class="services-list">
  {#each services as svc}
    <li class="svc-card">
      <div class="svc-icon">
        {@html svc.icon}
      </div>
      <h3>{svc.title}</h3>
      <p>{svc.desc}</p>
      <div class="tags">
        {#each svc.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
      <a href={svc.link.href} target="_blank" rel="noopener" class="svc-link">
        {svc.link.label} →
      </a>
    </li>
  {/each}
</ul>

<style>
  .services-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .svc-card {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 24px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .svc-card:hover {
    border-color: var(--yl);
    box-shadow: 0 4px 24px rgba(255,204,0,0.15);
  }

  .svc-icon {
    width: 44px; height: 44px;
    background: var(--yl);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    color: var(--bk);
  }

  .svc-card h3 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }

  .svc-card p {
    font-size: 0.82rem;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
  }

  .tag {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid var(--border);
    background: var(--wt);
    color: var(--bk);
  }

  .svc-link {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--bk);
    border-bottom: 2px solid var(--yl);
    padding-bottom: 1px;
    transition: color 0.15s;
  }

  .svc-link:hover { color: var(--gray); }
</style>
