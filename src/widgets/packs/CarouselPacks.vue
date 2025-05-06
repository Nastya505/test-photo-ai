<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getExamples, getPacks } from '@/shared/lib/api';
import { DefaultButton } from '@/widgets/button';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { computed, nextTick, onMounted, ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const isLoading = ref(true);
const skeletonCount = 5;

const allPacks = ref<components['schemas']['PromptPack'][]>([]);
const examples = ref<components['schemas']['ExamplePhoto'][]>([]);

const validPacks = computed(() => {
  return allPacks.value.filter((pack) => {
    const hasCovers = Array.isArray(pack.covers) && pack.covers.length > 0;
    const hasExamples = examples.value.some(example => example.prompt_pack?.id === pack.id);
    return hasCovers && hasExamples;
  });
});

const visibleSlides = ref(1);
const totalSlides = computed(() => validPacks.value.length);

onMounted(async () => {
  const [fetchedPacks, fetchedExamples] = await Promise.all([
    getPacks(),
    getExamples(),
  ]);

  allPacks.value = fetchedPacks;
  examples.value = fetchedExamples;

  isLoading.value = false;

  await nextTick();
  updateNavState();
});

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
  <section id="billing">
    <div class="px-3 flex flex-col gap-10 justify-center items-center">
      <div class="flex flex-col gap-6 justify-center items-center">
        <h1 class="text-2xl sm:text-6xl text-white font-medium text-center">
          New photo packs every week
        </h1>
        <h3 class="text-base text-white font-medium text-center leading-[22px] opacity-80">
          All packs included in your membership! You can try as many as you want.
        </h3>
      </div>
      <DefaultButton text="See all photo packs" link="#pricing" />
    </div>
    <div class="w-screen relative mt-9 md:mt-20">
      <Swiper
        :modules="modules"
        :slides-per-view="1.2"
        :initial-slide="0"
        :space-between="12"
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
        <template v-if="!isLoading">
          <SwiperSlide
            v-for="pack in validPacks"
            :key="pack.name"
            class="cursor-pointer group"
          >
            <RouterLink
              :to="`/pack/${pack.id}`"
            >
              <div class="rounded-sm overflow-hidden">
                <img
                  :src="pack.covers![0]"
                  alt="cover pack"
                  loading="lazy"
                  class="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                >
              </div>

              <h2
                class="font-medium text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white max-w-8/9 text-left whitespace-nowrap overflow-hidden text-ellipsis mt-5 mb-3"
              >
                {{ pack.name }}
              </h2>

              <p class="text-white/30 text-sm max-w-8/9 italic lg:text-base font-semibold line-clamp-3">
                {{ pack.description }}
              </p>
            </RouterLink>
          </SwiperSlide>
        </template>

        <template v-else>
          <SwiperSlide
            v-for="n in skeletonCount"
            :key="`skeleton-${n}`"
            class="animate-pulse"
          >
            <div class="rounded-sm overflow-hidden bg-white h-[500px] w-full" />
            <div class="mt-5 mb-3 h-6 bg-white rounded w-3/4" />
            <div class="h-4 bg-white rounded w-full" />
          </SwiperSlide>
        </template>
      </Swiper>
    </div>

    <div class="flex justify-between items-stretch container mt-6 md:mt-10  mx-auto px-3 md:px-0">
      <div
        class="flex items-center justify-center italic text-sm sm:text-base font-semibold text-white/30"
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
  </section>
</template>
