<script setup lang="ts">
import { onMounted, onUnmounted,watch, ref } from 'vue';

const isMobileMenuOpen = ref(false);
const hasScrolled = ref(false);

const navLinks = [
  { label: 'Pricing', href: '#' },
  { label: 'Billing', href: '#' },
  { label: 'Gallery', href: '#' },
];

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMenu() {
  isMobileMenuOpen.value = false;
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

function onScroll() {
  hasScrolled.value = window.scrollY !== 0;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('keydown', handleKeydown);
  onScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('keydown', handleKeydown);
});

</script>

<template>
<header
  :class="[
    'fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex w-full justify-between items-center transition-all duration-300',
    hasScrolled ? 'bg-black/30 backdrop-blur shadow-md' : 'bg-transparent'
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
      <Button
        v-slot="slotProps"
        as-child
        class="min-w-48"
        severity="contrast"
        rounded
        variant="outlined"
      >
        <RouterLink to="/pricing" :class="slotProps.class">
          Create Perfect Shot
        </RouterLink>
      </Button>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden text-white"
      aria-label="Open mobile menu"
      @click="toggleMenu"
    >
      <i class="pi pi-align-justify" style="font-size: 2rem" />
    </button>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl"
      >
        <button
          class="absolute top-6 right-6 text-white"
          aria-label="Close mobile menu"
          @click="closeMenu"
        >
          <i class="pi pi-times" style="font-size: 2rem" />
        </button>

        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="link-underline"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>

        <Button
          v-slot="slotProps"
          as-child
          class="min-w-48"
          severity="contrast"
          rounded
          variant="outlined"
        >
          <RouterLink to="/pricing" :class="slotProps.class">
            Create Perfect Shot
          </RouterLink>
        </Button>
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
