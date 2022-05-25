<template>
  <img v-if="darkMode" class="w-full h-3 mx-auto" src="../assets/brush_red.png" />
  <img v-if="!darkMode" class="w-full h-3 mx-auto" src="../assets/brush_yellow.png" />
</template>

<script setup>
const props = defineProps({
  darkMode: Boolean
})
</script>

<style scoped>
</style>