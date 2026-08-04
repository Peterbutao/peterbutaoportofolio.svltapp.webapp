<script>
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import gsap from 'gsap';

  let status = $derived(page.status);
  let message = $derived(page.error?.message ?? 'Something went wrong.');

  const copy = {
    404: {
      label: 'LOST IN THE BLUR',
      sub: 'This page drifted off the map. Let\'s get you back to solid ground.'
    },
    400: {
      label: 'BAD REQUEST',
      sub: 'That request didn\'t quite add up. Double-check it and try again.'
    },
    403: {
      label: 'ACCESS DENIED',
      sub: 'This corner of the site is off-limits. No peeking!'
    },
    429: {
      label: 'TOO FAST',
      sub: 'You\'re moving quicker than the server can follow. Take a breath.'
    },
    500: {
      label: 'INTERNAL GLITCH',
      sub: 'The server hit a snag. Give it a second and try again.'
    },
    503: {
      label: 'UNDER MAINTENANCE',
      sub: 'We\'re tinkering under the hood. Back very soon.'
    }
  };

  let meta = $derived({
    code: String(status),
    ...(copy[status] ?? { label: 'UNEXPECTED ERROR', sub: 'Something unexpected happened. Let\'s head back.' })
  });

  const teases = [
    'Falling feels different in slow motion.',
    'Even the best portfolios glitch sometimes.',
    'This page is having a little nap.',
    'We ran out of road — let\'s reroute.',
    'Hmm. This one slipped through the wires.'
  ];
  let tease = $state(teases[0]);

  let cardRef;
  let codeWrap;
  let codeRef;
  let glowRef;
  let btnRef;
  let cursorRef;

  function onPageMove(e) {
    gsap.to(cursorRef, { x: e.clientX, y: e.clientY, scale: 1, duration: 0.45, ease: 'power3.out' });
  }

  function onPageLeave() {
    gsap.to(cursorRef, { scale: 0, duration: 0.4, ease: 'power2.out' });
  }

  function onMove(e) {
    const r = cardRef.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    gsap.to(cardRef, {
      rotateX: ((y - r.height / 2) / r.height) * 10,
      rotateY: ((x - r.width / 2) / r.width) * -10,
      transformPerspective: 900,
      duration: 0.6,
      ease: 'power2.out'
    });
    gsap.to(glowRef, { x: x - r.width / 2, y: y - r.height / 2, duration: 0.6, ease: 'power2.out' });
    gsap.to(cursorRef, { scale: 1.7, duration: 0.3, ease: 'power2.out' });
  }

  function onLeave() {
    gsap.to(cardRef, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'elastic.out(1,0.5)' });
    gsap.to(glowRef, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
    gsap.to(cursorRef, { scale: 1, duration: 0.3, ease: 'power2.out' });
  }

  function magnet(e) {
    const r = btnRef.getBoundingClientRect();
    gsap.to(btnRef, {
      x: (e.clientX - r.left - r.width / 2) * 0.35,
      y: (e.clientY - r.top - r.height / 2) * 0.35,
      duration: 0.4,
      ease: 'power3.out'
    });
  }

  function unMagnet() {
    gsap.to(btnRef, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' });
  }

  function shake() {
    gsap.fromTo(
      codeRef,
      { x: 0, y: 0, rotate: 0, scale: 1 },
      {
        x: () => gsap.utils.random(-14, 14),
        y: () => gsap.utils.random(-10, 10),
        rotate: () => gsap.utils.random(-5, 5),
        duration: 0.05,
        repeat: 7,
        yoyo: true,
        ease: 'none',
        onComplete: () => gsap.set(codeRef, { x: 0, y: 0, rotate: 0 })
      }
    );
    tease = teases[Math.floor(Math.random() * teases.length)];
  }

  onMount(() => {
    gsap.set(cursorRef, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const tl = gsap.timeline();
    tl.fromTo(
      codeWrap,
      { opacity: 0, scale: 2.2, y: -40, rotate: -12 },
      { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 1.2, ease: 'elastic.out(1,0.5)' },
      0.1
    );
    tl.fromTo(
      cardRef.querySelectorAll('[data-stagger]'),
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
      0.55
    );
  });
</script>

<svelte:head>
  <title>{meta.code} — {meta.label}</title>
</svelte:head>

<div class="page" onmousemove={onPageMove} onmouseleave={onPageLeave}>
  <div class="blob-layer" aria-hidden="true">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob b4"></div>
    <div class="blob b5"></div>
    <div class="blob w1"></div>
    <div class="blob w2"></div>
    <div class="paper p1"></div>
    <div class="paper p2"></div>
    <div class="paper p3"></div>
    <div class="paper p4"></div>
  </div>

  <div class="glass">
    <div class="card" bind:this={cardRef} onmousemove={onMove} onmouseleave={onLeave}>
      <div class="glow" bind:this={glowRef} aria-hidden="true"></div>

      <p class="eyebrow" data-stagger>SYSTEM STATUS</p>

      <div class="code-wrap" bind:this={codeWrap} data-stagger>
        <div class="code-shadow" aria-hidden="true">{meta.code}</div>
        <div class="code" bind:this={codeRef} onclick={shake} title="Click me">{meta.code}</div>
      </div>

      <h1 data-stagger>{meta.label}</h1>
      <p class="sub" data-stagger>{meta.sub}</p>
      <p class="tech" data-stagger>{message}</p>
      <p class="tease" data-stagger>{tease}</p>

      <a
        href="/"
        class="btn"
        bind:this={btnRef}
        data-stagger
        onmousemove={magnet}
        onmouseleave={unMagnet}
      >BACK TO HOME</a>
    </div>
  </div>

  <div class="cursor-blob" bind:this={cursorRef} aria-hidden="true"></div>
</div>

<style>
  .page {
    position: relative;
    min-height: calc(100vh - var(--nav-h));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    overflow: hidden;
    background:
      radial-gradient(120% 90% at 12% 0%, #fff8d6 0%, transparent 55%),
      radial-gradient(120% 90% at 90% 100%, #fff1bd 0%, transparent 50%),
      var(--wt);
  }

  /* ─── BLOB LAYER ─── */
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
    filter: blur(60px);
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    will-change: transform;
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

  /* ─── TORN PAPER DRIFT ─── */
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

  /* ─── GLASS ─── */
  .glass {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 560px;
    background: linear-gradient(rgba(250, 250, 248, 0.55), rgba(250, 250, 248, 0.35));
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
    border: 1px solid rgba(255, 204, 0, 0.18);
    border-radius: 18px;
    box-shadow: inset 0 0 120px rgba(255, 204, 0, 0.06), 0 24px 60px rgba(0, 0, 0, 0.08);
    padding: 44px 32px 40px;
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

  .glow {
    position: absolute;
    top: 50%; left: 50%;
    width: 280px; height: 280px;
    margin-top: -140px; margin-left: -140px;
    background: radial-gradient(circle, rgba(255, 204, 0, 0.5), rgba(255, 204, 0, 0) 70%);
    filter: blur(10px);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.7;
    will-change: transform;
  }

  /* ─── CONTENT ─── */
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
    font-size: clamp(6rem, 24vw, 13rem);
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
    transform: translate(10px, 12px);
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 4.5vw, 2rem);
    letter-spacing: 0.1em;
    line-height: 1.15;
    margin-top: 4px;
  }

  .sub {
    color: var(--gray);
    font-size: 0.9rem;
    max-width: 380px;
    line-height: 1.7;
  }

  .tech {
    font-family: monospace;
    font-size: 0.72rem;
    color: #9aa0a6;
    letter-spacing: 0.02em;
  }

  .tease {
    font-size: 0.72rem;
    font-style: italic;
    color: #a3a3a3;
    margin-top: 4px;
    min-height: 1.1em;
  }

  .btn {
    display: inline-block;
    margin-top: 22px;
    background: var(--bk);
    color: var(--wt);
    border: 1.5px solid var(--bk);
    border-radius: 7px;
    padding: 14px 40px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.14em;
    transition: background 0.2s, color 0.2s;
    will-change: transform;
  }

  .btn:hover {
    background: var(--yl);
    color: var(--bk);
    border-color: var(--yl);
  }

  /* ─── CURSOR BLOB ─── */
  .cursor-blob {
    position: fixed;
    top: 0; left: 0;
    width: 46px; height: 46px;
    background: radial-gradient(circle, rgba(255, 204, 0, 0.9), rgba(255, 204, 0, 0) 70%);
    filter: blur(3px);
    border-radius: 50%;
    pointer-events: none;
    z-index: 50;
    opacity: 0.85;
    will-change: transform;
  }

  @media (max-width: 560px) {
    .b1 { width: 160px; height: 160px; }
    .b2 { width: 180px; height: 180px; }
    .b3 { width: 170px; height: 170px; }
    .b4 { width: 140px; height: 140px; }
    .b5 { width: 180px; height: 180px; }
    .glass { padding: 32px 20px 30px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .blob,
    .paper {
      animation: none;
    }
  }
</style>
