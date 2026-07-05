<div class="section-label">Impact</div>
<h2 class="section-title">Community Leadership<br>& Volunteer Work</h2>
<div class="section-divider"></div>

<div class="community-wrap">
  <div class="community-card">
    <div class="community-img">
      <!-- Place community/volunteer image at /static/community.jpg -->
      <img src="/community/community.jpg" alt="Community Leadership" />
      <div class="img-fallback">Community</div>
    </div>
    <h3>Community Leadership</h3>
    <p class="community-desc">
      Leading community initiatives in education, technology, and sustainable development.
    </p>  
    <a href="https://www.linkedin.com/posts/peter-butao-7238471b4_climateaction-youthforclimate-youthempowerment-ugcPost-7426525199711322112-a1GS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADH1V0sBB-YVaDPbGhYJMt12QEhCaOUc6Zk" target="_blank" rel="noopener" class="community-btn">
      VIEW VOLUNTEER WORK
      <span class="li-badge">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.589V9h3.308v1.561h.046c.461-.872 1.585-1.791 3.263-1.791 3.488 0 4.131 2.296 4.131 5.282v6.4zM5.337 7.433a1.917 1.917 0 1 1 0-3.834 1.917 1.917 0 0 1 0 3.834zm1.656 13.019H3.68V9h3.313v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </span>
    </a>
  </div>
</div>

<style>
  .community-wrap {
    border: 1px solid var(--border);
    border-radius: 10px;
    /* padding: 24px; */
    background: var(--wt);
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .community-wrap:hover {
    border-color: var(--yl);
    box-shadow: 0 4px 24px rgba(255,204,0,0.12);
  }

  /* ─── IMAGE ─── */
  .community-img {
    width: 100%;
    height: 160px;
    background: linear-gradient(135deg, #f0ede4 0%, #dbd8cc 100%);
    
    overflow: hidden;
    margin-bottom: 16px;
    position: relative;
  }

  .community-img img {
    width: 100%; height: 100%;
    object-fit: cover;
  }

  .img-fallback {
    display: none;
    position: absolute; inset: 0;
    align-items: center; justify-content: center;
    font-family: var(--font-display);
    font-size: 1rem;
    letter-spacing: 0.12em;
    color: rgba(0,0,0,0.2);
  }

  .community-card h3 {
    font-family: var(--font-display);
    font-size: 1.35rem;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }

  .community-desc {
    font-size: 0.82rem;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 18px;
  }

  .community-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 9px;
    margin-bottom: 20px;
  }

  .community-list li {
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

  .community-btn {
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

  .community-btn:hover {
    background: var(--bk);
    color: var(--wt);
  }

  .community-btn .li-badge {
    width: 18px; height: 18px;
    background: #0077B5;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    animation: vibratePause 2s ease-in-out infinite;
  }

  .community-btn .li-badge svg {
    fill: white;
    width: 11px; height: 11px;
  }

  @keyframes vibratePause {
    0%, 100% { transform: translateX(0); }
    
    /* Vibration 1 */
    5%, 15%, 25% { transform: translateX(-3px); }
    10%, 20%, 30% { transform: translateX(3px); }
    
    /* Pause 1 */
    35%, 45% { transform: translateX(0); }
    
    /* Vibration 2 */
    50%, 60%, 70% { transform: translateX(3px); }
    55%, 65%, 75% { transform: translateX(-3px); }
    
    /* Pause 2 */
    80%, 100% { transform: translateX(0); }
  }
</style>