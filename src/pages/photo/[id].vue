<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExampleById } from '@/shared/lib/api';
import { DefaultButton } from '@/widgets/button';
import { ResultImage } from '@/widgets/media-blocks';
import { ResultLine } from '@/widgets/resultLine/intex';
import { SwiperDefault } from '@/widgets/swiper';
import {  onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isLoading = ref(true);


const currentPhoto = ref<components['schemas']['ExamplePhoto'] | null>(null);
const currentPhotoId=route.params.id as string;
const model = route.query.model as string;



onMounted(async () => {
  currentPhoto.value = await getExampleById(currentPhotoId);
  isLoading.value = false;
});

</script>

<template>
  <div>
    <div v-if="isLoading" class="text-center flex flex-col gap-4 justify-center items-center h-[80vh]">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem" />
      <span>Loading</span>
    </div>

    <div v-if="currentPhoto" class="py-24 container mx-auto px-3">

          <div v-if="model === 'artphoto'" class="flex justify-between items-start w-full gap-6 md:gap-8 flex-col md:flex-row">
            <div class="w-full flex flex-col gap-4 md:w-1/2">
              <div class="w-full rounded-2xl overflow-hidden">
                <img :src="currentPhoto.image_url!" class="w-full h-full" loading="lazy">
              </div>
            </div>
            <div class="flex flex-col w-full md:w-1/2 justify-start items-start gap-8">
              <ResultLine title="Model" :text="currentPhoto.model.name" />
              <ResultLine title="Preset" :text="currentPhoto.prompt_pack?.name" />
              <ResultLine title="License" text="Free to use with backlink to ArtPhoto Ai" />
              <DefaultButton text="Create Your Perfect Shot" link="#" icon="pi-arrow-circle-right" />
            </div>
          </div>
          <div v-if="model === 'client'" class="flex justify-center items-center w-full gap-6 md:gap-8 flex-col">
              <div class="w-full md:w-1/2 rounded-2xl overflow-hidden">
                <img :src="currentPhoto.image_url!" class="w-full h-full" loading="lazy">
              </div>
              <DefaultButton text="Create Your Perfect Shot" link="/#pricing" icon="pi-arrow-circle-right" />
          </div>
        </div>
      </div>
</template>
