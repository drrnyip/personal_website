<template>
    <div id="experience" class="py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
        <aos-vue animation="fade-in" :once="true" placement="center-bottom">
            <h2
                class="text-center md:text-left text-3xl md:text-3xl lg:text-4xl font-sans text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
                Where I've Worked</h2>
        </aos-vue>
        <div class="flex flex-col md:flex-row h-fit w-fit mx-6 md:mx-0 justify-around tablist py-5">
            <aos-vue animation="fade-right" :once="true" placement="center-bottom" duration="750"
                class="flex flex-row md:flex-col basis-2/6 tracking-wide cursor-pointer">
                <ul
                    class="flex flex-row justify-around w-[90vw] md:w-full md:flex-col border-b-4 md:border-b-0 md:border-l-4 md:mr-5 md:pr-5">
                    <li v-for="(experience, index) in experiences" :key="`${experience.title}_${experience.employer}`"
                        class="box-border cursor-pointerfont-sans h-[60px] w-full text-center md:text-left pt-2 px-4 md:py-4"
                        :class="{ 'bg-red-700/20 dark:bg-yellow-500/20': selectedIndex == index }"
                        @click="selected(index)">
                        <h3 class="font-sans leading-none md:leading-normal">{{ experience.employer }}</h3>
                    </li>
                </ul>
                <div id="elevator"
                    class="absolute hidden md:block bg-red-700 dark:bg-yellow-500 h-[60px] w-1 transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateY(${elevatorPosition})` }"></div>
                <div id="walkalator"
                    class="absolute block md:hidden bg-red-700 dark:bg-yellow-500 w-[30vw] h-1 transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateY(60px) translateX(${walkalatorPosition})` }"></div>
            </aos-vue>
            <br class="block md:hidden" />
            <aos-vue animation="fade-up" :once="true" placement="center-bottom" duration="750"
                class="flex flex-col h-fit min-h-[55vh] md:min-h-[50vh] lg:min-h-[40vh] w-fit md:w-[50vw] p-2">
                <h3 class="font-sans text-xl tracking-wider"><span class="mr-2">{{ selectedExperience.title
                }}</span> |
                    <span class="font-medium ml-2 text-red-700 dark:text-yellow-500">{{ selectedExperience.employer
                    }}</span>
                </h3>
                <p class="italic">{{ selectedExperience.date }}</p>
                <br />
                <ul class="">
                    <li v-for="desc in selectedExperience.description" :key="desc" class="list-item mb-2">{{ desc }}
                    </li>
                </ul>
            </aos-vue>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    darkMode: Boolean
})

let elevatorPosition = ref('0px');
let walkalatorPosition = ref('0vw');

const elevatorHeight = 60;
const walkalatorWidth = 30;


const experiences = [
    {
        title: "Developer",
        employer: "New York Stock Exchange",
        description: [
            "Joined as part of acquisition of Hercules Solutions",
            "Worked on migrating application from GCP to company’s internally regulated AWS cloud",
            "Communicated and collaborated with management and QA teams to test and integrate application with existing company infrastructure",
            "Rewrote front-end codebase and migrated production application from Vue 2 to Vue 3",
            "Developed runbook for onboarding new team members",
        ],
        date: '2021 - 2022',
    },
    {
        title: "Senior Engineer",
        employer: "Hercules Solutions",
        description: [
            "Worked in two-man engineering team as a full-stack developer on a secure, scalable fintech platform built on a microservice architecture",
            "Proposed, prototyped and developed new features based on business requirements and client requests",
            "Wrote performant, robust code and maintained major features of fintech application",
            "Configured, tested and deployed new releases across all environments using Kubernetes and Helm and ensured deployment was according to specifications",
            "Implemented, tested and deployed SAML-authenticated login using Passport.js and Okta",
            "Diagnosed and fixed bugs across all layers of the stack",
            "Migrated web application from Angular 2 to Vue.js",

        ],
        date: '2019 - 2021',
    },
    {
        title: "Software Developer",
        employer: "Checkmate Digital",
        description: [
            "Collaborated with multi-disciplinary teams and clients to create bespoke web applications across myriad industries. Primary tools included  Angular 2/Node.js/Firebase"
        ],
        date: '2017 - 2019',
    },
];

let selectedExperience = ref(experiences[0]);
let selectedIndex = ref(0);

function selected(index) {
    elevatorPosition.value = `${index * elevatorHeight}px`;
    walkalatorPosition.value = `${index * walkalatorWidth}vw`;
    selectedExperience.value = experiences[index];
    selectedIndex.value = index;
}
</script>

<style scoped>
.list-item:before {
    content: "▸";
    position: absolute;
    transform: translateX(-20px);
    transition: transform 1s ease-in-out;
}
</style>