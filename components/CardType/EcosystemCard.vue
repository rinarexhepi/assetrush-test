<template>
  <Grids gridVariant="centered">
    <CenteredLayout>
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
              :reverse="true"
              :iconBackground="true"
              icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
              alt="play"
              loading="lazy"
              @click="$emit('openModal')"
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
