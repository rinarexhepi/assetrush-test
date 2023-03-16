<template>
  <div class="bg-primary pt-32">
    <section>
      <div class="relative py-6 p-8 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Latest Event
        </Headline>
      </div>
      <div>
        <div class="relative py-6 flex flex-row"></div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import AutoplaySlider from "~/components/BaseSlider/AutoplaySlider.vue";
import BecomeCard from "~/components/CardType/BecomeCard.vue";
import Modal from "~/components/VueFinalModal/Modal.vue";

export default {
  components: {
    Modal,
    BecomeCard,
    AutoplaySlider,
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
