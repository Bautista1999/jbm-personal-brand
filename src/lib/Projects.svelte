<script>
  import { fly } from 'svelte/transition';

  const projects = [
    {
      title: 'Blockchain Voting DApp',
      description: 'A decentralized voting platform built on Ethereum smart contracts ensuring transparency and security.',
      link: 'https://github.com/JuanRezzio/blockchain-voting-dapp',
      image: 'https://source.unsplash.com/random/800x600?blockchain'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Natural-language chatbot leveraging GPT-4 to provide instant support for e-commerce customers.',
      link: 'https://github.com/JuanRezzio/ai-chatbot',
      image: 'https://source.unsplash.com/random/800x600?ai'
    },
    {
      title: 'Realtime Collaboration Tool',
      description: 'Web app enabling teams to collaborate on documents in realtime using CRDTs and WebSockets.',
      link: 'https://github.com/JuanRezzio/realtime-collab',
      image: 'https://source.unsplash.com/random/800x600?coding'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Cross-platform app that helps users visualize spending habits and set saving goals.',
      link: 'https://github.com/JuanRezzio/finance-tracker',
      image: 'https://source.unsplash.com/random/800x600?finance'
    }
  ];
</script>

<section id="projects" class="py-20 container mx-auto px-4 max-w-5xl">
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
    <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Projects</span>
  </h2>

  <div class="grid md:grid-cols-2 gap-10">
    {#each projects as project, i}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="group block relative overflow-hidden rounded-xl shadow-lg"
        in:fly={{ y: 20, duration: 600, delay: i * 150 }}
      >
        <img src={project.image} alt={project.title} class="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-500" />

        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white p-6">
          <h3 class="text-2xl font-semibold mb-2">{project.title}</h3>
          <p class="text-sm opacity-90">{project.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>