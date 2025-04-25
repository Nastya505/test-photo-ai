<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    imgUrl?: string;
    fsClassTitle?: string;
    orderImage?: string;
  }>(),
  {
    orderImage: '1',
  },
);

</script>

<template>
  <div class="flex flex-col justify-between w-full items-start gap-10 md:flex-row">
    <div
      :class="[
        `order-${props.orderImage}`,
        'flex flex-col justify-center w-full max-w-[470px] items-start gap-5'
      ]"
    >
      <h2
        :class="[fsClassTitle ?? 'text-4xl', 'text-white font-medium']"
      >
        {{ props.title }}
      </h2>
      <h3
        class="text-base text-white font-medium max-w-[440px] leading-[22px] opacity-80"
      >
        {{ props.subtitle }}
      </h3>
    </div>

    <Image
      :class="[props.orderImage === '1' ? 'order-1 md:order-2 ' : 'order-2 md:order-1', 'w-full max-w-[800px]']"
      :src="props.imgUrl"
    />
  </div>
</template>
