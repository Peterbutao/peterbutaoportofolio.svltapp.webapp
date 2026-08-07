<script lang="ts">
  import { onMount } from 'svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { services } from '$lib/data/services';
  import { generateServiceSchema, generateBreadcrumbSchema } from '$lib/utils/seo';
  import { siteConfig } from '$lib/config/site';
  import '$lib/page-styles.css';

  const serviceSchemas = services.map((svc) => generateServiceSchema({ name: svc.title, description: svc.desc }));

  let codeWrap: HTMLElement | null = null;

  const teases = [
    'Built to move ideas from brief to launch.',
    'Same studio energy, project-sized scope.',
    'Design, code, and coordination under one roof.',
    'Pragmatic delivery for real-world programmes.'
  ];
  let tease = $state(teases[0]);

  function spinTease() {
    tease = teases[Math.floor(Math.random() * teases.length)];
  }
</script>

<Seo
  path="/services"
  title="Services — Project Management, Web Design & Software Development"
  description="Services offered by Peter Rodrigues Butao: project implementation & management, monitoring & evaluation support, UI/UX & web design, and full-spectrum software development based in Lilongwe, Malawi."
  keywords={['project management services Malawi', 'software development services', 'web design services', 'M&E support', 'UI/UX design Malawi']}
  schema={[
    ...serviceSchemas,
    generateBreadcrumbSchema([
      { name: 'Home', url: `${siteConfig.url}/` },
      { name: 'Services', url: `${siteConfig.url}/services` }
    ])
  ]}
/>

<div class="page" role="presentation">
  <div class="blob-layer" aria-hidden="true">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob w1"></div>
    <div class="blob w2"></div>
  </div>

    <div class="glass" role="presentation">
    <div class="card" role="presentation">
      <p class="eyebrow" data-stagger>EXPERTISE</p>

      <div class="code-wrap" bind:this={codeWrap} data-stagger>
        <div class="code-shadow" aria-hidden="true">WHAT I DO</div>
        <div
          class="code"
          role="button"
          tabindex="0"
          onclick={spinTease}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spinTease(); } }}
          title="Click me"
        >WHAT I DO</div>
      </div>

      <p class="sub" data-stagger>Structured delivery, purposeful design, and clean code for organisations that need results that last.</p>
      <p class="tease" data-stagger>{tease}</p>

      <ul class="grid" data-stagger>
        {#each services as svc}
          <li>
            <article class="svc-card">
              <div class="svc-icon">{@html svc.icon}</div>
              <h2>{svc.title}</h2>
              <p class="svc-desc">{svc.desc}</p>
              <div class="tags">
                {#each svc.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
              <a
                href={svc.link.href}
                target="_blank"
                rel="noopener"
                class="svc-link"
              >{svc.link.label} →</a>
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
     max-width: 880px;
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
     width: 480px; height: 480px;
     margin-top: -240px; margin-left: -240px;
     background: radial-gradient(circle, rgba(255, 204, 0, 0.45), rgba(255, 204, 0, 0) 70%);
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
     max-width: 460px;
     line-height: 1.7;
   }

   .tease {
     font-size: 0.72rem;
     font-style: italic;
     color: #a3a3a3;
     margin-top: 4px;
     min-height: 1.1em;
   }

   /* ─── SERVICES GRID ─── */
   .grid {
     list-style: none;
     display: grid;
     gap: 16px;
     width: 100%;
     margin-top: 32px;
     transform-style: preserve-3d;
   }

   .svc-card {
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     text-align: left;
     gap: 0;
     background: rgba(255, 255, 255, 0.72);
     backdrop-filter: blur(8px);
     -webkit-backdrop-filter: blur(8px);
     border: 1px solid rgba(0, 0, 0, 0.08);
     border-radius: 14px;
     padding: 24px;
     transition: border-color 0.2s, box-shadow 0.2s;
     will-change: transform;
     transform-style: preserve-3d;
   }

   .svc-card:hover {
     border-color: var(--yl);
     box-shadow: 0 8px 28px rgba(255, 204, 0, 0.2), inset 0 0 60px rgba(255, 204, 0, 0.05);
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

   .svc-card h2 {
     font-family: var(--font-display);
     font-size: 1.3rem;
     letter-spacing: 0.06em;
     margin-bottom: 10px;
   }

   .svc-desc {
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
     border: 1px solid rgba(0, 0, 0, 0.1);
     background: rgba(250, 250, 248, 0.8);
     color: var(--bk);
   }

   .svc-link {
     margin-top: auto;
     display: inline-block;
     font-size: 0.75rem;
     font-weight: 700;
     letter-spacing: 0.06em;
     color: var(--bk);
     border-bottom: 2px solid var(--yl);
     padding-bottom: 1px;
     will-change: transform;
   }

   .svc-link:hover { color: var(--gray); }

   @media (min-width: 720px) {
     .grid {
       grid-template-columns: repeat(2, minmax(0, 1fr));
     }
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
