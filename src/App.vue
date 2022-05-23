<template>
  <Navbar :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
  <!-- <lightbulb /> -->
  <Landing :darkMode="darkMode" />
  <About :darkMode="darkMode" />
  <!-- <Divider :darkMode="darkMode" /> -->
  <Skills :darkMode="darkMode" />
  <experience :darkMode="darkMode" />
  <Contact :darkMode="darkMode"/>
  <Social :darkMode="darkMode" />
</template>


<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import Navbar from './components/Navbar.vue'
import Landing from './components/Landing.vue'
import Skills from './components/Skills.vue'
import Divider from './components/Divider.vue'
import Lightbulb from './components/Lightbulb.vue';
import Experience from './components/Experience.vue'
import Social from './components/Social.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

let darkMode = ref(true);

onBeforeMount(() => {
  document.documentElement.classList.add('dark');
})

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark');
}
</script>

<style>
</style>
