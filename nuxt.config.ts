import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '@': '~/src',
  },
  dir: {
    layouts: 'src/layouts',
    pages: 'src/pages',
  },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  modules: [
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'https://api.photoai.artlogo.co',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  },
  routeRules: {
    '/create': { redirect: 'https://photoai.artlogo.co/' },
    '/pricing': { redirect: '/#pricing' },
  },
});
