<template>
  <Navbar :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
  <!-- <lightbulb /> -->
  <Landing :darkMode="darkMode" />
  <Divider :darkMode="darkMode"/>
  <About :darkMode="darkMode"/>
  <Divider :darkMode="darkMode"/>

</template>


<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Landing from './components/Landing.vue'
import About from './components/About.vue'
import Divider from './components/Divider.vue'
import Lightbulb from './components/Lightbulb.vue';

import { ref } from "vue"
let darkMode = ref(true);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}
</script>

<style>
</style>
