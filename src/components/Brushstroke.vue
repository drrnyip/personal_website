<template>
    <div id="headings"
        :class="{ 'brush-yellow': !darkMode, 'brush-red': darkMode, highlight: style == 'highlight', stroke: style == 'stroke' }">
        <div class="curtain bg-gray-100 dark:bg-gray-800" :class="{ 'draw-curtain': drawCurtain }"></div>
        <div class="contents">
            <slot></slot>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref, watch } from 'vue';
const props = defineProps({
    darkMode: Boolean,
    style: {
        type: String,
        default: 'highlight', // 'highlight' or 'stroke'
    }
})

let drawCurtain = ref(false);
let delay = 250; // milliseconds

watch(() => props.darkMode, async (curr, prev) => {
    resetDraw();
})

onMounted(() => {
    resetDraw(2500);
})

function resetDraw(customDelay) {
    drawCurtain.value = false;
    setTimeout(() => {
        drawCurtain.value = true;
    }, customDelay ? customDelay : delay)
}
</script>

<style>
#headings {
    position: relative;
    object-fit: cover;
    background-repeat: no-repeat;
    z-index: 5;
}

@media only screen and (max-width: 480px) {
    .highlight {
        background-size: 100% 50% !important;
        background-position: 0% 35% !important;
    }
    .stroke {
        background-size: 50% 15% !important;
        background-position: 50% 90% !important;
    }
}

@media only screen and (min-width: 481px) {
    .highlight {
        background-size: 100% 70% !important;
        background-position: 0% 40% !important;
    }
    .stroke {
        background-size: 50% 15% !important;
        background-position: 50% 90% !important;
    }

}

@media only screen and (min-width: 768px) {
    .highlight {
        background-size: 90% 80% !important;
        background-position: 0% 55% !important;
    }
    .stroke {
        background-size: 50% 15% !important;
        background-position: 50% 90% !important;
    }

}

@media only screen and (min-width: 1024px) {
    .highlight {
        background-size: 90% 80% !important;
        background-position: 0% 75% !important;
    }
    .stroke {
        background-size: 50% 15% !important;
        background-position: 50% 90% !important;
    }
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
    z-index: -1;
}

.draw-curtain {
    animation: drawcurtain 0.35s linear 0s 1;
    animation-fill-mode: forwards;
        transform-origin: right;
}

@keyframes drawcurtain {
    0% {
        transform: translateX(0%);
    }
    60% {
        transform: translateX(70%) scaleX(0.5);
    }
    80% {
        transform: translateX(90%) scaleX(0);
    }
    100% {
        transform: translateX(0%) scaleX(0);
    }
}

.brush-yellow {
    background: url('../assets/brush_yellow.png');
}

.brush-red {
    background: url('../assets/brush_red.png');
}
</style>