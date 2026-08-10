<script lang="ts">
  import { onMount } from 'svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Landingpage from '$lib/components/Landingpage.svelte';
  import Organisations from '$lib/components/Organisations.svelte';
  import UIDesigns from '$lib/components/UIDesigns.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Community from '$lib/components/Community.svelte';
  import Consultant from '$lib/components/Consultant.svelte';
  import Services from '$lib/components/Services.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
</script>

<Seo
  path="/"
  title="Project Development Specialist, M&E Consultant & Software Developer in Malawi"
  description="Peter Rodrigues Butao is a project development specialist, M&E consultant, web designer and software developer based in Lilongwe, Malawi."
  keywords={[
    'Peter Rodrigues Butao',
    'Peter Butao',
    'Software Developer Malawi',
    'M&E Consultant Malawi',
    'Web Designer Lilongwe',
    'Project Development Specialist'
  ]}
  schema={[
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://peterbutao.pages.dev/#webpage',
      name: 'Peter Rodrigues Butao — Portfolio',
      description:
        'Project development specialist, M&E consultant, web designer and software developer based in Malawi.',
      url: 'https://peterbutao.pages.dev/',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Peter Rodrigues Butao'
      },
      primaryImageOfPage: 'https://peterbutao.pages.dev/profile.webp',
      inLanguage: 'en'
    }
  ]}
/>

<div class="page-wrapper" role="presentation">
  <div class="blob-layer" aria-hidden="true">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob w1"></div>
    <div class="blob w2"></div>
  </div>

  <div class="page-glass" role="presentation">
    <div class="glass-inner">
      <section id="hero">
      <Landingpage />
    </section>
  
  <section id="organisations" class="page-section">
    <Organisations />
  </section>
  
  <section id="ui-designs" class="page-section">
    <UIDesigns />
  </section>

  <section id="projects" class="page-section">
    <Projects />
  </section>

  <section id="community" class="page-section">
    <Community />
  </section>

  <section id="experience" class="page-section">
    <Experience />
  </section>
  <section id="consultant" class="page-section">
    <Consultant />
  </section>
  <section id="services" class="page-section">
    <Services />
  </section>
      <section id="contact" class="page-section">
        <Contacts />
      </section>
    </div>
  </div>
</div>

<style>
  .page-wrapper {
    position: relative;
    min-height: 100vh;
    margin-top: 0;
    padding-top: 0;
    background:
      radial-gradient(140% 90% at 15% 0%, #fff8d6 0%, transparent 55%),
      radial-gradient(130% 90% at 90% 100%, #fff1bd 0%, transparent 50%),
      var(--wt);
  }

  /* ─── BLOB LAYER (fixed behind the glass) ─── */
  .blob-layer {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(32px);
    will-change: transform;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
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
    animation-name: blobTravelA;
    animation-duration: 17s;
    animation-delay: -6s;
  }

  .b2 {
    top: 18%; right: -12%;
    width: 380px; height: 380px;
    background: #ffd43b;
    opacity: 0.5;
    animation-name: blobTravelB;
    animation-duration: 22s;
    animation-delay: -12s;
  }

  .b3 {
    top: 40%; left: -10%;
    width: 280px; height: 280px;
    background: radial-gradient(circle at 60% 40%, #ffe680, #f5b800 65%, #e0a200);
    opacity: 0.5;
    animation-name: blobTravelC;
    animation-duration: 16s;
    animation-delay: -3s;
  }



  .w1 {
    top: 8%; right: 18%;
    width: 220px; height: 220px;
    background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.96), rgba(255,255,255,0.72) 60%, rgba(255,255,255,0.22));
    opacity: 0.78;
    animation-name: whiteTravelA;
    animation-duration: 14s;
    animation-delay: -5s;
  }

  .w2 {
    top: 55%; left: 20%;
    width: 260px; height: 260px;
    background: radial-gradient(circle at 45% 45%, rgba(255,255,255,0.92), rgba(255,255,255,0.5) 65%, rgba(255,255,255,0.15));
    opacity: 0.72;
    animation-name: whiteTravelB;
    animation-duration: 18s;
    animation-delay: -10s;
  }



  @keyframes blobTravelA {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    25%  { transform: translate3d(30vw, -22vh, 0) scale(1.15); }
    50%  { transform: translate3d(-16vw, 18vh, 0) scale(0.9); }
    75%  { transform: translate3d(24vw, 30vh, 0) scale(1.1); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes blobTravelB {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    33%  { transform: translate3d(-34vw, 12vh, 0) scale(0.95); }
    66%  { transform: translate3d(10vw, -30vh, 0) scale(1.2); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes blobTravelC {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    30%  { transform: translate3d(22vw, 24vh, 0) scale(1.1); }
    60%  { transform: translate3d(-20vw, -14vh, 0) scale(0.85); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes whiteTravelA {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    40%  { transform: translate3d(-18vw, 12vh, 0) scale(1.14); }
    70%  { transform: translate3d(16vw, -10vh, 0) scale(0.92); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes whiteTravelB {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    35%  { transform: translate3d(20vw, -18vh, 0) scale(1.08); }
    65%  { transform: translate3d(-16vw, 10vh, 0) scale(0.94); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  /* ─── FULL-BLEED GLASS ─── */
  .page-glass {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    margin-top: 0;
    padding-top: 0;
    background: linear-gradient(rgba(250, 250, 248, 0.68), rgba(250, 250, 248, 0.52));
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-top: 1px solid rgba(255, 204, 0, 0.14);
    border-bottom: 1px solid rgba(255, 204, 0, 0.14);
    box-shadow: inset 0 0 140px rgba(255, 204, 0, 0.05);
    transform-style: preserve-3d;
    perspective: 1200px;
    will-change: transform;
    contain: paint;
    overflow: hidden;
  }

  .glass-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 420px;
    height: 420px;
    margin: -210px 0 0 -210px;
    background: radial-gradient(circle, rgba(255, 204, 0, 0.24), rgba(255, 204, 0, 0) 72%);
    filter: blur(14px);
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .glass-inner {
    position: relative;
    z-index: 1;
    width: min(100%, 1100px);
    margin: 0 auto;
    padding: 0 0 14px;
  }

  /* @media (max-width: 720px) {
    .b1 { width: 150px; height: 150px; }
    .b2 { width: 190px; height: 190px; }
    .b3 { width: 140px; height: 140px; }
    .w1 { width: 120px; height: 120px; }
    .w2 { width: 140px; height: 140px; }
  } */

  @media (prefers-reduced-motion: reduce) {
    .blob {
      animation: none;
    }
  }
</style>
