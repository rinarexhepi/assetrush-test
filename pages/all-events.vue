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
      class=" fixed inset-0 align-center"
    >
      <div class="flex justify-center flex-row ">
        <div class="absolute z-10 mt-60">
          <h1 class="text-3xl">This is a title</h1>
          <p class="text-lgs">This is a description</p>
          <NuxtLink
            class="border absolute bg-slate-900 p-3 rounded-xl"
            href="join"
          >
            <span>index page</span>
          </NuxtLink>
        </div>
        <Transition>
          <VideoTestimonials
            :options="{ responsive: true }"
            class="m-16 w-full z-0 "
            video-url="https://vimeo.com/444369368"
          />
        </Transition>
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
