<template>
  <div :class="selectedVariant">
    <template v-if="hasOverlay">
      <span
        class=" absolute h-full w-1/2 float-left bg-gradient-to-b from-blue-600 to-pink-500 opacity-80 z-0 rounded-l-2xl"
      >
      </span>
      <div>
        <img
          class="rounded-t-2xl"
          src="https://www.g2fp.com/hubfs/trevor.png"
          alt="image"
          loading="lazy"
        />
      </div>
      <div
        class="m-4 p-4 flex lg:flex-col sm:flex-col-reverse flex-col-reverse"
      >
        <div
          class="flex lg:flex-row md:flex-col sm:flex-col flex-col justify-between "
        >
          <div class="z-20 py-2">
            <h3 class="uppercase text-xl font-semibold mr-6 w-auto">
              Episode {{ episodeNumber }}
            </h3>
            <h3 class="text-white text-2xl">
              {{ author }}
            </h3>
          </div>
          <div class="z-20 flex flex-shrink-0 lg:pt-0 md:py-5 sm:py-4 py-4">
            <StrapiButton
              buttonVariant="secondary"
              class="uppercase px-5 py-3 font-semibold"
              text="PLAY"
              :reverse="true"
              :iconBackground="true"
              icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
              alt="play"
              loading="lazy"
              @click="$emit('openModal')"
            />
          </div>
        </div>
        <div
          class="relative z-20 my-4 lg:h-[150px] md:h-[150px] sm:h-[120px] h-[100px] overflow-scroll"
        >
          <p
            class="lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-white font-serif font-semibold "
          >
            {{ shortDescription }}
          </p>
        </div>
      </div>
    </template>
    <slot :class="variant" />
  </div>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import type { PropType } from 'vue'
import { Variant } from "./types";

export default defineComponent({
  props: {
    number: {
      type: String,
      required: false
    },
    title: {
      type: String,
      default: "",
    },
    posterImage: {
      type: Object as PropType<String>,
      default: undefined,
    },
    playButton: {
      type: Boolean,
      required: false,
    },
    episodeNumber: {
      type: String as PropType<String>,
      default: undefined,
    },
    author: {
      type: String,
      default: "",
    },
    shortDescription: {
      type: String,
      default: "",
    },
    variant: {
      type: String as PropType<Variant>,
      default: "",
    },
    hasOverlay: { type: Boolean, default: false },

  },
  setup(props){
    const selectedVariant = computed(
        () => variantClasses[props.variant]
    );
    return {
        selectedVariant,

    };
  }
});
</script>
