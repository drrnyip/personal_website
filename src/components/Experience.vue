<template>
    <div class="flex justify-center">

        <div class="w-full max-w-md px-2 py-16 sm:px-0">
            <TabGroup>
                <TabList class="flex w-full justify-between space-x-1 rounded-xl bg-blue-900/20 py-1">
                    <Tab v-for="experience in experiences" :key="`${experience.title}_${experience.employer}`"
                        v-slot="{ selected }">
                        <button :class="[
                            'w-full rounded-lg py-2.5 px-2.5 text-sm font-medium leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                        ]">
                            {{ experience.employer }}
                        </button>
                    </Tab>
                </TabList>

                <TabPanels class="mt-2">
                    <TabPanel v-for="experience in experiences" :key="`${experience.title}_${experience.employer}`"
                        :class="[
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                        ]">
                        <h3 class="font-sans"><span class="text-blue-600 tracking-wider">{{ experience.title }}</span>
                            <span> |</span> <span class="font-medium tracking-tighter">{{ experience.employer }}</span></h3>
                        <ul>
                            <li v-for="item in experience.description" :key="item.id"
                                class=" list-item tracking-tight relative rounded-md px-3 py-2">
                                <p class="text-sm leading-5">
                                    {{ item }}
                                </p>

                                <!-- <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>{{ post.date }}</li>
                                    <li>&middot;</li>
                                    <li>{{ post.commentCount }} comments</li>
                                    <li>&middot;</li>
                                    <li>{{ post.shareCount }} shares</li>
                                </ul> -->
                            </li>
                        </ul>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const experiences = ref([
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
])
</script>

<style scoped>
.list-item:before {
    content: "▸";
    position: absolute;
    left: -5px;
    top: 5px;
}
</style>