<script lang="ts">
  import { onMount } from 'svelte';
  import { projects } from '$lib/data/projects';
  import '$lib/page-styles.css';

  const teases = [
    'From timetable apps to terminal AI — shipped and live.',
    'Each project solves a real problem, end to end.',
    'Built in SvelteKit, Next.js, Python, and vanilla JS.',
    'Click around — every card opens to the real thing.'
  ];
  let tease = $state(teases[0]);

  function spinTease() {
    tease = teases[Math.floor(Math.random() * teases.length)];
  }
</script>

<svelte:head>
  <title>Projects — Peter Rodrigues Butao</title>
</svelte:head>

<div class="page" role="presentation">
  <div class="blob-layer" aria-hidden="true">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob w1"></div>
    <div class="blob w2"></div>
  </div>

  <div class="glass" role="presentation">
    <div class="card">
      <p class="eyebrow" data-stagger>PORTFOLIO</p>

      <div class="code-wrap" data-stagger>
        <div class="code-shadow" aria-hidden="true">PROJECTS</div>
        <div
          class="code"
          role="button"
          tabindex="0"
          onclick={spinTease}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spinTease(); } }}
          title="Click me"
        >PROJECTS</div>
      </div>

      <p class="sub" data-stagger>Software built for real problems — apps, dashboards, websites, and developer tools, shipped end to end.</p>
      <p class="tease" data-stagger>{tease}</p>

      <ul class="grid" data-stagger>
        {#each projects as p}
          <li>
            <article class="pcard">
              <a href={`/projects/${p.slug}`} class="pcard-thumb-link" aria-label={`View ${p.title}`}>
                <div class="pcard-thumb">
                  <img src={p.thumb} alt={p.title} loading="lazy" decoding="async" />
                </div>
              </a>
              <div class="pcard-body">
                <h2><a href={`/projects/${p.slug}`}>{p.title}</a></h2>
                <p class="pcard-desc">{p.desc}</p>
                <div class="chips">
                  <span class="chip chip-acc">{p.projecttype}</span>
                  <span class="chip">{p.date}</span>
                </div>
              </div>
              <div class="pcard-actions">
                <a href={`/projects/${p.slug}`} class="pbtn">DETAILS</a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" class="pbtn">GITHUB</a>
                <a href={p.src} target="_blank" rel="noopener noreferrer" class="pbtn">PROJECT LINK</a>
              </div>
            </article>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
   /* ─── OVERrides ─── */
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

   .tease {
     font-size: 0.72rem;
     font-style: italic;
     color: #a3a3a3;
     margin-top: 4px;
     min-height: 1.1em;
   }

   /* ─── PROJECT GRID ─── */
   .grid {
     list-style: none;
     display: grid;
     grid-template-columns: 1fr;
     gap: 18px;
     width: 100%;
     margin-top: 32px;
     transform-style: preserve-3d;
   }

   @media (min-width: 800px) {
     .grid {
       grid-template-columns: repeat(2, 1fr);
     }
   }

   .pcard {
     height: 100%;
     display: flex;
     flex-direction: column;
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

   .pcard:hover {
     border-color: var(--yl);
     box-shadow: 0 10px 32px rgba(255, 204, 0, 0.22), inset 0 0 60px rgba(255, 204, 0, 0.05);
   }

   .pcard-thumb-link {
     display: block;
     color: inherit;
   }

   .pcard-thumb {
     aspect-ratio: 16 / 9;
     background: linear-gradient(135deg, #f4f3ec 0%, #e6e3d6 100%);
     overflow: hidden;
     display: flex;
     align-items: center;
     justify-content: center;
     transform: translateZ(16px);
   }

   .pcard-thumb img {
     width: 100%; height: 100%;
     object-fit: cover;
     transition: transform 0.45s ease;
   }

   .pcard:hover .pcard-thumb img { transform: scale(1.05); }

   .pcard-body {
     flex: 1;
     display: flex;
     flex-direction: column;
     gap: 8px;
     padding: 18px 18px 6px;
   }

   .pcard-body h2 {
     font-family: var(--font-display);
     font-size: 1.05rem;
     font-weight: 700;
     letter-spacing: 0.02em;
     line-height: 1.3;
   }

   .pcard-body h2 a { color: var(--bk); }

   .pcard-body h2 a:hover { color: var(--gray); }

   .pcard-desc {
     font-size: 0.8rem;
     color: var(--gray);
     line-height: 1.65;
   }

   .chips {
     display: flex;
     flex-wrap: wrap;
     gap: 8px;
     margin-top: 4px;
   }

   .chip {
     font-size: 0.6rem;
     font-weight: 700;
     letter-spacing: 0.1em;
     text-transform: uppercase;
     padding: 4px 10px;
     border-radius: 4px;
     border: 1px solid rgba(0, 0, 0, 0.1);
     background: rgba(250, 250, 248, 0.85);
     color: var(--bk);
   }

   .chip-acc {
     background: var(--yl);
     border-color: var(--yl);
   }

   .pcard-actions {
     display: flex;
     flex-wrap: wrap;
     gap: 8px;
     padding: 14px 18px 18px;
   }

   .pbtn {
     display: inline-flex;
     align-items: center;
     justify-content: center;
     padding: 9px 14px;
     background: transparent;
     color: var(--bk);
     border: 1.5px solid var(--bk);
     border-radius: 999px;
     font-weight: 700;
     font-size: 0.62rem;
     letter-spacing: 0.08em;
     transition: background 0.2s, color 0.2s, border-color 0.2s;
     will-change: transform;
   }

   .pbtn:hover {
     background: var(--bk);
     color: var(--wt);
     border-color: var(--bk);
   }

   @media (max-width: 560px) {
     .b1 { width: 160px; height: 160px; }
     .b2 { width: 180px; height: 180px; }
     .b3 { width: 170px; height: 170px; }
     .w1 { width: 120px; height: 120px; }
     .w2 { width: 140px; height: 140px; }
     .glass { padding: 32px 20px 30px; }
   }

   @media (prefers-reduced-motion: reduce) {
     .blob,
     .paper {
       animation: none;
     }
   }
</style>
