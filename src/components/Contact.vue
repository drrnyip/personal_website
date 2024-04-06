<template>
    <div id="contact" class="flex flex-col mx-auto w-full md:w-[50vw] px-4 md:px-0 text-center h-fit justify-center mb-12">
        <Brushstroke :darkMode="darkMode" :style="'stroke'">
        <h2 class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl w-fit mx-auto font-mono text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4">Get In Touch</h2>
            </Brushstroke>
        <p class="text-base md:text-md lg:text-lg font-sans text-gray-800 dark:text-gray-50 tracking-wide mb-6">
            Drop me an email and I'll get back to you as soon as I can
        </p>
        <div class="flex flex-col md:flex-row mx-auto ">
            <a class="mx-auto md:mx-2 mb-4 md:mb-0 border-2 border-red-700 dark:border-yellow-500 hover:border-gray-800 dark:hover:border-gray-50 text-gray-800 dark:text-gray-50 w-full md:w-fit h-fit py-2 px-6 mx-2 bg-transparent font-mono text-xl hover:rounded-xl" :href="mailto" target="_blank">Let's talk</a>
            <a class="mx-auto md:mx-2 mb-4 md:mb-0 border-2 bg-red-700/30 dark:bg-yellow-500/30 border-red-700 dark:border-yellow-500 hover:border-gray-800 dark:hover:border-gray-50 text-gray-800 dark:text-gray-50 w-full md:w-fit h-fit py-2 px-6 mx-2 cursor-pointer bg-transparent font-mono text-xl hover:rounded-xl" :href="resume_url" target="_blank">Download Resume</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Brushstroke from '../components/Brushstroke.vue';
const props = defineProps({
    darkMode: Boolean
})

const resume_url = import.meta.env.VITE_RESUME;
const mailto = `mailto:${import.meta.env.VITE_EMAIL}`

</script>

<style scoped>
a {
    transition: all 0.2s ease-in-out;
}
</style>