<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExamples } from '@/shared/lib/api';
import { onMounted, ref, computed } from 'vue';
import PhotoCard from './PhotoCard.vue';
import { useMediaQuery } from '@vueuse/core'

const isTablet = useMediaQuery('(min-width: 768px)')
const isDesktop = useMediaQuery('(min-width: 1023px)')
const photos = ref<components['schemas']['ExamplePhoto'][]>([]);
const isLoading = ref(true);

const displayedPhotos = computed(() => {
  return isDesktop.value ? photos.value.slice(0, 12) : photos.value.slice(0, 11);
});

onMounted(async () => {
  const allPhotos = await getExamples();
  photos.value = allPhotos;
  isLoading.value = false;
});

function getCardClass(itemIndex: number) {
  if (!isTablet.value) return itemIndex % 4 === 1 ? 'row-span-2 h-[556px]' : 'row-span-1 h-[270px]'; 
  return itemIndex % 4 === 1 ? 'row-span-2 h-[1156px]' : 'row-span-1 h-[570px]';
}
</script>

<template>
  <div class="relative">
    <!-- Loading state -->
    <div v-if="isLoading" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="i in (isDesktop ? 11 : 12)"
        :key="`placeholder-${i}`"
        class="bg-gray-200 rounded-md shadow-sm animate-pulse h-[200px] sm:h-[570px]"
      >
        <div class="w-full h-full rounded-sm bg-gray-300" />
      </div>
    </div>

    <!-- Content -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 pb-24">
      <PhotoCard
        v-for="(photo, index) in displayedPhotos"
        :key="photo.id"
        :photo="photo"
        :class="[
          getCardClass(index),
          'w-full'
        ]"
      />
    </div>

    <!-- Blur effect -->
    <div class="absolute bottom-20 left-0 right-0 h-96 bg-gradient-to-t from-[#040406] to-transparent z-10"></div>
  </div>
</template>