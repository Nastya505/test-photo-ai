<script setup lang='ts'>
import { DefaultButton } from '@/widgets/button';
import TestimonialCard from './TestimonialCard.vue';

defineProps<{
  title: string;
  buttonText: string;
}>();

const cards = [
  {
    name: 'Josh',
    emojiUrl: '/images/icon-heart.png',
    text: 'Photo AI is just fantastic! I take amazing photos of my wife, family and friends. As a photographer I use it to test ideas before creating a real photoshoot. I strongly recommend!',
  },
  {
    name: 'Viki',
    emojiUrl: '/images/icon-cool.png',
    text: 'Cool AI tool for image generation! I could create a lot of truly amazing pictures in different locations with different outfits! All my friends were surprised and loved my pictures!',
  },
  {
    name: 'Andrei',
    emojiUrl: '/images/icon-smile.png',
    text: 'Good input = good output. Very fun! Took me some effort to get the models to feel accurate but once I got the right input it was amazing. Photo AI was very responsive to my questions.',
  },
];
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
        v-for="(card, index) in cards"
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
