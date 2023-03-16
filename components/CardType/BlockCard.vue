<template>
  <Grids gridVariant="centered">
    <StandardLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <span
            class="absolute h-full w-1/2 hover:w-1/3 transition duration-300 ease-in-out float-left bg-gradient-to-b from-blue-600 to-pink-500 opacity-80 z-10 rounded-l-2xl"
          >
          </span>
          <div class=" w-full">
            <img
              class="rounded-2xl h-full w-full object-cover z-0"
              src="https://www.g2fp.com/hubfs/trevor.png"
              alt="image"
              loading="lazy"
            />
          </div>
        </div>
        <slot :class="variant" />
      </template>
    </StandardLayout>
  </Grids>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import { PropType } from "vue";
import { Variant } from "./types";

export default defineComponent({
  props: {
    number: {
      type: String,
      required: false,
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
  setup(props) {
    const selectedVariant = computed(() => variantClasses[props.variant]);
    return {
      selectedVariant,
    };
  },
});
</script>
