<template>
  <Component :is="tag" class="grid col-start-3 col-end-11">
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
