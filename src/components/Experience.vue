<template>
    <div id="experience" class="py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
        <aos-vue animation="fade-in" :once="true" placement="center-bottom">
            <h2
                class="text-center text-3xl md:text-3xl lg:text-4xl font-mono text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
                Where I've Worked</h2>
        </aos-vue>
        <div class="flex flex-col md:flex-row h-fit w-fit mx-6 md:mx-0 justify-around tablist py-5">
            <aos-vue animation="fade-right" :once="true" placement="center-bottom" :duration="750"
                class="flex flex-row md:flex-col basis-2/6 tracking-wide cursor-pointer">
                <!-- Desktop view -->
                <ul
                    class="hidden md:flex md:flex-row justify-around w-[80vw] sm:w-[85vw] md:w-full md:flex-col md:border-b-0 md:border-l-4 md:mr-5 md:pr-5">
                    <li v-for="(experience, index) in experiences" :key="`${experience.title}_${experience.employer}`"
                        class="hidden md:block box-border cursor-pointer font-sans h-[60px] w-[60vw] md:w-full text-center md:text-left pt-2 px-4 md:py-4 transition-transform duration-500 ease-in-out"
                        :class="{ 'bg-red-700/20 dark:bg-yellow-500/20': selectedIndex == index }"
                        @click="selected(index)">
                        <h3 class="font-sans leading-none md:leading-normal md:w-[25vw] lg:w-[15vw] whitespace-nowrap">
                            {{
            experience.employer }}</h3>
                    </li>
                </ul>
                <div id="elevator"
                    class="absolute hidden md:block bg-red-700 dark:bg-yellow-500 h-[60px] w-1 transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateY(${elevatorPosition})` }">
                </div>
                <!-- Desktop view end -->
                <br />

                <!-- Mobile view -->
                <div class="md:hidden flex h-fit w-[82vw] justify-between">
                    <div class="arrow rotate-180" @click="decrement">
                        <img class="h-12" :src="RightChevron" :class="{ 'yellow-to-red': !darkMode }" />
                    </div>
                    <h1 class="text-center text-xl font-medium py-2 whitespace-nowrap">
                        {{ experiences[activeIndex].employer }}
                    </h1>
                    <div class="arrow" @click="increment">
                        <img class="h-12" :src="RightChevron" :class="{ 'yellow-to-red': !darkMode }" />
                    </div>
                </div>

                <div id="runway" class="absolute block md:hidden bg-white h-1 w-[80vw]"
                    :style="{ transform: `translateY(60px)` }"></div>
                <div id="walkalator"
                    class="absolute block md:hidden bg-red-700 dark:bg-yellow-500 w-[20vw] h-1 transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateY(60px) translateX(${walkalatorPosition})` }">
                </div>
                <!-- Mobile view end -->
            </aos-vue>
            <br class="block md:hidden my-10" />
            <div class="w-[80vw] md:w-full">
                <aos-vue animation="fade-up" :once="true" placement="center-bottom" :duration="750"
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExperienceItems from '../interfaces/ExperienceItems';
import RightChevron from '../assets/chevron_right.png';

const props = defineProps({
    darkMode: Boolean
})

let elevatorPosition = ref('0px');
let walkalatorPosition = ref('0vw');
let activeIndex = ref(0);

const elevatorHeight = 60;
const walkalatorWidth = 20; // 80vw / number of experiences

const experiences: ExperienceItems[] = [
    {
        title: "Software Development Engineer II",
        employer: "Amazon",
        shortenedEmployer: "Amazon",
        description: [
            "Spearheaded the effort to scale up existing interactive video ads delivery service by 100x in preparation for Thursday Night Football's expected traffic of minimum 50,000 transactions-per-second (TPS)",
            "Designed and wrote Lambda services with high performance and observability. Services could be monitored via Cloudwatch by team members for performance issues / bugs / other metrics.",
            "Ensured team's microservices communicated efficiently and seamlessly with upstream & downstream services with minimal downtime",
            "Collaborated with technical program managers (TPM), engineers and other engineering teams on creating, maintaining and running our services efficiently.",
            "Implemented caching mechanism using Elasticache to decrease reliance on downstream services and decreased overall latency by at least 30%.",
            "Prepared and executed load tests using TestNG to ensure service reliability during expected peak traffic of 50k - 75K TPS.",
            "R&D on possible ways to introduce interactive ads onto other video platforms",
            "Successfully mitigated high-severity production issues while on-call and proactively monitored systems using Cloudwatch dashboards and logs ",
        ],
        date: '2022 - 2023',
    },
    {
        title: "Developer",
        employer: "New York Stock Exchange",
        shortenedEmployer: "NYSE",
        description: [
            "Played pivotal role in helping Hercules Solutions get acquired by NYSE",
            "Worked with cloud and infrastructure teams to integrate into secured internal Amazon Web Services (AWS) cloud from existing Google Cloud Platform (GCP) servers",
            "Performed major upgrade to Vue 3 by rewriting all components to use Vue 3's Composition API, reducing bundle size by 50% and thereby significantly improving loading speeds and web performance",
            "Authored runbook to facilitate onboarding new team members, cutting down onboarding time in half",
        ],
        date: '2021 - 2022',
    },
    {
        title: "Senior Engineer",
        employer: "Hercules Solutions",
        shortenedEmployer: "Hercules",
        description: [
            "Worked in two-man engineering team to create an enterprise-level secure, scalable fintech platform built on cloud microservice architecture",
            "Proposed, spearheaded and developed experimental prototype features based on client feedback using Typescript, GraphQL, Node.js, Vue.js, PostgreSQL",
            "Designed and developed robust and reusable Vue.js components, maximizing code re-use and significantly reducing overall size of codebase",
            "Wrote and implemented unit tests that provided 95% test coverage for entire API layer",
            "Configured, tested and deployed production releases using Kubernetes and Helm and ensured SLA level of 99% uptime/availability",
            "Spearheaded, developed and managed SAML login process for clients and reduced client onboarding time by 60%",
        ],
        date: '2019 - 2021',
    },
    {
        title: "Software Developer",
        employer: "Checkmate Digital",
        shortenedEmployer: "Checkmate",
        description: [
            "Collaborated with UI/UX designers and clients to implement bespoke Angular 2 web applications for clients across myriad industries",
            "Coached and pair-programmed with junior web developers to help sharpen existing skills and learn new ones",
        ],
        date: '2017 - 2019',
    },
];

let selectedExperience = ref<ExperienceItems>(experiences[0]);
let selectedIndex = ref<number>(0);

function selected(index: number) {
    activeIndex.value = index;
    elevatorPosition.value = `${index * elevatorHeight}px`;
    walkalatorPosition.value = `${index * walkalatorWidth}vw`;
    selectedExperience.value = experiences[index];
    selectedIndex.value = index;
}

function increment() {
    if (activeIndex.value < experiences.length - 1) {
        activeIndex.value++;
        selected(activeIndex.value);
    }
}

function decrement() {
    if (activeIndex.value > 0) {
        activeIndex.value--;
        selected(activeIndex.value);
    }
}
</script>

<style scoped>
.list-item:before {
    content: "▸";
    position: absolute;
    transform: translateX(-20px);
    transition: transform 1s ease-in-out;
}

.yellow-to-red {
    filter: invert(1) hue-rotate(-200deg)
}
</style>