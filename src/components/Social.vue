<template>
    <div id="social" class="flex flex-row justify-center w-full md:w-fit md:flex-col md:fixed absolute md:bottom-20 md:left-14 cursor-pointer"
        :class="{ entry: entered }">
        <div v-for="icon in icons" :key="icon.id"
            class="icon relative font-sans tracking-wider mb-4 mx-4 md:mx-0 hover:scale-125 transition-transform"
            @mouseenter="setHover(icon.id)" @mouseleave="stopHover(icon.id)">
            <a :alt="icon.id" :href="icon.href" class="" target="_blank">
                <img :src="darkMode ? icon.darkImg : icon.lightImg" class="h-8 w-8" />
            </a>
            <p class="tooltip absolute cursor-pointer hidden md:block text-gray-800 dark:text-gray-50" :class="{ show: isHovering[icon.id] }">{{
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
import mailRed from "../assets/mail_red.png";
import githubYellow from "../assets/github_yellow.png";
import githubRed from "../assets/github_red.png";
import linkedinYellow from "../assets/linkedin_yellow.png";
import linkedinRed from "../assets/linkedin_red.png";
import cvYellow from "../assets/cv_yellow.png";
import cvRed from "../assets/cv_red.png";

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
        href: "https://drive.google.com/file/d/1a9VnTYdrQKKPBBE3rh0sJ7ARW4JBvyVZ/view?usp=sharing",
        lightImg: cvRed,
        darkImg: cvYellow,
    },
    {
        id: "envelope",
        description: "Email",
        href: "mailto:drrnyip@gmail.com",
        lightImg: mailRed,
        darkImg: mailYellow,
    },
    {
        id: "github",
        description: "GitHub",
        href: "https://github.com/drrnyip",
        lightImg: githubRed,
        darkImg: githubYellow,
    },
    {
        id: "linkedin",
        description: "LinkedIn",
        href: "https://www.linkedin.com/in/drrnyip/",
        lightImg: linkedinRed,
        darkImg: linkedinYellow,
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
    top: 20%;
    left: 150%;
    transform: translateX(-100%);
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
</style>