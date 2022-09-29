<template>
    <div id="bulbcontainer"
        class="fixed right-8 sm:right-12 md:right-14 lg:right-24 xl:right-36 2xl:right-52 -top-28 dark:-top-32 dark:hover:-top-28 hover:-top-28 md:top-0 md:dark:-top-4 md:dark:hover:top-0 md:hover:top-0 items-center pr-2 h-fit"
        :class="{ entry: entered }" @click="emitDarkMode">
        <span class="sr-only">Toggle dark mode</span>
        <div id="switch" class="bg-gray-600"></div>
        <img id="bulb" class="h-8 w-8 rotate-180" :src="darkMode ? (flickering) ? lightOn : lightOff : lightOn"
            aria-hidden="true" />
        <div v-if="!clickedAtLeastOnce && showHint" id="lightbulb-hint"
            class="font-sans text-center tracking-tight font-medium text-sm w-[80px] text-gray-800 dark:text-gray-50">
            <span>{{ darkMode ? "Too dark?" : "Too bright?" }}</span>
            <br />
            <span>Hit the lights</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import lightOn from "../assets/lightbulb_on.png";
import lightOff from "../assets/lightbulb_off.png";

const props = defineProps({
    darkMode: Boolean
})

const flickering = ref(false);
const entered = ref(false);
const clickedAtLeastOnce = ref(false);
const showHint = ref(false);
const showHintInitialDelay = 10000; // in ms

onMounted(() => {
    setTimeout(() => {
        entered.value = true;
    }, 1000)
    setInterval(() => {
        flickering.value = true;
        setTimeout(() => {
            flickering.value = false;
        }, Math.floor((Math.random() * 500) + 100))
    }, Math.floor((Math.random() * 20000) + 1000))

    // Show hint after set delay
    setTimeout(() => {
        showHint.value = true;
    }, showHintInitialDelay);
})

const emits = defineEmits(['toggleDarkMode'])

function emitDarkMode() {
    clickedAtLeastOnce.value = true;
    emits('toggleDarkMode', true);
}
</script>

<style scoped>
#bulbcontainer {
    width: 50px;
    cursor: pointer;
    z-index: 50;
    transition: all 0.25s ease;
    transform: translateY(-200%);
}

#bulbcontainer.entry {
    transform: translateY(0%);
}

#switch {
    height: 24vh;
    max-height: 35vh;
    width: 2px;
    border-radius: 5px;
    right: -15px;
    position: relative;
    cursor: pointer;
}

#bulb {
    position: relative;
    cursor: pointer;
}

#bulbcontainer>#lightbulb-hint {
    margin-left: -50%;
    margin-top: 10px;
    animation: appear 5s ease;
    animation-fill-mode: forwards;
}

@keyframes appear {
    0% {
        opacity: 0;
        transform: translateY(-25%);
    }

    15% {
        opacity: 1;
        transform: translateY(0%);
    }

    85% {
        opacity: 1;
        transform: translateY(0%);
    }

    100% {
        opacity: 0;
        transform: translateY(-25%);
        display: none;
    }
}

</style>