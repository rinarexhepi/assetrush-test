<template>
  <div
    class="grid grid-responsive"
    :class="selectedGridVariant"
    v-if="gridVariant"
  >
    <slot :variant="gridVariant"></slot>
  </div>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import { PropType } from "vue";
import { GridVariant } from "~/components/Grids/types.ts";
export default {
  props: {
    gridVariant: {
      type: String as PropType<GridVariant>,
      default: "",
    },
  },
  setup(props) {
    const selectedGridVariant = computed(
      () => variantClasses[props.gridVariant]
    );

    return {
      selectedGridVariant,
    };
  },
};
</script>
