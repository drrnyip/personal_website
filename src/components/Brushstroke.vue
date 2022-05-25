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
        background-size: 100% 70% !important;
        background-position: 0% 50% !important;
    }

    .stroke {
        background-size: 50% 15% !important;
        background-position: 50% 90% !important;
    }

}

@media only screen and (min-width: 481px) {
    .highlight {
        background: pink;
        background-size: 90% 90% !important;
        background-position: 0% 150% !important;
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
    transition: transform 0.25s ease-out;
    transform: translateX(110%);
}

.brush-yellow {
    background: url('../assets/brush_yellow.png');
}

.brush-red {
    background: url('../assets/brush_red.png');
}
</style>