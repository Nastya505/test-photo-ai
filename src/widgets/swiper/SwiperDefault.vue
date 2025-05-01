<script setup lang="ts">
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';

defineProps<{
  photos: any;
  goToPhoto: (id: string) => void;
}>();
const modules = [Navigation];
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);

function onSwiper(swiper: any) {
  swiperRef.value = swiper;
  updateNavState();
}

function updateNavState() {
  if (!swiperRef.value) {
    return;
  }
  isBeginning.value = swiperRef.value.isBeginning;
  isEnd.value = swiperRef.value.isEnd;
}
</script>

<template>
  <div class="w-full relative">
    <Swiper
      :modules="modules"
      :slides-per-view="2.5"
      :initial-slide="0"
      :space-between="16"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
      :breakpoints="{
        768: { slidesPerView: 4 },
        1280: { slidesPerView: 6 },
      }"
      class="w-full"
      @swiper="onSwiper"
      @slide-change="updateNavState"
    >
      <SwiperSlide
        v-for="photo in photos"
        :key="photo.id"
        class="cursor-pointer rounded-sm overflow-hidden"
        @click="goToPhoto(photo.id)"
      >
        <img
          :src="photo.image_url!"
          alt="similar photo"
          class="hover:scale-105 w-full h-auto transition-transform duration-300"
        >
      </SwiperSlide>
    </Swiper>

    <div class="flex xl:hidden justify-end gap-4 mt-4">
      <button
        class="swiper-prev  px-3 py-1   rounded-md text-white transition-colors"
        :class="isBeginning ? 'opacity-40 cursor-not-allowed' : ''"
        :disabled="isBeginning"
      >
        <i class="pi pi-arrow-left" style="font-size: 1.5rem" />
      </button>
      <button
        class="swiper-next px-3 py-1 rounded-md text-white transition-colors"
        :class="isEnd ? 'opacity-40 cursor-not-allowed' : ''"
        :disabled="isEnd"
      >
        <i class="pi pi-arrow-right" style="font-size: 1.5rem" />
      </button>
    </div>
  </div>
</template>
