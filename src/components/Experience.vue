<template>
    <div class="flex h-[400px] w-fit justify-around tablist mx-auto py-5">
        <div class="flex flex-col left w-[300px] tracking-wide">
            <ul class="border-l-4 mr-5 px-5">
                <li v-for="(experience, index) in experiences" :key="`${experience.title}_${experience.employer}`"
                    class="box-border h-[60px] cursor-pointer font-sans py-4" @click="selected(experience, index)">
                    {{ experience.employer }}
                </li>
            </ul>
            <div id="elevator" class="absolute bg-red-300 h-[60px] w-1 transition-transform"
                :style="{ transform: `translateY(${elevatorPosition})` }"></div>
        </div>
        <div class="right w-[600px] bg-blue-300"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

let elevatorPosition = ref('0px');
const elevatorHeight = 60;

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

function selected(exp, index) {
    elevatorPosition.value = `${index * elevatorHeight}px`;
    selectedExperience.value = experiences[index];
}
</script>

<style scoped>
.list-item:before {
    content: "▸";
    position: absolute;
    left: -5px;
    top: 5px;
}
</style>