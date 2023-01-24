export default {
    buildModules: [
      'nuxt-vite',
      '@nuxt/postcss8',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    css: [
      '@/assets/css/main.css',
    ],
  }
