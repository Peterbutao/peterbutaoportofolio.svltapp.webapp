<!-- 
  Place organisation logos in /static/ as:
    logo-1.png, logo-2.png ... logo-6.png
  They will be displayed below. Fallback text shows if image is missing.
-->

<script>
  const orgs = [
    { src: '/logo (1).png', name: 'Organisation 1' },
    { src: '/logo (2).png', name: 'Organisation 2' },
    { src: '/logo (3).png', name: 'Organisation 3' },
    { src: '/logo (4).png', name: 'Organisation 4' },
    { src: '/logo (5).png', name: 'Organisation 5' },
    { src: '/logo (6).png', name: 'Organisation 6' },
  ];

  function handleImageError(event) {
    event.target.style.display = 'none';
    event.target.nextElementSibling.style.display = 'flex';
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
          on:error={handleImageError}
        />
        <span class="fallback">{org.name}</span>
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
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .logo-item:hover {
    border-color: var(--yl);
    box-shadow: 0 2px 12px rgba(255,204,0,0.18);
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
