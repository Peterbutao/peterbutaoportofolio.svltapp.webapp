<script>
  const services = [
    {
      title: 'Project Implementation & Management',
      desc:  'Accelerate your growth with structured project delivery. I help organisations start, switch, or advance their professional and personal goals through disciplined implementation and management.',
      tags:  ['Planning', 'Delivery', 'Reporting', 'Stakeholder Engagement'],
      link:  { label: 'VIEW ON LINKEDIN', href: 'https://www.linkedin.com/in/peterethanbutao' },
      icon:  `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>`,
    },
    {
      title: 'Designing for Your Initiatives',
      desc:  'Beautiful, purposeful design across web, app, and interaction design. Crafting interfaces that are not only functional but visually unforgettable for your brand.',
      tags:  ['Web Design', 'App Design', 'UX', 'Interaction Design'],
      link:  { label: 'VIEW ON DRIBBBLE', href: 'https://dribbble.com' },
      icon:  `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
              </svg>`,
    },
    {
      title: 'Computer Development',
      desc:  'Full-spectrum software development — from minimal web applications to full mobile apps and content management systems. Clean, maintainable code for lasting products.',
      tags:  ['Website Dev', 'Mobile App Dev', 'Web Apps', 'CMS'],
      link:  { label: 'VIEW ON GITHUB', href: 'https://github.com' },
      icon:  `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>`,
    },
    {
      title: 'Educate in Computer Development',
      desc:  'Developer Africa Learning Community — learn without limits. Affordable courses to accelerate your growth and advance your professional or personal goals in tech.',
      tags:  ['Courses', 'Community', 'Mentorship', 'Workshops'],
      link:  { label: 'LEARN MORE', href: 'https://www.linkedin.com/in/peterethanbutao' },
      icon:  `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>`,
    },
  ];
</script>

<div class="section-label">Expertise</div>
<h2 class="section-title">What I Do</h2>
<div class="section-divider"></div>

<ul class="services-list">
  {#each services as svc}
    <li class="svc-card">
      <div class="svc-icon">
        {@html svc.icon}
      </div>
      <h3>{svc.title}</h3>
      <p>{svc.desc}</p>
      <div class="tags">
        {#each svc.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
      <a href={svc.link.href} target="_blank" rel="noopener" class="svc-link">
        {svc.link.label} →
      </a>
    </li>
  {/each}
</ul>

<style>
  .services-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .svc-card {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 24px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .svc-card:hover {
    border-color: var(--yl);
    box-shadow: 0 4px 24px rgba(255,204,0,0.15);
  }

  .svc-icon {
    width: 44px; height: 44px;
    background: var(--yl);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    color: var(--bk);
  }

  .svc-card h3 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }

  .svc-card p {
    font-size: 0.82rem;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
  }

  .tag {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid var(--border);
    background: var(--wt);
    color: var(--bk);
  }

  .svc-link {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--bk);
    border-bottom: 2px solid var(--yl);
    padding-bottom: 1px;
    transition: color 0.15s;
  }

  .svc-link:hover { color: var(--gray); }
</style>
