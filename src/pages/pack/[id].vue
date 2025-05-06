<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExamples } from '@/shared/lib/api';
import { BlockPricing } from '@/widgets/block-pricing';
import { DefaultButton } from '@/widgets/button';
import { PhotoCard } from '@/widgets/gallery';
import { ResultImage } from '@/widgets/media-blocks';
import { TrustpilotWithImage, TrustpilotWithReviews } from '@/widgets/trustpilot';
import { useMediaQuery } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';

const isTablet = useMediaQuery('(min-width: 768px)');
const isDesktop = useMediaQuery('(min-width: 1023px)');
const isLargeDesktop = useMediaQuery('(min-width: 1536px)');

const isTabletSnapshot = ref(false);
const isDesktopSnapshot = ref(false);
const isLargeDesktopSnapshot = ref(false);

const route = useRoute();
const selectedPackName = ref<string | null>(null);

const allPhotos = ref<components['schemas']['ExamplePhoto'][]>([]);
const isLoading = ref(true);

function getCardClass(itemIndex: number, isTabletLocal = isTablet.value) {
  if (!isTabletLocal) {
    return itemIndex % 4 === 1 ? 'row-span-2 h-[556px]' : 'row-span-1 h-[270px]';
  }
  return itemIndex % 4 === 1 ? 'row-span-2 h-[1156px]' : 'row-span-1 h-[570px]';
}

onMounted(async () => {
  isTabletSnapshot.value = isTablet.value;
  isDesktopSnapshot.value = isDesktop.value;
  isLargeDesktopSnapshot.value = isLargeDesktop.value;
  const packId = route.params.id as string;
  const examples = await getExamples({ prompt_pack_id: packId });

  allPhotos.value = examples;
  if (examples.length > 0) {
    selectedPackName.value = examples[0].prompt_pack?.name || '';
  }

  isLoading.value = false;
});
const displayedPhotos = computed(() => {
  if (isLargeDesktop.value) {
    return 13;
  }
  if (isDesktop.value) {
    return 12;
  }
  return 11;
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-6 sm:gap-10 justify-center items-center ">
      <div class="flex flex-col gap-3 sm:gap-6 justify-center items-center mt-32">
        <h1 class="text-[26px] sm:text-6xl text-white font-medium text-center">
          {{ selectedPackName }} by  AI
        </h1>
        <h3 class="text-base text-white font-medium max-w-[440px] text-center leading-[22px] opacity-80">
          AI-powered photos—no photography, no hassle. Upload, customize, and get pro-quality images instantly
        </h3>
      </div>
      <DefaultButton text="Create Perfect Shot" link="#pricing" />
    </div>
    <div class="mt-8 flex flex-col gap-16 md:gap-40">
      <div class="flex flex-col gap-8 container mx-auto px-3">
        <div class="relative">
          <!-- Skeletons while loading -->
          <div v-if="isLoading" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr gap-4">
            <div
              v-for="i in displayedPhotos"
              :key="`placeholder-${i}`"
              class="bg-gray-200 rounded-md shadow-sm animate-pulse" :class="[getCardClass(i - 1, isTabletSnapshot)]"
            >
              <div class="w-full h-full rounded-sm bg-gray-300" />
            </div>
          </div>

          <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr gap-4 pb-24">
            <PhotoCard
              v-for="(photo, index) in allPhotos"
              :key="photo.id"
              :photo="photo"
              class="w-full"
              :class="[getCardClass(index)]"
            />
          </div>

          <div v-if="!isLoading" class="absolute bottom-22 left-0 right-0 h-32 bg-gradient-to-t from-[#040406] to-transparent z-10" />
        </div>

        <DefaultButton v-if="!isLoading" class="mx-auto -mt-20 z-11" text="Create Perfect Shot" link="#pricing" />
      </div>
      <ResultImage result-img-url="/images/perfect-photo.webp" />
      <div class="flex flex-col gap-16 md:gap-40 container mx-auto px-3">
        <TrustpilotWithReviews title="Customers can’t stop raving about their Artphoto" button-text="Create Perfect Shot" />
      </div>
      <BlockPricing class="sm:container sm:mx-auto" />
      <div class="flex flex-col gap-16 md:gap-40 container mx-auto px-3">
        <TrustpilotWithImage class="mb-20" title="Start taking AI photos now" description="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo" button-text="Create Perfect Shot" />
      </div>
    </div>
  </div>
</template>
