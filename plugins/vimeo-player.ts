// @ts-expect-error Could not find a declaration file for module 'vue-vimeo-player'
import VueVimeoPlayer from "vue-vimeo-player";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueVimeoPlayer);
});
