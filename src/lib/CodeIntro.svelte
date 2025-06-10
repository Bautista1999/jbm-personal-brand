<script>
    import { fly, fade, scale } from "svelte/transition";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    let mounted = false;
    let currentCodeBlockIndex = 0;
    let typingProgress = tweened(0, {
        duration: 2000,
        easing: cubicOut
    });

    const codeBlocks = [
        {
            language: "javascript",
            title: "whoAmI.js",
            code: `const juanBautista = {
  name: "Juan Bautista Martinez",
  currentRole: "QA Engineer @ Cursor AI",
  previousRole: "Engineer @ Jam City",
  passion: ["Web Development", "Mobile Apps", "Test Automation"],
  
  skills: {
    languages: ["JavaScript", "TypeScript", "Python"],
    frontend: ["React", "React Native", "SvelteKit"],
    testing: ["Cypress", "Jest", "Playwright"],
    cloud: ["AWS", "Docker", "CI/CD"]
  },
  
  mindset: function() {
    return "Building quality into every line of code";
  }
};

console.log(juanBautista.mindset()); // "Building quality into every line of code"`
        },
        {
            language: "typescript",
            title: "myJourney.ts",
            code: `interface DeveloperJourney {
  started: number;
  milestones: Achievement[];
  currentFocus: string[];
}

class JuanBautistaMartinez implements DeveloperJourney {
  started = 2018;
  
  milestones = [
    { year: 2018, achievement: "Started coding journey" },
    { year: 2020, achievement: "Joined Jam City as Engineer" },
    { year: 2023, achievement: "Became QA Engineer at Cursor AI" },
    { year: 2024, achievement: "Building amazing web experiences" }
  ];
  
  currentFocus = [
    "Ensuring software quality at scale",
    "Creating beautiful user interfaces",
    "Automating everything possible"
  ];
  
  async buildNextProject(): Promise<string> {
    return "Something awesome! 🚀";
  }
}`
        },
        {
            language: "python",
            title: "daily_routine.py",
            code: `import coffee
import creativity
from life import balance

class JuanBautista:
    def __init__(self):
        self.role = "QA Engineer"
        self.company = "Cursor AI"
        self.location = "Remote"
        self.coffee_level = 100
        
    def daily_routine(self):
        while self.coffee_level > 0:
            self.write_tests()
            self.review_code()
            self.build_features()
            self.mentor_others()
            self.coffee_level -= 10
            
        self.refill_coffee()
        
    def write_tests(self):
        """Because quality matters!"""
        return "✅ Tests passing, confidence rising"
        
    def build_features(self):
        """Creating delightful experiences"""
        return "🎨 Pixels perfected, users happy"`
        },
        {
            language: "css",
            title: "myStyle.css",
            code: `.juan-bautista-martinez {
  position: absolute;
  top: 0;
  passion: infinite;
  creativity: 100%;
  problem-solving: always-on;
  
  background: linear-gradient(
    to right,
    #quality-assurance,
    #web-development,
    #innovation
  );
  
  animation: build-awesome-things 24h infinite;
  transform: translateX(from-idea) translateY(to-reality);
}

@keyframes build-awesome-things {
  0% { energy: 100%; coffee: required; }
  50% { debugging: in-progress; learning: continuous; }
  100% { project: shipped; satisfaction: maximum; }
}`
        }
    ];

    onMount(() => {
        mounted = true;
        typingProgress.set(100);
        
        // Rotate through code blocks
        const interval = setInterval(() => {
            currentCodeBlockIndex = (currentCodeBlockIndex + 1) % codeBlocks.length;
            typingProgress.set(0);
            setTimeout(() => typingProgress.set(100), 100);
        }, 6000);

        return () => clearInterval(interval);
    });
</script>

<section id="code-intro" class="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
    <!-- Animated background particles -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 left-10 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
        <div class="absolute bottom-20 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping" style="animation-delay: 1s"></div>
        <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping" style="animation-delay: 2s"></div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold mb-4" in:fly={{ y: -20, duration: 800 }}>
                <span class="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Hello, World! 👋
                </span>
            </h2>
            <p class="text-lg md:text-xl text-neutral-300" in:fade={{ delay: 200, duration: 800 }}>
                Let me introduce myself through code
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Code editor section -->
            <div class="relative" in:scale={{ duration: 800, delay: 400 }}>
                {#if mounted}
                    <div class="bg-neutral-800 rounded-lg shadow-2xl overflow-hidden border border-neutral-700">
                        <!-- Editor header -->
                        <div class="bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span class="text-sm text-neutral-400 font-mono">
                                {codeBlocks[currentCodeBlockIndex].title}
                            </span>
                        </div>
                        
                        <!-- Code content -->
                        <div class="p-6 font-mono text-sm overflow-x-auto">
                            <pre class="language-{codeBlocks[currentCodeBlockIndex].language}">
                                <code class="text-neutral-300" style="opacity: {$typingProgress / 100}">
{codeBlocks[currentCodeBlockIndex].code}
                                </code>
                            </pre>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Text content -->
            <div class="space-y-6" in:fly={{ x: 20, duration: 800, delay: 600 }}>
                <div class="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-purple-500 transition-colors duration-300">
                    <h3 class="text-xl font-bold mb-3 text-purple-400">
                        <span class="font-mono">const</span> myMission =
                    </h3>
                    <p class="text-neutral-300">
                        "To craft exceptional digital experiences by combining quality engineering 
                        with creative development. Every test I write, every feature I build, 
                        is a step towards making technology more reliable and delightful."
                    </p>
                </div>

                <div class="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-pink-500 transition-colors duration-300">
                    <h3 class="text-xl font-bold mb-3 text-pink-400">
                        <span class="font-mono">function</span> whatIDo()
                    </h3>
                    <ul class="space-y-2 text-neutral-300">
                        <li class="flex items-center gap-2">
                            <span class="text-green-400">✓</span>
                            Ensure software quality at Cursor AI
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-green-400">✓</span>
                            Build responsive web applications
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-green-400">✓</span>
                            Create seamless mobile experiences
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-green-400">✓</span>
                            Automate all the things!
                        </li>
                    </ul>
                </div>

                <div class="flex gap-4">
                    <a 
                        href="#projects" 
                        class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity duration-300"
                    >
                        <span class="font-mono text-sm">git checkout</span> my-projects
                    </a>
                    <a 
                        href="#contact" 
                        class="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 rounded-lg hover:border-purple-500 transition-colors duration-300"
                    >
                        <span class="font-mono text-sm">npm install</span> lets-connect
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Syntax highlighting inspired styles */
    .language-javascript code,
    .language-typescript code {
        color: #e6e6e6;
    }
    
    .language-python code {
        color: #f8f8f2;
    }
    
    .language-css code {
        color: #e6e6e6;
    }
    
    /* Add code editor feel */
    pre {
        margin: 0;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    
    /* Floating animation */
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