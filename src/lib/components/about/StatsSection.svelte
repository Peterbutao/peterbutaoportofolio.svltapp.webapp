<script lang="ts">
  export interface Stat {
    value: number;
    suffix: string;
    label: string;
  }

  export let stats: Stat[];
</script>

<section class="stats-section">
  <div class="section-label">Impact</div>
  <h2 class="section-title">By The Numbers</h2>
  <div class="section-divider"></div>

  <div class="stats-grid">
    {#each stats as stat}
      <div class="stat-card">
        <div class="stat-value">
          {stat.value}
          <span class="stat-suffix">{stat.suffix}</span>
        </div>
        <div class="stat-label">{stat.label}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .stats-section {
    padding: 48px 0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }

  .stat-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
    text-align: center;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--yl);
    margin-bottom: 8px;
  }

  .stat-suffix {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.85rem;
    color: var(--gray);
    line-height: 1.4;
  }

  @media (max-width: 720px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
