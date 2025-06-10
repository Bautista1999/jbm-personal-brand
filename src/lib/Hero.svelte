<script>
    import { fly, fade, scale } from "svelte/transition";
    import { onMount } from "svelte";

    let mounted = false;
    let currentTextIndex = 0;
    let displayedText = "";
    let isDeleting = false;
    let currentCharIndex = 0;

    const textRotations = [
        "Juan Bautista Martinez",
        "a QA Engineer",
        "a Web/Mobile Developer",
    ];

    onMount(() => {
        mounted = true;

        const typeSpeed = 150; // milliseconds per character
        const deleteSpeed = 75; // milliseconds per character when deleting
        const pauseTime = 2000; // pause before starting to delete

        function typeWriter() {
            const currentText = textRotations[currentTextIndex];

            if (!isDeleting && currentCharIndex < currentText.length) {
                // Typing
                displayedText = currentText.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                setTimeout(typeWriter, typeSpeed);
            } else if (!isDeleting && currentCharIndex === currentText.length) {
                // Finished typing, pause then start deleting
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, pauseTime);
            } else if (isDeleting && currentCharIndex > 0) {
                // Deleting
                displayedText = currentText.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                setTimeout(typeWriter, deleteSpeed);
            } else if (isDeleting && currentCharIndex === 0) {
                // Finished deleting, move to next text
                isDeleting = false;
                currentTextIndex =
                    (currentTextIndex + 1) % textRotations.length;
                setTimeout(typeWriter, 200);
            }
        }

        // Start the animation
        typeWriter();
    });
</script>

<section
    id="hero"
    class="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4"
>
    <!-- Enhanced animated gradient blobs -->
    <div
        class="absolute top-0 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl opacity-30 animate-blob"
    ></div>
    <div
        class="absolute bottom-0 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-blob"
        style="animation-delay:4s"
    ></div>
    <div
        class="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-full blur-2xl opacity-15 animate-blob"
        style="animation-delay:2s"
    ></div>
    <div
        class="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-25 animate-pulse"
        style="animation-delay:1s"
    ></div>

    <!-- Profile Picture with enhanced animations -->
    <div class="relative mb-8" in:scale={{ duration: 1000, start: 0.8 }}>
        <img
            src="/ProfilePictureCompressed.jpeg"
            alt="Juan Bautista Martinez"
            class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-4 ring-white/20 ring-offset-4 ring-offset-transparent hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-500 animate-float"
        />
    </div>

    <h1
        class="text-5xl md:text-7xl font-extrabold leading-tight mb-4 min-h-[2em]"
        in:fly={{ y: -20, duration: 800 }}
    >
        {#if mounted}
            {#if currentTextIndex === 0}
                Hi, I'm
            {:else}
                I'm
            {/if}
            <span
                class="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text animate-gradient-x inline-block"
            >
                {displayedText}<span class="animate-blink">|</span>
            </span>
        {/if}
    </h1>

    <p
        class="text-lg md:text-2xl text-neutral-600 max-w-2xl mb-8"
        in:fade={{ delay: 200, duration: 800 }}
    >
        QA Engineer at <span class="font-semibold text-neutral-800"
            >Cursor AI</span
        >
        and former <span class="font-semibold text-neutral-800">Jam City</span> engineer
        who loves building exceptional web and mobile apps.
    </p>

    <div class="flex gap-4" in:fade={{ delay: 400, duration: 800 }}>
        <a
            href="#projects"
            class="px-6 py-3 bg-gradient-to-br from-purple-600 to-pink-600 hover:opacity-90 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl animate-bounce-subtle"
            style="animation-delay: 1s"
        >
            See My Work
        </a>
        <a
            href="#contact"
            class="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg animate-bounce-subtle"
            style="animation-delay: 1.2s"
        >
            Contact Me
        </a>
    </div>
</section>
