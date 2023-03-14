<template>
  <Component
    :is="level"
    :class="selectedHeadlineVariant"
    :titleColor="selectedColor"
  >
    <slot></slot>
  </Component>
</template>
<script lang="ts">
import { variantClasses, colorClasses } from "../HeadlineTypes/const";
import { PropType } from "vue";
import {
  HeadlineVariant,
  LevelsVariant,
  Color,
} from "~/components/HeadlineTypes/types.ts";
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
    titleColor: {
      type: String as PropType<Color>,
      default: "",
    },
  },
  setup(props) {
    const selectedColor = computed(() => colorClasses[props.titleColor]);
    const selectedHeadlineVariant = computed(
      () => variantClasses[props.headingVariant]
    );

    return {
      selectedHeadlineVariant,
      selectedColor,
    };
  },
});
</script>
