<template>
    <div id="bulbcontainer" class="fixed right-24 top-0 dark:-top-4 dark:hover:top-0 hover:top-0 top-0 items-center pr-2 h-fit" @click="emitDarkMode">
        <span class="sr-only">Toggle dark mode</span>
        <div id="switch" class="bg-gray-600"></div>
        <img id="bulb" class="h-8 w-8 rotate-180"
            :src="darkMode ? (flickering) ? lightSolid : lightRegular : lightSolid" aria-hidden="true" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import lightRegular from "../assets/light_regular.svg";
import lightSolid from "../assets/light_solid.svg";
const props = defineProps({
    darkMode: Boolean
})

let flickering = ref(false);

onMounted(() => {
    setInterval(() => {
        flickering.value = true;
        setTimeout(() => {
            flickering.value = false;
        }, Math.floor((Math.random() * 750) + 100))
    }, Math.floor((Math.random() * 15000) + 5000))
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
    height: 200px;
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