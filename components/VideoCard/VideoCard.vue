<template>
  <div :class="selectedVariant">
    <img
      class="rounded-xl max-h-full max-w-full"
      src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
    />
    <div
      class="absolute top-0 flex flex-col h-full items-end justify-between over"
    >
      <div class=" h-full flex-1">
        <h3
          class="text-white lg:text-4xl md:text-2xl sm:text-md text-xl font-semibold mx-5 lg:mt-6 md:mt-5 sm:mt-4 mt-4"
        >
          {{ shortDescription }}
        </h3>
      </div>
      <div class="h-full flex-1 pr-2">
        <StrapiButton
          buttonVariant="secondary"
          class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
          text="PLAY"
          :reverse="true"
          :iconBackground="true"
          icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
          alt="play"
          loading="lazy"
          @@click="$emit('openModal')"
        />
      </div>
    </div>
    <div v-if="number" class="bottom-5 -left-6 absolute z-20 float-right">
      <span
        class="text-outline font-gtplanar semibold lg:text-[160px] md:text-9xl sm:text-8xl text-8xl"
      >
        {{ number }}
      </span>
    </div>
    <slot :class="variant" />
  </div>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import type { PropType } from 'vue'
import { Variant } from "~/components/VideoCard/types.ts";

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

  }, setup(props){
        const selectedVariant = computed(
      () => variantClasses[props.variant]
    );
    return {
      selectedVariant,
    };
  }
});
</script>
