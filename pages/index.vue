<template>
  <div class="bg-custom-gradient h-screen">
    <h1 class="text-white text-lg">------main template------</h1>
    <div class="flex flex-row gap-4 justify-center items-center">
      <div>
        <!-- StrapiButton renders button, NuxtLink for internal and a-link for external links -->
        <!-- StrapiButton has variants for designs: primary, secondary, third -->
        <!-- StrapiButton has reverse prop for switching position of icon and text -->

        <!-- <StrapiButton
          :variants="[
            { text: 'All Events', value: '/all-events' },
            { text: 'Upcoming Events', value: '/upcoming-events' },
            { text: 'Past Events', value: '/past-events' },
          ]"
        /> -->
      </div>
      <!-- </div> -->
    </div>
    <!-- </Grids>  -->
  </div>
</template>
<script lang="ts">
export default defineComponent({});
</script>
