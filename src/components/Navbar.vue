<template>
  <Disclosure as="nav" class="bg-gray-100 dark:bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl ml-2 lg:ml-36 px-2">
      <div class="relative flex items-center justify-between h-16">
        <aos-vue animation="fade-down" :once="true" :delay="250">

          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </aos-vue>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <aos-vue animation="fade-down" :once="true" :delay="250">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-10 w-auto" :class="{'black-white-flip': !darkMode}" :src="logoLight" alt="Darren Yip" />
              <h3
                class="hidden lg:block ml-6 tracking-widest font-sans font-bold text-xl text-gray-800 dark:text-gray-50 cursor-default">
                Darren Yip</h3>
            </div>
          </aos-vue>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <div v-for="(item, index) in navigation" :key="item.name" :href="item.href"
                class='cursor-pointer text-gray-800 dark:text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans tracking-wide font-medium'
                :aria-current="item.current ? 'page' : undefined" @click="scrollTo($event, item.href)">
                <aos-vue animation="fade-down" :once="true" :delay="((index + 1) * 100) + 500">
                  {{ item.name }}
                </aos-vue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 w-full bg-gray-100 dark:bg-gray-800 z-50 absolute">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          class="text-gray-800 dark:text-gray-50 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          @click="scrollTo($event, item.href)">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { LightBulbIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { LightBulbIcon as LightBulbSolid } from '@heroicons/vue/solid'
import NavItems from '../interfaces/NavItems';
import logoLight from "../assets/logo-light.png";
import portrait from "../assets/portrait.png";

const props = defineProps({
  darkMode: Boolean
})
const emits = defineEmits(['toggleDarkMode'])

const navigation: NavItems[] = [
  { name: 'About', href: 'about', current: true },
  { name: 'Skills', href: 'skills', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Experience', href: 'experience', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

function scrollTo(event: Event, target: string) {
  event.preventDefault();
  const targetElement = document.getElementById(target);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

</script>

<style scoped>
.black-white-flip {
  filter: invert(1);
}
</style>