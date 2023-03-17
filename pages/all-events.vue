<template>
  <div class="bg-primary pt-32">
    <section>
      <div class="relative py-6 p-8 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Latest & Upcoming Events
        </Headline>
      </div>
      <div class="relative flex flex-row py-6">
        <EventsLatest
          headline="Latest Event"
          variant="events"
          title="AssetRush x Geneva 2023"
          shortDescription="Wednesday, 1 March 2023"
          :button="true"
        />
        <EventsLatest
          headline="Latest Event"
          variant="events"
          title="AssetRush x Geneva 2023"
          shortDescription="Wednesday, 1 March 2023"
          :button="true"
        />
      </div>
      <div class="relative py-6 p-8 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Past Events
        </Headline>
      </div>
      <div class="relative py-6">
        <div class="w-screen overflow-hidden my-8">
          <div class="flex lg:flex-row flex-col w-full">
            <li class="splide__slide w-1/4">
              <CardTypePastEvent
                variant="pastEvents"
                shortDescription="Asset Rush x Metaverse"
                date="July 15th, 2022"
              >
              </CardTypePastEvent>
            </li>
            <li class="splide__slide  w-1/4">
              <CardTypePastEvent
                variant="pastEvents"
                shortDescription="Asset Rush x Metaverse"
                date="July 15th, 2022"
              >
              </CardTypePastEvent>
            </li>
            <li class="splide__slide  w-1/4">
              <CardTypePastEvent
                variant="pastEvents"
                shortDescription="Asset Rush x Metaverse"
                date="July 15th, 2022"
              >
              </CardTypePastEvent>
            </li>
            <li class="splide__slide  w-1/4">
              <CardTypePastEvent
                variant="pastEvents"
                shortDescription="Asset Rush x Metaverse"
                date="July 15th, 2022"
              >
              </CardTypePastEvent>
            </li>
          </div>
        </div>
      </div>
      <div class="relative w-screen py-10">
        <BaseSliderInfiniteSlider />
      </div>
      <div
        class="flex lg:flex-row flex-col gap-6 justify-center items-center w-full py-10"
      >
        <CardTypeRowEcosystem
          class="lg:w-[37%] lg:h-[40%] w-[50%] box-border"
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
        <CardTypeRowEcosystem
          class="lg:w-[37%] lg:h-[40%] w-[50%]"
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Modal from "~/components/VueFinalModal/Modal.vue";

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
