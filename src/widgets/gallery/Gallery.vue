<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import type { Swiper as SwiperType } from 'swiper';
import { getExamples } from '@/shared/lib/api';
import { useMediaQuery } from '@vueuse/core';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { computed, nextTick, onMounted, ref } from 'vue';
import { DefaultButton } from '../button';
import PhotoCard from './PhotoCard.vue';
import 'swiper/css';
import 'swiper/css/navigation';

const isTablet = useMediaQuery('(min-width: 768px)');
const isDesktop = useMediaQuery('(min-width: 1023px)');
const isLargeDesktop = useMediaQuery('(min-width: 1536px)');

const isTabletSnapshot = ref(false);
const isDesktopSnapshot = ref(false);
const isLargeDesktopSnapshot = ref(false);

const photos = ref<components['schemas']['ExamplePhoto'][]>([]);
const isLoading = ref(true);

const selectedCategory = ref<string | null>(null);
const tabsSwiper = ref<SwiperType>();

const swiperFreeModeParams = {
  enabled: true,
  minimumVelocity: 1,
};
function normalizeCategoryName(name: string): string {
  return name.replace(/\s*\((man|woman)\)\s*/gi, '').trim();
}

// Categories without (man), (woman) suffixes
const categories = computed(() => {
  const normalized = photos.value
    .map(p => p.prompt_pack?.name)
    .filter(Boolean)
    .map(name => normalizeCategoryName(name!));
  const unique = Array.from(new Set(normalized));
  return ['All', ...unique];
});

// Filter photos by normalized category name
const filteredPhotos = computed(() => {
  if (!selectedCategory.value) {
    return photos.value;
  }
  return photos.value.filter(photo =>
    normalizeCategoryName(photo.prompt_pack?.name || '') === selectedCategory.value,
  );
});

// Number of photos to display
const displayedPhotos = computed(() => {
  if (isLargeDesktop.value) {
    return filteredPhotos.value.slice(0, 13);
  }
  if (isDesktop.value) {
    return filteredPhotos.value.slice(0, 12);
  }
  return filteredPhotos.value.slice(0, 11);
});

onMounted(async () => {
  isTabletSnapshot.value = isTablet.value;
  isDesktopSnapshot.value = isDesktop.value;
  isLargeDesktopSnapshot.value = isLargeDesktop.value;
  const allPhotos = await getExamples();
  photos.value = allPhotos;
  await nextTick(() => {
    updateNavigationStatus();
  });
  window.addEventListener('resize', updateNavigationStatus);
  isLoading.value = false;
});

// Card class based on index and screen size
function getCardClass(itemIndex: number, isTabletLocal = isTablet.value) {
  if (!isTabletLocal) {
    return itemIndex % 4 === 1 ? 'row-span-2 h-[556px]' : 'row-span-1 h-[270px]';
  }
  return itemIndex % 4 === 1 ? 'row-span-2 h-[1156px]' : 'row-span-1 h-[570px]';
}

const isOverflowing = ref<boolean | null>(false);

function updateNavigationStatus() {
  const swiper = tabsSwiper.value;
  if (!swiper) {
    return;
  }

  const nextBtn = swiper.navigation?.nextEl;
  const prevBtn = swiper.navigation?.prevEl;

  const nextVisible = nextBtn && window.getComputedStyle(nextBtn).display !== 'none' && !nextBtn.classList.contains('swiper-button-disabled');
  const prevVisible = prevBtn && window.getComputedStyle(prevBtn).display !== 'none' && !prevBtn.classList.contains('swiper-button-disabled');
  const newOverflowingState = nextVisible || prevVisible;
  if (isOverflowing.value !== newOverflowingState) {
    isOverflowing.value = newOverflowingState;
  }
  tabsSwiper.value?.update();
}
</script>

<template>
  <section class="flex flex-col gap-8 overflow-hidden">
    <!-- Category filter -->
    <div
      v-if="!isLoading && categories.length"
      :class="isOverflowing ? '' : 'justify-center'"
    >
      <Swiper
        slides-per-view="auto"
        navigation
        :space-between="16"
        :free-mode="swiperFreeModeParams"
        :modules="[FreeMode, Navigation]"
        :threshold="15"
        class="category-swiper relative"
        @swiper="tabsSwiper = $event"
      >
        <SwiperSlide v-for="category in categories" :key="category" class="!w-auto">
          <button
            class="cursor-pointer px-4 py-2 min-w-max rounded-xl text-lg transition-all hover:bg-white hover:text-black"
            :class="(selectedCategory === null && category === 'All') || selectedCategory === category
              ? 'bg-white text-black'
              : 'bg-white/10 text-white'"
            @click="selectedCategory = category === 'All' ? null : category"
          >
            {{ category }}
          </button>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="relative">
      <!-- Skeletons while loading -->
      <div v-if="isLoading" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr gap-4">
        <div
          v-for="i in (isDesktopSnapshot ? 12 : 11)"
          :key="`placeholder-${i}`"
          class="bg-gray-200 rounded-md shadow-sm animate-pulse" :class="[getCardClass(i - 1, isTabletSnapshot)]"
        >
          <div class="w-full h-full rounded-sm bg-gray-300" />
        </div>
      </div>

      <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr gap-4 pb-24">
        <PhotoCard
          v-for="(photo, index) in displayedPhotos"
          :key="photo.id"
          :photo="photo"
          class="w-full"
          :class="[getCardClass(index)]"
        />
      </div>

      <div v-if="!isLoading" class="absolute bottom-22 left-0 right-0 h-32 bg-gradient-to-t from-[#040406] to-transparent z-10" />
    </div>

    <DefaultButton v-if="!isLoading" class="mx-auto -mt-20 z-11" text="Create Perfect Shot" link="#pricing" />
  </section>
</template>

<style scoped>
:deep(.category-swiper .swiper-button-next),
:deep(.category-swiper .swiper-button-prev) {
  position: absolute;
  top: 50%;
  bottom: 0;
  width: 20%;
  max-width: 40px;
  height: 44px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  cursor: pointer;
}

:deep(.category-swiper .swiper-button-next::after),
:deep(.category-swiper .swiper-button-prev::after) {
  content: '';
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
}

:deep(.category-swiper .swiper-button-disabled) {
  opacity: 0;
  pointer-events: none;
}

:deep(.category-swiper .swiper-button-prev) {
  left:-5px;
  background: linear-gradient(
    270deg,
    rgba(4, 4, 6, 0) 0%,
    rgba(4, 4, 6, 0.95) 35%
  );
}

:deep(.category-swiper .swiper-button-prev::after) {
  transform: rotate(135deg);
}

:deep(.category-swiper .swiper-button-next) {
  right: -5px;
  background: linear-gradient(
    90deg,
    rgba(4, 4, 6, 0) 0%,
    rgba(4, 4, 6, 0.95) 25%
  );
}

:deep(.category-swiper .swiper-button-next::after) {
  transform: rotate(-45deg);
}
</style>
