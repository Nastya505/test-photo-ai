<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExamples } from '@/shared/lib/api';
import { DefaultButton } from '@/widgets/button';
import { ResultImage } from '@/widgets/media-blocks';
import { ResultLine } from '@/widgets/resultLine/intex';
import { SwiperDefault } from '@/widgets/swiper';
import { domToBlob } from 'modern-screenshot';
import { computed, nextTick, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const allPhotos = ref<components['schemas']['ExamplePhoto'][]>([]);
const isLoading = ref(true);

const currentPhotoRef = ref<HTMLImageElement | null>(null);

const currentPhoto = computed(() => {
  return allPhotos.value.find(p => String(p.id) === String(route.params.id));
});

const currentIndex = computed(() => {
  return allPhotos.value.findIndex(p => String(p.id) === String(route.params.id));
});

const nextPhoto = computed(() => {
  if (currentIndex.value >= 0 && currentIndex.value < allPhotos.value.length - 1) {
    return allPhotos.value[currentIndex.value + 1];
  }
  return null;
});

const prevPhoto = computed(() => {
  if (currentIndex.value > 0) {
    return allPhotos.value[currentIndex.value - 1];
  }
  return null;
});

function goToPhoto(id: string | number) {
  router.push({ name: route.name as string, params: { id } });
}

const similarPhotos = computed(() => {
  if (!currentPhoto.value) {
    return [];
  }

  const filtered = allPhotos.value.filter(
    p =>
      p.id !== currentPhoto.value?.id
      && p.model.name === currentPhoto.value?.model.name,
  );

  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  return filtered.slice(0, 6);
});

onMounted(async () => {
  allPhotos.value = await getExamples();
  isLoading.value = false;
});

async function getNode() {
  await nextTick();
  let attempts = 0;
  const maxAttempts = 10;
  let element = currentPhotoRef.value;

  while (!element && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 300));
    element = currentPhotoRef.value;
    attempts++;
  }

  return element || null;
}
async function downloadImage() {
  const node = await getNode();
  if (!node) {
    console.error('Element not found');
    return;
  }

  try {
    const blob = await domToBlob(node, {
      quality: 0.95,
      scale: 2,
      type: 'image/jpeg',
      backgroundColor: '#ffffff',
      width: node.clientWidth,
      height: node.clientHeight,
    });

    if (!blob) {
      console.error('Failed to generate blob');
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `artphoto-${currentPhoto.value?.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Download failed:', err);
  }
}
</script>

<template>
  <div>
    <div v-if="isLoading" class="text-center flex flex-col gap-4 justify-center items-center h-[80vh]">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem" />
      <span>Loading</span>
    </div>

    <div v-if="currentPhoto" class="pt-24">
      <button class="flex items-center gap-3 container mx-auto px-3 text-white transition-colors hover:text-white/80 mb-4 md:mb-10" @click="router.back()">
        <i class="pi pi-arrow-left !font-semibold" />
        <span class="text-base font-semibold">Back</span>
      </button>
      <div class="flex justify-center items-center flex-col">
        <div class="flex justify-between items-center w-full gap-10  flex-col container mx-auto px-3">
          <div class="flex justify-between items-start w-full gap-6 md:gap-8 flex-col md:flex-row">
            <div class="w-full flex flex-col gap-4 md:w-2/5">
              <div class="w-full rounded-2xl overflow-hidden">
                <img ref="currentPhotoRef" :src="currentPhoto.image_url!" class="w-full h-full" loading="lazy">
              </div>
              <div class="flex w-full justify-between items-center md:hidden">
                <div class="w-1/2">
                  <DefaultButton
                    v-if="prevPhoto"
                    text="prev prompt"
                    position-icon="left"
                    icon="pi-arrow-left"
                    variant="outlined"
                    @click="goToPhoto(prevPhoto.id)"
                  />
                </div>
                <div class="w-1/2 flex justify-end">
                  <DefaultButton
                    v-if="nextPhoto"
                    text="next prompt"
                    icon="pi-arrow-right"
                    variant="outlined"
                    @click="goToPhoto(nextPhoto.id)"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col w-full md:w-3/5 justify-start items-start gap-8">
              <ResultLine title="Prompt" :text="currentPhoto.prompt" />
              <DefaultButton text="Try this prompt" link="/#pricing" icon="pi-arrow-circle-right" />
              <ResultLine title="Model" :text="currentPhoto.model.name" />
              <ResultLine title="Preset" :text="currentPhoto.prompt_pack?.name" />
              <ResultLine title="License" text="Free to use with backlink to ArtPhoto Ai" />
              <button class="cursor-pointer flex items-center gap-2 text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:opacity-100 hover:after:opacity-50" @click="downloadImage()">
                <span class="text-lg text-white font-semibold">
                  Download image
                </span>
                <i class="pi pi-download" />
              </button>
              <div v-if="similarPhotos.length" class="w-full flex flex-col gap-2">
                <h5 class="text-left text-lg font-semibold text-white">
                  Similar Photos
                </h5>
                <SwiperDefault :photos="similarPhotos" :go-to-photo="goToPhoto" />
              </div>
            </div>
          </div>
          <div class="hidden md:flex w-full justify-between items-center">
            <div class="w-1/2">
              <DefaultButton
                v-if="prevPhoto"
                text="prev prompt"
                position-icon="left"
                icon="pi-arrow-left"
                variant="outlined"
                @click="goToPhoto(prevPhoto.id)"
              />
            </div>
            <div class="w-1/2 flex justify-end">
              <DefaultButton
                v-if="nextPhoto"
                text="next prompt"
                icon="pi-arrow-right"
                variant="outlined"
                @click="goToPhoto(nextPhoto.id)"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center w-full items-center my-16 md:my-40 gap-16">
          <ResultImage result-img-url="/images/perfect-photo.webp" />
          <DefaultButton class="max-w-96" text="Start generate your photos" link="/#pricing" icon="pi-step-forward" />
        </div>
      </div>
    </div>
  </div>
</template>
