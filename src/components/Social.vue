<template>
    <div
        class="flex flex-row justify-center w-full md:w-fit md:flex-col md:fixed absolute md:bottom-20 md:right-16">
        <a v-for="icon in icons" :key="icon.description" :alt="icon.description" :href="icon.href" class="icon mb-4 mx-4 md:mx-0 hover:opacity-70" target="_blank">
            <img :src="icon.src" class="h-8 w-8" />
        </a>
        <div id="vertical" class="hidden md:block"></div>
        <div id="horizontal" class="block md:hidden"></div>
    </div>
</template>

<script setup>

const icons = [
    {
        description: "Email",
        src: "src/assets/at.svg",
        href: "mailto:drrnyip@gmail.com",
    },
    {
        description: "GitHub",
        src: "src/assets/github.svg",
        href: "https://github.com/drrnyip",
    },
    {
        description: "LinkedIn",
        src: "src/assets/linkedin.svg",
        href: "https://www.linkedin.com/in/drrnyip/",
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
    animation: bounce 1s;
}

@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-8px);
    }

    60% {
        transform: translateY(-5px);
    }
}
</style>