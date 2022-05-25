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

const icons = [
    {
        id: "cv",
        description: "cv",
        href: "https://drive.google.com/file/d/1DmUaqbfcWk2VcdVsgVdwyKQo1iEMJE5b/view?usp=sharing",
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