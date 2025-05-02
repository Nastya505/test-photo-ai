<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExamples } from '@/shared/lib/api';
import { useMediaQuery } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { DefaultButton } from '../button';
import PhotoCard from './PhotoCard.vue';

const isTablet = useMediaQuery('(min-width: 768px)');
const isDesktop = useMediaQuery('(min-width: 1023px)');
const isLargeDesktop = useMediaQuery('(min-width: 1536px)');

const isTabletSnapshot = ref(false);
const isDesktopSnapshot = ref(false);
const isLargeDesktopSnapshot = ref(false);

const photos = ref<components['schemas']['ExamplePhoto'][]>([]);
const isLoading = ref(true);

const selectedCategory = ref<string | null>(null);

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
  if (isLargeDesktop.value) return filteredPhotos.value.slice(0, 13);
  if (isDesktop.value) return filteredPhotos.value.slice(0, 12);
  return filteredPhotos.value.slice(0, 11);
});

onMounted(async () => {
  isTabletSnapshot.value = isTablet.value;
  isDesktopSnapshot.value = isDesktop.value;
  isLargeDesktopSnapshot.value = isLargeDesktop.value;
  const allPhotos = await getExamples();
  photos.value = allPhotos;
  isLoading.value = false;
});

// Card class based on index and screen size
function getCardClass(itemIndex: number, isTabletLocal = isTablet.value) {
  if (!isTabletLocal) {
    return itemIndex % 4 === 1 ? 'row-span-2 h-[556px]' : 'row-span-1 h-[270px]';
  }
  return itemIndex % 4 === 1 ? 'row-span-2 h-[1156px]' : 'row-span-1 h-[570px]';
}

const categoryContainer = ref<HTMLElement | null>(null);
const isOverflowing = ref(false);

// Ref and logic to check if category container overflows horizontally
function checkOverflow() {
  const el = categoryContainer.value;
  if (el) {
    isOverflowing.value = el.scrollWidth > el.clientWidth;
  }
}

onMounted(() => {
  checkOverflow();
  window.addEventListener('resize', checkOverflow);
});

watch(() => categoryContainer.value, () => checkOverflow());
</script>

<template>
  <section class="flex flex-col gap-8">
    <!-- Category filter -->
    <div
      v-if="!isLoading && categories.length"
      ref="categoryContainer"
      class="flex gap-1 overflow-x-auto flex-nowrap whitespace-nowrap px-2 scroll-hidden"
      :class="isOverflowing ? '' : 'justify-center'"
    >
      <button
        v-for="category in categories"
        :key="category"
        class="cursor-pointer px-4 py-2 min-w-max rounded-xl text-lg transition-all hover:bg-white hover:text-black"
        :class="(selectedCategory === null && category === 'All') || selectedCategory === category
          ? 'bg-white text-black'
          : 'bg-white/10 text-white'"
        @click="selectedCategory = category === 'All' ? null : category"
      >
        {{ category }}
      </button>
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
