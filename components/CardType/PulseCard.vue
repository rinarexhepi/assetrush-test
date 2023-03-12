<template>
  <div :class="selectedVariant">
    <img
      class="rounded-xl"
      src="~/assets/img/banking.jpeg"
      alt="image"
      loading="lazy"
    />
    <div
      class="p-4 flex flex-col justify-between gap-7 relative m-6 lg:h-[150px] md:h-[150px] sm:h-[120px] h-[100px]"
    >
      <p class="lg:text-3xl text-2xl text-white font-semibold ">
        {{ shortDescription }}
      </p>
      <span class="text-gray-300 font-gtplanar font-2xl">
        {{ date }}
      </span>
    </div>
    <slot :class="variant" />
  </div>
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
  },
  setup(props) {
    const selectedVariant = computed(() => variantClasses[props.variant]);
    return {
      selectedVariant,
    };
  },
});
</script>
