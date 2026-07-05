<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let menuOpen = $state(false);
  let scrolled = $state(false);

  const navLinks = [
    { label: 'About',       href: '#hero' },
    { label: 'Organisations', href: '#organisations' },
    { label: 'Projects',    href: '#projects' },
    { label: 'Experience',  href: '#experience' },
    { label: 'Services',    href: '#services' },
    { label: 'Contact',     href: '#contact' },
  ];

  function toggleMenu() { menuOpen = !menuOpen; }
  function closeMenu() { menuOpen = false; }

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 10; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<svelte:head>
  <title>Peter Rodrigues Butao — Portfolio</title>
  <meta name="description" content="Project Development Specialist, Web Designer & Software Developer based in Malawi." />
</svelte:head>

<div class="layout" class:scrolled>
  <nav>
    <div class="nav-inner">
      <button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span class:open={menuOpen}></span>
        <span class:open={menuOpen}></span>
      </button>

      <a class="nav-name" href="/">PETER RODRIGUES BUTAO</a>

      <div class="nav-links">
        {#each navLinks as link}
          <a href={link.href}>{link.label}</a>
        {/each}
      </div>
    </div>

    {#if menuOpen}
      <div class="menu-overlay" onclick={closeMenu} role="presentation"></div>
      <div class="menu-drawer">
        <ul>
          {#each navLinks as link}
            <li>
              <a href={link.href} onclick={closeMenu}>{link.label}</a>
            </li>
          {/each}
        </ul>
        <a href="mailto:peterethanbutao@gmail.com" class="menu-cta" onclick={closeMenu}>
          HIRE TALENT
        </a>
      </div>
    {/if}
  </nav>

  <main>
    <slot />
  </main>

  <footer class="site-footer">
    <p>PETER RODRIGUES BUTAO &nbsp;·&nbsp; © {new Date().getFullYear()}</p>
  </footer>
</div>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ─── NAV ─── */
  nav {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    z-index: 100;
    padding: 10px 16px;
  }

  .nav-inner {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(250, 250, 248, 0.88);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    gap: 12px;
    transition: box-shadow 0.3s;
  }

  .layout.scrolled .nav-inner {
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  }

  .nav-name {
    flex: 1;
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.1em;
    color: var(--bk);
  }

  .nav-spacer { width: 12px; }

  .nav-links {
    display: none;
    gap: 18px;
  }

  .nav-links a {
    color: var(--bk);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--yl);
  }

  /* Hamburger */
  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 2px;
  }

  .hamburger span {
    display: block;
    height: 2px;
    background: var(--bk);
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s, width 0.25s;
  }

  .hamburger span:first-child { width: 22px; }
  .hamburger span:last-child  { width: 16px; }

  .hamburger span.open:first-child {
    width: 22px;
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger span.open:last-child {
    width: 22px;
    transform: translateY(-0px) rotate(-45deg);
  }

  /* Menu drawer */
  .menu-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(2px);
    z-index: 98;
    animation: fadeIn 0.2s ease;
  }

  .menu-drawer {
    position: fixed;
    top: 70px; left: 16px; right: 16px;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    z-index: 99;
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    animation: slideDown 0.2s ease;
  }

  .menu-drawer ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 16px;
  }

  .menu-drawer a {
    display: block;
    padding: 10px 12px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    transition: background 0.15s;
  }

  .menu-drawer a:hover { background: var(--wt); }

  .menu-cta {
    display: block;
    background: var(--bk);
    color: var(--wt) !important;
    text-align: center;
    padding: 12px;
    border-radius: 7px;
    font-weight: 700;
    font-size: 0.82rem;
    letter-spacing: 0.12em;
    transition: background 0.2s !important;
  }

  .menu-cta:hover { background: var(--yl) !important; color: var(--bk) !important; }

  @media (min-width: 800px) {
    .nav-links {
      display: flex;
      gap: 22px;
      margin-left: auto;
    }

    .hamburger {
      display: none;
    }

    .nav-inner {
      justify-content: space-between;
    }

    .nav-name {
      flex: 0;
      text-align: left;
      margin-right: 0;
    }

    .nav-spacer {
      width: 0;
    }
  }

  @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

  /* ─── MAIN ─── */
  main {
    flex: 1;
    padding-top: var(--nav-h);
  }

  /* ─── FOOTER ─── */
  .site-footer {
    border-top: 1px solid var(--border);
    padding: 22px 20px;
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    color: var(--gray);
  }
</style>
