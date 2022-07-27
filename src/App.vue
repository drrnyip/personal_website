<template>
  <Navbar :darkMode="darkMode" />
  <Lightbulb :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
  <Landing :darkMode="darkMode" />
  <aos-vue animation="fade-in" :once="true" placement="top-center">
    <Divider :darkMode="darkMode" />
  </aos-vue>
  <div class="mx-2 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-36 2xl:mx-80">
    <About :darkMode="darkMode" />
    <Skills :darkMode="darkMode" />
    <Projects :darkMode="darkMode" />
    <Experience :darkMode="darkMode" />
    <aos-vue animation="fade-up" :offset="-200" :once="true" placement="center-bottom" :duration="750">
      <Contact :darkMode="darkMode" />
    </aos-vue>
  </div>
  <br />
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
import Projects from './components/Projects.vue';
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
