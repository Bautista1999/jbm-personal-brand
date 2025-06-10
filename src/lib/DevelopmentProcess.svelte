<script>
    import { fly, fade, scale } from "svelte/transition";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    let mounted = false;
    let activeStep = 0;
    let progressWidth = tweened(0, {
        duration: 1500,
        easing: cubicOut
    });

    const processSteps = [
        {
            id: 1,
            title: "Discovery & Planning",
            emoji: "🔍",
            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
            description: "Requirements gathering, test strategy design, and architecture planning",
            details: [
                "Collaborate with stakeholders to define clear requirements",
                "Design comprehensive test strategies from day one",
                "Plan scalable architecture with quality in mind",
                "Create user stories and acceptance criteria"
            ],
            tools: ["Jira", "Confluence", "Figma", "Miro"],
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            title: "Development & Testing",
            emoji: "⚡",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            description: "TDD approach, continuous integration, and automated testing",
            details: [
                "Write tests first, then code - TDD all the way",
                "Implement features with quality baked in",
                "Set up continuous integration pipelines",
                "Create comprehensive test suites"
            ],
            tools: ["TypeScript", "React", "Cypress", "Jest", "GitHub Actions"],
            color: "from-cyan-500 to-blue-500"
        },
        {
            id: 3,
            title: "Quality Assurance",
            emoji: "✅",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            description: "Manual testing, performance validation, and cross-browser compatibility",
            details: [
                "Execute thorough manual and exploratory testing",
                "Validate performance across all platforms",
                "Ensure cross-browser compatibility",
                "Security testing and code reviews"
            ],
            tools: ["Playwright", "BrowserStack", "Lighthouse", "AWS Device Farm"],
            color: "from-emerald-500 to-teal-500"
        },
        {
            id: 4,
            title: "Deployment & Monitoring",
            emoji: "🚀",
            icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
            description: "CI/CD pipelines, production monitoring, and user feedback",
            details: [
                "Deploy through automated CI/CD pipelines",
                "Monitor production with real-time alerts",
                "Track performance metrics and KPIs",
                "Gather and analyze user feedback"
            ],
            tools: ["AWS", "Docker", "Datadog", "Sentry", "CircleCI"],
            color: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "Iteration & Improvement",
            emoji: "🔄",
            icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
            description: "Data-driven decisions, continuous improvement, and feature enhancement",
            details: [
                "Analyze metrics to drive improvements",
                "Implement user feedback systematically",
                "Refactor and optimize continuously",
                "Share learnings with the team"
            ],
            tools: ["Analytics", "A/B Testing", "Retrospectives", "Documentation"],
            color: "from-purple-500 to-indigo-500"
        }
    ];

    onMount(() => {
        mounted = true;
        // Start progress animation
        progressWidth.set(100);
        
        // Auto-advance through steps
        const interval = setInterval(() => {
            activeStep = (activeStep + 1) % processSteps.length;
        }, 4000);

        return () => clearInterval(interval);
    });

    function setActiveStep(index) {
        activeStep = index;
    }
</script>

