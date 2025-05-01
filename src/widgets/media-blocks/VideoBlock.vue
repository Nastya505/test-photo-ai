<script setup lang="ts">
const props = defineProps<{
  title?: string;
  subtitle?: string;
  url?: string; 
}>();
</script>

<template>
  <div class="relative flex flex-col justify-center w-full items-center gap-6 px-3 sm:px-4 py-6 md:p-0 md:gap-20 rounded-lg bg-white md:bg-transparent overflow-hidden">
    <img
  class="block md:hidden absolute bottom-0 right-0 z-0 !w-[1000px] !h-[700px] object-cover object-bottom"
  src="/images/video-effect.png"
  alt="effect"
/>
    <div class="flex z-10 flex-col justify-center w-full items-center gap-5 text-black md:text-white">
      <h2 class="text-2xl md:text-6xl text-black md:text-white font-medium text-center">
        {{ props.title }}
      </h2>
      <h3 class="text-base text-black md:text-white font-medium max-w-[640px] text-center leading-[22px] opacity-80">
        {{ props.subtitle }}
      </h3>
    </div>

    <div  class='relative rounded-lg overflow-hidden py-0 md:py-16 flex justify-center items-center w-full bg-transparent md:bg-white'>
      <Image class="hidden md:flex absolute top-0 right-0 z-0" src="/images/video-effect.png" alt="effect" width="1025" />

    <div class='rounded-lg md:rounded-4xl overflow-hidden w-full sm:w-4/6 z-10'>
      <video controls :src="props.url" class="w-full h-auto">
        Your browser does not support video.
      </video>
    </div>
    </div>
  </div>
</template>
