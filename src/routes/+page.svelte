<script>
  import { fly } from 'svelte/transition';
</script>

<main class="container mx-auto px-4 py-16 max-w-4xl">
  <section class="mb-16" in:fly="{{ y: 50, duration: 1000 }}">
    <div class="flex items-center gap-8 flex-col md:flex-row">
      <img
        src="https://pbs.twimg.com/profile_images/1789664405740736512/PBu6OhgZ_400x400.jpg"
        alt="Juan Bautista Martínez"
        class="rounded-full w-48 h-48 object-cover shadow-lg"
      />
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Juan Bautista Martínez</h1>
        <p class="text-xl text-neutral-600">Fullstack Developer & QA Engineer</p>
      </div>
    </div>
  </section>

  <section class="mb-16 space-y-8" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
    <h2 class="text-3xl font-bold">About Me</h2>
    <p class="text-lg text-neutral-600 leading-relaxed">
      Passionate about building technology since childhood. Experienced in various frameworks, from low-level assembler to high-level Python. Deep expertise in Javascript, Flutter, Eggplant, Svelte, Motoko, and Rust since 2022.
    </p>
  </section>

  <section class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
    <h2 class="text-3xl font-bold mb-8">Experience</h2>
    <div class="space-y-8">
      <div class="border-l-4 border-neutral-900 pl-4">
        <h3 class="text-xl font-bold">QA Automation Engineer | Jam City</h3>
        <p class="text-neutral-600">March 2023 - Present</p>
      </div>
      <div class="border-l-4 border-neutral-900 pl-4">
        <h3 class="text-xl font-bold">Fullstack Blockchain Development | Solutio</h3>
        <p class="text-neutral-600">May 2023 - Present</p>
      </div>
      <div class="border-l-4 border-neutral-900 pl-4">
        <h3 class="text-xl font-bold">Mobile Development | SmileApp</h3>
        <p class="text-neutral-600">Jan 2023 - March 2024</p>
      </div>
    </div>
  </section>

  <section class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 600 }}">
    <h2 class="text-3xl font-bold mb-8">Projects</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold mb-2">Solutio</h3>
        <p class="text-neutral-600">A decentralized platform for idea sharing, development, and funding on ICP blockchain.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold mb-2">SmileApp</h3>
        <p class="text-neutral-600">Comprehensive dental management application built with Flutter and Firebase.</p>
      </div>
    </div>
  </section>

  <footer class="text-center text-neutral-600" in:fly="{{ y: 50, duration: 1000, delay: 800 }}">
    <div class="flex justify-center space-x-6">
      <a href="mailto:jbmartinez0899@gmail.com" class="hover:text-neutral-900 transition-colors">Email</a>
      <a href="https://github.com/yourgithub" class="hover:text-neutral-900 transition-colors">GitHub</a>
    </div>
  </footer>
</main>