<template>
  <div :class="selectedVariant">
    <img
      class="h-[300px] w-full object-cover"
      src="~/assets/img/join-ecosystem.jpeg"
    />
    <div
      class="absolute top-0 flex flex-col justify-center gap-6 items-left w-max p-8"
    >
      <Headline level="h2" headingVariant="ecosystem">
        {{ title }}
      </Headline>
      <Headline level="h4" headingVariant="subtitles">
        {{ shortDescription }}
      </Headline>

      <StrapiButton
        buttonVariant="third"
        class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6 w-max"
        text="Find Out More"
        loading="lazy"
        @click="$emit('openModal')"
      />
    </div>
    <slot :class="variant" />
  </div>
</template>
<script lang="ts">
import { variantClasses } from "./const.js";
import { PropType } from "vue";
import { Variant } from "./types.js";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    headline: {
      type: String,
      required: true,
    },
    posterImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      required: false,
    },
    shortDescription: {
      type: String,
      required: true,
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
