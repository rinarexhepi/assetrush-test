<template>
  <Component
    :is="tag"
    class="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-3"
  >
    <div
      class="grid grid-cols-6 transparent-scroll m-0 max-w-full shrink-0 overflow-x-auto sm:overflow-visible"
    >
      <slot name="first"></slot>
    </div>
    <div
      class="grid grid-cols-6 transparent-scroll m-0 max-w-full shrink-0 overflow-x-auto sm:overflow-visible"
    >
      <slot name="second"></slot>
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
