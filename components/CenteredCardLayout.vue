<template>
  <Component
    :is="tag"
    class="grid lg:col-start-4 lg:col-end-9 md:col-start-3 md:col-end-9 col-start-1 col-end-13"
  >
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
