<script setup lang="ts">
import type { components } from '@/shared/lib/photo-api';
import { getPacks } from '@/shared/lib/api';
import { DefaultButton } from '@/widgets/button';
import ImageCard from './ImageCard.vue';

type PromptPackWithCovers = components['schemas']['PromptPack'] & {
  covers: string[];
};
const packs = ref<components['schemas']['PromptPack'][]>([]);
const isLoading = ref(true);

onMounted(async () => {
  packs.value = await getPacks();
  isLoading.value = false;
});

const validPacks = computed(() => {
  return packs.value.filter(
    (p): p is PromptPackWithCovers =>
      Array.isArray(p.covers) && p.covers.length > 0 && p.covers.every(c => typeof c === 'string'),
  );
});

function alternatingHeights(index: number) {
  const isEvenColumn = Math.floor(index / 2) % 2 === 0;
  const isTop = index % 2 === 0;

  return isEvenColumn
    ? (isTop ? 'h-[267px] md:h-[400px]' : 'h-[317px] md:h-[500px]')
    : (isTop ? 'h-[317px] md:h-[500px]' : 'h-[267px] md:h-[400px]');
}

type Section =
  | { type: 'two-columns'; left: PromptPackWithCovers[]; right: PromptPackWithCovers[] }
  | { type: 'single-and-four'; solo: PromptPackWithCovers; four: PromptPackWithCovers[] };

const sections = computed<Section[]>(() => {
  const result: Section[] = [];
  const items = [...validPacks.value];

  let sectionType: 'two-columns' | 'single-and-four' = 'two-columns';

  while (items.length > 0) {
    if (sectionType === 'two-columns') {
      if (items.length >= 8) {
        // 2 columns of 4
        result.push({
          type: 'two-columns',
          left: items.splice(0, 4),
          right: items.splice(0, 4),
        });
      } else {
      // If there are less than 8 elements left, don't output them to the section
        break; // Break the loop, since the remainder is too small for the section
      }
      sectionType = 'single-and-four';
    } else if (sectionType === 'single-and-four') {
      if (items.length >= 5) {
        // 1 large + 4 tiles
        result.push({
          type: 'single-and-four',
          solo: items.splice(0, 1)[0],
          four: items.splice(0, 4),
        });
      } else {
        // If there are less than 5 elements, do not print the remainder
        break; // Break the loop, since the remainder of less than 5 elements is ignored
      }
      sectionType = 'two-columns';
    }
  }
  return result;
});
</script>

<template>
  <section v-if="!isLoading" id="gallery">
    <div class="px-3 flex flex-col gap-10 justify-center items-center mb-9 md:mb-20">
      <div class="flex flex-col gap-6 justify-center items-center">
        <h1 class="text-2xl sm:text-6xl text-white font-medium text-center">
          Pick from 70+ photo packs
        </h1>
        <h3 class="text-base max-w-[660px] text-white font-medium text-center leading-[22px] opacity-80">
          With Photo AI's preset photo packs, you don't need to do any of the hard work of writing prompts or setting parameters. Instead, with just one click, Photo AI takes a set of photos for you and we keep adding new photo packs regularly.
        </h3>
      </div>
    </div>
    <div
      v-for="(section, i) in sections"
      :key="i"
    >
      <div
        v-if="section.type === 'two-columns'"
        class="flex flex-col lg:flex-row w-full items-stretch justify-between gap-4"
      >
        <div class="columns-2 w-full lg:w-1/2 gap-4 bg-black text-white">
          <RouterLink
            v-for="(item, index) in section.left"
            :key="`l${index}`"
            :to="`/pack/${item.name}`"
          >
            <ImageCard
              :item="item"
              :height-class="alternatingHeights(index)"
            />
          </RouterLink>
        </div>
        <div class="columns-2 w-full lg:w-1/2 gap-4 bg-black text-white">
          <RouterLink
            v-for="(item, index) in section.right"
            :key="`r${index}`"
            :to="`/pack/${item.name}`"
          >
            <ImageCard
              :item="item"
              :height-class="alternatingHeights(index)"
            />
          </RouterLink>
        </div>
      </div>

      <div
        v-else-if="section.type === 'single-and-four'"
        class="flex flex-col lg:flex-row w-full items-stretch justify-between gap-x-4"
      >
        <div class="columns-1 w-full lg:w-1/2 bg-black text-white">
          <RouterLink
            :to="`/pack/${section.solo.name}`"
          >
            <ImageCard :item="section.solo" height-class="h-[440px] md:h-[1064px] object-top md:object-cover" />
          </RouterLink>
        </div>
        <div class="columns-2 w-full lg:w-1/2 gap-4 bg-black text-white">
          <RouterLink
            v-for="(item, index) in section.four"
            :key="index"
            :to="`/pack/${item.name}`"
          >
            <ImageCard
              :item="item"
              :height-class="alternatingHeights(index)"
              :no-margin="index === 1 || index === 3"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
