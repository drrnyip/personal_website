<template>
    <div id="contact" class="flex flex-col mx-auto w-full md:w-[50vw] px-4 md:px-0 text-center h-fit justify-center">
        <h2 class="text-3xl md:text-3xl lg:text-4xl font-sans text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4">Get In Touch</h2>
        <p class="text-base md:text-md lg:text-lg font-sans text-gray-800 dark:text-gray-50 tracking-wide mb-6">
            Always happy to get connected. Say hi using the button below and I'll get back to you as soon as I can
        </p>
        <a class="mb-48 mx-auto border-2 border-red-700 dark:border-yellow-500 hover:border-gray-800 dark:hover:border-gray-50 text-gray-800 dark:text-gray-50 w-fit h-fit py-2 px-6 bg-transparent font-sans text-xl text-white hover:rounded-xl" href="mailto:drrnyip@gmail.com" target="_blank">Let's talk</a>
    </div>
</template>

<script setup>
const props = defineProps({
    darkMode: Boolean
})

</script>

<style scoped>
a {
    transition: all 0.2s ease-in-out;
}
</style>