<template>
    <div id="landing"
        class="flex flex-col justify-start pt-48 px-12 md:px-48 h-screen w-full md:text-left bg-gray-100 dark:bg-gray-800">
        <div id="headings" :class="{ 'brush-yellow': !darkMode, 'brush-red': darkMode }">
            <div class="curtain bg-gray-100 dark:bg-gray-800" :class="{ 'draw-curtain': drawCurtain }"></div>
            <div class="contents">
                <h3
                    class="text-lg md:text-xl lg:text-2xl font-sans uppercase text-red-700 dark:text-yellow-500 tracking-widest font-semibold">
                    Hello, my name is Darren</h3>
                <br />
                <h3
                    class="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-800 dark:text-gray-50 tracking-widest font-semibold">
                    I create websites</h3>
                <br />
                <p class="text-lg md:text-xl lg:text-2xl font-sans text-gray-800 dark:text-gray-50 tracking-wide">
                    I'm a full stack web developer with prior experience of working in startups and on Wall Street.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
const props = defineProps({
    darkMode: Boolean
})

let drawCurtain = ref(false);
let delay = 500; // milliseconds

watch(() => props.darkMode, async (curr, prev) => {
    resetDraw();
})

onMounted(() => {
    resetDraw();
})

function resetDraw() {
    drawCurtain.value = false;
    setTimeout(() => {
        drawCurtain.value = true;
    }, delay)
}


</script>

<style>
#headings {
    /* background-position: bottom; */
    position: relative;
    background-size: 100% 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.25s ease-in-out;
    z-index: 5;
}

.contents {
    z-index: 10;
}

.curtain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.25s ease-out;
    z-index: -1;
}

.draw-curtain {
    transform: translateX(110%);
}

.brush-yellow {
    background: url('../assets/brush_yellow.png');
}

.brush-red {
    background: url('../assets/brush_red.png');
}
</style>