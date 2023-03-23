<template>
  <!-- Wrap the slider in div with overflow hidden to hide scrollbars -->
  <div class="overflow-hidden py-20">
    <!-- The slider itself is a flex grid -->
    <div class="flex -mx-4 img-ticker">
      <!-- Original set of images -->
      <!-- Each image is a grid column with width 16rem (w-64) and horiztonal margin 1rem (mx-4) -->
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />

      <!-- Copy set of images -->
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <!-- Each image is a grid column with width 16rem (w-64) and horiztonal margin 1rem (mx-4) -->
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />

      <!-- Copy set of images -->
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
      <img
        class="w-16 mx-12 self-start flex-none"
        src="~/assets/img/ArLogo.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>

<style lang="scss">
@keyframes ticker-kf {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50rem, 0, 0);
  }
}

.img-ticker {
  animation: ticker-kf 6s infinite linear;
}
</style>
