<template>
  <Grids gridVariant="centered">
    <StandardLayout>
      <template v-slot:first>
        <div :class="selectedVariant" class="h-full">
          <span
            class=" absolute h-full w-1/2 hover:w-1/3 float-left bg-gradient-to-b from-blue-600 to-pink-500 opacity-80 z-0 rounded-l-2xl"
          >
          </span>
          <div class="h-full">
            <div class="absolute">
              <p
                class="lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-white font-serif font-semibold"
              >
                {{ shortDescription }}
              </p>
              <img src="" alt="business icon" />
              <Headline level="h4" headingVariant="subtitles">
                {{ author }}
              </Headline>
              <Headline level="h4" headingVariant="subtitles">
                {{ info }}
              </Headline>
            </div>
            <div class="h-full w-full">
              <img
                class="rounded-2xl h-full lg:w-[1350px] object-cover"
                src="https://www.g2fp.com/hubfs/trevor.png"
                alt="image"
                loading="lazy"
              />
            </div>
          </div>
          <slot :class="variant" />
        </div>
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
    title: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    info: {
      type: String,
      default: "",
    },
    posterImage: {
      type: Object as PropType<String>,
      default: undefined,
    },
    infoButton: {
      type: Boolean,
      required: false,
    },
    icon: {
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
  },
  setup(props) {
    const selectedVariant = computed(() => variantClasses[props.variant]);
    return {
      selectedVariant,
    };
  },
});
</script>
