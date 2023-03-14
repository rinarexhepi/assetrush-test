<template>
  <Grids gridVariant="standard">
    <StandardLayout>
      <template v-slot:first>
        <div :class="selectedVariant">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col">
              <Headline headingVariant="becomeSubheading">
                {{ subtitle }}
              </Headline>

              <Headline headingVariant="becomeTitle" titleColor="darkPurple">
                {{ title }}
              </Headline>
            </div>
            <div>
              <button @click="toggleBurger()">
                +
              </button>
            </div>
          </div>
          <div class="flex flex-row gap-4" v-show="isActive">
            <div>
              <Headline headingVariant="becomeSubheading">
                Selected innovators can freely present their ideas and share
                their aspirations to an exclusive audience of investors and
                market professionals.
              </Headline>
            </div>
            <div>
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase px-5 py-3 font-semibold"
                text="Enquire"
                alt="play"
                loading="lazy"
              />
            </div>
          </div>
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
  },
  setup(props) {
    const selectedVariant = computed(() => variantClasses[props.variant]);
    const isActive = ref(false);

    function toggleBurger() {
      isActive.value = !isActive.value;
    }
    return { selectedVariant, toggleBurger, isActive };
  },
});
</script>
