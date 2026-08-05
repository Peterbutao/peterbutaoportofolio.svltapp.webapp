<script context="module" lang="ts">
  export interface SkillCategory {
    area: string;
    skills: string[];
  }
</script>

<script lang="ts">
  export let skills: SkillCategory[];
</script>

<section class="skills-section">
  <div class="section-label">Expertise</div>
  <h2 class="section-title">Skills & Tools</h2>
  <div class="section-divider"></div>

  <div class="skills-grid">
    {#each skills as category}
      <div class="skill-category">
        <h3 class="skill-area">{category.area}</h3>
        <div class="skill-tags">
          {#each category.skills as skill}
            <span class="skill-tag">{skill}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .skills-section {
    padding: 48px 0;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }

  .skill-category {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
  }

  .skill-area {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--bk);
    margin-bottom: 16px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    background: var(--wt);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 0.8rem;
    color: var(--gray);
    transition: all 0.2s;
  }

  .skill-tag:hover {
    background: var(--yl);
    color: var(--bk);
    border-color: var(--yl);
  }

  @media (max-width: 720px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
