<script setup lang="ts">
</script>

<template>
  <footer class="flex-col md:flex-row  flex w-full justify-between items-start container gap-20 py-15">
    <div class="flex flex-col w-full md:w-1/3 justify-start items-start gap-8 order-2 md:order-1">
      <RouterLink to="/">
        <Image src="/images/logo.svg" class="opacity-50" alt="logo" width="150" />
      </RouterLink>
      <div class="max-w-92 opacity-50 font-medium text-white text-base">
        Headshot AI is a registered trademark.©2025. Terms of Service and Privacy Policy
      </div>
    </div>
    <div class="flex justify-between flex-wrap md:flex-nowrap gap-9 md:gap-2 items-start w-full md:w-3/5 order-1 md:order-2">
      <div class="flex flex-col gap-5 items-start justify-start text-left w-4/9 md:w-full">
        <h3 class="font-medium text-white text-base">
          AI categories
        </h3>
        <ul class="pl-2 border-l-2 border-solid border-white/50 flex flex-col gap-2 items-start justify-start text-left text-white/50">
          <li><a href="#">Sexy Valentines</a></li>
          <li><a href="#">Tinder</a></li>
          <li><a href="#">AI Dating</a></li>
          <li><a href="#">Sexy Valentines</a></li>
          <li><a href="#">Tinder</a></li>
          <li><a href="#">AI Dating</a></li>
        </ul>
      </div>
      <div class="flex flex-col gap-5 items-start justify-start text-left  w-1/2 md:w-full">
        <h3 class="font-medium text-white text-base">
          Billing
        </h3>
        <ul class="pl-2 border-l-2 border-solid border-white/50 flex flex-col gap-2 items-start justify-start text-left text-white/50">
          <li><a href="#">Sexy Valentines</a></li>
          <li><a href="#">Tinder</a></li>
          <li><a href="#">AI Dating</a></li>
        </ul>
      </div>
      <div class="flex flex-col gap-5 items-start justify-start text-left  w-1/2 md:w-full">
        <h3 class="font-medium text-white text-base">
          Gallery
        </h3>
        <ul class="pl-2 border-l-2 border-solid border-white/50 flex flex-col gap-2 items-start justify-start text-left text-white/50 ">
          <li><a href="#">Sexy Valentines</a></li>
          <li><a href="#">Tinder</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
