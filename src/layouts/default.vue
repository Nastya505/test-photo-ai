<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
</script>

<template>
  <div class="relative m-0">
    <Image class="absolute -top-16 left-0 -z-10" src="/images/effect.png" alt="logo" width="525" />
    <div class="container px-2 mx-auto  md:px-0 md:mt-5 z-1">
      <Header />
      <div>
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>
