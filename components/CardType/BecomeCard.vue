<template>
  <Grids gridVariant="standard">
    <StandardSmallLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col p-2">
              <Headline headingVariant="becomeSubheading">
                {{ subtitle }}
              </Headline>

              <Headline headingVariant="becomeTitle">
                {{ title }}
              </Headline>
            </div>
            <div>
              <button @click="toggleBurger()">
                <span
                  v-if="isActive"
                  class="text-6xl font-thin text-indigo-900 "
                >
                  +
                </span>
                <span v-else class="text-6xl font-thin text-indigo-900">
                  -
                </span>
              </button>
            </div>
          </div>
          <div class="flex lg:flex-row flex-col gap-4 " v-show="isActive">
            <div class="pr-12">
              <Headline headingVariant="becomeSubheading">
                Selected innovators can freely present their ideas and share
                their aspirations to an exclusive audience of investors and
                market professionals.
              </Headline>
            </div>
            <StrapiButton
              buttonVariant="secondary"
              class="uppercase px-5 py-3 font-semibold"
              text="Enquire"
              alt="play"
              loading="lazy"
              url="https://share.hsforms.com/1WlnP5KHRSlmZM4xLgev0Vg3prjk"
            />
          </div>
        </div>
      </template>
    </StandardSmallLayout>
  </Grids>
</template>
<script lang="ts">
import { variantClasses, colorClasses } from "./const";
import { PropType } from "vue";
import { Variant, Color } from "./types";
export default defineComponent({
  props: {
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      default: "",
    },
    variant: {
      type: String as PropType<Variant>,
      default: "",
    },
    titleColor: {
      type: String as PropType<Color>,
      default: "",
    },
  },
  setup(props) {
    const selectedVariant = computed(() => variantClasses[props.variant]);
    const selectedColor = computed(() => colorClasses[props.titleColor]);
    const isActive = ref(false);

    function toggleBurger() {
      isActive.value = !isActive.value;
    }
    return { selectedVariant, toggleBurger, isActive, selectedColor };
  },
});
</script>
