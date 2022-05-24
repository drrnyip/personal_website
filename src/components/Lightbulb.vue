<template>
    <div id="bulbcontainer" class="fixed right-6 md:right-14 lg:right-24 -top-28 dark:-top-32 dark:hover:-top-28 hover:-top-28 md:top-0 md:dark:-top-4 md:dark:hover:top-0 md:hover:top-0 items-center pr-2 h-fit" @click="emitDarkMode">
        <span class="sr-only">Toggle dark mode</span>
        <div id="switch" class="bg-gray-600"></div>
        <img id="bulb" class="h-8 w-8 rotate-180"
            :src="darkMode ? (flickering) ? lightOn : lightOff : lightOn" aria-hidden="true" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import lightRegular from "../assets/light_regular.svg";
import lightSolid from "../assets/light_solid.svg";
import lightOn from "../assets/lightbulb_on.png";
import lightOff from "../assets/lightbulb_off.png";

const props = defineProps({
    darkMode: Boolean
})

let flickering = ref(false);

onMounted(() => {
    setInterval(() => {
        flickering.value = true;
        setTimeout(() => {
            flickering.value = false;
        }, Math.floor((Math.random() * 500) + 100))
    }, Math.floor((Math.random() * 20000) + 1000))
})

const emits = defineEmits(['toggleDarkMode'])

function emitDarkMode() {
    emits('toggleDarkMode', true);
}
</script>

<style scoped>
#bulbcontainer {
    /* background: lime; */
    width: 50px;
    cursor: pointer;
    z-index: 50;
    transition: all 0.25s ease-in-out;
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
    /* right: -5px; */
    /* top: -3px; */
    cursor: pointer;
}
</style>