<template>
  <Component :is="tag" class="grid col-start-2 col-end-12 bg-red-200">
    <div
      class="transparent-scroll m-0 max-w-full shrink-0 overflow-x-auto sm:overflow-visible"
    >
      <slot name="first"></slot>
    </div>
  </Component>
</template>
<script lang="ts">
export default {
  props: {
    tag: { type: String, default: "div" },
  },
};
</script>
