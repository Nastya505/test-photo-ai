<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    component?: 'a' | 'button';
    text?: string;
    link?: string;
    variant?: 'filled' | 'outlined';
    icon?: string | null;
    styles?: string;
    positionIcon?: 'left' | 'right';
  }>(),
  {
    variant: 'filled',
    component: 'a',
    icon: null,
    positionIcon: 'right',
  },
);

const baseClasses = 'cursor-pointer inline-flex items-center justify-center gap-2 rounded-full leading-5 transition-all duration-200';

const variantClasses = {
  filled: 'bg-white px-8 py-4 text-lg  font-semibold  text-[#223] border border-white hover:bg-transparent hover:text-white  active:bg-transparent active:text-white',
  outlined: 'bg-transparent px-4 py-2 text-base font-medium text-white border border-white hover:bg-white hover:text-[#223]  active:bg-white active:text-[#223]',
};
</script>

<template>
  <component
    :is="props.component"
    :href="props.component === 'a' ? props.link : undefined"
    :style="props.styles"
    :class="[baseClasses, variantClasses[props.variant]]"
  >
    <i
      v-if="icon !== null && props.positionIcon === 'left'"
      :class="`pi ${icon}`"
      style="font-size: 1.15rem"
    />
    {{ props.text }}
    <i
      v-if="icon !== null && props.positionIcon === 'right'"
      :class="`pi ${icon}`"
      style="font-size: 1.15rem"
    />
  </component>
</template>
