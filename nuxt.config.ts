export default {
  target: "static",
  buildModules: ["nuxt-vite", "@nuxt/postcss8", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/strapi"],
  strapi: {
    url: "http://localhost:1337",
  },
  image: {
    // Options
  },
  components: { dirs: ["~~/components"] },
  build: {
    vendor: ["vue-vimeo-player"],
  },
};