<section id="development-process" class="py-20 bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
    <!-- Floating coffee elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-10 text-4xl opacity-10 animate-float" style="animation-delay: 0s">☕</div>
        <div class="absolute bottom-40 left-20 text-4xl opacity-10 animate-float" style="animation-delay: 1s">☕</div>
        <div class="absolute top-1/2 right-1/4 text-4xl opacity-10 animate-float" style="animation-delay: 2s">☕</div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <!-- Header -->
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-4" in:fly={{ y: -20, duration: 800 }}>
                <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    My Development Process
                </span>
            </h2>
            <p class="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto" in:fade={{ delay: 200, duration: 800 }}>
                From Idea to Production: A Quality-First Journey ☕
            </p>
        </div>

        <!-- Progress Bar -->
        {#if mounted}
            <div class="mb-12 max-w-4xl mx-auto" in:scale={{ duration: 800, delay: 400 }}>
                <div class="bg-neutral-300 rounded-full h-2 relative overflow-hidden">
                    <div 
                        class="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000"
                        style="width: {($progressWidth / 5) * (activeStep + 1)}%"
                    ></div>
                    <!-- Step indicators -->
                    <div class="absolute inset-0 flex justify-between items-center px-2">
                        {#each processSteps as step, i}
                            <button
                                on:click={() => setActiveStep(i)}
                                class="w-6 h-6 rounded-full transition-all duration-300 {activeStep >= i ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' : 'bg-white border-2 border-neutral-400'}"
                                aria-label="Step {i + 1}"
                            ></button>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}

        <!-- Process Steps -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {#each processSteps as step, i}
                {#if mounted}
                    <button
                        on:click={() => setActiveStep(i)}
                        class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer text-left
                               {activeStep === i ? 'ring-2 ring-purple-500 scale-105' : 'hover:scale-105'}"
                        in:fly={{ y: 50, duration: 800, delay: i * 150 }}
                    >
                        <div class="flex items-start gap-4 mb-4">
                            <div class="text-3xl">{step.emoji}</div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-neutral-800 mb-1">
                                    <span class="font-mono text-sm text-neutral-500">0{step.id}.</span> {step.title}
                                </h3>
                                <p class="text-sm text-neutral-600">{step.description}</p>
                            </div>
                        </div>
                        
                        <!-- Mini tools preview -->
                        <div class="flex flex-wrap gap-1 mt-3">
                            {#each step.tools.slice(0, 3) as tool}
                                <span class="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600">
                                    {tool}
                                </span>
                            {/each}
                            {#if step.tools.length > 3}
                                <span class="text-xs px-2 py-1 text-neutral-500">
                                    +{step.tools.length - 3}
                                </span>
                            {/if}
                        </div>
                    </button>
                {/if}
            {/each}
        </div>

        <!-- Active Step Details -->
        {#if mounted}
            <div class="max-w-4xl mx-auto" in:fade={{ duration: 500 }}>
                <div class="bg-white rounded-xl shadow-xl p-8 border-t-4 border-gradient" 
                     style="border-image: linear-gradient(to right, {processSteps[activeStep].color.split(' ')[1]}, {processSteps[activeStep].color.split(' ')[3]}) 1;">
                    
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-br {processSteps[activeStep].color} flex items-center justify-center text-white text-2xl">
                            {processSteps[activeStep].emoji}
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-neutral-800">
                                {processSteps[activeStep].title}
                            </h3>
                            <p class="text-neutral-600">{processSteps[activeStep].description}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Details -->
                        <div>
                            <h4 class="font-bold text-neutral-800 mb-3 flex items-center gap-2">
                                <span class="font-mono text-purple-600">const</span> activities =
                            </h4>
                            <ul class="space-y-2">
                                {#each processSteps[activeStep].details as detail}
                                    <li class="flex items-start gap-2 text-neutral-700">
                                        <span class="text-green-500 mt-1">✓</span>
                                        <span class="text-sm">{detail}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <!-- Tools -->
                        <div>
                            <h4 class="font-bold text-neutral-800 mb-3 flex items-center gap-2">
                                <span class="font-mono text-pink-600">import</span> tools from
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                {#each processSteps[activeStep].tools as tool}
                                    <span class="px-3 py-1 bg-gradient-to-r {processSteps[activeStep].color} text-white rounded-full text-sm font-medium">
                                        {tool}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>

                    <!-- Quality Quote -->
                    <div class="mt-6 p-4 bg-neutral-50 rounded-lg border-l-4 border-purple-500">
                        <p class="text-neutral-700 italic">
                            {#if activeStep === 0}
                                "Quality is not an act, it's a habit. It starts from the first line of planning." ☕
                            {:else if activeStep === 1}
                                "Every test written is a bug prevented, every line reviewed is quality assured." 🚀
                            {:else if activeStep === 2}
                                "Breaking things today so users don't have to tomorrow. That's the QA way!" ✨
                            {:else if activeStep === 3}
                                "Ship it with confidence, monitor it with diligence, celebrate with coffee." ☕
                            {:else}
                                "The best code is the one that keeps evolving. Iterate, improve, inspire!" 🎯
                            {/if}
                        </p>
                        <p class="text-sm text-neutral-500 mt-2">— Juan Bautista Martinez, QA Engineer @ Cursor AI</p>
                    </div>
                </div>
            </div>
        {/if}

        <!-- Call to Action -->
        <div class="text-center mt-12" in:fly={{ y: 20, duration: 800, delay: 1000 }}>
            <p class="text-lg text-neutral-700 mb-4">
                <span class="font-mono">console.log(</span>"Fueled by coffee, driven by quality"<span class="font-mono">);</span> ☕
            </p>
            <div class="flex gap-4 justify-center">
                <a 
                    href="#contact" 
                    class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-300 font-medium"
                >
                    Let's Build Something Amazing
                </a>
                <a 
                    href="#skills" 
                    class="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300 font-medium"
                >
                    View My Skills
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    /* Floating animation */
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(-5deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
    }
    
    .animate-float {
        animation: float 4s ease-in-out infinite;
    }

    /* Custom border gradient fix */
    .border-gradient {
        border-image-slice: 1;
    }
</style>