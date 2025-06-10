<script>
    import { fly, fade } from "svelte/transition";
    import { onMount } from "svelte";

    let mounted = false;
    let codeBlocks = [];
    let dailyRoutineCode = "";
    let isTyping = false;

    const fullDailyRoutineCode = `<span class="text-blue-400">async function</span> <span class="text-yellow-300">myDailyRoutine</span><span class="text-white">() {</span>
  <span class="text-blue-400">while</span> <span class="text-white">(</span><span class="text-orange-400">true</span><span class="text-white">) {</span>
    <span class="text-blue-400">await</span> <span class="text-yellow-300">drinkCoffee</span><span class="text-white">();</span>
    <span class="text-blue-400">await</span> <span class="text-yellow-300">testSoftware</span><span class="text-white">({</span>
      <span class="text-purple-400">withLove</span><span class="text-white">:</span> <span class="text-orange-400">true</span><span class="text-white">,</span>
      <span class="text-purple-400">breakThings</span><span class="text-white">:</span> <span class="text-green-400">"gracefully"</span>
    <span class="text-white">});</span>
    <span class="text-blue-400">await</span> <span class="text-yellow-300">buildCoolStuff</span><span class="text-white">();</span>
    <span class="text-blue-400">await</span> <span class="text-yellow-300">sleep</span><span class="text-white">(</span><span class="text-orange-400">8</span><span class="text-white">);</span> <span class="text-gray-500">// Sometimes 😅</span>
  <span class="text-white">}</span>
<span class="text-white">}</span>`;

    onMount(() => {
        mounted = true;
        // Stagger the appearance of code blocks
        codeBlocks = Array(6).fill(false);
        codeBlocks.forEach((_, i) => {
            setTimeout(() => {
                codeBlocks[i] = true;
                // Start typewriter effect for daily routine block
                if (i === 1 && !isTyping) {
                    isTyping = true;
                    typeWriterEffect();
                }
            }, i * 300);
        });
    });

    function typeWriterEffect() {
        let index = 0;
        const plainText = fullDailyRoutineCode.replace(/<[^>]*>/g, '');
        
        const typeInterval = setInterval(() => {
            if (index < fullDailyRoutineCode.length) {
                // Find the next complete span or character
                if (fullDailyRoutineCode[index] === '<') {
                    // Find the end of the tag
                    const tagEnd = fullDailyRoutineCode.indexOf('>', index) + 1;
                    dailyRoutineCode = fullDailyRoutineCode.substring(0, tagEnd);
                    index = tagEnd;
                } else {
                    dailyRoutineCode = fullDailyRoutineCode.substring(0, index + 1);
                    index++;
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
    }
</script>

<section id="about" class="py-20 bg-gradient-to-b from-neutral-100 to-white">
    <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            <span
                class="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text"
                >Who Am I?</span
            >
            <span class="text-neutral-800 text-xl block mt-2">
                Let the code tell my story...
            </span>
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
            <!-- Identity Definition -->
            {#if mounted && codeBlocks[0]}
                <div
                    class="bg-neutral-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
                    in:fly={{ y: 20, duration: 600 }}
                >
                    <div class="flex items-center mb-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span class="text-gray-400 text-sm ml-4">identity.ts</span>
                    </div>
                    <pre class="text-sm overflow-x-auto"><code class="language-typescript">
<span class="text-blue-400">class</span> <span class="text-yellow-300">JuanBautistaMartinez</span> <span class="text-white">{</span>
  <span class="text-blue-400">constructor</span><span class="text-white">() {</span>
    <span class="text-blue-400">this</span><span class="text-white">.</span><span class="text-purple-400">name</span> <span class="text-white">=</span> <span class="text-green-400">"Juan Bautista Martinez"</span><span class="text-white">;</span>
    <span class="text-blue-400">this</span><span class="text-white">.</span><span class="text-purple-400">currentRole</span> <span class="text-white">=</span> <span class="text-green-400">"QA Engineer @ Cursor AI"</span><span class="text-white">;</span>
    <span class="text-blue-400">this</span><span class="text-white">.</span><span class="text-purple-400">passions</span> <span class="text-white">= [</span>
      <span class="text-green-400">"Building cool apps"</span><span class="text-white">,</span>
      <span class="text-green-400">"Breaking things (professionally)"</span><span class="text-white">,</span>
      <span class="text-green-400">"Making software better"</span>
    <span class="text-white">];</span>
  <span class="text-white">}</span>
<span class="text-white">}</span>
                    </code></pre>
                </div>
            {/if}

            <!-- Daily Routine -->
            {#if mounted && codeBlocks[1]}
                <div
                    class="bg-neutral-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
                    in:fly={{ y: 20, duration: 600 }}
                >
                    <div class="flex items-center mb-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span class="text-gray-400 text-sm ml-4">daily-routine.js</span>
                    </div>
                    <pre class="text-sm overflow-x-auto"><code class="language-javascript">
{@html dailyRoutineCode}<span class="animate-blink text-white">|</span>
                    </code></pre>
                </div>
            {/if}

            <!-- Experience Timeline -->
            {#if mounted && codeBlocks[2]}
                <div
                    class="bg-neutral-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
                    in:fly={{ y: 20, duration: 600 }}
                >
                    <div class="flex items-center mb-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span class="text-gray-400 text-sm ml-4">career.json</span>
                    </div>
                    <pre class="text-sm overflow-x-auto"><code class="language-json">
<span class="text-white">{</span>
  <span class="text-green-400">"experience"</span><span class="text-white">: [</span>
    <span class="text-white">{</span>
      <span class="text-green-400">"company"</span><span class="text-white">:</span> <span class="text-green-400">"Cursor AI"</span><span class="text-white">,</span>
      <span class="text-green-400">"role"</span><span class="text-white">:</span> <span class="text-green-400">"QA Engineer"</span><span class="text-white">,</span>
      <span class="text-green-400">"mission"</span><span class="text-white">:</span> <span class="text-green-400">"Making AI coding tools bulletproof"</span>
    <span class="text-white">},</span>
    <span class="text-white">{</span>
      <span class="text-green-400">"company"</span><span class="text-white">:</span> <span class="text-green-400">"Jam City"</span><span class="text-white">,</span>
      <span class="text-green-400">"role"</span><span class="text-white">:</span> <span class="text-green-400">"Engineer"</span><span class="text-white">,</span>
      <span class="text-green-400">"achievement"</span><span class="text-white">:</span> <span class="text-green-400">"Shipped games to millions"</span>
    <span class="text-white">}</span>
  <span class="text-white">]</span>
<span class="text-white">}</span>
                    </code></pre>
                </div>
            {/if}

            <!-- Skills & Superpowers -->
            {#if mounted && codeBlocks[3]}
                <div
                    class="bg-neutral-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
                    in:fly={{ y: 20, duration: 600 }}
                >
                    <div class="flex items-center mb-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span class="text-gray-400 text-sm ml-4">superpowers.py</span>
                    </div>
                    <pre class="text-sm overflow-x-auto"><code class="language-python">
<span class="text-blue-400">def</span> <span class="text-yellow-300">my_superpowers</span><span class="text-white">():</span>
    <span class="text-purple-400">skills</span> <span class="text-white">= {</span>
        <span class="text-green-400">'frontend'</span><span class="text-white">: [</span><span class="text-green-400">'React'</span><span class="text-white">,</span> <span class="text-green-400">'SvelteKit'</span><span class="text-white">,</span> <span class="text-green-400">'TypeScript'</span><span class="text-white">],</span>
        <span class="text-green-400">'mobile'</span><span class="text-white">: [</span><span class="text-green-400">'React Native'</span><span class="text-white">,</span> <span class="text-green-400">'iOS'</span><span class="text-white">],</span>
        <span class="text-green-400">'testing'</span><span class="text-white">: [</span><span class="text-green-400">'Cypress'</span><span class="text-white">,</span> <span class="text-green-400">'Jest'</span><span class="text-white">,</span> <span class="text-green-400">'Playwright'</span><span class="text-white">],</span>
        <span class="text-green-400">'secret_weapon'</span><span class="text-white">:</span> <span class="text-green-400">'Finding bugs before users do 🐛'</span>
    <span class="text-white">}</span>
    <span class="text-blue-400">return</span> <span class="text-purple-400">skills</span>
                    </code></pre>
                </div>
            {/if}

            <!-- Personal Projects -->
            {#if mounted && codeBlocks[4]}
                <div
                    class="bg-neutral-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
                    in:fly={{ y: 20, duration: 600 }}
                >
                    <div class="flex items-center mb-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span class="text-gray-400 text-sm ml-4">projects.tsx</span>
                    </div>
                    <pre class="text-sm overflow-x-auto"><code class="language-typescript">
<span class="text-blue-400">const</span> <span class="text-purple-400">myProjects</span> <span class="text-white">= [</span>
  <span class="text-white">{</span>
    <span class="text-purple-400">name</span><span class="text-white">:</span> <span class="text-green-400">"Solutio"</span><span class="text-white">,</span>
    <span class="text-purple-400">type</span><span class="text-white">:</span> <span class="text-green-400">"Crowdfunding Platform"</span><span class="text-white">,</span>
    <span class="text-purple-400">status</span><span class="text-white">:</span> <span class="text-green-400">"🚀 Launched & Growing"</span><span class="text-white">,</span>
    <span class="text-purple-400">coolFactor</span><span class="text-white">:</span> <span class="text-orange-400">9001</span> <span class="text-gray-500">// It's over 9000!</span>
  <span class="text-white">},</span>
  <span class="text-white">{</span>
    <span class="text-purple-400">name</span><span class="text-white">:</span> <span class="text-green-400">"SmileApp"</span><span class="text-white">,</span>
    <span class="text-purple-400">type</span><span class="text-white">:</span> <span class="text-green-400">"iOS Healthcare App"</span><span class="text-white">,</span>
    <span class="text-purple-400">impact</span><span class="text-white">:</span> <span class="text-green-400">"Making healthcare accessible"</span>
  <span class="text-white">}</span>
<span class="text-white">];</span>
                    </code></pre>
                </div>
            {/if}

            <!-- Philosophy -->
            {#if mounted && codeBlocks[5]}
                <div
                    class="bg-neutral-900 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all duration-300 md:col-span-2"
                    in:fly={{ y: 20, duration: 600 }}
                >
                    <div class="flex items-center mb-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span class="text-gray-400 text-sm ml-4">philosophy.rs</span>
                    </div>
                    <pre class="text-sm overflow-x-auto"><code class="language-rust">
<span class="text-blue-400">fn</span> <span class="text-yellow-300">my_philosophy</span><span class="text-white">() -> </span><span class="text-purple-400">String</span> <span class="text-white">{</span>
    <span class="text-blue-400">let</span> <span class="text-purple-400">principles</span> <span class="text-white">= vec![</span>
        <span class="text-green-400">"Code with purpose"</span><span class="text-white">,</span>
        <span class="text-green-400">"Test everything (twice)"</span><span class="text-white">,</span>
        <span class="text-green-400">"Build products that matter"</span><span class="text-white">,</span>
        <span class="text-green-400">"Never stop learning"</span><span class="text-white">,</span>
    <span class="text-white">];</span>
    
    <span class="text-blue-400">match</span> <span class="text-purple-400">principles</span><span class="text-white">.</span><span class="text-yellow-300">join</span><span class="text-white">(</span><span class="text-green-400">" && "</span><span class="text-white">) {</span>
        <span class="text-purple-400">philosophy</span> <span class="text-white">=></span> <span class="text-purple-400">philosophy</span> <span class="text-white">+</span> <span class="text-green-400">" = Success! 🎯"</span>
    <span class="text-white">}</span>
<span class="text-white">}</span>
                    </code></pre>
                </div>
            {/if}
        </div>

        <!-- Fun fact at the bottom -->
        <div class="mt-12 text-center">
            <p class="text-neutral-600 text-lg">
                <span class="font-mono bg-neutral-200 px-2 py-1 rounded">console.log</span>
                <span class="mx-2">(</span>
                <span class="text-green-600">"Ready to build something amazing together?"</span>
                <span class="mx-2">);</span>
            </p>
        </div>
    </div>
</section>

<style>
    pre {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        line-height: 1.5;
    }

    code {
        white-space: pre-wrap;
        word-break: break-word;
    }

    /* Add subtle animation to code blocks */
    .bg-neutral-900 {
        position: relative;
        overflow: hidden;
    }

    .bg-neutral-900::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899);
        border-radius: 0.5rem;
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease;
    }

    .bg-neutral-900:hover::before {
        opacity: 1;
    }

    .bg-neutral-900:hover {
        transform: scale(1.05) rotate(-1deg);
    }

    /* Animate float effect */
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

    /* Add blink effect to the daily routine code */
    .animate-blink {
        animation: blink 0.7s step-end infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>