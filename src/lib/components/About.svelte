<script lang="ts">
  import { onMount } from 'svelte';
  import { siteConfig } from '$lib/config/site';
  import { 
    profile, 
    stats, 
    work, 
    volunteer, 
    education, 
    certifications, 
    skills,
    highlights 
  } from '$lib/data/about';
  import ProfileHeader from './about/ProfileHeader.svelte';
  import StatsSection from './about/StatsSection.svelte';
  import WorkExperience from './about/WorkExperience.svelte';
  import SkillsSection from './about/SkillsSection.svelte';

  const cv = siteConfig.links.cv;
</script>

<div class="about-page" role="presentation">
  <div class="about-content" role="presentation">
    <div class="about-header">
      <p class="eyebrow">ABOUT</p>
      <div class="code-wrap">
        <div class="code-shadow" aria-hidden="true">PETER`S PROFILE</div>
        <div class="code">PETER`S PROFILE</div>
      </div>
    </div>

    <ProfileHeader {profile} />
    <StatsSection {stats} />
    
    <section class="highlights-section">
      <div class="section-label">Highlights</div>
      <h2 class="section-title">Key Achievements</h2>
      <div class="section-divider"></div>
      <ul class="highlights-list">
        {#each highlights as highlight}
          <li>{highlight}</li>
        {/each}
      </ul>
    </section>

    <WorkExperience work={work} />
    
    <section class="volunteer-section">
      <div class="section-label">Community</div>
      <h2 class="section-title">Volunteer Experience</h2>
      <div class="section-divider"></div>
      <WorkExperience work={volunteer} />
    </section>

    <section class="education-section">
      <div class="section-label">Education</div>
      <h2 class="section-title">Academic Background</h2>
      <div class="section-divider"></div>
      <div class="education-list">
        {#each education as edu}
          <div class="education-item">
            <div class="edu-degree">{edu.degree}</div>
            <div class="edu-org">{edu.org}</div>
            <div class="edu-period">{edu.period}</div>
          </div>
        {/each}
      </div>
    </section>

    <section class="certs-section">
      <div class="section-label">Credentials</div>
      <h2 class="section-title">Certifications</h2>
      <div class="section-divider"></div>
      <div class="certs-list">
        {#each certifications as cert}
          <div class="cert-item">
            <div class="cert-name">{cert.name}</div>
            <div class="cert-meta">
              <span class="cert-issuer">{cert.issuer}</span>
              <span class="cert-year">· {cert.year}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <SkillsSection {skills} />

    <section class="cv-section">
      <a href={cv} download class="cv-button">
        Download Full CV →
      </a>
    </section>
  </div>
</div>

<style>
  .about-page {
    position: relative;
    min-height: 100vh;
    background: var(--wt);
    padding: 48px 24px;
  }

  .about-content {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    background: linear-gradient(rgba(250, 250, 248, 0.6), rgba(250, 250, 248, 0.4));
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 204, 0, 0.15);
    border-radius: 16px;
    padding: 40px 32px;
    transform-style: preserve-3d;
  }

  .about-header {
    text-align: center;
    margin-bottom: 32px;
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

  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    background: radial-gradient(circle, rgba(255, 204, 0, 0.3), rgba(255, 204, 0, 0) 70%);
    filter: blur(12px);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.6;
  }

  .highlights-section,
  .volunteer-section,
  .education-section,
  .certs-section,
  .cv-section {
    padding: 32px 0;
  }

  .highlights-list {
    list-style: none;
    padding: 0;
  }

  .highlights-list li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--gray);
  }

  .highlights-list li::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: var(--yl);
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .education-item {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px;
  }

  .edu-degree {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--bk);
    margin-bottom: 4px;
  }

  .edu-org {
    font-weight: 600;
    color: var(--yl);
    margin-bottom: 4px;
  }

  .edu-period {
    font-size: 0.85rem;
    color: var(--gray);
  }

  .certs-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  .cert-item {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 16px;
  }

  .cert-name {
    font-weight: 600;
    color: var(--bk);
    margin-bottom: 8px;
  }

  .cert-meta {
    font-size: 0.85rem;
    color: var(--gray);
  }

  .cv-button {
    display: inline-block;
    background: var(--bk);
    color: var(--wt);
    padding: 14px 28px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    transition: background 0.2s;
  }

  .cv-button:hover {
    background: var(--yl);
    color: var(--bk);
  }

  @media (max-width: 720px) {
    .about-content {
      padding: 24px 20px;
    }

    .certs-list {
      grid-template-columns: 1fr;
    }
  }
</style>
