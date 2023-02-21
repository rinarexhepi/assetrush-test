<template>
  <Grids gridVariant="fullBleed">
    <h2>full-bleed</h2>
  </Grids>
  <Grids gridVariant="guttersOnly">
    <h2>gutters-only</h2>
  </Grids>
  <!-- 
  <FlexLayoutTwoItems
    ><Grids gridVariant="halfAndHalf">
      <template v-slot:first>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
      </template>
      <template v-slot:second>
        <span>hi</span>
      </template>
    </Grids>
  </FlexLayoutTwoItems> -->
  <Grids gridVariant="halfAndHalf">
    <FlexLayoutTwoItems>
      <template v-slot:first>
        <p>test</p>
      </template>
      <template v-slot:second>
        <p>test</p>
      </template>
    </FlexLayoutTwoItems>
  </Grids>

  <Grids gridVariant="standard">
    <StandardLayout>
      <template v-slot:first>
        <p>test</p>
      </template>
    </StandardLayout>
  </Grids>

  <Grids gridVariant="centered">
    <CenteredLayout>
      <template v-slot:first>
        <p>test</p>
      </template>
    </CenteredLayout>
  </Grids>

  <Grids gridVariant="cards">
    <div :class="'single-card'">
      <h2>single card</h2>
      <slot />
    </div>
  </Grids>
  <Grids gridVariant="centeredCards">
    <div :class="'centered-card'">
      <h2>centered card</h2>
      <slot />
    </div>
  </Grids>

  <div>
    <button @click="openModal()">Open Modal</button>
    <Modal
      :showModal="shouldRenderModal"
      @closeModal="shouldRenderModal = false"
      class=" bg-red-100 fixed inset-0 align-center z-10"
    >
      <div class="flex justify-center flex-row w-full h-full">
        <div>
          <h1>This is a title</h1>
          <p>This is a description</p>
          <NuxtLink class="border absolute bg-red-300 p-3" href="join">
            <i>index page</i>
          </NuxtLink>
        </div>
        <VideoTestimonials
          :options="{ responsive: true }"
          class="m-16 w-full z-50"
          video-url="https://vimeo.com/444369368"
          video-id="444369368"
        />
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from "~/components/VueFinalModal/Modal.vue";
import VideoTestimonials from "~/components/Video/VideoTestimonials.vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const shouldRenderModal = ref(false);

    function openModal() {
      shouldRenderModal.value = true;
    }
    return {
      shouldRenderModal,
      openModal,
    };
  },
};
</script>
