<script>
    import { fly } from "svelte/transition";

    const personalProjects = [
        {
            title: "Solutio",
            description:
                "🚀 Revolutionary crowdfunding platform I built where users crowdfund the software tools they need and developers earn by building them. Pay only when delivered!",
            link: "https://solutio.one",
            image: "/solutio.png",
        },
        {
            title: "SmileApp",
            description:
                "📱 iOS healthcare app I developed to optimize interaction between professionals and patients, featuring appointment management and billing.",
            link: "https://apps.apple.com/uy/app/smileapp/id6504717084?l=es-MX",
            image: "/smileApp.webp",
        },
    ];

    const workExperience = [
        {
            title: "Cursor AI",
            description:
                "💼 QA Engineer at the AI-powered code editor revolutionizing developer productivity with intelligent code completion.",
            link: "https://www.cursor.com/",
            image: "/cursor.png",
        },
        {
            title: "Jam City Games",
            description:
                "🎮 Former engineer at this mobile gaming giant with global franchises like Harry Potter: Hogwarts Mystery and Disney Emoji Blitz.",
            link: "https://www.jamcity.com/",
            image: "/jc.jpeg",
        },
    ];
</script>

<section id="projects" class="py-20 container mx-auto px-4 max-w-5xl">
    <!-- Personal Projects Section -->
    <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            <span
                class="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
                >Personal Projects</span
            >
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
            {#each personalProjects as project, i}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group block relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 animate-fade-in-up"
                    style="animation-delay: {i * 0.2}s"
                    in:fly={{ y: 50, duration: 800, delay: i * 200 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        class="object-cover w-full h-60 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />

                    <div
                        class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center text-white p-6"
                    >
                        <h3
                            class="text-2xl font-semibold mb-2 transform group-hover:scale-110 transition-transform duration-300"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        >
                            {project.description}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <!-- Work Experience Section -->
    <div>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            <span
                class="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                >Work Experience</span
            >
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
            {#each workExperience as project, i}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group block relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 animate-fade-in-up"
                    style="animation-delay: {(i + personalProjects.length) *
                        0.2}s"
                    in:fly={{
                        y: 50,
                        duration: 800,
                        delay: (i + personalProjects.length) * 200,
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        class="object-cover w-full h-60 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700"
                    />

                    <div
                        class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center text-white p-6"
                    >
                        <h3
                            class="text-2xl font-semibold mb-2 transform group-hover:scale-110 transition-transform duration-300"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        >
                            {project.description}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
