<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let visible = $state(false);
  let profileRing: HTMLElement;
  let role1: HTMLElement;
  let role2: HTMLElement;
  let role3: HTMLElement;
  let role4: HTMLElement;
  let role5: HTMLElement;

  onMount(() => {
    setTimeout(() => {
      visible = true;
      
      // Profile ring attention animation every 6 seconds
      const ringTl = gsap.timeline({ repeat: -1, repeatDelay: 6 });
      ringTl.to(profileRing, {
        boxShadow: '0 0 0 16px rgba(255,204,0,1), 0 0 40px rgba(255,204,0,0.8)',
        duration: 0.5,
        ease: 'power2.inOut'
      })
      .to(profileRing, {
        boxShadow: '0 0 0 6px rgba(255,204,0,0.3), 0 0 10px rgba(255,204,0,0.2)',
        duration: 0.3,
        ease: 'power2.inOut'
      })
      .to(profileRing, {
        boxShadow: '0 0 0 16px rgba(255,204,0,1), 0 0 40px rgba(255,204,0,0.8)',
        duration: 0.3,
        ease: 'power2.inOut'
      })
      .to(profileRing, {
        boxShadow: '0 0 0 8px rgba(255,204,0,0.2), 0 16px 56px rgba(255,204,0,0.3)',
        duration: 0.3,
        ease: 'power2.inOut'
      });

      const roles = [role1, role2, role3, role4, role5].filter(Boolean);
      
      roles.forEach((el, i) => {
        gsap.set(el, { opacity: 0, y: 16 });
        gsap.to(el, { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          delay: 0.15 + i * 0.1,
          ease: 'power2.out'
        });

        // Idle floating animation
        gsap.to(el, {
          y: -8,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5 + i * 0.1
        });

        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
        });

        el.addEventListener('mouseleave', () => {
          gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        });
      });
    }, 80);
  });
</script>

<article class="hero" class:visible>
  <div class="hero-inner">

    <div class="profile-wrap">
      <div class="profile-ring" bind:this={profileRing}>
        <!-- Place your photo at /static/profile.png -->
        <img src="/profile.png" alt="Peter Rodrigues Butao"  />
        <div class="avatar-fallback">PRB</div>
      </div>
    </div>

    <p class="eyebrow">Multi-Disciplinary Professional</p>

    <div class="roles">
      <span bind:this={role1}>M&E Consultant</span>
      <span class="accent" bind:this={role2}>Project Development</span>
      <span class="accent" bind:this={role3}>Specialist</span>
      <span bind:this={role4}>Web & UI/UX Designer</span>
      <span bind:this={role5}>Software Developer</span>
    </div>

    <p class="greeting">
      Hi, I'm <strong>Peter Rodrigues Butao</strong> — an <strong>M&E Consultant</strong> turning ideas into impactful digital products.
    </p>

    <a href="mailto:peterethanbutao@gmail.com" class="cta-btn">HIRE TALENT</a>

  </div>
</article>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 40px 100px;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .hero.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-inner {
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 18px;
  }

  /* ─── PROFILE RING ─── */
  .profile-wrap { margin-bottom: 4px; }

  .profile-ring {
    width: 300px; height: 300px;
    border-radius: 50%;
    background: var(--yl);
    overflow: hidden;
    box-shadow: 0 0 0 8px rgba(255,204,0,0.2), 0 16px 56px rgba(255,204,0,0.3);
    position: relative;
  }

  .profile-ring img {
    width: 100%; height: 100%;
    /* object-fit:fill; */
  }

  .avatar-fallback {
    display: none;
    position: absolute; inset: 0;
    align-items: center; justify-content: center;
    font-family: var(--font-display);
    font-size: 4rem;
    color: rgba(0,0,0,0.35);
    letter-spacing: 0.06em;
  }

  /* ─── TEXT ─── */
  .eyebrow {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gray);
  }

  .roles {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .roles span {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    letter-spacing: 0.06em;
    line-height: 1.05;
    cursor: pointer;
    user-select: none;
    will-change: transform;
  }

  .roles span.accent {
    color: var(--yl);
  }

  .greeting {
    font-size: 0.85rem;
    color: var(--gray);
    line-height: 1.7;
    max-width: 380px;
  }

  /* ─── CTA ─── */
  .cta-btn {
    display: inline-block;
    background: var(--bk);
    color: var(--wt);
    border: 1.5px solid var(--bk);
    border-radius: 7px;
    padding: 14px 40px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.14em;
    transition: background 0.2s, color 0.2s;
    margin-top: 4px;
  }

  .cta-btn:hover {
    background: var(--yl);
    color: var(--bk);
    border-color: var(--yl);
  }
</style>
