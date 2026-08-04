<script lang="ts">
  import { designs } from '$lib/data/designs';
</script>

<div class="section-label">UI/UX Work</div>
<h2 class="section-title">UI/UX Designs</h2>
<div class="section-divider"></div>

<ul class="designs-grid">
  {#each designs as d}
    <li>
      <a href={`/UI/UX-designs/${d.slug}`} class="design-card">
        <div class="card-thumb">
          {#if d.thumb}
            <img src={d.thumb} alt={d.title} loading="lazy" decoding="async" />
          {:else}
            <span class="thumb-label">{d.title}</span>
          {/if}
        </div>
        <div class="card-body">
          <h3>{d.title}</h3>
          <p>{d.desc}</p>
        </div>
        <div class="card-foot">
          <span class="date">{d.date}</span>
        </div>
        <span class="view-btn">VIEW DESIGN →</span>
      </a>
    </li>
  {/each}
</ul>

<a href="/UI/UX-designs" class="view-all">VIEW ALL UI/UX DESIGNS</a>

<style>
  .designs-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: center;
    margin: 0 0 22px;
    padding: 0;
    list-style: none;
  }

  .designs-grid li {
    width: 100%;
  }

  .design-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    overflow: hidden;
    width: 100%;
    max-width: 340px;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    color: var(--bk);
  }

  @media (max-width: 719px) {
    .designs-grid {
      gap: 10px;
      margin-bottom: 16px;
    }

    .designs-grid li {
      width: 100%;
    }

    .design-card {
      max-width: 100%;
    }
  }

  @media (min-width: 720px) {
    .designs-grid li {
      width: auto;
      max-width: 360px;
      flex: 1 1 340px;
    }
  }

  .design-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  @media (min-width: 720px) {
    .design-card {
      max-width: 360px;
    }
  }

  .card-thumb {
    width: 100%;
    aspect-ratio: 16 / 16;
    background: linear-gradient(135deg, #f4f3ec 0%, #e6e3d6 100%);
    overflow: hidden;
    display: block;
  }

  .card-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.4s ease;
    display: block;
  }

  .design-card:hover .card-thumb img { transform: scale(1.03); }

  .thumb-label {
    font-family: var(--font-display);
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    color: rgba(0,0,0,0.18);
    text-align: center;
    padding: 10px;
  }

  .card-body {
    padding: 14px 14px 10px;
    flex: 1;
  }

  .card-body h3 {
    font-size: 0.88rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 5px;
  }

  .card-body p {
    font-size: 0.75rem;
    color: var(--gray);
    line-height: 1.55;
  }

  .card-foot {
    padding: 10px 14px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .date {
    font-size: 0.68rem;
    color: var(--gray);
  }

  .view-btn {
    display: block;
    padding: 12px;
    background: var(--yl);
    color: var(--bk);
    text-align: center;
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    transition: background 0.2s, color 0.2s;
    border-top: 1px solid var(--border);
    cursor: pointer;
  }

  .design-card:hover .view-btn {
    background: var(--bk);
    color: var(--wt);
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
