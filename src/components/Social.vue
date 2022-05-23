<template>
    <div class="flex flex-row justify-center w-full md:w-fit md:flex-col md:fixed absolute md:bottom-20 md:left-14">
        <a v-for="icon in icons" :key="icon.id" :alt="icon.id" :href="icon.href"
            class="icon mb-4 mx-4 md:mx-0 hover:opacity-70" target="_blank">
            <img :src="darkMode ? icon.darkImg : icon.lightImg" class="h-8 w-8" />
        </a>
        <div id="vertical" class="hidden md:block"></div>
        <div id="horizontal" class="block md:hidden"></div>
    </div>
</template>

<script setup>
import envelopeDark from "../assets/envelope_yellow.svg"
import envelopeLight from "../assets/envelope_gray.svg"
import githubDark from "../assets/github_yellow.svg"
import githubLight from "../assets/github_gray.svg"
import linkedinDark from "../assets/linkedin_yellow.svg"
import linkedinLight from "../assets/linkedin_gray.svg"

const props = defineProps({
    darkMode: Boolean
})

const icons = [
    {
        id: "envelope",
        description: "Email",
        href: "mailto:drrnyip@gmail.com",
        lightImg: envelopeLight,
        darkImg: envelopeDark,
    },
    {
        id: "github",
        description: "GitHub",
        href: "https://github.com/drrnyip",
        lightImg: githubLight,
        darkImg: githubDark,
    },
    {
        id: "linkedin",
        description: "LinkedIn",
        href: "https://www.linkedin.com/in/drrnyip/",
        lightImg: linkedinLight,
        darkImg: linkedinDark,
    },
]
</script>

<style scoped>
#vertical::after {
    content: '';
    position: absolute;
    right: 50%;
    bottom: -50%;
    height: 5rem;
    border-right: 2px solid #4b5563;
}

#horizontal::before {
    content: '';
    position: absolute;
    bottom: 1.85rem;
    left: 3rem;
    width: 20%;
    border-bottom: 2px solid #4b5563;
}


#horizontal::after {
    content: '';
    position: absolute;
    bottom: 1.85rem;
    right: 3rem;
    width: 20%;
    border-bottom: 2px solid #4b5563;
}

.icon:hover {
    transform: translateY(-3px);
    transition: all 0.1s ease-in;
    /* animation: bounce 1s; */
}

/* @keyframes bounce {
    0%,
    20%,
    50%
    {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-8px);
    }

    60% {
        transform: translateY(-5px);
    }

    100% {
        transform: translateY(-5px);
    }
} */
</style>