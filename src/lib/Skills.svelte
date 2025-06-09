<script>
  const skills = [
    'TypeScript',
    'SvelteKit',
    'React',
    'Node.js',
    'Rust',
    'Solidity',
    'PostgreSQL',
    'AWS',
    'Tailwind CSS'
  ];
</script>

<section id="skills" class="py-20 bg-neutral-100">
  <div class="container mx-auto px-4 max-w-4xl text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-12">
      <span class="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">Skills</span>
    </h2>

    <ul class="flex flex-wrap justify-center gap-4">
      {#each skills as skill}
        <li class="px-4 py-2 bg-white rounded-lg shadow text-neutral-800 hover:bg-gradient-to-br from-purple-600 to-pink-600 hover:text-white transition">
          {skill}
        </li>
      {/each}
    </ul>
  </div>
</section>