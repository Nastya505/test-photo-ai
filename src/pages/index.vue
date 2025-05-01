<script setup>
import { BlockPricing } from '@/widgets/block-pricing';
import { DefaultButton } from '@/widgets/button';
import { ComparisonSection } from '@/widgets/comparison-section';
import { FAQSection } from '@/widgets/FAQ';
import { GalleryPacks } from '@/widgets/gallery-packs';
import { Gallery } from '@/widgets/gallery';
import { ImageBlock, PerfectShotSection, TableImagesBlock, TwoColTextAndImageBlock, VideoBlock } from '@/widgets/media-blocks';
import { CarouselPacks } from '@/widgets/packs';
import { TrustpilotWithImage, TrustpilotWithReviews } from '@/widgets/trustpilot';
</script>

<template>
  <div class="flex flex-col gap-6 sm:gap-10 justify-center items-center">
    <div class="flex flex-col gap-3 sm:gap-6 justify-center items-center mt-32">
      <h1 class="text-[26px] sm:text-6xl text-white font-medium text-center">
        Your Best Look, Ready in Minutes
      </h1>
      <h3 class="text-base text-white font-medium max-w-[440px] text-center leading-[22px] opacity-80">
        AI-powered headshots—no photographers, no hassle. Upload, customize, and get pro-quality images instantly
      </h3>
    </div>
    <DefaultButton text="Create Perfect Shot" link="#pricing" />
  </div>
  <div class="flex flex-col gap-12 md:gap-34 container mx-auto px-3">
    <Gallery class="mt-8" />
    <ImageBlock title="Best platform for your perfect Headshots" img-url="/images/preview-photo-ai.webp" />
    <TwoColTextAndImageBlock title="Just upload your photo, choose style and if you want some parameters" img-url="/images/photo-selection.webp" />
    <PerfectShotSection button-text="Create Perfect Shot" title="And woila, your perfect Headshot is finally done!" image-url="/images/perfect-photo.webp" description="A high-fashion photo of a female model sitting in a clean, minimalistic studio environment. She is wearing a silky red tailored suit with a smooth, elegant blouse and wide-leg trousers. The outfit drapes gracefully, highlighting the luxurious texture of the fabric. The model is accessorized with bold, gold statement earrings, adding a touch of sophistication. She poses with a relaxed yet confident expression, and the soft studio lighting casts subtle shadows, enhancing the contours of the outfit and the model's features. The overall aesthetic is sleek, elegant, and modern. Ultra-realistic, 4K resolution, studio fashion photography" />
    <TrustpilotWithReviews title="Customers can’t stop raving about their Headshots" button-text="Create Perfect Shot" />
    <ComparisonSection />
    <TwoColTextAndImageBlock fs-class-title="text-6xl" title="Crazy detailed AI image generator" img-url="/images/photo-details.webp" />
  </div>
  <CarouselPacks class="my-12 md:my-34" />
  <div class="flex flex-col gap-12 md:gap-34 container mx-auto px-3">
    <TableImagesBlock />
    <TrustpilotWithImage title="Start taking AI photos now" description="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo" button-text="Create Perfect Shot" />
    <VideoBlock title="Create video clips with AI" subtitle="Take any AI photo you generated, and turn it into a video by tapping [ Make video ]. A few minutes later you have a short video clip of the photo giving you an immersive virtual reality like experience." img-url="/images/preview-guide-photo-ai.webp" />
    <FAQSection
      section-title="Frequently asked questions"
      image-src="/images/photo-faq.webp"
    />
    <GalleryPacks/>
    <BlockPricing id="pricing" />
    <TrustpilotWithImage class="mb-20" title="Start taking AI photos now" description="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo" button-text="Create Perfect Shot" />
  </div>
</template>
