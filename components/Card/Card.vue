<template>
  <div
    :class="baseClass"
    class="shadow-lg backdrop-blur-lg overflow-hidden relative z-10 w-fit rounded-xl px-16 py-10 gap-3 flex flex-col text-center items-center"
  >
    <div
      class="bg-gradient-to-b from-purple-900 to-pink-500 absolute top-0 left-0 w-full h-full opacity-70 -z-10"
    ></div>
    <div class="font-gtplanar">
      <p class="text-6xl">AssetRush</p>
      <h2 class="text-8xl uppercase font-bold">Talk</h2>
    </div>
    <div class="rounded-full overflow-hidden w-max border-8 border-pink-600">
      <img
        width="160"
        class="object-cover aspect-square"
        src="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/29d2655f-9eba-45cf-901d-4c5d4269ab3b/FI3A2452+%283%29.jpg?format=2500w"
      />
    </div>
    <p class="font-gtplanar text-xl w-2/3">Meet the innovators and pioneers</p>
  </div>
</template>

<script lang="ts">
const baseClass = "ar-card";

export default defineComponent({
  setup() {
    return {
      baseClass,
    };
  },
});
</script>
