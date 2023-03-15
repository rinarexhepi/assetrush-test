<template>
  <Component
    :is="tag"
    class="grid xl:col-start-5 xl:col-end lg:col-start-4 lg:col-end-8  col-start-3 col-end-11"
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
