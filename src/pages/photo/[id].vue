<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExamples } from '@/shared/lib/api';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const allPhotos = ref<components['schemas']['ExamplePhoto'][]>([]);

const currentPhoto = computed(() => {
  return allPhotos.value.find(p => String(p.id) === String(route.params.id));
});

const isLoading = ref(true);

onMounted(async () => {
  allPhotos.value = await getExamples();
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading" class="text-center flex flex-col gap-4 justify-center items-center h-[80vh]">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem" />
    <span>Loading</span>
  </div>

  <div v-if="currentPhoto" class="p-4">
    <img :src="currentPhoto.image_url!">
    <h1 class="text-3xl font-bold mt-4">
      {{ currentPhoto.prompt }}
    </h1>
  </div>
</template>
