<template>
  <Header />
  <slot />
  <Footer />
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    onMounted(() => {
      document.body.style.backgroundColor = "transparent";
    });
  },
});
</script>
