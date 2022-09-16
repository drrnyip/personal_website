<template>
    <img id="scrollup" :src="UpChevron" class="h-10 w-10 z-10 fixed bottom-12 lg:bottom-12 right-6 lg:right-12 cursor-pointer"
        :class="{'yellow-to-red': !darkMode, 'bounce': hovering }" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)" @click="scrollTop" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UpChevron from '../assets/up-chevron-yellow.png';

let hovering = ref(false);

const props = defineProps({
    darkMode: Boolean,
})

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleHover(val: boolean) {
    hovering.value = val != undefined ? val : !hovering.value;
}

</script>

<style scoped>
.yellow-to-red {
    filter: invert(1) hue-rotate(-200deg)
}

.bounce {
    /* transition: transform 0.5s ease; */
    animation: bouncing 1s ease;
    animation-iteration-count: infinite;
}

@keyframes bouncing {
    0% {
        transform: translateY(0%);
    }
    25% {
        transform: translateY(-10%);
    }
    40% {
        transform: translateY(0%);
    }
    75% {
        transform: translateY(-10%);
    }
    100% {
        transform: translateY(0%);
    }
}
</style>