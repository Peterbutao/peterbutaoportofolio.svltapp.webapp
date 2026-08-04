<script lang="ts">
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let message: string = 'Loading...';
</script>

<div class="loading-container" class:size>
  <div class="spinner"></div>
  {#if message}
    <p class="loading-message">{message}</p>
  {/if}
</div>

<style>
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border);
    border-top-color: var(--yl);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  .small .spinner {
    width: 24px;
    height: 24px;
    border-width: 2px;
  }

  .large .spinner {
    width: 56px;
    height: 56px;
    border-width: 4px;
  }

  .loading-message {
    color: var(--gray);
    font-size: 0.9rem;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
