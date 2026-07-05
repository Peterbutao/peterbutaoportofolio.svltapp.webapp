<script>
  /**
   * Add/edit your work experience entries here.
   * img: place images in /static/work/
   */
  const experiences = [
    {
      org:    'Forest Landscape Restoration — FAO',
      role:   'Project Field Officer',
      label:  'Field Role',
      desc:   'Worked with FAO on forest landscape restoration initiatives, supporting project implementation, stakeholder engagement, and field monitoring across sites in Malawi.',
      img:    '/work/work1.jpg',
      href:   'https://www.linkedin.com/in/peterethanbutao',
    },
    {
      org:    'BEFIT IWW',
      role:   'School Performance Officer',
      label:  'Education Role',
      desc:   'Led school performance monitoring and data collection for BEFIT IWW, contributing to improved educational outcomes through evidence-based reporting and field support.',
      img:    '/work/work1.jpg',
      href:   'https://www.linkedin.com/in/peterethanbutao',
    },
  ];
</script>

<div class="section-label">Career</div>
<h2 class="section-title">Organisation Work<br>Experience</h2>
<div class="section-divider"></div>

<ul class="exp-list">
  {#each experiences as exp}
    <li class="exp-card">
      <div class="exp-img">
        <img
          src={exp.img}
          alt={exp.org}
         
        />
        <div class="img-fallback">{exp.org}</div>
      </div>
      <div class="exp-body">
        <p class="exp-label">{exp.label}</p>
        <h3>{exp.role}</h3>
        <p class="exp-desc">{exp.desc}</p>
        <a href={exp.href} target="_blank" rel="noopener" class="exp-btn">
          VIEW WORK EXPERIENCE
          <span class="li-badge">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.589V9h3.308v1.561h.046c.461-.872 1.585-1.791 3.263-1.791 3.488 0 4.131 2.296 4.131 5.282v6.4zM5.337 7.433a1.917 1.917 0 1 1 0-3.834 1.917 1.917 0 0 1 0 3.834zm1.656 13.019H3.68V9h3.313v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </span>
        </a>
      </div>
    </li>
  {/each}
</ul>

<style>
  .exp-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .exp-card {
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .exp-card:hover {
    border-color: var(--yl);
    box-shadow: 0 4px 20px rgba(255,204,0,0.1);
  }

  /* ─── IMAGE ─── */
  .exp-img {
    width: 100%;
    height: 180px;
    background: linear-gradient(135deg, #f0ede4 0%, #dbd8cc 100%);
    overflow: hidden;
    position: relative;
  }

  .exp-img img {
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
    text-align: center;
    padding: 20px;
  }

  /* ─── BODY ─── */
  .exp-body {
    padding: 20px;
  }

  .exp-label {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray);
    margin-bottom: 6px;
  }

  .exp-body h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0.01em;
  }

  .exp-desc {
    font-size: 0.82rem;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 18px;
  }

  /* ─── BUTTON ─── */
  .exp-btn {
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

  .exp-btn:hover {
    background: var(--bk);
    color: var(--wt);
  }

  .li-badge {
    width: 18px; height: 18px;
    background: #0077B5;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .li-badge svg {
    fill: white;
    width: 11px; height: 11px;
  }
</style>
