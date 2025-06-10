<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    
    let mounted = false;
    
    onMount(() => {
        mounted = true;
    });
    
    const codeSnippets = [
        {
            language: "javascript",
            title: "whoami.js",
            code: `const juanBautista = {
    name: "Juan Bautista Martinez",
    role: "QA Engineer @ Cursor AI",
    location: "Argentina 🇦🇷",
    
    passions: [
        "Building exceptional web/mobile apps",
        "Breaking things (professionally) as QA",
        "Creating tools that solve real problems"
    ],
    
    currentlyWorkingOn: {
        company: "Cursor AI",
        mission: "Revolutionizing how developers code with AI",
        previousRole: "Engineer @ Jam City Games 🎮"
    }
};

export default juanBautista;`
        },
        {
            language: "typescript",
            title: "skills.interface.ts",
            code: `interface DeveloperSkills {
    languages: Array<"JavaScript" | "TypeScript" | "Dart" | "Swift">;
    frontend: {
        frameworks: ["SvelteKit", "Angular", "React Native"];
        styling: ["Tailwind CSS", "Sass", "Styled Components"];
        testing: ["Playwright", "Jest", "Cypress"];
    };
    mobile: {
        platforms: ["iOS", "Android"];
        frameworks: ["Flutter", "React Native"];
    };
    backend: ["Node.js", "Express", "MongoDB"];
    tools: ["Git", "Docker", "Juno", "Vercel"];
}

const mySkills: DeveloperSkills = {
    languages: ["JavaScript", "TypeScript", "Dart", "Swift"],
    frontend: {
        frameworks: ["SvelteKit", "Angular", "React Native"],
        styling: ["Tailwind CSS", "Sass", "Styled Components"],
        testing: ["Playwright", "Jest", "Cypress"]
    },
    mobile: {
        platforms: ["iOS", "Android"],
        frameworks: ["Flutter", "React Native"]
    },
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "Docker", "Juno", "Vercel"]
};`
        },
        {
            language: "python",
            title: "achievements.py",
            code: `class Achievements:
    def __init__(self):
        self.projects_built = [
            {
                "name": "Solutio",
                "type": "Crowdfunding Platform",
                "impact": "Revolutionizing how software gets funded",
                "url": "https://solutio.one"
            },
            {
                "name": "SmileApp",
                "type": "Healthcare iOS App",
                "impact": "Optimizing patient-professional interaction",
                "url": "App Store"
            }
        ]
        
        self.certifications = [
            "Angular 4: Full Stack Developer",
            "Flutter & Dart Complete Course",
            "UX Design Fundamentals",
            "Sass: From Beginner to Advanced"
        ]
        
        self.fun_facts = [
            "Gave TEDx talks in university 🎤",
            "Volunteer teacher for art workshops",
            "Fluent in Spanish & English",
            "Photography enthusiast 📸"
        ]
        
    def get_motivation(self):
        return "Building tools that make a difference 🚀"`
        },
        {
            language: "bash",
            title: "contact.sh",
            code: `#!/bin/bash

# Let's connect! 🤝

LINKEDIN="https://www.linkedin.com/in/juan-bautista-martinez/"
TWITTER="https://x.com/JuanRezzio"
EMAIL="juan@yourdomain.com"

echo "📧 Want to collaborate on something amazing?"
echo "🔗 LinkedIn: $LINKEDIN"
echo "🐦 Twitter: $TWITTER"
echo "💼 Currently open to exciting opportunities!"

# Run this script in your terminal:
# curl -s https://juanbautista.dev/contact | sh`
        }
    ];
</script>

