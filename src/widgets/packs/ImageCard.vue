<script lang="ts" setup>
import type { components } from '@/shared/lib/photo-api';

defineProps<{
  item: components['schemas']['PromptPack'] & {
    covers?: string[] | null;
  };
  heightClass?: string;
  noMargin?: boolean;

}>();
</script>

<template>
  <div
    v-if="item?.covers && item.covers.length > 0"
    class=" overflow-hidden  text-white break-inside-avoid" :class="[noMargin ? '' : 'mb-4']"
  >
    <div class="rounded-sm overflow-hidden">
      <img
        :src="item.covers[0]"
        :alt="item.name"
        loading="lazy"
        class="w-full object-top object-cover" :class="[heightClass]"
      >
    </div>
    <h2
      class="font-medium text-white max-w-8/9 text-left whitespace-nowrap overflow-hidden text-ellipsis mt-5 mb-3"
      style="font-size: clamp(1.25rem, 2vw, 1.875rem);"
    >
      {{ item.name }}
    </h2>
    <p class="text-white/30 max-w-8/9 italic text-base font-semibold line-clamp-3">
      {{ item.description }}
    </p>
  </div>
</template>
