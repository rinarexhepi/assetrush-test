<template>
  <Grids gridVariant="halfAndHalf">
    <FlexLayoutTwoItems>
      <template v-slot:first>
        <div :class="selectedVariant" class="relative">
          <img class="rounded-xl" src="~/assets/img/join-ecosystem.jpeg" />
          <div
            class="absolute top-0 flex flex-col justify-center gap-6 h-full w-full items-center"
          >
            <Headline level="h4" headingVariant="subtitles">
              {{ shortDescription }}
            </Headline>

            <Headline level="h2" headingVariant="ecosystem">
              {{ title }}
            </Headline>

            <StrapiButton
              buttonVariant="secondary"
              class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
              text="view"
              alt="play"
              loading="lazy"
              @click="$emit('openModal')"
            />
          </div>
          <slot :class="variant" />
        </div>
      </template>
    </FlexLayoutTwoItems>
    <FlexLayoutTwoItems>
      <template v-slot:first>
        <div :class="selectedVariant" class="relative">
          <img class="rounded-xl" src="~/assets/img/join-ecosystem.jpeg" />
          <div
            class="absolute top-0 flex flex-col justify-center gap-6 h-full w-full items-center"
          >
            <Headline level="h4" headingVariant="subtitles">
              {{ shortDescription }}
            </Headline>

            <Headline level="h2" headingVariant="ecosystem">
              {{ title }}
            </Headline>

            <StrapiButton
              buttonVariant="secondary"
              class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
              text="join"
              alt="play"
              loading="lazy"
              @click="$emit('openModal')"
            />
          </div>
          <slot :class="variant" />
        </div>
      </template>
    </FlexLayoutTwoItems>
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
    posterImage: {
      type: Object as PropType<String>,
      default: undefined,
    },
    playButton: {
      type: Boolean,
      required: false,
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
