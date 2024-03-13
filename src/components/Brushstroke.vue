<template>
    <div id="headings">
        <div class="curtain bg-gray-100 dark:bg-gray-800" :class="{ 'draw-curtain': drawCurtain }"></div>
        <img :src="brush_yellow" class="absolute h-4/5 top-8 w-full z-[-10]"
            :class="{ 'yellow-to-red': darkMode, highlight: style == 'highlight', stroke: style == 'stroke' }" />
        <div class="contents">
            <slot></slot>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import brush_yellow from '../assets/brush_yellow.png';

const props = defineProps({
    darkMode: Boolean,
    style: {
        type: String,
        default: 'highlight', // 'highlight' or 'stroke'
    },
    delay: {
        type: Number,
        default: 250 // milliseconds
    }
})

let drawCurtain = ref(false);
let initialDelay = 2000;

watch(() => props.darkMode, async (curr, prev) => {
    resetDraw();
})

onMounted(() => {
    resetDraw(initialDelay);
})

function resetDraw(customDelay?: number) {
    drawCurtain.value = false;
    setTimeout(() => {
        drawCurtain.value = true;
    }, customDelay ? customDelay : props.delay)
}
</script>

<style>
#headings {
    position: relative;
    object-fit: cover;
    background-repeat: no-repeat;
    z-index: 5;
}

.contents {
    z-index: 10;
}

.curtain {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.draw-curtain {
    animation: drawcurtain 0.25s linear;
    animation-fill-mode: forwards;
}

@keyframes drawcurtain {
    0% {
        width: 100%;
    }

    50% {
        width: 20%;
    }

    100% {
        width: 0%;
    }
}

.yellow-to-red {
    filter: invert(1) hue-rotate(-220deg);
}

@media only screen and (max-width: 480px) {
    .highlight {
        top: 12% !important;
        height: 60% !important;
        width: 100% !important;
    }

    .stroke {
        height: 15% !important;
        top: unset !important;
        bottom: 0.5rem !important;
        left: 13% !important;
        width: 75% !important;
    }
}

@media only screen and (min-width: 481px) {
    .highlight {
        top: 15% !important;
        height: 75% !important;
        width: 100% !important;
    }

    .stroke {
        height: 15% !important;
        top: unset !important;
        bottom: 0.5rem !important;
        left: 25% !important;
        width: 50% !important;
    }

}

@media only screen and (min-width: 768px) {
    .highlight {
        top: 10% !important;
        height: 80% !important;
        width: 100% !important;
    }

    .stroke {
        height: 15% !important;
        top: unset !important;
        bottom: 0.5rem !important;
        left: 25% !important;
        width: 50% !important;
    }

}

@media only screen and (min-width: 1024px) {
    .highlight {
        top: 10% !important;
        height: 90% !important;
        width: 90% !important;
    }

    .stroke {
        height: 15% !important;
        top: unset !important;
        bottom: 0 !important;
        left: 25% !important;
        width: 50% !important;
    }
}

</style>