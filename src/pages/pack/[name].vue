<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getPacks } from '@/shared/lib/api';
import { BlockPricing } from '@/widgets/block-pricing';
import { DefaultButton } from '@/widgets/button';
import { TwoColTextAndImageBlock } from '@/widgets/media-blocks';
import { TrustpilotWithImage, TrustpilotWithReviews } from '@/widgets/trustpilot';
import { useMediaQuery } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';

const isTablet = useMediaQuery('(min-width: 768px)');
const isDesktop = useMediaQuery('(min-width: 1023px)');

const isTabletSnapshot = ref(false);
const isDesktopSnapshot = ref(false);

const route = useRoute();
const selectedPack = ref<components['schemas']['PromptPack'] | null>(null);

const packs = ref<components['schemas']['PromptPack'][]>([]);
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

  packs.value = await getPacks();

  const packName = route.params.name as string;

  if (packName) {
    selectedPack.value = packs.value.find(p => p.name.toLowerCase() === packName.toLowerCase()) || null;
  }

  isLoading.value = false;
});
</script>

<template>
  <div class="container mx-auto px-3">
    <div class="flex flex-col gap-6 sm:gap-10 justify-center items-center ">
      <div class="flex flex-col gap-3 sm:gap-6 justify-center items-center mt-32">
        <h1 class="text-[26px] sm:text-6xl text-white font-medium text-center">
          {{ selectedPack?.name }} by  AI
        </h1>
        <h3 class="text-base text-white font-medium max-w-[440px] text-center leading-[22px] opacity-80">
          AI-powered headshots—no photographers, no hassle. Upload, customize, and get pro-quality images instantly
        </h3>
      </div>
      <DefaultButton text="Create Perfect Shot" link="#pricing" />
    </div>
    <div class="mt-8 flex flex-col gap-12 md:gap-34">
      <div class="flex flex-col gap-8">
        <div class="relative">
          <!-- Skeletons while loading -->
          <div v-if="isLoading" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
            <div
              v-for="i in (isDesktopSnapshot ? 12 : 11)"
              :key="`placeholder-${i}`"
              class="bg-gray-200 rounded-md shadow-sm animate-pulse" :class="[getCardClass(i - 1, isTabletSnapshot)]"
            >
              <div class="w-full h-full rounded-sm bg-gray-300" />
            </div>
          </div>

          <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 pb-24">
            <a
              v-for="(photo, index) in selectedPack?.covers"
              :key="index"
              href="#" class="relative"
              :class="[getCardClass(index)]"
            >
              <img
                :src="photo"
                alt="Photo"
                class="absolute rounded-sm inset-0 w-full h-full object-cover transition-opacity duration-500"
              >
            </a>
          </div>

          <div v-if="!isLoading" class="absolute bottom-24 left-0 right-0 h-32 bg-gradient-to-t from-[#040406] to-transparent z-10" />
        </div>

        <DefaultButton v-if="!isLoading" class="mx-auto -mt-20 z-11" text="Create Perfect Shot" link="#pricing" />
      </div>
      <TwoColTextAndImageBlock
        class="mt-16 md:mt-0"
        title="Just upload your photo, choose style and if you want some parameters"
        img-url="/images/photo-selection.webp"
      />
      <TrustpilotWithReviews title="Customers can’t stop raving about their Headshots" button-text="Create Perfect Shot" />
      <BlockPricing />
      <TrustpilotWithImage class="mb-20" title="Start taking AI photos now" description="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo" button-text="Create Perfect Shot" />
    </div>
  </div>
</template>
