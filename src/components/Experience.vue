<template>
    <div class="py-12 bg-white md:mx-24 lg:mx-36">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase text-center md:text-left mb-4">Where I've
            Worked</h2>

        <div class="flex flex-col md:flex-row h-fit w-fit mx-6 md:mx-auto justify-around tablist py-5">
            <div class="flex flex-row md:flex-col basis-2/6 tracking-wide cursor-pointer">
                <ul
                    class="flex flex-row justify-around w-[90vw] md:w-full md:flex-col border-b-4 md:border-b-0 md:border-l-4 md:mr-5 md:pr-5">
                    <li v-for="(experience, index) in experiences" :key="`${experience.title}_${experience.employer}`"
                        class="box-border cursor-pointerfont-sans h-[60px] w-full text-center md:text-left pt-2 px-4 md:py-4"
                        :class="{'bg-gray-100': selectedIndex == index}"
                        @click="selected(index)">
                        <h3 class="font-sans">{{ experience.employer }}</h3>
                    </li>
                </ul>
                <div id="elevator" class="absolute hidden md:block bg-red-300 h-[60px] w-1 transition-transform"
                    :style="{ transform: `translateY(${elevatorPosition})` }"></div>
                <div id="walkalator" class="absolute block md:hidden bg-red-300 w-[30vw] h-1 transition-transform"
                    :style="{ transform: `translateY(60px) translateX(${walkalatorPosition})` }"></div>
            </div>
            <br class="block md:hidden" />
            <div class="flex flex-col h-[55vh] md:h-[50vh] md:h-fit w-fit md:w-[50vw] p-2">
                <h3 class="font-sans text-xl tracking-wider"><span class="mr-2">{{ selectedExperience.title }}</span> |
                    <span class="font-medium ml-2">{{ selectedExperience.employer }}</span></h3>
                <p class="italic">{{ selectedExperience.date }}</p>
                <br />
                <ul class="">
                    <li v-for="desc in selectedExperience.description" :key="desc" class="list-item mb-2">{{ desc }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

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
            "Worked on migrating application from GCP to company's internally regulated AWS cloud",
            "Worked closely with management and QA teams to test and integrate application with existing company infrastructure",
            "Developed runbook for onboarding new team members",
        ],
        date: '2021 - 2022',
    },
    {
        title: "Senior Engineer",
        employer: "Hercules Solutions",
        description: [
            "Worked in two-man engineering team as a full-stack developer on a secure, scalable fintech platform built on a microservice architecture",
            "Primary front-end developer & designer. Proposed, prototyped and developed new features based on business requirements. ",
            "Configured and deployed new releases across all environments using Kubernetes and Helm and ensured deployment was according to specifications",
            "Diagnosed and fixed bugs across all layers of the stack",
            "Migrated web application from Angular 2 to Vue.js",
        ],
        date: '2019 - 2021',
    },
    {
        title: "Software Developer",
        employer: "Checkmate Digital",
        description: [
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
}
</style>