<template>
  <div class="bg-custom-gradient h-screen">
    <h1 class="text-white text-lg">------main template------</h1>
    <div class="flex flex-row gap-4 justify-center items-center">
      <div>
        <!-- StrapiButton renders button, NuxtLink for internal and a-link for external links -->
        <!-- StrapiButton has variants for designs: primary, secondary, third -->
        <!-- StrapiButton has reverse prop for switching position of icon and text -->

        <StrapiButton
          :variants="[
            { text: 'All Events', value: '/all-events' },
            { text: 'Upcoming Events', value: '/upcoming-events' },
            { text: 'Past Events', value: '/past-events' },
          ]"
        />
      </div>
      <div>
        <StrapiButton
          buttonVariant="primary"
          v-bind:text="'Go to Asset Rush'"
          v-bind:url="'https://www.assetrush.com/'"
          target="_blank"
          rel="'noopener'"
        />
      </div>
      <div>
        <StrapiButton
          buttonVariant="primary"
          text="Asset Rush All Events"
          target="_self"
          url="all-events"
        />
      </div>
      <div>
        <StrapiButton
          buttonVariant="secondary"
          class="uppercase px-5 py-4"
          text="button"
          :reverse="false"
        />
      </div>

      <div>
        <StrapiButton
          buttonVariant="third"
          text="Hi"
          icon="https://www.svgrepo.com/show/447/web-application.svg"
          :reverse="true"
        />
      </div>
      <StrapiButton
        buttonVariant="third"
        text="Hi"
        icon="https://www.svgrepo.com/show/447/web-application.svg"
        :reverse="false"
      />
      <!-- </div> -->
    </div>
    <!-- </Grids>  -->
  </div>
</template>
<script lang="ts">
export default defineComponent({});
</script>
