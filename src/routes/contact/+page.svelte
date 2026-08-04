<script lang="ts">
  import { onMount } from 'svelte';
  import '$lib/page-styles.css';
  import { socialLinks, contactChannels, siteConfig } from '$lib/config/site';

  const teases = [
    'No brief is too early to share.',
    'Coffee chats welcome. Virtual or Lilongwe.',
    'Reply time: usually within a day.',
    'Let\'s turn your idea into something real.'
  ];
  let tease = $state(teases[0]);

  function spinTease() {
    tease = teases[Math.floor(Math.random() * teases.length)];
  }

  function handleImageError(event: Event) {
    const img = event.currentTarget as HTMLImageElement;
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback && fallback instanceof HTMLElement) fallback.style.display = 'flex';
  }
</script>

<svelte:head>
  <title>Contact — Peter Rodrigues Butao</title>
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
      <p class="eyebrow" data-stagger>GET IN TOUCH</p>

      <div class="code-wrap" bind:this={codeWrap} data-stagger>
        <div class="code-shadow" aria-hidden="true">CONTACT</div>
        <div
          class="code"
          role="button"
          tabindex="0"
          onclick={spinTease}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spinTease(); } }}
          title="Click me"
        >CONTACT</div>
      </div>

      <p class="sub" data-stagger>Have a project, a partnership, or a question? Reach out — I'll get back to you.</p>
      <p class="tease" data-stagger>{tease}</p>

      <div class="layout-grid" data-stagger>
        <!-- ─── DIRECT LINKS + SOCIALS ─── -->
        <div class="left-col">
          <div class="direct-links">
            {#each contactChannels as ch}
              <a href={ch.href} class="contact-row" onmousemove={(e) => magnet(gsap, e.currentTarget as HTMLAnchorElement, e)} onmouseleave={() => unMagnet(gsap, e.currentTarget as HTMLAnchorElement)}>
                <div class="c-icon">{ch.icon}</div>
                <div class="c-detail">
                  <span class="c-label">{ch.label}</span>
                  <span class="c-value">{ch.value}</span>
                </div>
                <span class="c-arrow">→</span>
              </a>
            {/each}
          </div>

          <div class="socials-block">
            <p class="block-label">Follow Me</p>
            <ul class="socials-grid">
              {#each socialLinks as s}
                <li>
                  <a href={s.href} target="_blank" rel="noopener" class="social-chip" onmousemove={(e) => magnet(gsap, e.currentTarget as HTMLAnchorElement, e)} onmouseleave={() => unMagnet(gsap, e.currentTarget as HTMLAnchorElement)}>
                    <span class="s-dot"></span>
                    {s.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- ─── BUSINESS CARD ─── -->
        <div class="right-col">
          <p class="block-label">Business Card</p>
          <div class="biz-card" bind:this={bizRef} role="presentation" onmousemove={onBizMove} onmouseleave={onBizLeave}>
            <div class="biz-inner">
              <div class="biz-bar"></div>
              <p class="biz-name">PETER RODRIGUES BUTAO</p>
              <p class="biz-role">Project Development Specialist<br>Web Designer · Software Developer</p>
              <div class="biz-contacts">
                <span>0880 164 455</span>
                <span>peterethanbutao@gmail.com</span>
              </div>
              <div class="biz-qr">
                <img src="/qr.png" alt="QR Code" loading="lazy" decoding="async" onerror={handleImageError} />
                <div class="qr-fallback">QR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

   /* ─── LAYOUT ─── */
   .layout-grid {
     display: grid;
     gap: 28px;
     width: 100%;
     margin-top: 32px;
     text-align: left;
     transform-style: preserve-3d;
   }

   .left-col,
   .right-col {
     display: flex;
     flex-direction: column;
     gap: 24px;
   }

   /* ─── DIRECT LINKS ─── */
   .direct-links {
     display: flex;
     flex-direction: column;
     gap: 10px;
   }

   .contact-row {
     display: flex;
     align-items: center;
     gap: 14px;
     padding: 14px 16px;
     background: rgba(255, 255, 255, 0.72);
     backdrop-filter: blur(8px);
     -webkit-backdrop-filter: blur(8px);
     border: 1px solid rgba(0, 0, 0, 0.08);
     border-radius: 12px;
     transition: border-color 0.2s, box-shadow 0.2s;
     will-change: transform;
   }

   .contact-row:hover {
     border-color: var(--yl);
     box-shadow: 0 6px 24px rgba(255, 204, 0, 0.18);
   }

   .c-icon {
     width: 38px; height: 38px;
     border-radius: 8px;
     background: var(--yl);
     color: var(--bk);
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 1rem;
     font-weight: 700;
     flex-shrink: 0;
   }

   .c-detail {
     flex: 1;
     display: flex;
     flex-direction: column;
     gap: 1px;
   }

   .c-label {
     font-size: 0.6rem;
     font-weight: 600;
     letter-spacing: 0.16em;
     text-transform: uppercase;
     color: var(--gray);
   }

   .c-value {
     font-size: 0.85rem;
     font-weight: 500;
     color: var(--bk);
   }

   .c-arrow {
     color: var(--gray);
     font-size: 1rem;
   }

   /* ─── BLOCK LABEL ─── */
   .block-label {
     font-size: 0.62rem;
     font-weight: 600;
     letter-spacing: 0.18em;
     text-transform: uppercase;
     color: var(--gray);
     margin-bottom: 12px;
   }

   /* ─── SOCIALS ─── */
   .socials-grid {
     display: flex;
     flex-wrap: wrap;
     gap: 8px;
   }

   .social-chip {
     display: flex;
     align-items: center;
     gap: 8px;
     padding: 10px 16px;
     background: rgba(255, 255, 255, 0.72);
     backdrop-filter: blur(8px);
     -webkit-backdrop-filter: blur(8px);
     border: 1px solid rgba(0, 0, 0, 0.08);
     border-radius: 9px;
     font-size: 0.82rem;
     font-weight: 500;
     transition: background 0.2s, color 0.2s, border-color 0.2s;
     will-change: transform;
   }

   .social-chip:hover {
     background: var(--bk);
     color: var(--wt);
     border-color: var(--bk);
   }

   .s-dot {
     width: 7px; height: 7px;
     border-radius: 50%;
     background: var(--yl);
     flex-shrink: 0;
   }

   /* ─── BUSINESS CARD ─── */
   .biz-card {
     border: 1px solid rgba(255, 204, 0, 0.25);
     border-radius: 14px;
     overflow: hidden;
     background: rgba(255, 255, 255, 0.55);
     padding: 10px;
     will-change: transform;
     transform-style: preserve-3d;
   }

   .biz-inner {
     background: var(--bk);
     border-radius: 9px;
     padding: 22px;
     color: var(--wt);
     display: flex;
     flex-direction: column;
     gap: 10px;
     position: relative;
     overflow: hidden;
     transform: translateZ(20px);
   }

   .biz-inner::after {
     content: '';
     position: absolute;
     top: -30px; right: -30px;
     width: 120px; height: 120px;
     background: var(--yl);
     border-radius: 50%;
     opacity: 0.08;
   }

   .biz-bar {
     width: 32px; height: 3px;
     background: var(--yl);
     border-radius: 2px;
   }

   .biz-name {
     font-family: var(--font-display);
     font-size: 1.4rem;
     letter-spacing: 0.1em;
     line-height: 1;
   }

   .biz-role {
     font-size: 0.68rem;
     color: rgba(255,255,255,0.5);
     letter-spacing: 0.1em;
     text-transform: uppercase;
     line-height: 1.6;
   }

   .biz-contacts {
     display: flex;
     flex-direction: column;
     gap: 3px;
     font-size: 0.78rem;
     color: rgba(255,255,255,0.7);
   }

   .biz-qr {
     width: 60px; height: 60px;
     background: white;
     border-radius: 6px;
     overflow: hidden;
     display: flex;
     align-items: center;
     justify-content: center;
     align-self: flex-end;
     margin-top: 4px;
   }

   .biz-qr img {
     width: 100%; height: 100%;
     object-fit: cover;
   }

   .qr-fallback {
     display: none;
     font-family: var(--font-display);
     font-size: 0.9rem;
     color: var(--gray);
     letter-spacing: 0.1em;
   }

   @media (min-width: 760px) {
     .layout-grid {
       grid-template-columns: 1fr 1fr;
       align-items: start;
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
