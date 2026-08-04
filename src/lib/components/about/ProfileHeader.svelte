<script lang="ts">
  export interface Profile {
    role: string;
    location: string;
    email: string;
    phones: string[];
    linkedin: string;
    summary: string;
  }

  export let profile: Profile;
</script>

<section class="profile-header">
  <div class="section-label">About</div>
  <h2 class="section-title">Profile</h2>
  <div class="section-divider"></div>

  <div class="profile-card">
    <div class="profile-role">{profile.role}</div>
    <div class="profile-location">
      <span>📍</span> {profile.location}
    </div>
    <div class="profile-contact">
      <a href="mailto:{profile.email}" class="contact-link">{profile.email}</a>
      {#each profile.phones as phone}
        <a href="tel:{phone}" class="contact-link">{phone}</a>
      {/each}
    </div>
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="linkedin-link">
      Connect on LinkedIn →
    </a>
  </div>

  <div class="profile-summary">
    <h3>Summary</h3>
    <p>{profile.summary}</p>
  </div>
</section>

<style>
  .profile-header {
    padding: 48px 0;
  }

  .profile-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
  }

  .profile-role {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--bk);
    margin-bottom: 12px;
  }

  .profile-location {
    font-size: 0.9rem;
    color: var(--gray);
    margin-bottom: 16px;
  }

  .profile-contact {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  .contact-link {
    color: var(--gray);
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-link:hover {
    color: var(--yl);
  }

  .linkedin-link {
    display: inline-block;
    background: var(--bk);
    color: var(--wt);
    padding: 10px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    transition: background 0.2s;
  }

  .linkedin-link:hover {
    background: var(--yl);
    color: var(--bk);
  }

  .profile-summary {
    background: var(--wt);
    border-left: 3px solid var(--yl);
    padding: 20px;
    border-radius: 0 8px 8px 0;
  }

  .profile-summary h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: var(--bk);
  }

  .profile-summary p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--gray);
  }

  @media (max-width: 720px) {
    .profile-card {
      padding: 20px;
    }
  }
</style>
