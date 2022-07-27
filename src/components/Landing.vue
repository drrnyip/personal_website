<template>
    <div id="landing"
        class="flex flex-col justify-start h-full min-h-[95vh] w-full md:text-left bg-gray-100 dark:bg-gray-800">
        <div class="absolute top-[25%] md:top-[30%] lg:top-[35%] px-12 md:px-28 lg:px-48">
            <Brushstroke :darkMode="darkMode">
                <aos-vue animation="fade-down" :once="true" placement="top-bottom" :duration="750" easing="ease"
                    :delay="250">
                    <h3
                        class="text-lg md:text-xl lg:text-2xl font-sans uppercase text-red-700 dark:text-yellow-500 tracking-widest font-semibold">
                        Hello, my name is Darren</h3>
                </aos-vue>
                <br />
                <aos-vue animation="fade-up" :once="true" placement="top-bottom" :duration="750" easing="ease"
                    :delay="500">
                    <h3
                        class="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-800 dark:text-gray-50 tracking-widest font-semibold">
                        I create websites</h3>
                </aos-vue>
                <br />
                <aos-vue animation="fade-up" :once="true" placement="top-bottom" :duration="750" easing="ease"
                    :delay="750">

                    <p class="text-lg md:text-xl lg:text-2xl font-sans text-gray-800 dark:text-gray-50 tracking-wide">
                        I'm a full-stack developer with experience in building scalable, secure web applications on
                        modern cloud architecture.
                    </p>
                </aos-vue>
            </Brushstroke>
        </div>
    </div>
</template>

<script setup>
import Brushstroke from "../components/Brushstroke.vue";

const props = defineProps({
    darkMode: Boolean
})
</script>

<style>
</style>