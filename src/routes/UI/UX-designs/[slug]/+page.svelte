<script>
  export let data;
  const { design } = data;
</script>

<article class="design-page">
  <div class="design-header">
    <img class="design-thumb" src={design.thumb} alt={design.title} />
    <div class="design-meta">
      <span class="design-date">{design.date}</span>
      <h1>{design.title}</h1>
      <p>{design.desc}</p>
    </div>
  </div>

  <div class="design-details">
    <p>{design.details}</p>
  </div>
</article>

<style>
  .design-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 120px 24px 64px;
  }

  .design-header {
    display: grid;
    gap: 24px;
  }

  .design-thumb {
    width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
    box-shadow: 0 24px 80px rgba(0,0,0,0.1);
  }

  .design-meta {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .design-date {
    color: var(--gray);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .design-meta h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0;
  }

  .design-meta p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--gray);
    max-width: 720px;
  }

  .design-details {
    margin-top: 42px;
    font-size: 0.95rem;
    line-height: 1.9;
    color: var(--gray);
  }

  @media (min-width: 800px) {
    .design-header {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
</style>
