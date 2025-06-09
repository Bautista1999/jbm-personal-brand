<script>
  export let twitter;
  export let linkedin;
</script>

<section id="contact" class="py-20 container mx-auto px-4 max-w-3xl text-center">
  <h2 class="text-3xl md:text-4xl font-bold mb-8">
    <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Let's Connect</span>
  </h2>

  <p class="mb-8 text-lg text-neutral-600">Have a project in mind or just want to say hi? My inbox is always open.</p>

  <div class="flex justify-center gap-8">
    <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" class="text-neutral-500 hover:text-pink-500 transition transform hover:-translate-y-1">
      <!-- X (Twitter) Icon -->
      <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.162 2H1.838C1.375 2 1 2.375 1 2.838v18.324C1 21.625 1.375 22 1.838 22h20.324c.463 0 .838-.375.838-.838V2.838A.838.838 0 0 0 22.162 2zm-3.919 5.704-9.618 9.63h4.93v2.648h-9.618v-9.617h2.648v4.929l9.618-9.618z"/>
      </svg>
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-neutral-500 hover:text-purple-600 transition transform hover:-translate-y-1">
      <!-- LinkedIn Icon -->
      <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.039-1.852-3.039-1.853 0-2.137 1.446-2.137 2.94v5.668H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.273 2.373 4.273 5.457v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.273V1.727C24 .774 23.207 0 22.225 0z"/>
      </svg>
    </a>
  </div>
</section>