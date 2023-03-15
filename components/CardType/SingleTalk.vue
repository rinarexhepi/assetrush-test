<template>
  <Grids gridVariant="standard">
    <CenteredCardLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <div class="m-4 p-4 flex lg:flex-col flex-col-reverse">
            <div class="flex flex-col gap-4 items-center">
              <div class="flex flex-col items-center gap-2">
                <Headline headingVariant="talkHeading">
                  {{ subtitle }}
                </Headline>
                <Headline headingVariant="talkSubheading">
                  {{ title }}
                </Headline>
                <img
                  class="rounded-full w-full h-full border-8 border-rounded-full border-pink-800 flex shrink-0"
                  src="~/assets/img/elonmusk.jpeg"
                  alt="profile"
                />
                <p
                  class="lg:text-2xl md:text-2xl sm:text-2xl text-xl w-full text-center text-white font-gtplanar flex font-normal pt-2"
                >
                  {{ shortDescription }}
                </p>
              </div>
            </div>
          </div>
          <slot :class="variant" />
        </div>
      </template>
    </CenteredCardLayout>
  </Grids>
</template>

<script lang="ts">
import { variantClasses } from "./const.js";
import { PropType } from "vue";
import { Variant } from "./types.js";

export default defineComponent({
  props: {
    subtitle: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      default: "",
    },
    profileImage: {
      type: Object as PropType<String>,
      default: undefined,
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
