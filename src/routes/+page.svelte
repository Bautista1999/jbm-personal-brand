<script>
  import { fly } from 'svelte/transition';
  export let data;
  $: profile = data.profile || {};
</script>

<main class="container mx-auto px-4 py-16 max-w-4xl">
  <section class="mb-16" in:fly="{{ y: 50, duration: 1000 }}">
    <div class="flex items-center gap-8 flex-col md:flex-row">
      <img
        src={profile.image || "https://pbs.twimg.com/profile_images/1789664405740736512/PBu6OhgZ_400x400.jpg"}
        alt="Juan Bautista Martínez"
        class="rounded-full w-48 h-48 object-cover shadow-lg"
      />
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{profile.name || "Juan Bautista Martínez"}</h1>
        <p class="text-xl text-neutral-600">{profile.title || "Fullstack Developer & QA Engineer"}</p>
      </div>
    </div>
  </section>

  <section class="mb-16 space-y-8" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
    <h2 class="text-3xl font-bold">About Me</h2>
    <p class="text-lg text-neutral-600 leading-relaxed">
      {profile.about || "Passionate about building technology since childhood. Experienced in various frameworks, from low-level assembler to high-level Python. Deep expertise in Javascript, Flutter, Eggplant, Svelte, Motoko, and Rust since 2022."}
    </p>
  </section>

  <section class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
    <h2 class="text-3xl font-bold mb-8">Experience</h2>
    <div class="space-y-8">
      {#each profile.experience || [] as exp}
        <div class="border-l-4 border-neutral-900 pl-4">
          <h3 class="text-xl font-bold">{exp.title} | {exp.company}</h3>
          <p class="text-neutral-600">{exp.period}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 600 }}">
    <h2 class="text-3xl font-bold mb-8">Projects</h2>
    <div class="grid md:grid-cols-2 gap-8">
      {#each profile.projects || [] as project}
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">{project.name}</h3>
          <p class="text-neutral-600">{project.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <footer class="text-center text-neutral-600" in:fly="{{ y: 50, duration: 1000, delay: 800 }}">
    <div class="flex justify-center space-x-6">
      <a href="mailto:{profile.email || 'jbmartinez0899@gmail.com'}" class="hover:text-neutral-900 transition-colors">Email</a>
      <a href={profile.github || '#'} class="hover:text-neutral-900 transition-colors">GitHub</a>
    </div>
  </footer>
</main>