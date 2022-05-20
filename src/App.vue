<template>
  <Navbar :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
  <Landing :darkMode="darkMode" />
  <Divider />
  <About :darkMode="darkMode"/>
</template>


<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Landing from './components/Landing.vue'
import About from './components/About.vue'
import Divider from './components/Divider.vue'

import { ref } from "vue"
let darkMode = ref(true);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}
</script>

<style>
</style>
