<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: 'AI categories',
    links: [
      { text: 'Sexy Valentines', href: '#' },
      { text: 'Tinder', href: '#' },
      { text: 'AI Dating', href: '#' },
      { text: 'Sexy Valentines', href: '#' },
      { text: 'Tinder', href: '#' },
      { text: 'AI Dating', href: '#' },
    ],
  },
  {
    title: 'Billing',
    links: [
      { text: 'Sexy Valentines', href: '#' },
      { text: 'Tinder', href: '#' },
      { text: 'AI Dating', href: '#' },
    ],
  },
  {
    title: 'Gallery',
    links: [
      { text: 'Sexy Valentines', href: '#' },
      { text: 'Tinder', href: '#' },
    ],
  },
];
</script>

<template>
  <footer class="flex-col md:flex-row flex w-full justify-between items-start container mx-auto gap-20 py-15 px-3">
    <div class="flex flex-col w-full md:w-1/3 justify-start items-start gap-8 order-2 md:order-1">
      <RouterLink to="/">
        <Image src="/images/logo.svg" class="opacity-50" alt="logo" width="150" loading="lazy" />
      </RouterLink>
      <div class="max-w-92 opacity-50 font-medium text-white text-base">
        Headshot AI is a registered trademark.©2025. Terms of Service and Privacy Policy
      </div>
    </div>
    <div class="flex justify-between flex-wrap md:flex-nowrap gap-y-9 md:gap-2 items-start w-full md:w-3/5 order-1 md:order-2">
      <div v-for="(section, index) in footerLinks" :key="index" class="flex flex-col gap-5 items-start justify-start text-left w-1/2 md:w-1/3">
        <h3 class="font-medium text-white text-base">
          {{ section.title }}
        </h3>
        <ul class="pl-2 border-l-2 border-solid border-white/50 flex flex-col gap-2 items-start justify-start text-left text-white/50">
          <li v-for="(link, i) in section.links" :key="i">
            <a :href="link.href" class="hover:text-white transition-colors duration-200">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
