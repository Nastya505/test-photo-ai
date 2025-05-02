<script setup lang="ts">
import { decode } from 'blurhash';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  src: string;
  blurhash: string;
  width: number;
  height: number;
  alt?: string;
  punch?: number;
}>();

const isLoaded = ref(false);
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!props.blurhash || !canvasRef.value) {
    return;
  }

  const ctx = canvasRef.value.getContext('2d');
  if (!ctx) {
    return;
  }

  const pixels = decode(
    props.blurhash,
    props.width,
    props.height,
    props.punch ?? 1,
  );

  const imageData = ctx.createImageData(props.width, props.height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
});

function handleImageLoad() {
  isLoaded.value = true;
}
</script>

<template>
  <div class="relative w-full h-full ">
    <canvas
      v-if="!isLoaded"
      ref="canvasRef"
      :width="width"
      :height="height"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <img
      :src="src"
      :alt="alt ?? 'Image'"
      loading="lazy"
      class="absolute rounded-sm inset-0 w-full h-full object-cover transition-opacity duration-500"
      :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
      @load="handleImageLoad"
    >
  </div>
</template>
