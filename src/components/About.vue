<template>
    <div id="about" class="py-12 bg-gray-100 dark:bg-gray-800">
        <aos-vue animation="fade-in" :once="true" placement="center-bottom" :duration="750"
            class="flex w-full flex-col md:flex-row">
            <h2
                class="text-center md:text-left text-3xl md:text-3xl lg:text-4xl font-mono text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
                Who dis?</h2>
        </aos-vue>
        <div class="flex flex-col md:flex-row my-10">
            <aos-vue animation="fade-down" :once="true" placement="center-bottom" :duration="750" class="flex justify-around flex-row md:flex-col">
                <div
                    class="md:mr-8 h-48 w-48 ring-2 ring-red-700 dark:ring-yellow-500 rounded-full bg-red-500">
                    <img src="../assets/logo.png" class="" />
                </div>
            </aos-vue>
            <aos-vue animation="fade-up" :once="true" placement="center-bottom" :duration="750">
                <div
                    class="copy m-12 md:m4 text-center md:text-left font-sans text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-50 tracking-wide">
                    <p>
                        👋 Hi there, my name is Darren Yip, and I'm a software engineer who enjoys building software and problem-solving. I love to learn, value feedback and work well in teams.
                    </p>
                    <br />
                    <p>
                        Prior to <a href="https://www.amazon.com" class="underline" target="_blank">Amazon</a>, my industry experience came from the <a
                            href="https://www.checkmate.digital" class="underline" target="_blank">startup scene</a>, the last of which got acquired by the <a class="underline" href="https://www.nyse.com/index" target="_blank">New York Stock Exchange</a>. My strongest skillsets lie in my versatility in all layers of the stack, but I particularly enjoy working on the front-end building engaging and memorable UI/UX. 
                    </p>
                    <br />
                    <p>When not playing RPG games or hunting Koroks in ToTK, I can usually be found reading fantasy novels, creating piano covers / playing in church bands, and catching up on the latest anime episodes.
                    </p>
                </div>
            </aos-vue>
        </div>
    </div>
</template>

<script setup lang="ts">
import Brushstroke from "../components/Brushstroke.vue";
const props = defineProps({
    darkMode: Boolean
})

</script>

<style scoped>
</style>