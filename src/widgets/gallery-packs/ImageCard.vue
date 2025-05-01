<template>
    <div :class="['rounded-xl overflow-hidden bg-neutral-900 text-white break-inside-avoid', noMargin ? '' : 'mb-4']">
      <img
        :src="item.covers[0]"
        :alt="item.name"
        :class="['w-full object-cover', heightClass]"
      />
      <div class="p-3 text-center text-sm font-medium">{{ item.name }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    item: { name: string; covers: string[] },
    heightClass?: string,
    noMargin?: boolean
  }>()
  </script>
  