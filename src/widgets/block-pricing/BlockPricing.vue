<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper';
import { DefaultButton } from '@/widgets/button';
import { useMediaQuery } from '@vueuse/core';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { computed, ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';

const billingCycle = ref<'monthly' | 'yearly'>('yearly');

function toggleBillingCycle() {
  billingCycle.value = billingCycle.value === 'monthly' ? 'yearly' : 'monthly';
}
const expandedPlans = ref<Record<string, boolean>>({});

function toggleExpanded(planName: string) {
  expandedPlans.value = {
    ...expandedPlans.value,
    [planName]: !expandedPlans.value[planName],
  };
}

const isDesktop = useMediaQuery('(min-width: 1023px)');

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 10,
    yearlyPrice: 99,
    featuresTop: [
      'Take 50 AI Photos (credits)',
      'Create 1 AI Model per month',
      'Flux™ 1.1 photorealistic model',
    ],
    features: [
      'Low quality photos',
      'Low resemblance',
      'Take 1 photo at a time',
      'Use any photo pack',
    ],
    buttonText: 'Subscribe Now',
  },
  {
    name: 'Premium',
    monthlyPrice: 45,
    yearlyPrice: 499,
    featuresTop: [
      'Take 3,000 AI Photos (credits)',
      'Create 10 AI Model per month',
      'Flux™ 1.1 photorealistic model',
    ],
    features: [
      'Low quality photos',
      'Low resemblance',
      'Take 1 photo at a time',
      'Use any photo pack',
      'Low quality photos',
      'Low resemblance',
      'Take 1 photo at a time',
      'Use any photo pack',
    ],
    buttonText: 'Subscribe Now',
  },
  {
    name: 'Ultra',
    monthlyPrice: 90,
    yearlyPrice: 999,
    featuresTop: [
      'Take 10,000 AI Photos (credits)',
      'Create 50 AI Model per month',
      'Flux™ 1.1 photorealistic model',
    ],
    features: [
      'Low quality photos',
      'Low resemblance',
      'Take 1 photo at a time',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
      'Use any photo pack',
    ],
    buttonText: 'Subscribe Now',
  },
];

const displayedPlans = computed(() =>
  plans.map(plan => ({
    ...plan,
    displayedPrice: billingCycle.value === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12),
    description: billingCycle.value === 'monthly'
      ? 'billed monthly\ncancel anytime'
      : `billed annually $${plan.yearlyPrice}\n6+ months free\nper month`,
  })),
);
const swiperRef = ref<SwiperType | null>(null);
watch(isDesktop, (value) => {
  if (value && swiperRef.value) {
    swiperRef.value.slideTo(1);
  }
});
</script>

