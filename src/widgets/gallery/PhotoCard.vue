<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { BlurImage } from '../blurImage';

defineProps<{
  photo: components['schemas']['ExamplePhoto'];
}>();
</script>

<template>
  <a :href="`/photo/${photo.id}`">
    <BlurImage
      :src="photo.image_url!"
      :blurhash="photo.blurhash!"
      :width="200"
      :height="200"
      alt="Photo"
    />
    <!-- <div class="text-center mt-2">
      {{ photo.prompt }}
    </div> -->
  </a>
</template>
