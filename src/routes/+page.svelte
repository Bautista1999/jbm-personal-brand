<script>
  export let data;
  $: userData = data.userData;
</script>

<main class="container mx-auto px-4 py-16 max-w-4xl">
  <section class="mb-16">
    <div class="flex items-center gap-8 flex-col md:flex-row">
      <img
        src={userData?.profilePicture || 'https://via.placeholder.com/150'}
        alt={userData?.username}
        class="rounded-full w-48 h-48 object-cover shadow-lg"
      />
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{userData?.username || 'Loading...'}</h1>
        <p class="text-xl text-neutral-600">{userData?.country || ''}</p>
      </div>
    </div>
  </section>

  {#if userData?.description}
    <section class="mb-16 space-y-8">
      <h2 class="text-3xl font-bold">About Me</h2>
      <p class="text-lg text-neutral-600 leading-relaxed">{userData.description}</p>
    </section>
  {/if}

  {#if userData?.categories?.length}
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Interests</h2>
      <div class="flex flex-wrap gap-4">
        {#each userData.categories as category}
          <span class="bg-neutral-200 px-4 py-2 rounded-full">{category}</span>
        {/each}
      </div>
    </section>
  {/if}

  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8">Connect</h2>
    <div class="flex flex-wrap gap-6">
      {#if userData?.xAccount}
        <a href={userData.xAccount} class="hover:text-blue-600">Twitter</a>
      {/if}
      {#if userData?.instaAccount}
        <a href={userData.instaAccount} class="hover:text-pink-600">Instagram</a>
      {/if}
      {#if userData?.GitHubAccount}
        <a href={userData.GitHubAccount} class="hover:text-gray-800">GitHub</a>
      {/if}
      {#if userData?.linkedInAccount}
        <a href={userData.linkedInAccount} class="hover:text-blue-800">LinkedIn</a>
      {/if}
    </div>
  </section>
</main>