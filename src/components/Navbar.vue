<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div id="bulbcontainer" class="absolute right-0 items-center pr-2 h-fit" @click="emitDarkMode">
            <span class="sr-only">Toggle dark mode</span>
            <div id="switch" class="bg-gray-600"></div>
            <img id="bulb" class="h-8 w-8 rotate-180" :src="darkMode ? 'src/assets/light_regular.svg' : 'src/assets/light_solid.svg'" aria-hidden="true" />
            
          <!-- <component :is="darkMode ? LightBulbIcon : LightBulbSolid" class="h-6 w-6" :class="{'text-yellow-300': !darkMode, 'text-white-100': darkMode}" @click="emitDarkMode"
              aria-hidden="true" /> -->
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { LightBulbIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { LightBulbIcon as LightBulbSolid } from '@heroicons/vue/solid'

const props = defineProps({
  darkMode: Boolean
})
const emits = defineEmits(['toggleDarkMode'])

function emitDarkMode() {
  emits('toggleDarkMode', true);
}

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Experience', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

</script>

<style scoped>
#bulbcontainer {
  /* background: lime; */
  width: 50px;
  height: 150px;
  cursor: pointer;
  position: absolute;
  z-index: 50;
}

#switch {
  height: 125px;
  width: 2px;
  border-radius: 5px;
  right: -20px;
  position: relative;
  cursor: pointer;

}

#bulb {
  position: relative;
  right: -5px;
  top: -3px;
  cursor: pointer;
}

</style>