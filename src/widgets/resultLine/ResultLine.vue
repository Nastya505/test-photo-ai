<script setup lang="ts">
defineProps<{
  title: string;
  text: string | null | undefined;
}>();
</script>

<template>
  <div
    v-if="text !== null && text !== undefined"
    class="flex flex-col w-full md:w-8/9 gap-2 justify-start items-start"
  >
    <h5 class="text-left text-lg font-semibold text-white">
      {{ title }}
    </h5>
    <div class="w-full text-base font-semibold italic text-white/80">
      {{ text }}
    </div>
  </div>
</template>
