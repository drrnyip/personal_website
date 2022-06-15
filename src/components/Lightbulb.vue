<template>
    <div id="bulbcontainer"
        class="fixed right-8 sm:right-12 md:right-14 lg:right-24 xl:right-36 2xl:right-52 -top-28 dark:-top-32 dark:hover:-top-28 hover:-top-28 md:top-0 md:dark:-top-4 md:dark:hover:top-0 md:hover:top-0 items-center pr-2 h-fit"
        :class="{ entry: entered }" @click="emitDarkMode" @mouseover="activateHint" @mouseleave="deactivateHint">
        <span class="sr-only">Toggle dark mode</span>
        <div id="switch" class="bg-gray-600"></div>
        <img id="bulb" class="h-8 w-8 rotate-180" :src="darkMode ? (flickering) ? lightOn : lightOff : lightOn"
            aria-hidden="true" />
        <div id="lightbulb-hint" class="font-sans text-center tracking-tight font-medium text-sm w-[80px] text-gray-800 dark:text-gray-50"
            :class="{ show: !clickedAtLeastOnce && showHint }">
            <span>Too dark?</span>
            <br />
            <span>Hit the lights</span>
        </div>
    </div>
</template>

<script setup>
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
const showHintInitialDelay = 15000; // in ms

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
        setTimeout(() => {
            showHint.value = false;
        }, 5000)
    }, showHintInitialDelay);
})

const emits = defineEmits(['toggleDarkMode'])

function emitDarkMode() {
    clickedAtLeastOnce.value = true;
    emits('toggleDarkMode', true);
}

function activateHint() {
    showHint.value = true;
}

function deactivateHint() {
    showHint.value = false;
}
</script>

<style scoped>
#bulbcontainer {
    width: 50px;
    cursor: pointer;
    z-index: 50;
    transition: all 0.75s ease-in-out;
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

#lightbulb-hint {
    transition: all 0.5s ease;
    margin-left: -50%;
    margin-top: 10px;
    transform: translateY(-25%);
    opacity: 0;
}

.show {
    opacity: 1 !important;
    transform: translateY(0%) !important;
}
</style>