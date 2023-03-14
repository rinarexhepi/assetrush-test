<template>
  <Grids gridVariant="centered">
    <CenteredLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <div class="m-4 p-4 flex lg:flex-col flex-col-reverse">
            <div class="flex flex-col gap-6 items-center">
              <div>
                <Headline headingVariant="subheading">
                  {{ subtitle }}
                </Headline>
                <Headline headingVariant="heading">
                  {{ title }}
                </Headline>
              </div>
              <div>
                <img
                  class="rounded-full flex shrink-0"
                  src="~/assets/img/elonmusk.jpeg"
                  alt=""
                />
              </div>
              <p
                class="lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-white flex font-semibold "
              >
                {{ shortDescription }}
              </p>
            </div>
          </div>
          <slot :class="variant" />
        </div>
      </template>
    </CenteredLayout>
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
