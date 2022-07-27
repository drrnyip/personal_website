<template>
  <img class="w-full h-3 mx-auto" src="../assets/brush_yellow.png" :class="{invert: darkMode}" />
</template>

<script setup>
const props = defineProps({
  darkMode: Boolean
})
</script>

<style scoped>
.invert {
  filter: invert(1) hue-rotate(-220deg);
}
</style>