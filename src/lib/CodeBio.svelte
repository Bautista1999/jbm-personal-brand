<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    interface Snippet {
        id: number;
        filename: string;
        language: string;
        code: string;
    }

    // Realistic, personality-infused code snippets (20-40 lines each)
    const snippets: Snippet[] = [
        {
            id: 1,
            filename: 'QAEngineer.ts',
            language: 'TypeScript',
            code: String.raw`// The QA Engineer – bullet-proofing every release ⚡️
class QAEngineer {
    #name: string;
    #tools: string[];

    constructor(name: string, tools = ['Cypress', 'Jest', 'Playwright']) {
        this.#name = name;
        this.#tools = tools;
    }

    test(feature: string): string {
        // 🧐 Ensure we break things before users do
        console.log('🔍 Running tests for ' + feature);
        const result = this.#runTools(feature);
        return result ? '✅ All green' : '❌ Bugs found';
    }

    #runTools(feature: string): boolean {
        try {
            return this.#tools.every(tool => this.#simulate(tool, feature));
        } catch (err) {
            // QA never ignores errors
            console.error('🚨 Test failed:', err);
            return false;
        }
    }

    #simulate(tool: string, feature: string): boolean {
        // Pretend to run the specific tool
        console.log('🏗️  ' + tool + ' validating ' + feature);
        return true;
    }
}

export const juanQA = new QAEngineer('Juan Bautista Martinez');
juanQA.test('Checkout Flow');`
        },
        {
            id: 2,
            filename: 'Entrepreneur.js',
            language: 'JavaScript',
            code: String.raw`// The Entrepreneur – turning ideas into products 🚀
class Startup {
    constructor(name, domain) {
        this.name = name;
        this.domain = domain;
        this.users = 0;
    }

    build() {
        console.log('🚀 Launching ' + this.name + '…');
    }

    onboard(user) {
        this.users++;
        console.log('👋 Welcome ' + user + ' to ' + this.name + '!');
    }
}

class Entrepreneur {
    #projects = [];

    createProject(name, domain) {
        const project = new Startup(name, domain);
        project.build();
        this.#projects.push(project);
        return project;
    }

    showcase() {
        return this.#projects.map(p => p.name + ' (' + p.users + ' users)');
    }
}

// Juan in action
const juan = new Entrepreneur();
const solutio = juan.createProject('Solutio', 'crowdfunding');
solutio.onboard('Alice');
const smileApp = juan.createProject('SmileApp', 'healthcare iOS');
console.log(juan.showcase());`
        },
        {
            id: 3,
            filename: 'SmileApp.swift',
            language: 'Swift',
            code: String.raw`// The iOS Developer – caring about UX & health 🩺
import Foundation
import UIKit

class SmileApp: UIApplication {
    var patients: [String] = []

    override init() {
        super.init()
        print("😊 SmileApp ready to care!")
    }

    func register(patient: String) {
        patients.append(patient)
        print("👤 \(patient) joined the wellness journey")
    }

    func remindMedication(for patient: String) {
        guard patients.contains(patient) else {
            print("⚠️ Patient not found")
            return
        }
        // Attention to UX details
        let notification = UILocalNotification()
        notification.alertBody = "💊 Time for your meds, \(patient)!"
        UIApplication.shared.presentLocalNotificationNow(notification)
    }
}

let app = SmileApp()
app.register(patient: "Marco")
app.remindMedication(for: "Marco")`
        },
        {
            id: 4,
            filename: 'profile.py',
            language: 'Python',
            code: String.raw`# The Problem Solver – de-risking complexity 💡
from dataclasses import dataclass, field
from typing import List

@dataclass
class Profile:
    name: str
    current: str
    previous: str
    location: str
    skills: List[str] = field(default_factory=list)

    def solve(self, problem: str) -> str:
        """Generic problem-solving routine – QA spirit included ✅"""
        print(f"🔎 Analysing: {problem}")
        try:
            plan = self._break_down(problem)
            for step in plan:
                self._execute(step)
            return "🎉 Problem solved!"
        except Exception as err:
            return f"🚨 Oops, edge case detected: {err}"

    def _break_down(self, problem: str) -> List[str]:
        # Divide and conquer mindset
        return [f"Step {i}" for i in range(1, 4)]

    def _execute(self, step: str):
        print(f"⚙️  {step}… done")

juan = Profile(
    name="Juan Bautista Martinez",
    current="QA Engineer at Cursor AI",
    previous="Engineer at Jam City Games",
    location="Uruguay 🇺🇾",
    skills=[
        "QA",
        "TypeScript",
        "React Native",
        "Cypress",
        "Jest",
        "Playwright",
    ],
)

print(juan.solve("Optimize release pipeline"))`
        }
    ];

    let mounted = false;

    onMount(() => {
        mounted = true;
    });
</script>

<section id="code-bio" class="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-4xl mx-auto text-center mb-16">
        <h2
            class="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            in:fly={{ y: 30, duration: 600 }}
        >
            Coded Personality
        </h2>
        <p class="text-neutral-400 text-lg md:text-xl" in:fade={{ delay: 150, duration: 600 }}>
            Sometimes code says more than words. Here's my story in the languages I speak fluently.
        </p>
    </div>

    <div
        class="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto"
    >
        {#each snippets as snippet, i}
            <div
                class="transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                in:fly={{ y: 30, duration: 600, delay: i * 200 }}
            >
                <!-- macOS-style window header -->
                <div class="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-t-lg">
                    <span class="w-3 h-3 rounded-full bg-red-500"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500"></span>
                    <span class="ml-4 text-neutral-400 text-sm font-mono select-none">
                        {snippet.filename}
                    </span>
                </div>

                <!-- Code container -->
                <pre
                    class="bg-gray-900 text-[0.75rem] sm:text-sm leading-snug text-green-200 font-mono p-4 rounded-b-lg shadow-xl overflow-x-auto whitespace-pre-wrap"
                ><code>{snippet.code}</code></pre>
            </div>
        {/each}
    </div>

    <footer class="max-w-4xl mx-auto mt-16 text-center text-neutral-500">
        <p in:fade={{ duration: 800 }}>
            Fueled by curiosity, empathy, and a relentless pursuit of elegant solutions.
        </p>
    </footer>
</section>

<style>
    /* subtle code hover scrollbars */
    pre::-webkit-scrollbar {
        height: 6px;
    }
    pre::-webkit-scrollbar-thumb {
        background: #4b5563; /* gray-700 */
        border-radius: 3px;
    }
</style>