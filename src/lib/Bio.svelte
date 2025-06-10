<script>
    import { fade, fly, scale } from "svelte/transition";
    import { onMount } from "svelte";

    let mounted = false;
    let hoveredSnippet = null;

    const codeSnippets = [
        {
            id: 1,
            title: "journey.js",
            language: "javascript",
            code: `const juan = {
  role: "QA Engineer",
  company: "Cursor AI",
  previousRole: "Engineer @ Jam City",
  passion: ["Quality", "Innovation", "User Experience"],
  mission: "Making software that doesn't suck 🚀"
};

console.log(\`Current status: \${juan.role} at \${juan.company}\`);
// Output: "Current status: QA Engineer at Cursor AI"`,
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            title: "skills.tsx",
            language: "typescript",
            code: `interface Developer {
  languages: string[];
  frameworks: string[];
  tools: string[];
  coffeeCups: number;
}

const myStack: Developer = {
  languages: ["TypeScript", "JavaScript", "Python"],
  frameworks: ["React", "React Native", "SvelteKit"],
  tools: ["Cypress", "Jest", "Playwright"],
  coffeeCups: Infinity // ☕ Essential fuel
};`,
            gradient: "from-blue-400 to-cyan-500"
        },
        {
            id: 3,
            title: "qa-mindset.py",
            language: "python",
            code: `def find_bugs(code):
    """My approach to quality assurance"""
    
    mindset = {
        "user_first": True,
        "break_things": "creatively",
        "automate": "everything_possible",
        "document": "like_your_future_self_depends_on_it"
    }
    
    return "🐛 Found it! Let's fix it together."`,
            gradient: "from-green-400 to-emerald-500"
        },
        {
            id: 4,
            title: "life.sh",
            language: "bash",
            code: `#!/bin/bash

# Daily routine
while true; do
  code
  test
  debug
  learn_something_new
  help_teammates
  
  if [ "$time" == "late" ]; then
    sleep 8h
  fi
done`,
            gradient: "from-purple-400 to-pink-500"
        }
    ];

    onMount(() => {
        mounted = true;
    });
</script>

<section id="bio" class="py-20 bg-white relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-2xl opacity-20 animate-blob"></div>

    <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8" in:fly={{ y: 20, duration: 800 }}>
            <span class="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                About Me in Code
            </span>
            <span class="text-2xl ml-2">👨‍💻</span>
        </h2>

        <p class="text-lg md:text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-12" in:fade={{ delay: 200, duration: 800 }}>
            They say code speaks louder than words. Here's my story, one snippet at a time!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each codeSnippets as snippet, i}
                {#if mounted}
                    <div
                        class="group relative"
                        in:scale={{ duration: 600, delay: i * 150, start: 0.9 }}
                        on:mouseenter={() => hoveredSnippet = snippet.id}
                        on:mouseleave={() => hoveredSnippet = null}
                    >
                        <!-- Code window container -->
                        <div class="bg-neutral-900 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 
                                    {hoveredSnippet === snippet.id ? 'scale-105 -translate-y-2' : ''} 
                                    hover:shadow-2xl border border-neutral-800">
                            <!-- Window header -->
                            <div class="flex items-center justify-between bg-neutral-800 px-4 py-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span class="text-xs text-neutral-400 font-mono bg-gradient-to-r {snippet.gradient} text-transparent bg-clip-text font-semibold">
                                    {snippet.title}
                                </span>
                            </div>
                            
                            <!-- Code content -->
                            <div class="p-4 overflow-x-auto">
                                <pre class="text-sm"><code class="language-{snippet.language} text-neutral-300 font-mono leading-relaxed">{snippet.code}</code></pre>
                            </div>
                        </div>

                        <!-- Floating accent -->
                        {#if hoveredSnippet === snippet.id}
                            <div 
                                class="absolute -inset-1 bg-gradient-to-r {snippet.gradient} rounded-lg blur-xl opacity-20 -z-10"
                                in:fade={{ duration: 300 }}
                            ></div>
                        {/if}
                    </div>
                {/if}
            {/each}
        </div>

        <!-- Fun fact section -->
        <div class="mt-16 text-center" in:fade={{ delay: 800, duration: 800 }}>
            <div class="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg">
                <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    Fun Facts in Binary
                </h3>
                <div class="space-y-2 text-left max-w-md font-mono text-sm">
                    <p class="text-neutral-700">
                        <span class="text-green-600">01000010</span> = B for "Bug Hunter Extraordinaire" 🐛
                    </p>
                    <p class="text-neutral-700">
                        <span class="text-blue-600">01010001</span> = Q for "Quality is my middle name" ✨
                    </p>
                    <p class="text-neutral-700">
                        <span class="text-purple-600">01000001</span> = A for "Always learning, always growing" 📚
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Custom syntax highlighting for better readability */
    code {
        font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
    }

    /* Add some custom animations */
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }
</style>