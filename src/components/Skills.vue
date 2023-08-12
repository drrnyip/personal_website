<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="skills" class="py-12 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-7xl px-4 md:px-0">
      <aos-vue animation="fade-in" :once="true" placement="center-bottom">
        <h2
          class="text-center md:text-left text-3xl md:text-3xl lg:text-4xl font-sans text-red-700 dark:text-yellow-500 tracking-widest font-semibold my-4 px-4">
          Skills</h2>
      </aos-vue>
      <aos-vue animation="fade-up" :once="true" placement="center-bottom" :duration="750" class="mt-10">
        <!-- <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"> -->
        <dl class="flex flex-col md:flex-row flex-wrap justify-around">
          <div v-for="skill in skills" :key="skill.name" class="relative basis-1/2 mt-4 mx-2 md:mx-0">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                <img class="h-8 lg:h-12" :src="skill.img" :class="{ 'yellow-to-red': !darkMode }" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-800 dark:text-gray-50">{{ skill.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-800 dark:text-gray-50 ">
              {{ skill.description }}
            </dd>
          </div>
        </dl>
      </aos-vue>
    </div>
  </div>
</template>

<script setup lang="ts">
import code_yellowPng from "../assets/code_yellow.png";
import book_yellowPng from "../assets/book_yellow.png";
import database_yellowPng from "../assets/database_yellow.png";
import aws_yellowPng from "../assets/aws_yellow.png";
import tools_yellowPng from "../assets/tools_yellow.png";
import merge_yellowPng from "../assets/merge_yellow.png";
import cloud_yellowPng from "../assets/cloud_yellow.png";

const props = defineProps({
  darkMode: Boolean
})
const skills = [
  {
    name: 'Languages',
    description:
      'HTML5, JavaScript, TypeScript, Java, bash, GraphQL',
    id: 'code',
    img: code_yellowPng,
  },
  {
    name: 'Libraries / Frameworks',
    description:
      'Vue.js, Node.js, Express.js, gRPC, Passport.js, Mocha.js, Bootstrap, TailwindCSS, Angular 2',
    id: 'book',
    img: book_yellowPng,
  },
  {
    name: 'Databases',
    description:
      'SQL, PostgreSQL, MongoDB, DynamoDB',
    id: 'database',
    img: database_yellowPng,
  },
  {
    name: 'AWS',
    description:
      'SQS, ECS/Fargate, Lambda, S3, EC2, CloudFormation, Cloudwatch',
    id: 'cloud',
    img: aws_yellowPng,
  },
  {
    name: 'Cloud / Containerization',
    description:
      'Docker, Kubernetes, Helm, Google Cloud Platform (GCP)',
    id: 'cloud',
    img: cloud_yellowPng,
  },
  {
    name: 'Version Control',
    description:
      'Git, GitHub',
    id: 'merge',
    img: merge_yellowPng,
  },
  // {
  //   name: 'Other Tools',
  //   description:
  //     'Linux, Firebase, Adobe Photoshop',
  //   id: 'tools',
  //   img: tools_yellowPng,
  // },
]
</script>

<style scoped>
.yellow-to-red {
  filter: invert(1) hue-rotate(-200deg)
}
</style>