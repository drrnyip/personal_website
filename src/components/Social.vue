<template>
    <div class="flex flex-row justify-center w-full md:w-fit md:flex-col md:fixed absolute md:bottom-20 md:right-16">
        <a alt="Email" href="mailto:drrnyip@gmail.com"
            class="icon mb-4 mx-4 md:mx-0 hover:opacity-70" target="_blank">
            <img v-if="darkMode" src="../assets/envelope_yellow.svg" class="h-8 w-8" />
            <img v-if="!darkMode" src="../assets/envelope_gray.svg" class="h-8 w-8" />
        </a>
        <a alt="GitHub" href="https://github.com/drrnyip"
            class="icon mb-4 mx-4 md:mx-0 hover:opacity-70" target="_blank">
            <img v-if="darkMode" src="../assets/github_yellow.svg" class="h-8 w-8" />
            <img v-if="!darkMode" src="../assets/github_gray.svg" class="h-8 w-8" />

        </a>
        <a alt="LinkedIn" href="https://www.linkedin.com/in/drrnyip"
            class="icon mb-4 mx-4 md:mx-0 hover:opacity-70" target="_blank">
            <img v-if="darkMode" src="../assets/linkedin_yellow.svg" class="h-8 w-8" />
            <img v-if="!darkMode" src="../assets/linkedin_gray.svg" class="h-8 w-8" />
        </a>
        <div id="vertical" class="hidden md:block"></div>
        <div id="horizontal" class="block md:hidden"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    darkMode: Boolean
})

const icons = [
    {
        id: "envelope",
        description: "Email",
        href: "mailto:drrnyip@gmail.com",
    },
    {
        id: "github",
        description: "GitHub",
        href: "https://github.com/drrnyip",
    },
    {
        id: "linkedin",
        description: "LinkedIn",
        href: "https://www.linkedin.com/in/drrnyip/",
    },
]

function getSrc(id) {
    if (props.darkMode) {
        return new URL(`../assets/${id}_yellow.svg`).href;
    } else {
        return new URL(`../assets/${id}_gray.svg`).href;
    }
}
</script>

<style scoped>
#vertical::after {
    content: '';
    position: absolute;
    right: 50%;
    bottom: -50%;
    height: 5rem;
    border-right: 2px solid #4f46e5;
}

#horizontal::before {
    content: '';
    position: absolute;
    bottom: 1.85rem;
    left: 3rem;
    width: 20%;
    border-bottom: 2px solid #4f46e5;
}


#horizontal::after {
    content: '';
    position: absolute;
    bottom: 1.85rem;
    right: 3rem;
    width: 20%;
    border-bottom: 2px solid #4f46e5;
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