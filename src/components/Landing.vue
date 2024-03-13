<template>
    <div id="landing"
        class="flex flex-col justify-start h-full min-h-[95vh] w-full md:text-left bg-gray-100 dark:bg-gray-800">
        <div class="absolute top-[25%] md:top-[30%] lg:top-[35%] px-4 sm:px-12 md:px-28 lg:px-36 xl:px-48">
            <Brushstroke :darkMode="darkMode" :delay="getBrushstrokeDelay()">
                <aos-vue animation="fade-down" :once="true" placement="top-bottom" :duration="750" easing="ease"
                    :delay="250">
                    <h3
                        class="text-md sm:text-lg md:text-xl lg:text-2xl font-sans uppercase text-red-700 dark:text-yellow-500 tracking-widest font-semibold">
                        Hello, my name is Darren</h3>
                </aos-vue>
                <br />
                <aos-vue animation="fade-up" :once="true" placement="top-bottom" :duration="750" easing="ease"
                    :delay="500">
                    <h3
                        class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-gray-800 dark:text-gray-50 tracking-widest font-semibold min-h-fit">
                        I<span id="typewriter"></span></h3>
                </aos-vue>
                <br />
                <aos-vue animation="fade-up" :once="true" placement="top-bottom" :duration="750" easing="ease"
                    :delay="750">
                    <p
                        class="text-md sm:text-lg md:text-xl lg:text-2xl font-sans text-gray-800 dark:text-gray-50 tracking-wide">
                        I'm a software engineer with extensive experience in building scalable software solutions on
                        modern cloud architecture. 
                    </p>
                </aos-vue>
            </Brushstroke>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import Brushstroke from "../components/Brushstroke.vue";
import Typewriter from 'typewriter-effect/dist/core';

const props = defineProps({
    darkMode: Boolean
})

let currentHeadlineIndex: number = 0;

watch(() => props.darkMode, (curr, prev) => {
    changeHeadline();
})

const headlines = [
    " create websites",
    " am a Full Stack <br>Developer",
    " love <br>Typescript",
    " built this with Vue.js",
    " develop software",
    " design scalable systems",
    " always test my code",
    " document my code",
    " work well in teams",
    "'ve worked at startups",
    "'ve worked at Big Tech",
]

let typewriter: any;

onMounted(() => {
    typewriter = new Typewriter('#typewriter', {
        strings: headlines,
        delay: 10,
    });

    setTimeout(() => {
        changeHeadline(0);
    }, 1500)
})

function getRandomHeadline(): String {
    let index = Math.floor(Math.random() * ((headlines.length - 1) + 1));
    if (index == currentHeadlineIndex) return getRandomHeadline();
    currentHeadlineIndex = index;
    return headlines[index];
}

function changeHeadline(index?: number) {
    let headline;
    if (index != undefined) {
        headline = headlines[index];
        currentHeadlineIndex = index;
    } else {
        headline = getRandomHeadline();
    }
    typewriter.deleteAll(10);
    typewriter.typeString(headline);
    typewriter.pauseFor(500);
    typewriter.start();
}

function getBrushstrokeDelay(): number {
    let delay = 700;
    const length = headlines[currentHeadlineIndex].length;
    if (length >= 20) {
        delay = 1000;
    }
    return delay;
}

</script>

<style></style>