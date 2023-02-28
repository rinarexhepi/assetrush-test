<template>
  <div :class="selectedVariant">
    <slot :class="variant" />
  </div>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import type { PropType } from 'vue'
import { Variant } from "~/components/VideoCard/types.ts";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    posterImage: {
      type: Object as PropType<String>,
      required: false,
    },
    playButton: {
      type: Boolean,
      required: true,
    },
    episodeNumber: {
      type: Number as PropType<Number>,
      default: "",
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
