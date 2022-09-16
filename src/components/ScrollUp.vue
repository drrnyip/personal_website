<template>
    <Transition v-if="mounted" name="popup">
        <img v-if="visible" id="scrollup" :src="UpChevron"
            class="bg-black dark:bg-gray-800 rounded-full h-10 w-10 z-10 fixed bg- bottom-12 lg:bottom-12 right-6 lg:right-12 cursor-pointer"
            :class="{'yellow-to-red': !darkMode, 'bounce': hovering }" @mouseenter="toggleHover(true)"
            @mouseleave="toggleHover(false)" @click="scrollTop" />
    </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UpChevron from '../assets/up-chevron-yellow.png';

let hovering = ref(false);
let mounted = ref(false);

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 1000)
})

const props = defineProps({
    darkMode: Boolean,
    visible: Boolean
})

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    toggleHover(false);
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

.popup-enter-active,
.popup-leave-active {
    transition: all 0.5s ease;
    /* transition: all 0.5s ease; */
}

.popup-enter-from,
.popup-leave-to {
    transform: translateY(250%);
}
</style>