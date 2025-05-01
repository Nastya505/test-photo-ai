<script setup lang="ts">
const props = defineProps<{
  title?: string;
  subtitle?: string;
  url?: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center w-full items-center gap-10 md:gap-20">
    <div class="flex flex-col justify-center w-full items-center gap-5">
      <h2 class="text-6xl text-white font-medium text-center">
        {{ props.title }}
      </h2>
      <h3 class="text-base text-white font-medium max-w-[440px] text-center leading-[22px] opacity-80">
        {{ props.subtitle }}
      </h3>
    </div>
    <div class="overflow-hidden rounded-2xl">
    <Image :src="props.url" class="w-full"/>
  </div>
  </div>
</template>
