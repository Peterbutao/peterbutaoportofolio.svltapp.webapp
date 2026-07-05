<script>
  const socials = [
    { label: 'Twitter',   href: 'https://twitter.com',                    abbr: 'TW' },
    { label: 'Facebook',  href: 'https://facebook.com',                   abbr: 'FB' },
    { label: 'Instagram', href: 'https://instagram.com',                  abbr: 'IG' },
    { label: 'LinkedIn',  href: 'https://linkedin.com/in/peterethanbutao',abbr: 'LI' },
    { label: 'GitHub',    href: 'https://github.com',                     abbr: 'GH' },
  ];
</script>

<div class="section-label">Get in Touch</div>
<h2 class="section-title">Contact</h2>
<div class="section-divider"></div>

<div class="contact-wrap">

  <!-- ─── DIRECT LINKS ─── -->
  <div class="direct-links">
    <a href="mailto:peterethanbutao@gmail.com" class="contact-row">
      <div class="c-icon yl">@</div>
      <div class="c-detail">
        <span class="c-label">Email</span>
        <span class="c-value">peterethanbutao@gmail.com</span>
      </div>
      <span class="c-arrow">→</span>
    </a>
    <a href="tel:+2650880164455" class="contact-row">
      <div class="c-icon">☏</div>
      <div class="c-detail">
        <span class="c-label">Phone</span>
        <span class="c-value">0880 164 455</span>
      </div>
      <span class="c-arrow">→</span>
    </a>
  </div>

  <!-- ─── SOCIALS ─── -->
  <div class="socials-block">
    <p class="block-label">Follow Me</p>
    <ul class="socials-grid">
      {#each socials as s}
        <li>
          <a href={s.href} target="_blank" rel="noopener" class="social-chip">
            <span class="s-dot"></span>
            {s.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <!-- ─── BUSINESS CARD ─── -->
  <div class="biz-card-wrap">
    <p class="block-label">Business Card</p>
    <div class="biz-card">
      <div class="biz-inner">
        <div class="biz-bar"></div>
        <p class="biz-name">PETER RODRIGUES BUTAO</p>
        <p class="biz-role">Project Development Specialist<br>Web Designer · Software Developer</p>
        <div class="biz-contacts">
          <span>0880 164 455</span>
          <span>peterethanbutao@gmail.com</span>
        </div>
        <!-- QR placeholder — replace src with your real QR code in /static/qr.png -->
        <div class="biz-qr">
          <img src="/qr.png" alt="QR Code" />
          <div class="qr-fallback">QR</div>
        </div>
      </div>
      <a href="/business-card.pdf" download class="dl-btn">
        ↓ DOWNLOAD BUSINESS CARD
      </a>
    </div>
  </div>

</div>

<style>
  .contact-wrap {
    display: flex;
    flex-direction: column;
    gap: 28px;
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
    border: 1px solid var(--border);
    border-radius: 9px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .contact-row:hover {
    border-color: var(--yl);
    box-shadow: 0 2px 14px rgba(255,204,0,0.15);
  }

  .c-icon {
    width: 38px; height: 38px;
    border-radius: 8px;
    background: var(--bk);
    color: var(--wt);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .c-icon.yl { background: var(--yl); color: var(--bk); }

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
    border: 1px solid var(--border);
    border-radius: 8px;
    background: white;
    font-size: 0.82rem;
    font-weight: 500;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
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
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: white;
    padding: 20px;
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

  .dl-btn {
    display: block;
    margin-top: 16px;
    background: var(--yl);
    color: var(--bk);
    border-radius: 8px;
    padding: 14px;
    text-align: center;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    transition: opacity 0.2s;
  }

  .dl-btn:hover { opacity: 0.82; }
</style>
