<script setup lang="ts">
const props = defineProps<{
  resultImgUrl?: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-between w-full items-start sm:gap-10 gap-6 md:flex-row relative">
    <Image class="absolute top-0 left-0 -z-10" src="/images/photo-section-effect.png" loading="lazy" />
    <div
      class="flex flex-col justify-between w-full items-start lg:gap-10 gap-25 lg:flex-row relative container mx-auto px-3"
    >
      <div
        class="flex flex-col justify-center w-full lg:w-1/2 items-start gap-5 relative z-10"
      >
        <h2
          class="text-white font-medium text-2xl text-center lg:text-left sm:text-4xl  max-w-full lg:max-w-80"
        >
          Just upload your photo, choose style and if you want some parameters
        </h2>
        <Image
          loading="lazy"
          class="hidden lg:block w-full"
          src="/images/photo-selection.webp"
        />
        <img
          loading="lazy"
          class="block lg:hidden w-full"
          src="/images/photo-section-mobile.webp"
        />
        <div class="absolute -bottom-20 lg:top-25 right-0 lg:-right-1/4 xl:-right-1/3 2xl:-right-1/2 w-1/2">
          <Image
            loading="lazy"
            class="hidden lg:flex"
            src="/images/arrow-desktop.svg"
          />
          <Image
            loading="lazy"
            class="block lg:hidden"
            src="/images/arrow-mobile.svg"
          />
        </div>
      </div>

      <div class="flex flex-col justify-start gap-4 max-w-full lg:max-w-88 z-10">
        <div class="overflow-hidden rounded-sm w-full order-2 lg:order-1">
          <Image
            loading="lazy"
            :src="props.resultImgUrl"
          />
        </div>
        <h2
          class="text-white font-medium text-2xl text-center lg:text-left sm:text-4xl order-1 lg:order-2"
        >
          And in a minute you'll have an amazing result
        </h2>
      </div>
    </div>
  </div>
</template>
