<template>
  <div
    class="fixed w-full backdrop-blur-lg py-6 flex lg:flex-row md:flex-row justify-around items-center z-50"
  >
    <div class="lg:hidden md:hidden sm:flex">
      <button class="" @click="toggleBurger()">
        <div class="space-y-2">
          <div class="w-4 h-0.5 bg-pink-600"></div>
          <div class="w-8 h-0.5 bg-pink-600"></div>
          <div class="float-right w-4 h-0.5 bg-pink-600"></div>
        </div>
      </button>
    </div>
    <div class="sm:flex">
      <img src="~/assets/img/ArLogo.png" alt="" />
    </div>
    <div class="flex lg:flex-row justify-around" v-show="!isActive">
      <StrapiButton
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="events"
      />

      <StrapiButton
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="talk"
      />

      <StrapiButton
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="join"
      />

      <StrapiButton
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="linkedin"
      />
    </div>
  </div>
  <div
    class="fixed z-40 xl:hidden md:hidden flex h-full w-full bg-custom-gradient"
    v-show="isActive"
  >
    <span class="fixed w-full h-full"></span>
    <div class="flex flex-col justify-center gap-4 items-center w-full">
      <StrapiButton
        class="lg:hidden md:hidden flex"
        buttonVariant="primary"
        text="events"
      />

      <StrapiButton
        class="lg:hidden md:hidden flex"
        buttonVariant="primary"
        text="talk"
      />

      <StrapiButton
        class="lg:hidden md:hidden flex"
        buttonVariant="primary"
        text="join"
      />

      <StrapiButton
        class="lg:hidden md:hidden flex"
        buttonVariant="primary"
        text="linkedin"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const isActive = ref(false);

    function toggleBurger() {
      isActive.value = !isActive.value;
    }
    return {
      toggleBurger,
      isActive,
    };
  },
};
</script>
