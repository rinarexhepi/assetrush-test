<template>
  <div :class="selectedVariant">
    <span v-if="episodeNumber">{{ episodeNumber }}</span>
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
      default: undefined,
    },
    playButton: {
      type: Boolean,
      required: false,
    },
    episodeNumber: {
      type: String as PropType<String>,
      default: undefined,
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
    }

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
