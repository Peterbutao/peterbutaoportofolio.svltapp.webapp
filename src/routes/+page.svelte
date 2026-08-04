<script>
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

<div class="page-wrapper">
  <div class="blob-layer" aria-hidden="true">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob b4"></div>
    <div class="blob b5"></div>
    <div class="blob b6"></div>
    <div class="blob w1"></div>
    <div class="blob w2"></div>
    <div class="blob w3"></div>
  </div>

  <div class="page-glass">
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
    filter: blur(60px);
    will-change: transform;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
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

  .b4 {
    bottom: 8%; right: 4%;
    width: 340px; height: 340px;
    background: #ffcc00;
    opacity: 0.55;
    animation-name: blobTravelB;
    animation-duration: 11s;
    animation-delay: -18s;
  }

  .b5 {
    top: 62%; right: -14%;
    width: 300px; height: 300px;
    background: #ffe066;
    opacity: 0.45;
    animation-name: blobTravelA;
    animation-duration: 12s;
    animation-delay: -9s;
  }

  .b6 {
    bottom: -12%; left: 30%;
    width: 360px; height: 360px;
    background: radial-gradient(circle at 40% 60%, #ffd633, #ffc200 60%, #f0b400);
    opacity: 0.5;
    animation-name: blobTravelC;
    animation-duration: 13s;
    animation-delay: -15s;
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

  .w3 {
    bottom: 4%; right: 20%;
    width: 180px; height: 180px;
    background: radial-gradient(circle at 45% 45%, rgba(255,255,255,0.86), rgba(255,255,255,0.58) 65%, rgba(255,255,255,0.12));
    opacity: 0.88;
    animation-name: whiteTravelC;
    animation-duration: 13s;
    animation-delay: -8s;
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

  @keyframes whiteTravelC {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    50%  { transform: translate3d(-14vw, -16vh, 0) scale(1.12); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  /* ─── FULL-BLEED GLASS ─── */
  .page-glass {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    background: linear-gradient(rgba(250, 250, 248, 0.5), rgba(250, 250, 248, 0.34));
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
    border-top: 1px solid rgba(255, 204, 0, 0.14);
    border-bottom: 1px solid rgba(255, 204, 0, 0.14);
    box-shadow: inset 0 0 140px rgba(255, 204, 0, 0.05);
  }

  .glass-inner {
    width: min(100%, 1100px);
    margin: 0 auto;
    padding: 6px 0 14px;
  }

  @media (max-width: 720px) {
    .b1 { width: 150px; height: 150px; }
    .b2 { width: 190px; height: 190px; }
    .b3 { width: 140px; height: 140px; }
    .b4 { width: 170px; height: 170px; }
    .b5 { width: 150px; height: 150px; }
    .b6 { width: 180px; height: 180px; }
    .w1 { width: 120px; height: 120px; }
    .w2 { width: 140px; height: 140px; }
    .w3 { width: 110px; height: 110px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .blob {
      animation: none;
    }
  }
</style>
