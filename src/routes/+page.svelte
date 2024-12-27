<script>
  import { onMount } from 'svelte';
  import { initJuno } from '@junobuild/core';
  export let data;
  $: userData = data.userData;

  onMount(async () => {
    await initJuno({
      satelliteId: 'svftd-daaaa-aaaal-adr3a-cai',
      container: document.documentElement
    });
  });
</script>

<main class="container mx-auto px-4 py-16 max-w-4xl">...</main>