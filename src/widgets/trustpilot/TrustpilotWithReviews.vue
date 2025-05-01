<script setup lang='ts'>
import { reviews } from '@/shared/data/reviews';
import { DefaultButton } from '@/widgets/button';
import TestimonialCard from './TestimonialCard.vue';

defineProps<{
  title: string;
  buttonText: string;
}>();
</script>

<template>
  <section class="flex justify-center md:justify-between gap-8 md:gap-10 items-center md:items-start flex-col md:flex-row">
    <!-- Left Side -->
    <div class="flex flex-col justify-center gap-8 w-full md:w-1/2 2xl:w-2/5">
      <h2 class="text-2xl md:text-5xl font-bold text-center md:text-left leading-tight">
        {{ title }}
      </h2>
      <div class="w-full justify-between md:w-auto md:justify-start flex items-end gap-3">
        <img src="/images/trustpilot-logo-white.svg" alt="Trustpilot Logo" class="h-8">
        <span class="text-xl font-bold leading-6 text-white/50">4.9 Excellent</span>
      </div>
      <DefaultButton link="/pricing" :text="buttonText" class="!hidden md:!flex max-w-full mt-12 sm:max-w-62" />
    </div>

    <!-- Right Side -->
    <div class="w-full md:w-1/2 2xl:w-2/5 flex flex-col justify-center items-center gap-6 md:gap-8">
      <TestimonialCard
        v-for="(card, index) in reviews"
        :key="index"
        :name="card.name"
        :emoji="card.emojiUrl"
        :text="card.text"
      />

      <a href="#" class="block text-sm text-gray-400 underline pt-2 hover:text-white">
        Read all 296 reviews on TrustPilot
      </a>
    </div>
    <DefaultButton link="/pricing" :text="buttonText" class="!flex md:!hidden" />
  </section>
</template>
