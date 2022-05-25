<template>
  <Navbar :darkMode="darkMode" />
  <Lightbulb :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
  <aos-vue animation="fade-in" :once="true" :delay="1000" :duration="1500" placement="center-bottom">
    <Landing :darkMode="darkMode" />
  </aos-vue>
  <aos-vue animation="fade-left" :once="true" placement="top-center">
  <Divider :darkMode="darkMode" />
  </aos-vue>
  <aos-vue animation="fade-in" :once="true" placement="center-bottom">
    <About :darkMode="darkMode" />
  </aos-vue>
  <aos-vue animation="fade-in" :once="true" placement="center-bottom">
    <Skills :darkMode="darkMode" />
  </aos-vue>
  <aos-vue animation="fade-in" :once="true" placement="center-bottom">
    <experience :darkMode="darkMode" />
  </aos-vue>
  <aos-vue animation="fade-in" :offset="-200" :once="true" placement="center-bottom">
    <Contact :darkMode="darkMode" />
  </aos-vue>
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
