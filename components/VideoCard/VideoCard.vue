<template>
  <div :class="selectedVariant" class="relative">
    <h2 v-if="episodeNumber">Episode {{ episodeNumber }}</h2>
    <h2 v-if="number" class="text-2xl text-white m-3">{{ number }}</h2>
    <div
      v-if="hasOverlay"
      class="w-1/2 float-left absolute bg-gradient-to-b from-indigo-500 to-fuchsia-900"
    ></div>
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
