<script setup lang="ts">
import { DefaultButton } from '@/widgets/button';

defineProps<{
  title: string;
  description: string;
  buttonText: string;
}>();
</script>

<template>
  <section class="bg-white rounded-sm overflow-hidden">
    <div class="flex  justify-between items-center h-auto md:h-[700px] flex-col md:flex-row">
      <div class="w-full p-4 md:w-1/2 md:pl-20 md:pr-10 md:py-10 flex flex-col justify-center gap-4 md:gap-8">
        <h2 class="text-[27px] sm:text-6xl font-medium text-black">
          {{ title }}
        </h2>
        <div class="flex items-end gap-3 mb-4">
          <img src="/images/trustpilot-logo-black.svg" alt="Trustpilot Logo" class="h-8 " style="fill:#000" loading="lazy">
          <span class="text-xl font-bold leading-6 text-black/50">4.9 Excellent</span>
        </div>
        <div class="text-black/80 mb-6 text-base font-medium max-w-[460px] leading-5">
          {{ description }}
        </div>
        <DefaultButton link="#pricing" :text="buttonText" class="max-w-full sm:max-w-62 !invert" />
      </div>

      <div class="w-full p-4 md:p-0 md:w-1/2 relative overflow-hidden h-full">
        <img
          src="/images/trustpilot-with-image.webp"
          alt="AI Photo"
          loading="lazy"
          class="relative md:absolute top-0 left-0 w-full h-full md:h-[105%] object-cover"
        >
      </div>
    </div>
  </section>
</template>
