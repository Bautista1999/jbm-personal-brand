<script>
  import { fly, fade } from 'svelte/transition';

  export let twitter;
  export let linkedin;
</script>

<section id="hero" class="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4">
  <!-- Animated gradient blobs -->
  <div class="absolute top-0 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl opacity-30 animate-blob"></div>
  <div class="absolute bottom-0 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-blob" style="animation-delay:4s"></div>

  <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-4" in:fly={{ y: -20, duration: 800 }}>
    Hi, I'm <span class="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Juan Bautista&nbsp;Martinez</span>
  </h1>

  <p class="text-lg md:text-2xl text-neutral-600 max-w-2xl mb-8" in:fade={{ delay: 200, duration: 800 }}>
    I craft scalable web and blockchain solutions with an eye for design.
  </p>

  <div class="flex gap-4" in:fade={{ delay: 400, duration: 800 }}>
    <a href="#projects" class="px-6 py-3 bg-gradient-to-br from-purple-600 to-pink-600 hover:opacity-90 text-white rounded-lg shadow-lg transition transform hover:-translate-y-1">
      See My Work
    </a>
    <a href="#contact" class="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 rounded-lg transition transform hover:-translate-y-1">
      Contact Me
    </a>
  </div>
</section>