<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="skills" class="py-12 bg-gray-100 dark:bg-gray-800 md:mx-24 lg:mx-36">
    <div class="max-w-7xl px-4 md:px-0">
      <div class="lg:text-center">
        <h2
          class="text-base text-red-700 dark:text-yellow-500 font-semibold tracking-wide uppercase text-center md:text-left">
          Skills</h2>
        <!-- <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p> -->
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> -->
      </div>

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
import codeDark from "../assets/code_yellow.svg"
import codeLight from "../assets/code_gray.svg"
import bookDark from "../assets/book_yellow.svg"
import bookLight from "../assets/book_gray.svg"
import databaseDark from "../assets/database_yellow.svg"
import databaseLight from "../assets/database_gray.svg"
import toolsDark from "../assets/tools_yellow.svg"
import toolsLight from "../assets/tools_gray.svg"

const props = defineProps({
  darkMode: Boolean
})
const skills = [
  {
    name: 'Languages',
    description:
      'HTML5, CSS3, JavaScript, ES6, Typescript',
    id: 'code',
    lightImg: codeLight,
    darkImg: codeDark,
  },
  {
    name: 'Libraries / Frameworks',
    description:
      'Vue.js, Node.js, Express, GraphQL, gRPC, Bootstrap, TailwindCSS',
    id: 'book',
    lightImg: bookLight,
    darkImg: bookDark,
  },
  {
    name: 'Databases',
    description:
      'PostgreSQL, MongoDB',
    id: 'database',
    lightImg: databaseLight,
    darkImg: databaseDark,
  },
  {
    name: 'Tools',
    description:
      'Git, Firebase, Docker, Kubernetes, Helm, AWS, GCP, Snyk',
    id: 'tools',
    lightImg: toolsLight,
    darkImg: toolsDark,
  },
]
</script>