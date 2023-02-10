<template>
  <div class="grid grid-responsive" :class="selectGridVariant">
    <slot />
  </div>
</template>

<script lang="ts">
import { variantClasses } from "./const";
import { PropType } from "vue";
import { GridVariant } from "~/components/Grids/types.js";
export default {
  props: {
    gridVariant: {
      type: String as PropType<GridVariant>,
      default: "",
    },
  },
  setup(props) {
    const selectGridVariant = computed(() => variantClasses[props.gridVariant]);

    return {
      variantClasses,
      selectGridVariant,
    };
  },
};
</script>
