<template>
  <Grids gridVariant="centered">
    <StandardLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <span
            class="absolute h-full w-1/2 hover:w-1/3 hover:ease-in duration-300 float-left bg-gradient-to-b from-blue-700 to-pink-600 opacity-80 z-0 rounded-l-2xl"
          >
          </span>
          <div class="flex flex-col">
            <div class="absolute flex flex-col lg:gap-8 p-8 h-full">
              <div class="flex">
                <p
                  class="lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-white font-serif font-semibold"
                >
                  {{ shortDescription }}
                </p>
              </div>
              <div class="flex flex-col w-full h-full">
                <img
                  src="~/assets/img/ArLogo.png"
                  alt="business icon"
                  class="w-[30px]"
                />
                <Headline level="h4" headingVariant="subtitles">
                  {{ author }}
                </Headline>
                <Headline level="h4" headingVariant="subtitles">
                  {{ info }}
                </Headline>
                <img
                  src="~/assets/img/icon-social--linkedin.png"
                  alt="linkedin"
                  class="w-[20px]"
                />
              </div>
              <div class="flex w-full h-max">
                <StrapiButton
                  text="more info"
                  buttonVariant="third"
                  class="font-semibold py-2 px-3 hover:bg-blue-700 hover:text-white duration-300 ease-in-out"
                />
              </div>
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
