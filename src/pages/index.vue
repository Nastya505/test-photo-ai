<script setup>
import { DefaultBlockImage, TableImagesBlock, TwoColTextAndImageBlock } from '@/widgets/imageBlock';
</script>

<template>
  <div class="flex flex-col gap-10 justify-center items-center">
    <div class="flex flex-col gap-6 justify-center items-center mt-32">
      <h1 class="text-6xl text-white font-medium text-center">
        Your Best Look, Ready in Minutes.
      </h1>
      <h3 class="text-base text-white font-medium max-w-[440px] text-center leading-[22px] opacity-80">
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
  <TableImagesBlock class="my-40" />
  <TwoColTextAndImageBlock class="my-40" fs-class-title="text-6xl" title="Crazy detailed AI image generator" img-url="/images/photo-details.webp" />
  <TwoColTextAndImageBlock class="my-40" title="Just upload your photo, choose style and if you want some parameters" img-url="/images/photo-selection.webp" />
  <DefaultBlockImage class="my-40" title="Best platform for your perfect Headshots" img-url="/images/preview-photo-ai.webp" />
  <DefaultBlockImage class="my-40" title="Create video clips with AI" subtitle="Take any AI photo you generated, and turn it into a video by tapping [ Make video ]. A few minutes later you have a short video clip of the photo giving you an immersive virtual reality like experience." img-url="/images/preview-guide-photo-ai.webp" />
</template>