<template>
  <div>
    <div class="text-center mb-8 sm:mb-16">
      <h2 class="text-2xl sm:text-6xl mb-6 sm:mb-10 text-white font-medium text-center">
        Plans & Pricing
      </h2>
      <div class="flex gap-1 justify-center items-center">
        <button
          class="cursor-pointer px-4 py-2 rounded-xl text-sm sm:text-lg transition-all"
          :class="[
            billingCycle === 'monthly' ? 'bg-white text-black' : 'bg-white/10 text-white',
          ]"
          @click="billingCycle = 'monthly'"
        >
          Monthly
        </button>
        <button
          class="cursor-pointer flex gap-2 px-4 text-sm sm:text-lg py-2 rounded-xl transition-all"
          :class="[
            billingCycle === 'yearly' ? 'bg-white text-black' : 'text-white bg-white/10',
          ]"
          @click="billingCycle = 'yearly'"
        >
          <Image loading="lazy" src="/images/fire-colored.svg" alt="icon-fire" width="24" />
          <span>Yearly: get 6+ months free</span>
        </button>
      </div>
    </div>

    <Swiper
      :modules="[Pagination]"
      :allow-touch-move="!isDesktop"
      :pagination="!isDesktop && { clickable: true }"
      :space-between="24"
      :initial-slide="1"
      centered-slides
      :breakpoints="{
        320: { slidesPerView: 1.2 },
        768: { slidesPerView: 1.1 },
        1024: { slidesPerView: 3 },
      }"
      class="pricing-swiper  !pb-16"
      @swiper="swiperRef = $event"
    >
      <SwiperSlide
        v-for="plan in displayedPlans"
        :key="plan.name"
        class="h-auto md:h-full flex"
      >
        <div
          :class="plan.name === 'Premium' ? 'bg-[#131313] border-none' : 'bg-[#040406]'"
          class="border overflow-hidden border-white/10 rounded-lg py-8 px-4 sm:p-8  lg:px-4 xl:px-8 flex flex-col justify-start relative h-full"
        >
          <Image
            v-if="plan.name === 'Premium'"
            src="/images/pricing-effect.png"
            alt="effect"
            width="260"
            class="absolute bottom-0 right-0 z-0 pointer-events-none select-none"
          />

          <div class="relative z-10 h-full flex flex-col">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-3xl sm:text-4xl font-medium">
                {{ plan.name }}
              </h3>

              <button
                class="cursor-pointer text-xs md:text-base lg:text-sm xl:text-base  border-none flex gap-2 justify-center items-center transition-colors text-white/30 hover:text-white"
                @click="toggleBillingCycle"
              >
                <span>{{ billingCycle === 'monthly' ? 'View Yearly' : 'View Monthly' }}</span>
                <i
                  :class="billingCycle === 'monthly' ? 'pi-arrow-down-left' : 'pi-arrow-up-right'"
                  class="pi !text-xs md:!text-base lg:!text-sm xl:!text-base"
                />
              </button>
            </div>

            <transition name="fade">
              <div v-if="plan.displayedPrice" class="flex justify-start items-center gap-5 mt-12 mb-8">
                <div class="text-6xl sm:text-7xl font-bold">
                  ${{ plan.displayedPrice }}
                </div>
                <div class="text-xs sm:text-base lg:text-xs xl:text-base opacity-70 whitespace-pre-line">
                  {{ plan.description }}
                </div>
              </div>
            </transition>

            <DefaultButton class="mb-3" :text="plan.buttonText" link="/create" />

            <div class="space-y-2 text-left">
              <div v-for="feature in plan.featuresTop" :key="feature" class="flex items-center gap-2">
                <Image src="/images/fire-white.svg" alt="icon-fire" width="24" />
                <span class="text-white text-sm sm:text-lg lg:text-sm xl:text-lg italic font-medium leading-normal">{{ feature }}</span>
              </div>
            </div>

            <div class="mt-6 text-left">
              <h4 class="text-white mb-4 text-2xl font-medium leading-normal">
                Features
              </h4>

              <div
                class="overflow-hidden transition-all duration-500 ease-in-out"
                :class="expandedPlans[plan.name] ? 'max-h-[1000px]' : 'max-h-[320px]'"
              >
                <TransitionGroup tag="ul" name="list" class="space-y-2">
                  <li
                    v-for="(feature, index) in plan.features"
                    v-show="index < 8 || expandedPlans[plan.name]"
                    :key="feature"
                    class="flex text-sm sm:text-lg lg:text-sm xl:text-lg items-center gap-2 opacity-50"
                  >
                    <i class="pi pi-verified" style="font-size:1.5rem; color: #FFFFFF80" />
                    <span>{{ feature }}</span>
                  </li>
                </TransitionGroup>
              </div>

              <button
                v-if="plan.features.length > 8"
                class="cursor-pointer mt-2 text-xs opacity-50 hover:opacity-100 transition-all flex items-center gap-1"
                @click="toggleExpanded(plan.name)"
              >
                <span>{{ expandedPlans[plan.name] ? 'show less' : `${plan.features.length - 8} more` }}</span>
                <span
                  class="transition-transform duration-300"
                  :class="{ 'rotate-180': expandedPlans[plan.name] }"
                >
                  ▼
                </span>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
:deep(.pricing-swiper) {
  .swiper-pagination-bullet {
    background: white;
    opacity: 0.4;
    width:62px;
    border-radius: 10px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  .swiper-slide {
    height: auto;
  }
  .swiper-wrapper {
    align-items: stretch !important;
  }
}
</style>
