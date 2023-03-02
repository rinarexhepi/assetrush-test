<template>
  <div :class="selectedVariant" class="relative z-10">
    <span
      v-if="hasOverlay"
      class=" absolute h-full w-1/2 float-left bg-gradient-to-b from-indigo-600 to-pink-500 opacity-80 z-0 rounded-l-xl"
    ></span>
    <h2 v-if="episodeNumber">Episode {{ episodeNumber }}</h2>
    <h2
      v-if="number"
      class=" text-9xl font-mono semibold font-800 float-left absolute  -left-10 -bottom-60 text-neutral-700 m-3 z-20"
    >
      {{ number }}
    </h2>
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
