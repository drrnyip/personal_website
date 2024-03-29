<template>
    <div id="projects" class="py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
        <aos-vue animation="fade-in" :once="true" placement="center-bottom" :duration="750">
            <h2
                class="text-center md:text-left text-3xl md:text-3xl lg:text-4xl font-sans text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
                Things I've Built
            </h2>
        </aos-vue>
        <div class="flex flex-col mt-8">
            <div v-for="(project, index) in projects" :key="project.name"
                class="project flex flex-col md:flex-row mb-12">
                <aos-vue v-if="index % 2 == 0" animation="fade-right" :once="true" placement="center-bottom"
                    :duration="750"
                    class="screenshot rounded border-cyan-400 mix-blend-difference hover:mix-blend-saturate dark:border-yellow-500 border-2 mx-6 md:mx-2 hidden md:block md:basis-3/5 flex-1 cursor-pointer">
                    <img :src="project.img"
                        class="object-contain h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 backdrop-contrast-200 hover:backdrop-contrast-100 backdrop-brightness-sm hover:backdrop-brightness"
                        :alt="project.alt" @click="newtab(project.href)" />
                </aos-vue>
                <aos-vue animation="fade-up" :once="true" placement="center-bottom" :duration="750"
                    class="details basis-2/5 flex-1 px-4 md:px-0 text-left z-10"
                    :class="{ 'md:text-right': index % 2 == 0, 'md:text-left': index % 2 != 0 }">
                    <a :href="project.href" target="_blank">
                        <h1
                            class="text-2xl text-red-700 dark:text-yellow-500 font-sans tracking-wider mt-4 md:mt-10 mb-2 md:mb-6">
                            {{ project.name }}</h1>
                    </a>
                    <p class="w-full md:w-[120%] text-md py-4 px-6 rounded text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-900"
                        :class="{ 'md:ml-[-20%]': index % 2 == 0, 'md:mr-[-20%]': index % 2 != 0 }">
                        {{ project.description }}</p>
                    <div class="deets relative flex flex-row justify-between px-0 md:px-2 mx-2 md:mx-0 mt-2 md:mt-4"
                        :class="{ 'md:justify-end': index % 2 == 0, 'md:justify-start': index % 2 != 0 }">
                        <ul class="flex justify-around">
                            <li v-for="used of project.builtwith" :key="used" class="mx-2 font-mono text-xs">{{ used
                            }}
                            </li>
                        </ul>
                        <div class="flex md:mx-2 justify-around">
                            <img :src="link_yellow" class="h-4 cursor-pointer" :class="{ 'yellow-to-red': !darkMode }"
                                @click="newtab(project.href)" />
                        </div>
                    </div>
                </aos-vue>
                <aos-vue v-if="index % 2 != 0" animation="fade-right" :once="true" placement="center-bottom"
                    :duration="750"
                    class="screenshot rounded border-cyan-400 mix-blend-difference hover:mix-blend-saturate dark:border-yellow-500 border-2 mx-6 md:mx-2 hidden md:block md:basis-3/5 flex-1 cursor-pointer">
                    <img :src="project.img"
                        class="object-contain h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 backdrop-contrast-200 hover:backdrop-contrast-100 backdrop-brightness-sm hover:backdrop-brightness"
                        :alt="project.alt" @click="newtab(project.href)" />
                </aos-vue>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import justgimme from '../assets/projects/justgimme.jpg';
import thoddle from '../assets/projects/thoddle.jpg';
import link_yellow from '../assets/link_yellow.png';

const props = defineProps({
    darkMode: Boolean
})

const projects = ref([
    {
        name: 'Just Gimme A Password',
        alt: 'Screenshot for Just Gimme a Password',
        href: 'https://justgimmepw.com',
        img: justgimme,
        description: 'A progressive web application for quickly generating passwords with a single tap/click. Randomly generates passwords that satisfy modern security standards that are easy to both remember and type.',
        builtwith: ['Vue 3', 'JS', 'PWA', 'Vercel']
    },
    {
        name: 'Thoddle',
        alt: 'Screenshot for Thoddle',
        href: 'https://thoddle.vercel.app',
        img: thoddle,
        description: 'Infinitely replayable Wordle for people who find the original too difficult. Forked from a popular open-source project and inspired by Wheel of Fortune.',
        builtwith: ['React']
    }
])

function newtab(href: string) {
    window.open(href, "_blank");
}

</script>

<style scoped>
/* .deets:after {
    z-index: -1;
    content: "";
    height: 25px;
    width: 25px;
    position: absolute;
    right: 0;
    bottom: -100%;
    border-radius: 0 0 5px 0;
    border-right: 2px #111827 solid;
    border-bottom: 2px #111827 solid;
} */

.yellow-to-red {
    filter: invert(1) hue-rotate(-200deg);
}
</style>