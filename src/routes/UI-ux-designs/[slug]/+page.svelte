<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/UI/UX-designs', { replaceState: true });
  });
</script>
