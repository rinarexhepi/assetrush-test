<template>
  <Grids gridVariant="guttersOnly">
    <div :class="selectedVariant">
      <img class="rounded-xl h-full w-full" src="~/assets/img/AR-space.jpeg" />
      <div
        class="absolute top-0 flex flex-col gap-16 h-full w-full p-12 justify-between"
      >
        <div class=" h-full flex-1 flex flex-col gap-8">
          <Headline level="h6" headingVariant="pastEventsDate">
            {{ date }}
          </Headline>
          <Headline level="h4" headingVariant="pastEventsCard">
            {{ shortDescription }}
          </Headline>
        </div>
        <div class="h-full flex-1 pr-2">
          <StrapiButton
            buttonVariant="third"
            class="uppercase h-max w-full lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
            text="Find out more"
            alt="play"
            loading="lazy"
          />
        </div>
      </div>
      <slot :class="variant" /></div
  ></Grids>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import type { PropType } from 'vue'
import { Variant } from "./types";

export default defineComponent({
  props: {
    date: {
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
