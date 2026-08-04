<script lang="ts">
  export let error: Error | null = null;
  export let reset: () => void = () => {};
</script>

{#if error}
  <div class="error-boundary">
    <div class="error-content">
      <div class="error-icon">⚠️</div>
      <h2 class="error-title">Something went wrong</h2>
      <p class="error-message">{error.message}</p>
      <button class="error-retry" onclick={reset}>Try again</button>
    </div>
  </div>
{/if}

<style>
  .error-boundary {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    background: var(--wt);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 32px;
  }

  .error-content {
    text-align: center;
    max-width: 400px;
  }

  .error-icon {
    font-size: 3rem;
    margin-bottom: 16px;
  }

  .error-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--bk);
    margin-bottom: 8px;
  }

  .error-message {
    color: var(--gray);
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .error-retry {
    background: var(--bk);
    color: var(--wt);
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .error-retry:hover {
    background: var(--yl);
    color: var(--bk);
  }
</style>
