<script>
    import { fly, scale } from "svelte/transition";
    import { onMount } from "svelte";

    const skills = [
        "Quality Assurance",
        "Test Automation",
        "JavaScript/TypeScript",
        "React",
        "React Native",
        "SvelteKit",
        "Node.js",
        "Cypress",
        "Jest",
        "Playwright",
        "API Testing",
        "Mobile Testing",
        "CI/CD",
        "AWS",
        "Tailwind CSS",
    ];

    let mounted = false;

    onMount(() => {
        mounted = true;
    });
</script>

<section id="skills" class="py-20 bg-neutral-100">
    <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">
            <span
                class="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text"
                >Skills</span
            >
        </h2>

        <ul class="flex flex-wrap justify-center gap-4">
            {#each skills as skill, i}
                {#if mounted}
                    <li
                        class="px-4 py-2 bg-white rounded-lg shadow text-neutral-800 hover:bg-gradient-to-br from-purple-600 to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-xl cursor-pointer animate-float"
                        style="animation-delay: {i * 0.1}s"
                        in:scale={{ duration: 600, delay: i * 100, start: 0.8 }}
                        on:mouseenter={() => {}}
                    >
                        {skill}
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</section>
