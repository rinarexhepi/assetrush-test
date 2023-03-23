<template>
  <div
    :class="{ baseClass, 'pb-32 pt-56': !card, 'pt-36 pb-8': card }"
    class="text-white relative overflow-hidden"
  >
    <img
      v-if="image"
      :src="image"
      class="object-cover w-full h-full absolute top-0 left-0"
    />
    <!-- <video v-if="!image && video" autoplay muted loop class="object-cover w-full h-full absolute top-0 left-0">
            <source :src="video" type="video/mp4"/>
        </video> -->
    <Card v-if="card" class="mx-auto" />
    <div
      v-if="overlay"
      class="bg-black bg-opacity-40 absolute top-0 left-0 w-full h-full"
    ></div>
    <div
      v-if="!card"
      class="flex flex-col gap-4 text-center relative z-10 bg-transparent items-center"
    >
      <p class="mb-0 font-gtplanar text-xl">{{ subtitle }}</p>
      <h1 class="text-7xl font-gtplanar font-bold mb-4">{{ title }}</h1>
      <button class="rounded-full bg-primary w-max px-6 py-4 text-xl">
        {{ cta.text }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

const baseClass = 'ar-hero'

interface CTA {
    text: string;
    url: string;
}

export default defineComponent({
    props: {
        image: { type: String, default: 'https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/6510e000-fb89-4989-a823-a017510a7c8b/hero-talk.jpg?format=original'},
        video: { type: String, default: 'https://www.w3schools.com/howto/rain.mp4'},
        title: { type: String, default: 'The next chapter' },
        subtitle: { type: String, default: 'Creating the future of finance' },
        cta: { type: Object as PropType<CTA>, default: { text: 'Intro', url: '/' }},
        description: { type: String, required: false },
        overlay: {  type: Boolean, default: true},
        card: {type: Boolean, default: false}
    },
    setup() {
        return {
            baseClass
        }
    }
});
</script>
