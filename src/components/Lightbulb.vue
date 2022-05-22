<template>
    <div class="sticky cursor-pointer inset-y-0 right-0 flex items-center pr-2 sm:inset-auto sm:ml-6 sm:pr-0"
        @click="emitDarkMode">
        <span class="sr-only">Toggle dark mode</span>
        <div id="switch"></div>
        <img id="bulb" class="z-50 h-8 w-8 rotate-180 translate-y-14"
            :src="darkMode ? 'src/assets/light_regular.svg' : 'src/assets/light_solid.svg'" aria-hidden="true" />

        <!-- <component :is="darkMode ? LightBulbIcon : LightBulbSolid" class="h-6 w-6" :class="{'text-yellow-300': !darkMode, 'text-white-100': darkMode}" @click="emitDarkMode"
              aria-hidden="true" /> -->
    </div>
</template>

<script setup>
const props = defineProps({
    darkMode: Boolean
})
const emits = defineEmits(['toggleDarkMode'])

function emitDarkMode() {
    emits('toggleDarkMode', true);
}
</script>

<style scoped>
#switch {
    height: 100px;
    width: 10px;
    border-radius: 5px;
    background: pink;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}
</style>