<script setup lang="ts">
import { DefaultButton } from '@/widgets/button';
import { useWindowScroll } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const isMobileMenuOpen = ref(false);
const { y } = useWindowScroll();
const hasScrolled = computed(() => y.value > 0);

const navLinks = [
  { label: 'Pricing', href: '#' },
  { label: 'Billing', href: '#' },
  { label: 'Gallery', href: '#' },
];

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.classList.toggle('overflow-hidden', isMobileMenuOpen.value);
}

function closeMenu() {
  isMobileMenuOpen.value = false;
  document.body.classList.remove('overflow-hidden');
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.classList.remove('overflow-hidden');
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex w-full justify-between items-center transition-all duration-300"
    :class="[
      hasScrolled ? 'bg-black/30 backdrop-blur shadow-md' : 'bg-transparent',
    ]"
  >
    <!-- Logo -->
    <Image src="/images/logo.svg" alt="logo" width="150" />

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex justify-end items-center gap-8">
      <div class="flex gap-6 items-center">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="link-underline text-white"
        >
          {{ link.label }}
        </a>
      </div>
      <DefaultButton text="Create Perfect Shot" link="/pricing" variant="outlined" />
    </nav>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden text-white"
      aria-label="Open mobile menu"
      @click="toggleMenu"
    >
      <i class="pi pi-align-justify" style="font-size: 3rem" />
    </button>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 h-screen bg-black text-white flex flex-col gap-16 py-20 px-8 items-start justify-start text-2xl"
      >
        <button
          class="absolute top-6 right-6 text-white z-50"
          aria-label="Close mobile menu"
          @click="closeMenu"
        >
          <i class="pi pi-times" style="font-size: 3rem" />
        </button>

        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="link-underline z-50 scale-125"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>

        <DefaultButton class="z-50 scale-150 ml-8" text="Create Perfect Shot" link="/pricing" variant="outlined" />
        <Image class="absolute -bottom-64 right-0 z-40" src="/images/menu-effect.png" alt="logo" width="770" />
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.link-underline {
  position: relative;
}
.link-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}
.link-underline:hover::after,
.link-underline:active::after {
  width: 100%;
}
</style>
