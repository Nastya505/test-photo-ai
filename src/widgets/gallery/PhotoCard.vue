<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { BlurImage } from '../blurImage';

defineProps<{
  photo: components['schemas']['ExamplePhoto'];
}>();
</script>

<template>
  <a :href="`/photo/${photo.id}`" class="relative">
    <BlurImage
      :src="photo.image_url!"
      :blurhash="photo.blurhash!"
      :width="200"
      :height="200"
      alt="Photo"
    />
    <div class="hidden md:block absolute bottom-0 left-0 italic w-8/9 p-4 text-white text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
      {{ photo.prompt }}
    </div>

  </a>
</template>
