<template>
  <Grids gridVariant="guttersOnly">
    <div :class="selectedVariant">
      <div class="relative flex-1 w-full h-full">
        <span
          class="absolute before:w-full before:h-full before:bg-cyan-900  before:bg-opacity-70 flex hover:hidden z-50"
        ></span>
        <img
          class="rounded-xl max-h-[250px] w-full"
          src="~/assets/img/banking.jpeg"
          alt="image"
          loading="lazy"
        />
      </div>
      <div
        class="p-1 flex flex-col flex-1 justify-between gap-7 relative m-6 lg:h-[150px] md:h-[150px] sm:h-[120px] h-[100px]"
      >
        <div v-if="buttonLabel">
          <div class="flex flex-row flex-wrap ">
            <a
              class="text-slate-400 border-2 w-max border-slate-400 rounded-full px-3 mx-1 my-1"
              v-for="label in buttonLabel"
              :href="label.value"
              target="_blank"
            >
              {{ label.text }}
            </a>
          </div>
        </div>
        <p class="lg:text-3xl text-2xl text-white font-semibold ">
          {{ shortDescription }}
        </p>
        <span class="text-gray-300 font-gtplanar font-2xl">
          {{ date }}
        </span>
      </div>
      <slot :class="variant" />
    </div>
  </Grids>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import { PropType } from "vue";
import { Variant } from "./types";

interface Labels {
  text: String;
  value: string;
}

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
    date: {
      type: String,
      default: "",
    },
    buttonLabel: {
      type: Array as PropType<Labels[]>,
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
  },
  setup(props) {
    const selectedVariant = computed(() => variantClasses[props.variant]);

    return {
      selectedVariant,
    };
  },

  created() {
    console.log(this.buttonLabel);
  },
});
</script>
