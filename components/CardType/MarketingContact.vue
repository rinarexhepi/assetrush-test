<template>
  <Grids gridVariant="centered">
    <CenteredLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <span
            class="absolute h-full w-1/2 float-left bg-gradient-to-b from-blue-600 to-pink-500 opacity-80 z-0 rounded-l-2xl"
          >
          </span>
          <img
            class="rounded-2xl h-full object-cover"
            src="https://www.g2fp.com/hubfs/trevor.png"
            alt="image"
            loading="lazy"
          />
          <div class=" flex flex-row justify-between z-20 py-2 px-12">
            <Headline
              heading-variant="subtitles"
              class="text-white text-2xl z-30"
            >
              {{ text }}
            </Headline>
            <StrapiButton
              buttonVariant="secondary"
              class="uppercase px-5 py-3 font-semibold w-max h-max"
              text="contact"
              loading="lazy"
            />
          </div>
          <slot :class="variant" />
        </div>
      </template>
    </CenteredLayout>
  </Grids>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import { PropType } from "vue";
import { Variant } from "./types";

export default defineComponent({
  props: {
    posterImage: {
      type: Object as PropType<String>,
      default: undefined,
    },
    playButton: {
      type: Boolean,
      required: false,
    },
    text: {
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
