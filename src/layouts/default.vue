<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

const route = useRoute();

const hideLayout = computed(() => {
  return /^\/photo\/[^/]+$/.test(route.path);
});
</script>

<template>
  <div class="relative m-0">
    <Image
      class="absolute -top-16 left-0 -z-10"
      src="/images/effect.png"
      alt="logo"
      width="525"
      loading="lazy"
    />
    <div class="mt-2.5 md:mt-5 z-1">
      <Header  :showHeader="!hideLayout" />
      <div>
        <slot />
      </div>
      <Footer v-if="!hideLayout" />
    </div>
  </div>
</template>
