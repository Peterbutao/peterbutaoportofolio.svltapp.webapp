<div class="section-label">Expertise</div>
<h2 class="section-title">Consulting</h2>
<div class="section-divider"></div>

<div class="consultant-wrap">
  <div class="consultant-card">
    <div class="logo-marquee" aria-hidden="true">
      <div class="logo-track">
        <div class="logo-pill"><img src="/logo.png" alt="logo" /></div>
        <div class="logo-pill"><img src="/logo (1).png" alt="logo" /></div>
        <div class="logo-pill"><img src="/logo (2).png" alt="logo" /></div>
        <div class="logo-pill"><img src="/logo.png" alt="logo" /></div>
        <div class="logo-pill"><img src="/logo (1).png" alt="logo" /></div>
        <div class="logo-pill"><img src="/logo (2).png" alt="logo" /></div>
      </div>
    </div>
    <h3>Monitoring & Evaluation</h3>
    <p class="consultant-desc">
      I help organizations design and implement robust M&E frameworks that track performance, measure impact, and inform data-driven decisions for sustainable development outcomes.
    </p>
    <ul class="consultant-list">
      <li>
        <span class="check">:::::</span>
        <span>M&E Framework Design</span>
      </li>
      <li>
        <span class="check">:::::</span>
        <span>Data Collection & Analysis</span>
      </li>
      <li>
        <span class="check">:::::</span>
        <span>Impact Assessment</span>
      </li>
      <li>
        <span class="check">:::::</span>
        <span>Stakeholder Reporting</span>
      </li>
      <li>
        <span class="check">:::::</span>
        <span>Performance Dashboards</span>
      </li>
      <li>
        <span class="check">:::::</span>
        <span>Donor Compliance & Audit Support</span>
      </li>
    </ul>
    <a href="https://www.linkedin.com/in/peterethanbutao" target="_blank" rel="noopener" class="consultant-btn">
      VIEW M&E WORK
      <span class="li-badge">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.589V9h3.308v1.561h.046c.461-.872 1.585-1.791 3.263-1.791 3.488 0 4.131 2.296 4.131 5.282v6.4zM5.337 7.433a1.917 1.917 0 1 1 0-3.834 1.917 1.917 0 0 1 0 3.834zm1.656 13.019H3.68V9h3.313v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </span>
    </a>
  </div>
</div>

<style>
  .consultant-wrap {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 24px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .consultant-wrap:hover {
    border-color: var(--yl);
    box-shadow: 0 4px 24px rgba(255,204,0,0.12);
  }

  .logo-marquee {
    overflow: hidden;
    margin-bottom: 16px;
    width: 100%;
    max-width: 240px;
  }

  .logo-track {
    display: flex;
    align-items: center;
    gap: 10px;
    width: max-content;
    animation: logoWalk 8s linear infinite;
  }

  .logo-pill {
    width: 46px;
    height: 46px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    transform-origin: center;
    animation: logoPulse 8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    /* background: linear-gradient(135deg, rgba(255,204,0,0.15), rgba(255,204,0,0.4)); */
  }

  .logo-track .logo-pill:nth-child(1),
  .logo-track .logo-pill:nth-child(4) {
    animation-delay: -1s;
  }

  .logo-track .logo-pill:nth-child(2),
  .logo-track .logo-pill:nth-child(5) {
    animation-delay: -3s;
  }

  .logo-track .logo-pill:nth-child(3),
  .logo-track .logo-pill:nth-child(6) {
    animation-delay: -5s;
  }

  .logo-pill img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transform: translateX(-4px);
    animation: iconPulse 8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  .logo-track .logo-pill:nth-child(1) img,
  .logo-track .logo-pill:nth-child(4) img {
    animation-delay: -1s;
  }

  @keyframes logoWalk {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - 5px));
    }
  }

  @keyframes logoPulse {
    0%, 100% {
      transform: scale(0.92);
      opacity: 0.9;
    }
    20%, 38% {
      transform: scale(1.1);
      opacity: 1;
    }
    58%, 78% {
      transform: scale(0.84);
      opacity: 0.82;
    }
  }

  @keyframes iconPulse {
    0%, 100% {
      transform: translateX(-4px) scale(1);
    }
    20%, 38% {
      transform: translateX(-4px) scale(1.08);
    }
    58%, 78% {
      transform: translateX(-4px) scale(0.9);
    }
  }

  .consultant-card h3 {
    font-family: var(--font-display);
    font-size: 1.35rem;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }

  .consultant-desc {
    font-size: 0.82rem;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 18px;
  }

  .consultant-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 9px;
    margin-bottom: 20px;
  }

  .consultant-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.82rem;
    color: var(--bk);
  }

  .check {
    color: var(--yl);
    font-weight: 700;
    font-size: 0.9rem;
  }

  .consultant-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    border: 1.5px solid var(--bk);
    border-radius: 6px;
    padding: 9px 16px;
    transition: background 0.2s, color 0.2s;
  }

  .consultant-btn:hover {
    background: var(--bk);
    color: var(--wt);
  }

  .consultant-btn .li-badge {
    width: 18px; height: 18px;
    background: #0077B5;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .consultant-btn .li-badge svg {
    fill: white;
    width: 11px; height: 11px;
  }
</style>