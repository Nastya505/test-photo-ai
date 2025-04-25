<script setup lang="ts">
import { Header } from '@/widgets/header';

const route = useRoute();
</script>

<template>
  <Header v-if="route.meta?.isHeader" />
  <div>
    <slot />
  </div>
</template>
