<script>
  /**
   * Props:
   *   title        — project title
   *   desc         — short description
   *   date         — display date string
   *   thumb        — image src (optional)
   *   aboutHref    — link to the project slug page
   *   githubHref   — external GitHub URL
   *   projectHref  — external live project URL
   *   logoSrc      — small logo src (optional)
   */
  export let title       = 'Project Title';
  export let desc        = 'Short description of this project and the technologies used.';
  export let date        = '2024';
  export let thumb       = '';
  export let aboutHref   = '/';
  export let githubHref  = '';
  export let projectHref = '';
</script>

<article class="card">
  <a href={aboutHref} class="card-thumb-link" aria-label={`View ${title}`}>
    <div class="card-thumb">
      {#if thumb}
        <img src={thumb} alt={title} loading="lazy" decoding="async" />
      {:else}
        <span class="thumb-label">{title}</span>
      {/if}
    </div>
  </a>

  <div class="card-body">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>

  <div class="card-foot">
    <span class="date">{date}</span>
  </div>

  <div class="card-actions">
    <a href={aboutHref} class="action-link">DETAILS</a>
    {#if githubHref}
      <a href={githubHref} class="action-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
    {/if}
    {#if projectHref}
      <a href={projectHref} class="action-link" target="_blank" rel="noopener noreferrer">PROJECT LINK</a>
    {/if}
  </div>
</article>

<style>
  .card {
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
    .card {
      max-width: 100%;
    }

    .card-body {
      padding: 12px 12px 8px;
    }

    .card-foot {
      padding: 8px 12px;
    }

    .card-actions {
      gap: 8px;
      padding: 10px 12px 12px;
    }

    .action-link {
      padding: 8px 12px;
      font-size: 0.62rem;
    }
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  .card-thumb-link {
    display: block;
    color: inherit;
  }

  /* ─── DESKTOP: allow 2-col on wider screens ─── */
  @media (min-width: 720px) {
    .card {
      max-width: 360px;
    }
  }

  /* ─── THUMBNAIL ─── */
  .card-thumb {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: linear-gradient(135deg, #f4f3ec 0%, #e6e3d6 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-thumb img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .card:hover .card-thumb img { transform: scale(1.03); }

  .thumb-label {
    font-family: var(--font-display);
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    color: rgba(0,0,0,0.18);
    text-align: center;
    padding: 10px;
  }

  /* ─── BODY ─── */
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

  /* ─── FOOTER ─── */
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

  .card-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 12px 14px 14px;
    border-top: 1px solid var(--border);
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    background: transparent;
    color: var(--bk);
    border: 1.5px solid var(--bk);
    border-radius: 999px;
    text-align: center;
    font-weight: 700;
    font-size: 0.66rem;
    letter-spacing: 0.06em;
    transition: background 0.2s, color 0.2s, transform 0.2s ease;
    text-decoration: none;
    animation: cardLinkFlow 4.8s ease-in-out 2;
  }

  .action-link:nth-child(1) { animation-delay: 0s; }
  .action-link:nth-child(2) { animation-delay: 1.6s; }
  .action-link:nth-child(3) { animation-delay: 3.2s; }

  .action-link:hover {
    background: var(--bk);
    color: var(--wt);
    transform: translateY(-1px);
    animation: none;
  }

  @keyframes cardLinkFlow {
    0%, 100% {
      background: transparent;
      color: var(--bk);
      border-color: var(--bk);
    }
    22% {
      background: var(--yl);
      color: var(--bk);
      border-color: var(--yl);
    }
    50% {
      background: var(--bk);
      color: var(--wt);
      border-color: var(--bk);
    }
    78% {
      background: var(--yl);
      color: var(--bk);
      border-color: var(--yl);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .action-link {
      animation: none;
    }
  }
</style>
