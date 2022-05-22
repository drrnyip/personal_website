<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="skills" class="py-12 bg-gray-50 dark:bg-gray-800 md:mx-24 lg:mx-36">
    <div class="max-w-7xl px-4 md:px-0">
      <div class="lg:text-center">
        <h2
          class="text-base text-gray-800 dark:text-yellow-500 font-semibold tracking-wide uppercase text-center md:text-left">
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
                <img class="h-8 lg:h-12" :src="getSrc(skill.id)" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-yellow-500 dark:text-gray-50">{{ skill.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-800 dark:text-yellow-500 ">
              {{ skill.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  darkMode: Boolean
})
const skills = [
  {
    name: 'Languages',
    description:
      'HTML5, CSS3, JavaScript, ES6, Typescript',
    id: 'code',
  },
  {
    name: 'Libraries / Frameworks',
    description:
      'Vue.js, Node.js, Express, GraphQL, gRPC, Bootstrap, TailwindCSS',
    id: 'book',
  },
  {
    name: 'Databases',
    description:
      'PostgreSQL, MongoDB',
    id: 'database',
  },
  {
    name: 'Tools',
    description:
      'Git, Firebase, Docker, Kubernetes, Helm, AWS, GCP, Snyk',
    id: 'tools',
  },
]

function getSrc(name) {
  if (props.darkMode) {
    return `/src/assets/${name}_yellow.svg`
  } else {
    return `/src/assets/${name}_gray.svg`

  }
}
</script>