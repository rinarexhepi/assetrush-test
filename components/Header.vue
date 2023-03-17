<template>
  <div
    class="fixed w-full backdrop-blur-md py-6 flex lg:flex-row md:flex-row justify-around items-center z-50"
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
    <NuxtLink to="http://localhost:3000/" class="sm:flex flex-col h-max">
      <img src="~/assets/img/ArLogo.png" alt="" />
      <span class="text-white text-[8px] font-gtplanar font-extralight"
        >Powered by GenTwo
      </span>
    </NuxtLink>
    <div class="flex lg:flex-row justify-around" v-show="!isActive">
      <StrapiButton
        :variants="[
          { text: 'Upcoming Events', value: 'upcoming-events' },
          { text: 'Past Events', value: 'past-events' },
          { text: 'All Events', value: 'all-events' },
        ]"
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="events"
      />

      <StrapiButton
        :url="'talk'"
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="talk"
      />

      <StrapiButton
        :url="'join'"
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="join"
      />

      <StrapiButton
        :url="'https://ch.linkedin.com/company/asset-rush?trk=similar-pages'"
        class="lg:flex md:flex hidden"
        buttonVariant="primary"
        text="linkedin"
      />
    </div>
  </div>
  <div
    class="fixed z-40 xl:hidden lg:hidden md:hidden flex h-full w-full bg-custom-gradient"
    v-show="isActive"
  >
    <span class="fixed w-full h-full flex items-center"></span>
    <div class="flex flex-col justify-center w-full gap-4 items-center">
      <StrapiButton
        @click="toggleOptions"
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="events"
      />

      <StrapiButton
        :url="'talk'"
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="talk"
      />

      <StrapiButton
        :url="'join'"
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="join"
      />

      <StrapiButton
        :url="'talk'"
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="linkedin"
      />
    </div>
  </div>
  <div
    class="fixed z-40 xl:hidden lg:hidden md:hidden flex h-full w-full bg-custom-gradient ease-in-out duration-200"
    v-show="isOptions"
  >
    <span class="fixed w-full h-full flex items-center"></span>
    <div class="flex flex-col w-full justify-center gap-4 items-center">
      <StrapiButton
        @click="toggleOptions"
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="Back"
      />
      <StrapiButton
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="All Events"
      />

      <StrapiButton
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="Past Events"
      />

      <StrapiButton
        class="lg:hidden md:hidden flex h-[50px] w-max"
        buttonVariant="primary"
        text="Upcoming Events"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const isActive = ref(false);
    const isOptions = ref(false);

    function toggleBurger() {
      isActive.value = !isActive.value;
    }
    function toggleOptions() {
      isOptions.value = !isOptions.value;
    }
    return {
      toggleBurger,
      isActive,
      toggleOptions,
      isOptions,
    };
  },
};
</script>
