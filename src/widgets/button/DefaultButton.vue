<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    component?: 'a' | 'button';
    text?: string;
    link?: string;
    variant?: 'filled' | 'outlined';
  }>(),
  {
    variant: 'filled',
    component: 'a',
  },
);

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full leading-5 transition-all duration-200';

const variantClasses = {
  filled: 'bg-white px-8 py-4 text-lg  font-semibold  text-[#223] border border-white hover:bg-transparent hover:text-white  active:bg-transparent active:text-white',
  outlined: 'bg-transparent px-4 py-2 text-base font-medium text-white border border-white hover:bg-white hover:text-[#223]  active:bg-white active:text-[#223]',
};
</script>

<template>
  <component
    :is="props.component"
    :href="props.component === 'a' ? props.link : undefined"
    :class="[baseClasses, variantClasses[props.variant]]"
  >
    {{ props.text }}
  </component>
</template>
