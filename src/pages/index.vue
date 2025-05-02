<script setup>
import { BlockPricing } from '@/widgets/block-pricing';
import { DefaultButton } from '@/widgets/button';
import { ComparisonSection } from '@/widgets/comparison-section';
import { FAQSection } from '@/widgets/FAQ';
import { Gallery } from '@/widgets/gallery';
import { ImageBlock, ResultImage, TableImagesBlock, TwoColTextAndImageBlock } from '@/widgets/media-blocks';
import { CarouselPacks, GalleryPacks } from '@/widgets/packs';
import { TrustpilotWithImage, TrustpilotWithReviews } from '@/widgets/trustpilot';
</script>

<template>
  <div class="flex flex-col gap-6 sm:gap-10 justify-center items-center container mx-auto px-3">
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
  <div class="flex flex-col gap-16 md:gap-40 container mx-auto px-3">
    <Gallery class="mt-8" />
    <ImageBlock title="Best platform for your perfect Headshots" url="/images/preview-photo-ai.webp" />
  </div>
  <ResultImage result-img-url="/images/perfect-photo.webp" class="my-16 md:my-40" />
  <div class="flex flex-col gap-16 md:gap-40 container mx-auto px-3">
    <TrustpilotWithReviews title="Customers can’t stop raving about their Headshots" button-text="Create Perfect Shot" />
    <ComparisonSection />
    <TwoColTextAndImageBlock fs-class-title="text-6xl" title="Crazy detailed AI image generator" img-url="/images/photo-details.webp" />
  </div>
  <CarouselPacks class="my-16 md:my-40" />
  <div class="flex flex-col gap-16 md:gap-40 container mx-auto px-3">
    <TableImagesBlock />
    <FAQSection
      section-title="Frequently asked questions"
      image-src="/images/photo-faq.webp"
    />
    <GalleryPacks />
  </div>
  <BlockPricing class="my-16 md:my-40 sm:container sm:mx-auto" />
  <div class="flex flex-col gap-16 md:gap-40 container mx-auto px-3">
    <TrustpilotWithImage class="mb-20" title="Start taking AI photos now" description="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo" button-text="Create Perfect Shot" />
  </div>
</template>