<section id="about" class="py-20 container mx-auto px-4 max-w-6xl">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        <span class="bg-gradient-to-r from-emerald-600 to-cyan-600 text-transparent bg-clip-text">
            Hello, World! 👋
        </span>
    </h2>
    
    <p class="text-center text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
        Let me introduce myself through the language we both understand best: <span class="font-mono text-emerald-600">code</span>
    </p>
    
    {#if mounted}
        <div class="grid lg:grid-cols-2 gap-6">
            {#each codeSnippets as snippet, i}
                <div 
                    class="group relative"
                    in:fly={{ y: 30, duration: 600, delay: i * 150 }}
                >
                    <!-- Code Editor Window -->
                    <div class="bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                        <!-- Editor Header -->
                        <div class="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span class="text-gray-400 text-sm font-mono">{snippet.title}</span>
                                <span class="text-gray-500 text-xs px-2 py-1 bg-gray-700 rounded">
                                    {snippet.language}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Code Content -->
                        <div class="p-4 overflow-x-auto">
                            <pre class="text-sm leading-relaxed">
                                <code class="language-{snippet.language} text-gray-300 font-mono whitespace-pre">
{@html highlightCode(snippet.code, snippet.language)}
                                </code>
                            </pre>
                        </div>
                    </div>
                    
                    <!-- Decorative gradient border on hover -->
                    <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
            {/each}
        </div>
    {/if}
    
    <!-- Call to Action -->
    <div class="text-center mt-12" in:fade={{ delay: 800, duration: 600 }}>
        <p class="text-neutral-600 mb-6">
            Like what you see? Let's build something amazing together! 🚀
        </p>
        <a
            href="#contact"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
            <span>Get in Touch</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
        </a>
    </div>
</section>

<style>
    /* Syntax highlighting colors */
    :global(.token-keyword) { color: #c678dd; }
    :global(.token-string) { color: #98c379; }
    :global(.token-number) { color: #d19a66; }
    :global(.token-operator) { color: #56b6c2; }
    :global(.token-comment) { color: #5c6370; font-style: italic; }
    :global(.token-function) { color: #61afef; }
    :global(.token-property) { color: #e06c75; }
    :global(.token-punctuation) { color: #abb2bf; }
    :global(.token-variable) { color: #e5c07b; }
    
    /* Custom scrollbar for code blocks */
    pre::-webkit-scrollbar {
        height: 6px;
    }
    
    pre::-webkit-scrollbar-track {
        background: #1e2127;
    }
    
    pre::-webkit-scrollbar-thumb {
        background: #4b5263;
        border-radius: 3px;
    }
    
    pre::-webkit-scrollbar-thumb:hover {
        background: #5c6370;
    }
</style>

<script context="module">
    function highlightCode(code, language) {
        // Simple syntax highlighting function
        let highlighted = code;
        
        // Common patterns for different languages
        const patterns = {
            // Keywords
            keyword: /\b(const|let|var|function|class|interface|export|import|return|if|else|for|while|new|this|def|self|echo|curl)\b/g,
            // Strings
            string: /(["'`])(?:(?=(\\?))\2.)*?\1/g,
            // Numbers
            number: /\b\d+(\.\d+)?\b/g,
            // Comments
            comment: /(\/\/.*$|#.*$|\/\*[\s\S]*?\*\/)/gm,
            // Functions
            function: /\b(\w+)(?=\()/g,
            // Properties
            property: /\.(\w+)/g,
            // Operators
            operator: /[+\-*/%=<>!&|?:]/g,
            // Punctuation
            punctuation: /[{}[\];(),]/g,
        };
        
        // Apply highlighting
        highlighted = highlighted.replace(patterns.comment, '<span class="token-comment">$&</span>');
        highlighted = highlighted.replace(patterns.string, '<span class="token-string">$&</span>');
        highlighted = highlighted.replace(patterns.keyword, '<span class="token-keyword">$&</span>');
        highlighted = highlighted.replace(patterns.number, '<span class="token-number">$&</span>');
        highlighted = highlighted.replace(patterns.function, '<span class="token-function">$1</span>(');
        highlighted = highlighted.replace(patterns.property, '.<span class="token-property">$1</span>');
        highlighted = highlighted.replace(patterns.operator, '<span class="token-operator">$&</span>');
        highlighted = highlighted.replace(patterns.punctuation, '<span class="token-punctuation">$&</span>');
        
        return highlighted;
    }
</script>