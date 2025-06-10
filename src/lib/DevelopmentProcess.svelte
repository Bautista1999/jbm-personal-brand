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
        updateProgress();
        
        // Auto-advance through steps
        const interval = setInterval(() => {
            activeStep = (activeStep + 1) % processSteps.length;
            updateProgress();
        }, 5000);

        return () => clearInterval(interval);
    });

    function setActiveStep(index) {
        activeStep = index;
        updateProgress();
    }

    function updateProgress() {
        // Calculate progress based on active step (0-based index, so we use activeStep for partial progress)
        const progress = ((activeStep) / (processSteps.length - 1)) * 100;
        progressWidth.set(progress);
    }
</script>

<section id="development-process" class="py-20 bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-10 text-4xl opacity-10 animate-float" style="animation-delay: 0s">☕</div>
        <div class="absolute bottom-40 left-20 text-4xl opacity-10 animate-float" style="animation-delay: 1s">☕</div>
        <div class="absolute top-1/2 right-1/4 text-4xl opacity-10 animate-float" style="animation-delay: 2s">☕</div>
        <div class="absolute bottom-20 right-40 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute top-40 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1.5s"></div>
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

        <!-- Improved Progress Bar -->
        {#if mounted}
            <div class="mb-16 max-w-5xl mx-auto px-8" in:scale={{ duration: 800, delay: 400 }}>
                <!-- Step labels at top -->
                <div class="flex justify-between mb-4">
                    {#each processSteps as step, i}
                        <button
                            on:click={() => setActiveStep(i)}
                            class="text-center flex-1 cursor-pointer group"
                            aria-label="Go to {step.title}"
                        >
                            <span class="text-2xl mb-2 block transition-transform duration-300 group-hover:scale-110 {activeStep === i ? 'scale-110' : ''}">
                                {step.emoji}
                            </span>
                            <span class="text-xs md:text-sm font-medium {activeStep === i ? 'text-purple-600' : 'text-neutral-500'} hidden md:block">
                                {step.title}
                            </span>
                        </button>
                    {/each}
                </div>
                
                <!-- Progress track -->
                <div class="relative">
                    <div class="bg-neutral-200 rounded-full h-3 shadow-inner overflow-hidden">
                        <div 
                            class="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 shadow-sm"
                            style="width: {$progressWidth}%"
                        ></div>
                    </div>
                    
                    <!-- Step dots -->
                    <div class="absolute inset-0 flex justify-between items-center">
                        {#each processSteps as step, i}
                            <div class="relative">
                                <button
                                    on:click={() => setActiveStep(i)}
                                    class="w-8 h-8 rounded-full transition-all duration-300 shadow-md
                                           {activeStep >= i 
                                             ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-110' 
                                             : 'bg-white border-3 border-neutral-300 hover:border-purple-400'}"
                                    aria-label="Step {i + 1}"
                                >
                                    {#if activeStep > i}
                                        <span class="text-white text-sm">✓</span>
                                    {:else if activeStep === i}
                                        <span class="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></span>
                                    {/if}
                                </button>
                            </div>
                        {/each}
                    </div>
                </div>
                
                <!-- Current step indicator -->
                <div class="text-center mt-4">
                    <span class="text-sm text-neutral-600">
                        Step <span class="font-bold text-purple-600">{activeStep + 1}</span> of {processSteps.length}
                    </span>
                </div>
            </div>
        {/if}

        <!-- Process Step Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {#each processSteps as step, i}
                {#if mounted}
                    <button
                        on:click={() => setActiveStep(i)}
                        class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer text-left transform
                               {activeStep === i 
                                 ? 'ring-2 ring-purple-500 ring-offset-2 scale-105 shadow-xl' 
                                 : 'hover:scale-105 hover:-translate-y-1'}"
                        in:fly={{ y: 50, duration: 800, delay: i * 150 }}
                    >
                        <div class="flex items-start gap-4 mb-4">
                            <div class="text-3xl flex-shrink-0 {activeStep === i ? 'animate-bounce' : ''}">{step.emoji}</div>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold text-neutral-800 mb-1">
                                    <span class="font-mono text-sm text-neutral-500">0{step.id}.</span> {step.title}
                                </h3>
                                <p class="text-sm text-neutral-600 line-clamp-2">{step.description}</p>
                            </div>
                        </div>
                        
                        <!-- Mini tools preview -->
                        <div class="flex flex-wrap gap-1 mt-3">
                            {#each step.tools.slice(0, 3) as tool}
                                <span class="text-xs px-2 py-1 bg-gradient-to-r {step.color} text-white rounded-full font-medium">
                                    {tool}
                                </span>
                            {/each}
                            {#if step.tools.length > 3}
                                <span class="text-xs px-2 py-1 text-neutral-500 font-medium">
                                    +{step.tools.length - 3}
                                </span>
                            {/if}
                        </div>
                        
                        {#if activeStep === i}
                            <div class="mt-3 text-xs font-medium text-purple-600">
                                ← Currently here
                            </div>
                        {/if}
                    </button>
                {/if}
            {/each}
        </div>

        <!-- Active Step Details -->
        {#if mounted}
            <div class="max-w-4xl mx-auto" in:fade={{ duration: 500 }}>
                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <!-- Gradient header bar -->
                    <div class="h-2 bg-gradient-to-r {processSteps[activeStep].color}"></div>
                    
                    <div class="p-8">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br {processSteps[activeStep].color} flex items-center justify-center text-white text-3xl shadow-lg">
                                {processSteps[activeStep].emoji}
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-neutral-800">
                                    {processSteps[activeStep].title}
                                </h3>
                                <p class="text-neutral-600 mt-1">{processSteps[activeStep].description}</p>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8">
                            <!-- Details -->
                            <div>
                                <h4 class="font-bold text-neutral-800 mb-4 flex items-center gap-2">
                                    <span class="font-mono text-purple-600">const</span> activities =
                                </h4>
                                <ul class="space-y-3">
                                    {#each processSteps[activeStep].details as detail, j}
                                        <li class="flex items-start gap-3 text-neutral-700"
                                            in:fly={{ x: -20, duration: 500, delay: j * 100 }}>
                                            <span class="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                            <span class="text-sm leading-relaxed">{detail}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>

                            <!-- Tools -->
                            <div>
                                <h4 class="font-bold text-neutral-800 mb-4 flex items-center gap-2">
                                    <span class="font-mono text-pink-600">import</span> tools from
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    {#each processSteps[activeStep].tools as tool, k}
                                        <span class="px-4 py-2 bg-gradient-to-r {processSteps[activeStep].color} text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
                                              in:scale={{ duration: 400, delay: k * 50 }}>
                                            {tool}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        </div>

                        <!-- Quality Quote -->
                        <div class="mt-8 p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl border-l-4 {activeStep % 2 === 0 ? 'border-purple-500' : 'border-pink-500'}">
                            <p class="text-neutral-700 italic text-lg">
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
                            <p class="text-sm text-neutral-500 mt-3 font-medium">— Juan Bautista Martinez, QA Engineer @ Cursor AI</p>
                        </div>
                    </div>
                </div>
            </div>
        {/if}

        <!-- Call to Action -->
        <div class="text-center mt-16" in:fly={{ y: 20, duration: 800, delay: 1000 }}>
            <p class="text-lg text-neutral-700 mb-6">
                <span class="font-mono">console.log(</span>"Fueled by coffee, driven by quality"<span class="font-mono">);</span> ☕
            </p>
            <div class="flex gap-4 justify-center flex-wrap">
                <a 
                    href="#contact" 
                    class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
                >
                    Let's Build Something Amazing
                </a>
                <a 
                    href="#skills" 
                    class="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 hover:border-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
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

    /* Bounce animation */
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .animate-bounce {
        animation: bounce 1s ease-in-out infinite;
    }

    /* Line clamp utility */
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    /* Custom border width */
    .border-3 {
        border-width: 3px;
    }
</style>