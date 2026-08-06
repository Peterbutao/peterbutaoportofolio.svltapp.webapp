<script>
  import { onMount, onDestroy } from 'svelte';
  import { designs } from '$lib/data/designs';
  import '$lib/page-styles.css';

  /** @type {Record<string, number>} */
  let activeSlideById = Object.fromEntries(designs.map((d) => [d.slug, 0]));

  let interval;

  function advanceAll() {
    for (const d of designs) {
      const slides = d.carousel ?? [d.thumb ?? ''];
      const nextIndex = activeSlideById[d.slug] ?? 0;
      activeSlideById[d.slug] = (nextIndex + 1) % slides.length;
    }
  }

  /** @param {string} slug @param {number} direction */
  function moveSlide(slug, direction) {
    const design = designs.find((d) => d.slug === slug);
    const slides = design?.carousel ?? [design?.thumb ?? ''];
    const nextIndex = activeSlideById[slug] ?? 0;
    const total = slides.length;
    activeSlideById[slug] = (nextIndex + direction + total) % total;
    resetInterval();
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(advanceAll, 4000);
  }

  onMount(() => {
    interval = setInterval(advanceAll, 4000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<svelte:head>
  <title>UI/UX Designs — Peter Rodrigues Butao</title>
</svelte:head>

<div class="page" role="presentation">
  <div class="blob-layer" aria-hidden="true">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob w1"></div>
    <div class="paper p1"></div>
    <div class="paper p2"></div>
  </div>

  <div class="glass">
    <div class="card" role="presentation">

      <p class="eyebrow" data-stagger>DESIGNS</p>

      <div class="code-wrap" data-stagger>
        <div class="code-shadow" aria-hidden="true">UI/UX</div>
        <div class="code">UI/UX</div>
      </div>

      <p class="sub" data-stagger>Pixel-perfect interfaces crafted for clarity, delight, and purpose.</p>

      <ul class="designs-grid" data-stagger>
        {#each designs as d}
          <li>
            <article class="design-card">
              <a href={`/UI/UX-designs/${d.slug}`} class="card-thumb-link" aria-label={`View ${d.title}`}>
                <div class="card-thumb">
                  <div class="carousel-frame">
                    <div class="carousel-track" style={`transform: translateX(-${(activeSlideById[d.slug] ?? 0) * 100}%);`}>
                      {#each d.carousel as slide}
                        <div class="carousel-slide">
                          <img 
                            src={slide} 
                            alt={d.title} 
                            loading="lazy" 
                            decoding="async" 
                            width="400"
                            height="300"
                          />
                        </div>
                      {/each}
                    </div>
                  </div>

                  <div class="carousel-controls">
                    <button type="button" class="carousel-btn" aria-label="Previous image" onclick={() => moveSlide(d.slug, -1)}>‹</button>
                    <button type="button" class="carousel-btn" aria-label="Next image" onclick={() => moveSlide(d.slug, 1)}>›</button>
                  </div>
                </div>
              </a>

              <div class="card-body">
                <h3><a href={`/UI/UX-designs/${d.slug}`}>{d.title}</a></h3>
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
  </div>
</div>

<style>
  .page {
    position: relative;
    min-height: calc(100vh - var(--nav-h));
    padding: 72px 20px 96px;
    overflow-x: hidden;
    background:
      radial-gradient(120% 90% at 12% 0%, #fff8d6 0%, transparent 55%),
      radial-gradient(120% 90% at 90% 100%, #fff1bd 0%, transparent 50%),
      var(--wt);
  }

  .blob-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .blob {
      animation: none;
    }
  }

  @media (max-width: 768px) {
    .blob {
      animation-duration: 25s;
    }
  }

  .b1 {
    top: -10%; left: -8%;
    width: 300px; height: 300px;
    background: radial-gradient(circle at 35% 35%, #fff0a8, #ffcc00 62%, #f0b400);
    opacity: 0.6;
    animation-name: travelA;
    animation-duration: 17s;
    animation-delay: -6s;
  }

  .b2 {
    top: 10%; right: -10%;
    width: 340px; height: 340px;
    background: #ffd43b;
    opacity: 0.5;
    animation-name: travelB;
    animation-duration: 22s;
    animation-delay: -12s;
  }

  .b3 {
    bottom: 4%; right: 6%;
    width: 320px; height: 320px;
    background: radial-gradient(circle at 60% 40%, #ffe680, #f5b800 65%, #e0a200);
    opacity: 0.5;
    animation-name: travelC;
    animation-duration: 15s;
    animation-delay: -4s;
  }

  .b4 {
    top: 44%; left: -12%;
    width: 260px; height: 260px;
    background: #ffcc00;
    opacity: 0.55;
    animation-name: travelB;
    animation-duration: 12s;
    animation-delay: -17s;
  }

  .b5 {
    bottom: -12%; left: 24%;
    width: 360px; height: 360px;
    background: #ffe066;
    opacity: 0.45;
    animation-name: travelA;
    animation-duration: 13s;
    animation-delay: -9s;
  }

  .w1 {
    top: 6%; left: 28%;
    width: 200px; height: 200px;
    background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.96), rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.2));
    opacity: 0.8;
    animation-name: whiteA;
    animation-duration: 14s;
    animation-delay: -5s;
  }

  .w2 {
    bottom: 16%; left: 10%;
    width: 170px; height: 170px;
    background: radial-gradient(circle at 45% 45%, rgba(255,255,255,0.92), rgba(255,255,255,0.5) 65%, rgba(255,255,255,0.15));
    opacity: 0.75;
    animation-name: whiteB;
    animation-duration: 18s;
    animation-delay: -10s;
  }

  @keyframes travelA {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    25%  { transform: translate3d(28vw, -20vh, 0) scale(1.15); }
    50%  { transform: translate3d(-16vw, 16vh, 0) scale(0.9); }
    75%  { transform: translate3d(22vw, 26vh, 0) scale(1.1); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes travelB {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    33%  { transform: translate3d(-32vw, 12vh, 0) scale(0.95); }
    66%  { transform: translate3d(12vw, -26vh, 0) scale(1.2); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes travelC {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    30%  { transform: translate3d(20vw, 22vh, 0) scale(1.1); }
    60%  { transform: translate3d(-18vw, -14vh, 0) scale(0.85); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes whiteA {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    40%  { transform: translate3d(-18vw, 12vh, 0) scale(1.12); }
    70%  { transform: translate3d(16vw, -10vh, 0) scale(0.92); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes whiteB {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    50%  { transform: translate3d(14vw, -14vh, 0) scale(1.1); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  .paper {
    position: absolute;
    width: 34px; height: 34px;
    background: var(--yl);
    opacity: 0.5;
    clip-path: polygon(0 0, 78% 6%, 100% 32%, 92% 100%, 0 86%);
    animation-name: paperFloat;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    will-change: transform;
  }

  .p1 { top: 22%; left: 8%; rotate: 18deg; animation-duration: 11s; animation-delay: -2s; }
  .p2 { top: 62%; right: 6%; width: 22px; height: 22px; opacity: 0.65; background: var(--bk); rotate: -30deg; animation-duration: 14s; animation-delay: -7s; }
  .p3 { top: 12%; right: 26%; width: 26px; height: 26px; opacity: 0.4; rotate: 45deg; animation-duration: 16s; animation-delay: -11s; }
  .p4 { bottom: 14%; left: 22%; width: 20px; height: 20px; opacity: 0.6; rotate: -12deg; animation-duration: 12s; animation-delay: -5s; }

  @keyframes paperFloat {
    0%   { translate: 0 0; rotate: 0deg; }
    50%  { translate: 26px -60px; rotate: 200deg; opacity: 0.8; }
    100% { translate: 0 0; rotate: 360deg; }
  }

  .glass {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    background: linear-gradient(rgba(250, 250, 248, 0.55), rgba(250, 250, 248, 0.35));
    backdrop-filter: blur(10px) saturate(140%);
    -webkit-backdrop-filter: blur(10px) saturate(140%);
    border: 1px solid rgba(255, 204, 0, 0.18);
    border-radius: 18px;
    box-shadow: inset 0 0 120px rgba(255, 204, 0, 0.06), 0 24px 60px rgba(0, 0, 0, 0.08);
    padding: 44px 32px 40px;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .glow {
    position: absolute;
    top: 50%; left: 50%;
    width: 520px; height: 520px;
    margin-top: -260px; margin-left: -260px;
    background: radial-gradient(circle, rgba(255, 204, 0, 0.4), rgba(255, 204, 0, 0) 70%);
    filter: blur(10px);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.7;
    will-change: transform;
  }

  .card {
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
  }

  .eyebrow {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gray);
  }

  .code-wrap {
    position: relative;
    margin: 14px 0 6px;
    transform-style: preserve-3d;
  }

  .code,
  .code-shadow {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 10vw, 5.5rem);
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  .code {
    position: relative;
    z-index: 2;
    color: transparent;
    -webkit-text-stroke: 3px var(--bk);
    cursor: pointer;
    user-select: none;
  }

  .code-shadow {
    position: absolute;
    top: 0; left: 0;
    z-index: 1;
    color: var(--yl);
    transform: translate(8px, 10px);
  }

  .sub {
    color: var(--gray);
    font-size: 0.9rem;
    max-width: 480px;
    line-height: 1.7;
  }

  .designs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    margin-top: 32px;
    transform-style: preserve-3d;
  }

  @media (min-width: 800px) {
    .designs-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .design-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    overflow: hidden;
    text-align: left;
    transition: border-color 0.2s, box-shadow 0.2s;
    will-change: transform;
    transform-style: preserve-3d;
  }

  .design-card:hover {
    border-color: var(--yl);
    box-shadow: 0 10px 32px rgba(255, 204, 0, 0.22), inset 0 0 60px rgba(255, 204, 0, 0.05);
  }

  .card-thumb {
    background: linear-gradient(135deg, #f4f3ec 0%, #e6e3d6 100%);
    overflow: hidden;
    position: relative;
  }

  .card-thumb-link {
    display: block;
    color: inherit;
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

  .card-body h3 a {
    color: var(--bk);
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

  @media (max-width: 560px) {
    .b1 { width: 160px; height: 160px; }
    .b2 { width: 180px; height: 180px; }
    .b3 { width: 170px; height: 170px; }
    .w1 { width: 120px; height: 120px; }
    .glass { padding: 32px 20px 30px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .blob,
    .paper {
      animation: none;
    }
  }
</style>