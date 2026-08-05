<script context="module" lang="ts">
  export interface WorkItem {
    role: string;
    org: string;
    period: string;
    place: string;
    points: string[];
  }
</script>

<script lang="ts">
  export let work: WorkItem[];
</script>

<section class="work-section">
  <div class="section-label">Experience</div>
  <h2 class="section-title">Work History</h2>
  <div class="section-divider"></div>

  <div class="work-timeline">
    {#each work as item}
      <article class="work-item">
        <div class="work-header">
          <h3 class="work-role">{item.role}</h3>
          <div class="work-org">{item.org}</div>
          <div class="work-meta">
            <span class="work-period">{item.period}</span>
            <span class="work-place">· {item.place}</span>
          </div>
        </div>
        <ul class="work-points">
          {#each item.points as point}
            <li>{point}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

<style>
  .work-section {
    padding: 48px 0;
  }

  .work-timeline {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
  }

  .work-item {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
  }

  .work-header {
    margin-bottom: 16px;
  }

  .work-role {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--bk);
    margin-bottom: 4px;
  }

  .work-org {
    font-weight: 600;
    color: var(--yl);
    margin-bottom: 8px;
  }

  .work-meta {
    font-size: 0.85rem;
    color: var(--gray);
  }

  .work-points {
    list-style: none;
    padding: 0;
  }

  .work-points li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--gray);
  }

  .work-points li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--yl);
    font-weight: 700;
  }

  @media (max-width: 720px) {
    .work-item {
      padding: 20px;
    }
  }
</style>
