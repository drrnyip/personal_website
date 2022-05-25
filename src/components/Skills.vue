<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="skills" class="py-12 bg-gray-100 dark:bg-gray-800 md:mx-24 lg:mx-36">
    <div class="max-w-7xl px-4 md:px-0">
      <h2
        class="text-center md:text-left text-3xl md:text-3xl lg:text-4xl font-sans text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
        Skills</h2>
      <div class="mt-10">
        <!-- <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"> -->
        <dl class="flex flex-col md:flex-row flex-wrap justify-around">
          <div v-for="skill in skills" :key="skill.name" class="relative basis-1/2 mt-4 mx-2 md:mx-0">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                <img class="h-8 lg:h-12" :src="darkMode ? skill.darkImg : skill.lightImg" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-800 dark:text-gray-50">{{ skill.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-800 dark:text-gray-50 ">
              {{ skill.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import code_yellowPng from "../assets/code_yellow.png";
import book_yellowPng from "../assets/book_yellow.png";
import database_yellowPng from "../assets/database_yellow.png";
import tools_yellowPng from "../assets/tools_yellow.png";
import merge_yellowPng from "../assets/merge_yellow.png";
import merge_redPng from "../assets/merge_red.png";
import cloud_yellowPng from "../assets/cloud_yellow.png";
import cloud_redPng from "../assets/cloud_red.png";

import code_redPng from "../assets/code_red.png";
import book_redPng from "../assets/book_red.png";
import database_redPng from "../assets/database_red.png";
import tools_redPng from "../assets/tools_red.png";


const props = defineProps({
  darkMode: Boolean
})
const skills = [
  {
    name: 'Languages',
    description:
      'HTML5, CSS3, JavaScript, ES6, Typescript',
    id: 'code',
    lightImg: code_redPng,
    darkImg: code_yellowPng,
  },
  {
    name: 'Libraries / Frameworks',
    description:
      'Vue.js, Node.js, Express, GraphQL, gRPC, Bootstrap, TailwindCSS, Mocha.js',
    id: 'book',
    lightImg: book_redPng,
    darkImg: book_yellowPng,
  },
  {
    name: 'Databases',
    description:
      'SQL, PostgreSQL, MongoDB',
    id: 'database',
    lightImg: database_redPng,
    darkImg: database_yellowPng,
  },
    {
    name: 'Cloud',
    description:
      'Docker, Kubernetes, Helm, AWS, GCP',
    id: 'cloud',
    lightImg: cloud_redPng,
    darkImg: cloud_yellowPng,
  },
    {
    name: 'Version Control',
    description:
      'Git, GitHub',
    id: 'merge',
    lightImg: merge_redPng,
    darkImg: merge_yellowPng,
  },
  {
    name: 'Tools',
    description:
      'Firebase, Adobe Photoshop',
    id: 'tools',
    lightImg: tools_redPng,
    darkImg: tools_yellowPng,
  },
]
</script>