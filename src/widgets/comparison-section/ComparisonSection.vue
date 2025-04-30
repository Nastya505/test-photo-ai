<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper';
import { DefaultButton } from '@/widgets/button';

import { useMediaQuery } from '@vueuse/core';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';

const isDesktop = useMediaQuery('(min-width: 1023px)');

const comparisons = [
  {
    name: 'Midjourney 3',
    image: '/images/mj3.webp',
    features: [
      { label: 'Resemblance', value: 'Low resemblance', enabled: false },
      { label: 'Character', value: 'Inconsistent character', enabled: false },
      { label: 'Photorealism', value: 'Medium photorealism', enabled: true },
      { label: 'Resolution', value: 'Low resolution', enabled: false },
      { label: 'Ethnicity', value: 'Maintains ethnicity', enabled: true },
      { label: 'Clarity', value: 'Clear and sharp', enabled: true },
    ],
  },
  {
    name: 'Artphoto.AI',
    image: '/images/artphoto.webp',
    highlight: true,
    features: [
      { label: 'Resemblance', value: 'High resemblance', enabled: true },
      { label: 'Character', value: 'Consistent character', enabled: true },
      { label: 'Photorealism', value: 'High photorealism', enabled: true },
      { label: 'Resolution', value: 'High resolution', enabled: true },
      { label: 'Ethnicity', value: 'Maintains ethnicity', enabled: true },
      { label: 'Clarity', value: 'Clear and sharp', enabled: true },
    ],
  },
  {
    name: 'DALL-E 3',
    image: '/images/dalle3.webp',
    features: [
      { label: 'Resemblance', value: 'No resemblance' },
      { label: 'Character', value: 'Inconsistent character', enabled: false },
      { label: 'Photorealism', value: 'Low photorealism', enabled: false },
      { label: 'Resolution', value: 'No resolution', enabled: false },
      { label: 'Ethnicity', value: 'Maintains ethnicity', enabled: true },
      { label: 'Clarity', value: 'Not clear and not sharp', enabled: false },
    ],
  },
];

const swiperRef = ref<SwiperType | null>(null);
watch(isDesktop, (value) => {
  if (value && swiperRef.value) {
    swiperRef.value.slideTo(1);
  }
});
</script>

<template>
  <div class="text-center">
    <h2 class="text-2xl sm:text-6xl mb-3 sm:mb-6 text-white font-medium text-center">
      How does HeadshotAI compare to other AI?
    </h2>
    <h3 class="text-base text-white font-medium mx-auto max-w-xl text-center leading-[22px] opacity-80 mb-6 sm:mb-16">
      With the same uploaded selfies, Photo AI performs far better than competitors in photorealism and resemblance.
    </h3>

    <Swiper
      :modules="[Pagination]"
      :allow-touch-move="!isDesktop"
      :pagination="!isDesktop && { clickable: true }"
      :space-between="0"
      :initial-slide="1"
      centered-slides
      :breakpoints="{
        320: { slidesPerView: 1.05 },
        1024: { slidesPerView: 3 },
      }"
      class="comparison-swiper"
      @swiper="swiperRef = $event"
    >
      <SwiperSlide
        v-for="comp in comparisons"
        :key="comp.name"
        class="relative"
      >
        <Image
          v-if="comp.name === 'Artphoto.AI'"
          src="/images/comparison-effect.png"
          alt="effect"
          width="460"
          class="absolute bottom-0 right-0 -z-1 pointer-events-none select-none"
        />
        <div
          class="flex w-full flex-col justify-end !items-start h-full box-border z-10 pb-16 md:pb-32 lg:pb-0"
        >
          <div
            class="h-full mx-1 lg:h-auto mb-4 z-10 box-border"
          >
            <img
              :src="comp.image"
              :alt="comp.name"
              class="object-cover rounded-lg w-full h-full"
            >
          </div>

          <h3 class="text-4xl font-medium text-left mb-4">
            {{ comp.name }}
          </h3>
          <ul class=" w-full text-left">
            <li
              v-for="(feature, idx) in comp.features"
              :key="idx"
              :class="feature.enabled ? 'text-white' : 'text-white/30'"
              class="flex items-center gap-2 justify-start flex-colleading-normal w-full py-3 border-b border-b-solid border-b-white/5"
            >
              <i :class="`pi ${feature.enabled ? 'pi-verified' : 'pi-times-circle'}`" />

              {{ feature.value }}
            </li>
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>

    <DefaultButton class="mt-6 md:mt-12" text="Create Perfect Shot" link="/pricing" />
  </div>
</template>

<style scoped>
:deep(.comparison-swiper) {
  .swiper-pagination-bullet {
    background: white;
    opacity: 0.4;
    width:62px;
    border-radius: 10px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  .swiper-slide {
    height: auto;
  }
  .swiper-wrapper {
    align-items: stretch !important;
  }
}
</style>
