<!-- 
  Place organisation logos in /static/ as:
    logo-1.png, logo-2.png ... logo-6.png
  They will be displayed below. Fallback text shows if image is missing.
-->

<script>
  const orgs = [
    { src: '/logo (1).webp', name: 'Makoka Research Station' },
    { src: '/logo (2).webp', name: 'Development Fund Of Norway' },
    { src: '/logo (3).webp', name: 'LUANAR' },
    { src: '/logo (4).webp', name: 'Agrilab MW' },
    { src: '/logo (5).png', name: 'FES' },
    { src: '/logo (6).webp', name: 'Find Your Feet' },
    { src: '/logo (7).webp', name: 'Claradens' },
    { src: '/logo (8).webp', name: 'Korevia' },
    { src: '/logo (9).webp', name: 'Youth Arise Network' },
    { src: '/logo (10).png', name: 'Rotaract' },
    { src: '/logo (11).webp', name: 'Courgagoues Kids Foundtation' },
    { src: '/logo (12).webp', name: 'NCRS' },
  ];

  /** @param {Event} event */
  function handleImageError(event) {
    const img = /** @type {HTMLImageElement} */ (event.currentTarget);
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback && fallback instanceof HTMLElement) fallback.style.display = 'flex';
  }
</script>

<div class="section-label">Trusted by</div>
<h2 class="section-title">Strong Global<br>Organisations</h2>
<div class="section-divider"></div>

<div class="orgs-box">
  <p class="sub">Organisations I have worked with within 5+ years</p>
  <ul class="logos-grid">
    {#each orgs as org}
      <li class="logo-item">
        <img
          src={org.src}
          alt={org.name}
          loading="lazy"
          decoding="async"
          onerror={handleImageError}
        />
        <span class="fallback">{org.name}</span>
        <span class="org-tooltip">{org.name}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .orgs-box {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 28px 20px;
    text-align: center;
    background: white;
  }

  .sub {
    font-size: 0.78rem;
    color: var(--gray);
    margin-bottom: 22px;
  }

  .logos-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }

  .logo-item {
    width: 80px; height: 52px;
    background: var(--wt);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .logo-item:hover {
    border-color: var(--yl);
    box-shadow: 0 2px 12px rgba(255,204,0,0.18);
  }

  .logo-item .org-tooltip {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    pointer-events: none;
    background: rgba(17, 24, 39, 0.95);
    color: white;
    padding: 5px 8px;
    border-radius: 6px;
    font-size: 0.6rem;
    font-weight: 600;
    white-space: nowrap;
    z-index: 2;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .logo-item:hover .org-tooltip,
  .logo-item:focus-within .org-tooltip {
    opacity: 1;
    transform: translate(-50%, -110%);
  }

  .logo-item img {
    width: 100%; height: 100%;
    object-fit: contain;
    padding: 6px;
  }

  .logo-item .fallback {
    display: none;
    font-size: 0.55rem;
    font-weight: 600;
    color: var(--gray);
    text-align: center;
    padding: 4px;
    line-height: 1.3;
  }
</style>
