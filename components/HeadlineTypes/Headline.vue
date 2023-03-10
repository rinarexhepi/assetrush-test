<template>
  <Component :is="level" :class="selectedHeadlineVariant">
    <slot></slot>
  </Component>
</template>
<script lang="ts">
import { variantClasses } from "../HeadlineTypes/const";
import { PropType } from "vue";
import { HeadlineVariant } from "~/components/HeadlineTypes/types.ts";
import { LevelsVariant } from "~/components/HeadlineTypes/types.ts";
export default defineComponent({
  props: {
    text: {
      type: String,
      default: "",
    },
    level: {
      type: String as PropType<LevelsVariant>,
      default: "h2",
    },
    headingVariant: {
      type: String as PropType<HeadlineVariant>,
      default: "",
    },
  },
  setup(props) {
    const selectedHeadlineVariant = computed(
      () => variantClasses[props.headingVariant]
    );

    return {
      selectedHeadlineVariant,
    };
  },
});
</script>
