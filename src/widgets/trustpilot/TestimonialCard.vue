<script setup lang="ts">
defineProps<{
  name: string;
  emoji: string;
  text: string;
}>();
</script>

<template>
  <div class="border-4 border-white/5 rounded-xl p-8 flex flex-col gap-16">
    <div class="flex w-full justify-between items-center text-sm font-semibold text-white">
      <h2 class="text-white text-4xl font-medium">
        {{ name }}
      </h2>
      <div class="flex gap-1 items-center">
        <span class="text-white/30 text-xl font-normal">Verified purchase</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF40"><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" /></svg>
      </div>
    </div>
    <div class="flex w-full justify-between items-end gap-10">
      <div class="text-white/80 text-lg font-medium leading-relaxed">
        "{{ text }}"
      </div>
      <img :src="emoji" class="max-w-16" alt="emoji">
    </div>
  </div>
</template>
