<template>
    <div class="flex flex-col justify-start pt-48 px-12 md:px-48 h-screen w-full md:text-left bg-gray-50 dark:bg-gray-800">
        <h3 class="text-2xl font-sans uppercase text-gray-800 dark:text-yellow-500 tracking-widest font-semibold">Hey, my name is Darren Yip</h3>
        <br />
        <h3 class="text-8xl font-serif text-yellow-500 dark:text-gray-50 tracking-widest font-semibold">I make websites</h3>
    </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const props = defineProps({
    darkMode: Boolean
})

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
</script>