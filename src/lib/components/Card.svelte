<script>
  /**
   * Props:
   *   title    — project title
   *   desc     — short description
   *   date     — display date string
   *   thumb    — image src (optional)
   *   href     — link to project
   *   logoSrc  — small logo src (optional)
   */
  export let title   = 'Project Title';
  export let desc    = 'Short description of this project and the technologies used.';
  export let date    = '2024';
  export let thumb   = '';
  export let href    = '/';
  export let logoSrc = '';
</script>

<a {href} class="card" target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener">
  <div class="card-thumb">
    {#if thumb}
      <img src={thumb} alt={title} />
    {:else}
      <span class="thumb-label">{title}</span>
    {/if}
  </div>

  <div class="card-body">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>

  <div class="card-foot">
    <span class="date">{date}</span>
  </div>
  <span class="view-btn">
    VIEW PROJECT →
  </span>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    overflow: hidden;
    width: 100%;
    max-width: 340px;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    color: var(--bk);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  /* ─── DESKTOP: allow 2-col on wider screens ─── */
  @media (min-width: 720px) {
    .projects-grid {
      gap: 22px;
    }
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

  .card-logo {
    width: 36px;
    height: 36px;
    object-fit: contain;
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

  .card:hover .view-btn {
    background: var(--bk);
    color: var(--wt);
  }
</style>
