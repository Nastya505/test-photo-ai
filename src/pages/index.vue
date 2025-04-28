<script setup>
import { DefaultButton } from '@/widgets/button';
import { FAQSection } from '@/widgets/FAQ';
import { PerfectShotSection } from '@/widgets/imageBlock';
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
    <DefaultButton text="Create Perfect Shot" link="/create" />
  </div>
  <TableImagesBlock class="my-40" />
  <TwoColTextAndImageBlock class="my-40" fs-class-title="text-6xl" title="Crazy detailed AI image generator" img-url="/images/photo-details.webp" />
  <TwoColTextAndImageBlock class="my-40" title="Just upload your photo, choose style and if you want some parameters" img-url="/images/photo-selection.webp" />
  <DefaultBlockImage class="my-40" title="Best platform for your perfect Headshots" img-url="/images/preview-photo-ai.webp" />
  <DefaultBlockImage class="my-40" title="Create video clips with AI" subtitle="Take any AI photo you generated, and turn it into a video by tapping [ Make video ]. A few minutes later you have a short video clip of the photo giving you an immersive virtual reality like experience." img-url="/images/preview-guide-photo-ai.webp" />
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
  <PerfectShotSection button-text="Create Perfect Shot" title="And woila, your perfect Headshot is finally done!" image-url="/images/perfect-photo.webp" description="A high-fashion photo of a female model sitting in a clean, minimalistic studio environment. She is wearing a silky red tailored suit with a smooth, elegant blouse and wide-leg trousers. The outfit drapes gracefully, highlighting the luxurious texture of the fabric. The model is accessorized with bold, gold statement earrings, adding a touch of sophistication. She poses with a relaxed yet confident expression, and the soft studio lighting casts subtle shadows, enhancing the contours of the outfit and the model's features. The overall aesthetic is sleek, elegant, and modern. Ultra-realistic, 4K resolution, studio fashion photography" />
</template>
