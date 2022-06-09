<template>
    <div id="about" class="py-12 bg-gray-100 dark:bg-gray-800">
        <aos-vue animation="fade-in" :once="true" placement="center-bottom" duration="750"
            class="flex w-full flex-col md:flex-row">
            <h2
                class="text-center md:text-left text-3xl md:text-3xl lg:text-4xl font-sans text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
                About Me</h2>
        </aos-vue>
        <div class="flex flex-col md:flex-row my-10">
            <aos-vue animation="fade-down" :once="true" placement="center-bottom" duration="750">
                <div
                    class="m-auto md:mt-[35%] md:mr-8 h-48 w-48 ring-2 ring-red-700 dark:ring-yellow-500 rounded-full bg-red-500">
                    <img src="../assets/logo.png" class="" />
                </div>
            </aos-vue>
            <aos-vue animation="fade-up" :once="true" placement="center-bottom" duration="750">
                <div
                    class="copy m-12 md:m4 text-center md:text-left font-sans text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-50 tracking-wide">
                    <p>
                        Hi there, my name is Darren Yip, and I'm a software engineer based in New Haven, Connecticut.
                    </p>
                    <br />
                    <p>
                        I've been building web applications since 2015 to create engaging and memorable digital
                        experiences. In recent years, I have had the privilege of working for <a
                            href="https://www.checkmate.digital" class="underline" target="_blank">a local startup</a>
                        to <a class="underline" href="https://www.nyse.com/index" target="_blank">working on Wall
                            Street</a>.
                    </p>
                    <br />
                    <p>My other passions include music, traveling, reading & RPG games. When not in front of a computer,
                        I can
                        usually be found in front of a piano or with my nose in a
                        book.</p>
                </div>
            </aos-vue>
        </div>
    </div>
</template>

<script setup>
import Brushstroke from "../components/Brushstroke.vue";
const props = defineProps({
    darkMode: Boolean
})

</script>

<style scoped>
</style>