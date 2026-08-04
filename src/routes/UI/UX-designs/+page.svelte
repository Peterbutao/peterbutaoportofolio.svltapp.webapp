<script>
  import { onMount } from 'svelte';
  import { designs } from '$lib/data/designs';

  const carouselMap = {
    1: ['/UI-designs/uipng-1.png', '/UI-designs/uipng-2.png', '/UI-designs/uipng-3.png'],
    2: ['/UI-designs/uipng-2.png', '/UI-designs/uipng-3.png', '/UI-designs/uipng-4.png'],
    3: ['/UI-designs/uipng-3.png', '/UI-designs/uipng-4.png', '/UI-designs/uipng-5.png'],
    4: ['/UI-designs/uipng-4.png', '/UI-designs/uipng-5.png', '/UI-designs/uipng-6.png'],
    5: ['/UI-designs/uipng-5.png', '/UI-designs/uipng-6.png', '/UI-designs/uipng-1.png'],
    6: ['/UI-designs/uipng-6.png', '/UI-designs/uipng-1.png', '/UI-designs/uipng-2.png']
  };

  let activeSlideById = Object.fromEntries(designs.map((d) => [d.slug, 0]));

  function moveSlide(slug, direction) {
    const slides = carouselMap[slug] ?? [designs.find((d) => d.slug === slug)?.thumb ?? ''];
    const nextIndex = activeSlideById[slug] ?? 0;
    const total = slides.length;
    activeSlideById[slug] = (nextIndex + direction + total) % total;
  }

  onMount(() => {
    const interval = setInterval(() => {
      designs.forEach((d) => {
        const slides = carouselMap[d.slug] ?? [d.thumb];
        const current = activeSlideById[d.slug] ?? 0;
        activeSlideById[d.slug] = (current + 1) % slides.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  });
</script>

<section class="ui-designs-page">
  <div class="ui-designs-inner">
    <div class="section-label">UI/UX Work</div>
    <div class="section-divider"></div>

    <ul class="designs-grid">
      {#each designs as d}
        <li>
          <article class="design-card">
            <div class="card-thumb">
              <div class="carousel-frame">
                <div class="carousel-track" style={`transform: translateX(-${(activeSlideById[d.slug] ?? 0) * 100}%);`}>
                  {#each carouselMap[d.slug] ?? [d.thumb] as slide}
                    <div class="carousel-slide">
                      <img src={slide} alt={d.title} loading="lazy" decoding="async" />
                    </div>
                  {/each}
                </div>
              </div>

              <div class="carousel-controls">
                <button type="button" class="carousel-btn" aria-label="Previous image" on:click={() => moveSlide(d.slug, -1)}>‹</button>
                <button type="button" class="carousel-btn" aria-label="Next image" on:click={() => moveSlide(d.slug, 1)}>›</button>
              </div>
            </div>

            <div class="card-body">
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <div class="card-foot">
                <span class="date">{d.date}</span>
                <a href={d.src} target="_blank" rel="noopener" class="view-link">VIEW DESIGN</a>
              </div>
            </div>
          </article>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .ui-designs-page {
    padding: 120px 20px 60px;
  }

  .ui-designs-inner {
    max-width: var(--max-w);
    margin: 0 auto;
  }

  .designs-grid {
    display: grid;
    gap: 18px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .design-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    overflow: hidden;
    color: var(--bk);
  }

  .card-thumb {
    background: linear-gradient(135deg, #f4f3ec 0%, #e6e3d6 100%);
    overflow: hidden;
    position: relative;
  }

  .carousel-frame {
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    width: 100%;
    transition: transform 0.45s ease;
  }

  .carousel-slide {
    width: 100%;
    flex: 0 0 100%;
  }

  .carousel-slide img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .carousel-controls {
    position: absolute;
    inset: auto 12px 12px auto;
    display: flex;
    gap: 8px;
    z-index: 2;
  }

  .carousel-btn {
    border: none;
    background: rgba(0, 0, 0, 0.72);
    color: white;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
  }

  .card-body {
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-body h3 {
    font-size: 0.92rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }

  .card-body p {
    margin: 0;
    font-size: 0.78rem;
    color: var(--gray);
    line-height: 1.7;
  }

  .card-foot {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .date {
    font-size: 0.68rem;
    color: var(--gray);
  }

  .view-link {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--bk);
    border: 1.5px solid var(--bk);
    border-radius: 999px;
    padding: 8px 12px;
  }

  @media (max-width: 767px) {
    .card-body {
      padding: 14px 16px 16px;
    }

    .carousel-slide img {
      height: 240px;
    }
  }
</style>
