<script>
  import { onMount } from 'svelte';
  import { initJuno } from '@junobuild/core';
  import Hero from '$lib/Hero.svelte';
  import Projects from '$lib/Projects.svelte';
  import Skills from '$lib/Skills.svelte';
  import Contact from '$lib/Contact.svelte';
  export let data;
  $: userData = data.userData;

  onMount(async () => {
    await initJuno({
      satelliteId: 'svftd-daaaa-aaaal-adr3a-cai',
      container: document.documentElement
    });
  });
</script>

<main>
  <Hero twitter="https://x.com/JuanRezzio" linkedin="https://www.linkedin.com/in/juan-bautista-martinez/" />
  <Projects />
  <Skills />
  <Contact twitter="https://x.com/JuanRezzio" linkedin="https://www.linkedin.com/in/juan-bautista-martinez/" />
</main>