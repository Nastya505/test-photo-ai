<script setup lang="ts">
import { questions } from '@/shared/data/faq';
import { ref } from 'vue';

defineProps<{
  sectionTitle: string;
  imageSrc: string;
}>();

const activePanels = ref<string[]>(['0']);
</script>

<template>
  <div class="flex flex-col md:flex-row w justify-between items-start gap-8">
    <div class="card w-full max-w-[700px]">
      <h2 class="text-2xl sm:text-6xl text-center sm:text-left font-medium mb-6 sm:mb-10">
        {{ sectionTitle }}
      </h2>
      <Accordion v-model="activePanels" multiple>
        <AccordionPanel v-for="(q, idx) in questions" :key="idx" :value="String(idx)">
          <AccordionHeader>{{ q.title }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ q.content }}
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
    <div class="hidden md:block overflow-hidden rounded-lg max-w-[700px]">
      <Image
        loading="lazy"
        :src="imageSrc" alt="Photo FAQ" class="w-full h-auto object-cover"
      />
    </div>
  </div>
</template>

<style scoped>
.card{
  :deep(.p-accordionheader),
  :deep(.p-accordioncontent),
  :deep(.p-accordioncontent-content),
  :deep(.p-accordionpanel)  {
    background: none;
  }
}
</style>
