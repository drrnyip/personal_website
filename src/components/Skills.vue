<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white md:mx-24 lg:mx-36">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase text-center md:text-left">Skills</h2>
        <!-- <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p> -->
        <!-- <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> -->
      </div>

      <div class="mt-10">
        <!-- <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"> -->
        <dl class="flex flex-col md:flex-row flex-wrap justify-around">
          <div v-for="skill in skills" :key="skill.name" class="relative basis-1/2 mt-4 mx-2 md:mx-0">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                <img class="h-8 lg:h-12" :src="skill.icon" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ skill.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ skill.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

const skills = [
  {
    name: 'Languages',
    description:
      'HTML5, CSS3, JavaScript, ES6, Typescript',
    icon: './src/assets/code.svg',
  },
  {
    name: 'Libraries / Frameworks',
    description:
      'Vue.js, Node.js, Express, GraphQL, gRPC, Bootstrap, TailwindCSS',
    icon: './src/assets/book.svg',
  },
    {
    name: 'Databases',
    description:
      'PostgreSQL, MongoDB',
    icon: './src/assets/database.svg',
  },
  {
    name: 'Tools',
    description:
      'Git, Firebase, Docker, Kubernetes, Helm, AWS, GCP, Snyk',
    icon: './src/assets/tools.svg',
  },
]
</script>