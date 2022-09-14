<template>
    <div id="social" class="flex flex-row justify-center w-full md:w-fit md:flex-col md:fixed absolute md:bottom-20 md:left-14 cursor-pointer"
        :class="{ entry: entered }">
        <div v-for="icon in icons" :key="icon.id"
            class="icon relative font-sans tracking-wider mb-6 mx-4 md:mx-0 hover:scale-125 transition-transform"
            @mouseenter="setHover(icon.id)" @mouseleave="stopHover(icon.id)">
            <a :alt="icon.id" :href="icon.href" class="" target="_blank">
                <img :src="icon.img" class="h-6 w-6" :class="{'yellow-to-red': !darkMode}" />
            </a>
            <p class="tooltip absolute cursor-pointer hidden md:block text-xs text-gray-800 dark:text-gray-50" :class="{ show: isHovering[icon.id] }">{{
                    icon.description
            }}</p>
        </div>
        <div id="vertical" class="hidden md:block"></div>
        <!-- <div id="horizontal" class="block md:hidden"></div> -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import mailYellow from "../assets/mail_yellow.png";
import githubYellow from "../assets/github_yellow.png";
import linkedinYellow from "../assets/linkedin_yellow.png";
import cvYellow from "../assets/cv_yellow.png";

const props = defineProps({
    darkMode: Boolean
})

const isHovering = ref({});
const entered = ref(false);

onMounted(() => {
    setTimeout(() => {
        entered.value = true;
    }, 1000)
})

const icons = [
    {
        id: "cv",
        description: "Resume",
        href: "https://drive.google.com/file/d/1acENSe__oldDkhuap7dlmh-YoEC7S5RZ/view",
        img: cvYellow,
    },
    {
        id: "envelope",
        description: "Email",
        href: "mailto:drrnyip@gmail.com",
        img: mailYellow,
    },
    {
        id: "github",
        description: "GitHub",
        href: "https://github.com/drrnyip",
        img: githubYellow,
    },
    {
        id: "linkedin",
        description: "LinkedIn",
        href: "https://www.linkedin.com/in/drrnyip/",
        img: linkedinYellow,
    },

]

function setHover(id) {
    isHovering.value[id] = true;
}

function stopHover(id) {
    isHovering.value[id] = false;
}

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

.tooltip {
    top: 25%;
    left: 150%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.5s ease;
}

.show {
    opacity: 1;
    transform: translateX(0%);
}

#social {
    transform: translateY(200%);
    transition: transform 0.5s ease;
}

#social.entry {
    transform: translateY(0%);
}

.yellow-to-red {
  filter: invert(1) hue-rotate(-200deg)
}
</style>