<template>
  <div :class="selectedVariant">
    <template v-if="hasOverlay">
      <span
        class=" absolute h-full w-1/2 float-left bg-gradient-to-b from-indigo-600 to-pink-500 opacity-80 z-0 rounded-l-2xl"
      >
      </span>
    </template>

    <div v-if="number" class="bottom-5 -left-5 absolute z-20 float-right">
      <span
        class="text-outline semibold lg:text-9xl md:text-8xl sm:text-8xl xs:text-9xl xxs:text-8xl"
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
