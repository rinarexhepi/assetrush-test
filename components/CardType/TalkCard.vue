<template>
  <Grids gridVariant="standard">
    <StandardLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <template v-if="hasOverlay">
            <div class="p-4 flex lg:flex-col flex-1">
              <div class="flex flex-col justify-between lg:gap-4">
                <div class="z-20 py-4 flex flex-col lg:gap-4">
                  <h3 class="uppercase text-xl  text-white">
                    Episode {{ episodeNumber }}
                  </h3>
                  <h3 class="text-white text-2xl">
                    {{ author }}
                  </h3>
                  <p
                    class="lg:text-4xl text-2xl text-white font-serif font-semibold "
                  >
                    {{ shortDescription }}
                  </p>
                </div>
                <div class="z-20 flex flex-shrink-0 ">
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
            </div>
            <div class="relative float-right lg:w-1/2 h-full flex-1">
              <span
                class="absolute h-full w-1/2 float-left bg-gradient-to-b from-blue-600 to-pink-500 opacity-80 z-0 rounded-l-2xl"
              >
              </span>
              <div class="h-full w-full">
                <img
                  class="rounded-2xl h-full w-full object-cover"
                  src="https://www.g2fp.com/hubfs/trevor.png"
                  alt="image"
                  loading="lazy"
                />
              </div>
            </div>
          </template>
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
