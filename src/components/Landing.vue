<template>
    <div
        class="flex flex-col justify-start pt-48 px-12 md:px-48 h-screen w-full md:text-left bg-gray-100 dark:bg-gray-800">
        <h3
            class="text-lg md:text-xl lg:text-2xl font-sans uppercase text-red-700 dark:text-yellow-500 tracking-widest font-semibold">
            Hi there, my name is Darren</h3>
        <br />
        <h3
            class="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-800 dark:text-gray-50 tracking-widest font-semibold">
            I create websites</h3>
        <br />
        <p class="text-lg md:text-xl lg:text-2xl font-sans text-gray-800 dark:text-gray-50 tracking-wide">
            I'm a full stack web developer with prior experience of working in startups and on Wall Street. 
        </p>
    </div>
</template>

<script setup>

const props = defineProps({
    darkMode: Boolean
})
</script>