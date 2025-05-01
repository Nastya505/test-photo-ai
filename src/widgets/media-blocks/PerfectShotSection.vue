<script setup lang="ts">
import { DefaultButton } from '../button';

defineProps<{
  title: string;
  imageUrl: string;
  buttonText: string;
  description: string;
}>();
async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}
</script>

<template>
  <section class="flex flex-col md:flex-row items-stretch justify-between gap-10">
    <div class="overflow-hidden rounded-xl max-w-[700px]">
      <Image :src="imageUrl" alt="Perfect Headshot" class="w-full h-auto object-cover" />
    </div>
    <div class="flex flex-col justify-between items-start  text-white">
      <h2 class="text-4xl font-medium max-w-[500px] mb-6 mr-0 2xl:mr-48">
        {{ title }}
      </h2>
      <div>
        <DefaultButton
          class="mb-5"
          text="Create Perfect Shot" link="/pricing"
        />
        <div class="relative w-full group flex justify-start gap-4 items-start">
          <p class="text-white/30 max-w-96 italic text-base font-semibold line-clamp-5">
            {{ description }}
          </p>
          <Button
            v-tooltip="{ value: 'Copy', showDelay: 300, hideDelay: 300 }"
            link
            class="absolute top-0 right-0 text-gray-400 hover:text-white transition"
            @click="copyToClipboard(description)"
          >
            <i class="pi pi-copy text-white/30" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
