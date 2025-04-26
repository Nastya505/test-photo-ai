<script setup>
import { FAQSection } from '@/widgets/FAQ';
</script>

<template>
  <div class="flex flex-col gap-10 justify-center items-center mt-16">
    <div class="flex flex-col gap-6 justify-center items-center">
      <h1 class="text-6xl font-medium text-center">
        Your Best Look, Ready in Minutes.
      </h1>
      <h3 class="text-base font-medium max-w-[440px] text-center leading-[22px] opacity-80">
        AI-powered headshots—no photographers, no hassle. Upload, customize, and get pro-quality images instantly
      </h3>
    </div>
    <Button
      v-slot="slotProps"
      large
      as-child
      rounded
      severity="contrast"
    >
      <RouterLink to="/pricing" class="!px-8 !py-4 font-semibold" :class="slotProps.class">
        Create Perfect Shot
      </RouterLink>
    </Button>
  </div>
  <FAQSection
    class="my-40"
    section-title="Frequently asked questions"
    image-src="/images/photo-faq.webp"
    :questions="[
      { title: 'I can’t login to Headshot AI', content: 'yes' },
      { title: 'How do I cancel my subscription?', content: 'yes' },
      { title: 'I canceled Headshot AI but am still being charged', content: 'yes' },
    ]"
  />
</template>
