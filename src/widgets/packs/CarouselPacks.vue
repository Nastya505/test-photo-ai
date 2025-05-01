<script setup lang="ts">
import { DefaultButton } from '@/widgets/button';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const packs = [
  {
    name: 'LinkedIn headshots (man)',
    description: 'Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/eiv6v4wmdqv.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/lg0a9436mik.webp',
    ],
  },
  {
    name: 'AI Selfies (man)',
    description: 'Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/n14l8sc5by.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/4uys4on5rsk.webp',
    ],
  },
  {
    name: 'Easter (man)',
    description: 'Hop into the spirit of Easter with a joyful and colorful photo shoot. Capture the fun of the season with bunny ears, Easter eggs, and bright spring colors for a cheerful, family-friendly look',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/q13ef65ii3i.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/8l7wvszcxjp.webp',
    ],
  },
  {
    name: 'Instagram (man)',
    description: 'Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/9cs5u4may6.webp',
    ],
  },
  {
    name: 'Tinder (man)',
    description: 'Look your best while staying true to who you are. Take photos with a variety of poses, playful expressions, and vibrant colors to make your dating profile stand out. Attract more matches on apps like Tinder, Bumble, and Hinge by showcasing your unique personality and style, helping you create a more engaging and appealing profile',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/wo9agnxumfi.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/lzqryle3rb.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/dcf4u4nqnv7.webp',
    ],
  },
  {
    name: 'Tinder (man)',
    description: 'Look your best while staying true to who you are. Take photos with a variety of poses, playful expressions, and vibrant colors to make your dating profile stand out. Attract more matches on apps like Tinder, Bumble, and Hinge by showcasing your unique personality and style, helping you create a more engaging and appealing profile',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/wo9agnxumfi.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/lzqryle3rb.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/dcf4u4nqnv7.webp',
    ],
  },
  {
    name: 'Tinder (man)',
    description: 'Look your best while staying true to who you are. Take photos with a variety of poses, playful expressions, and vibrant colors to make your dating profile stand out. Attract more matches on apps like Tinder, Bumble, and Hinge by showcasing your unique personality and style, helping you create a more engaging and appealing profile',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/wo9agnxumfi.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/lzqryle3rb.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/dcf4u4nqnv7.webp',
    ],
  },
  {
    name: 'Tinder (man)',
    description: 'Look your best while staying true to who you are. Take photos with a variety of poses, playful expressions, and vibrant colors to make your dating profile stand out. Attract more matches on apps like Tinder, Bumble, and Hinge by showcasing your unique personality and style, helping you create a more engaging and appealing profile',
    covers: [
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/wo9agnxumfi.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/lzqryle3rb.webp',
      'https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/dcf4u4nqnv7.webp',
    ],
  },
];

const visibleSlides = ref(1);
const totalSlides = ref(packs.length);

function onSwiper(swiper: any) {
  swiperRef.value = swiper;
  updateNavState();
}

function updateNavState() {
  if (!swiperRef.value) {
    return;
  }

  const swiper = swiperRef.value;
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;

  let slidesPerView = swiper.params.slidesPerView;

  if (typeof slidesPerView === 'function') {
    slidesPerView = slidesPerView();
  }

  if (typeof slidesPerView !== 'number') {
    slidesPerView = 1;
  }

  const currentSlideStart = swiper.activeIndex;
  const currentSlideEnd = Math.min(
    currentSlideStart + Math.floor(slidesPerView),
    totalSlides.value,
  );
  visibleSlides.value = currentSlideEnd;
}
</script>

<template>
  <div>
    <div class="px-3 flex flex-col gap-10 justify-center items-center">
      <div class="flex flex-col gap-6 justify-center items-center mt-32">
        <h1 class="text-2xl sm:text-6xl text-white font-medium text-center">
          New photo packs every week
        </h1>
        <h3 class="text-base text-white font-medium text-center leading-[22px] opacity-80">
          All packs included in your membership! You can try as many as you want.
        </h3>
      </div>
      <DefaultButton text="See all photo packs" link="/pricing" />
    </div>
    <div class="w-screen relative mt-9 md:mt-20">
      <Swiper
        :modules="modules"
        :slides-per-view="1.1"
        :initial-slide="0"
        :space-between="6"
        :slides-offset-before="12"
        :slides-offset-after="12"
        :navigation="{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }"
        :breakpoints="{
          575: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.4 },
          1024: { slidesPerView: 4.4 },
        }"
        class="w-full"
        @swiper="onSwiper"
        @slide-change="updateNavState"
      >
        <SwiperSlide
          v-for="pack in packs"
          :key="pack.name"
          class="cursor-pointer group"
        >
          <div class="rounded-sm overflow-hidden">
            <img
              :src="pack.covers[0]"
              alt="cover pack"
              class="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            >
          </div>

          <h2
            class="font-medium text-white max-w-8/9 text-left whitespace-nowrap overflow-hidden text-ellipsis mt-5 mb-3"
            style="font-size: clamp(1.25rem, 2vw, 1.875rem);"
          >
            {{ pack.name }}
          </h2>

          <p class="text-white/30 max-w-8/9 italic text-base font-semibold line-clamp-3">
            {{ pack.description }}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="flex justify-between items-stretch container mt-6 md:mt-10  mx-auto px-3 md:px-0">
      <div
        class="flex items-center justify-center italic text-base font-semibold text-white/30"
      >
        {{ visibleSlides }} / {{ totalSlides }}
      </div>
      <div class="flex justify-end gap-8 w-7/8 ">
        <button
          class="swiper-prev  border-none   rounded-md text-white transition-colors"
          :class="isBeginning ? 'opacity-40 cursor-not-allowed' : ''"
          :disabled="isBeginning"
        >
          <i class="pi pi-arrow-left" style="font-size: 2rem" />
        </button>
        <button
          class="swiper-next  border-none rounded-md text-white transition-colors"
          :class="isEnd ? 'opacity-40 cursor-not-allowed' : ''"
          :disabled="isEnd"
        >
          <i class="pi pi-arrow-right" style="font-size: 2rem" />
        </button>
      </div>
    </div>
  </div>
</template>
