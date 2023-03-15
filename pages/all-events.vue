<template>
  testing template
  <div class="bg-primary">
    <Headline level="h1" headingVariant="heading" text="The Next Chapter" />
    <Headline
      level="h4"
      headingVariant="subtitles"
      text="Creating the future of finance"
    />
    <Headline level="h2" headingVariant="subheading" text="Latest Event" />
    <Headline
      level="h3"
      headingVariant="videoCardText"
      text="«Banks have shied away from this opportunity.»"
    />
    <Headline headingVariant="pastEventsCard" text="AssetRush x Metaverse" />

    <Headline
      level="h5"
      headingVariant="pastARPresenters"
      text="«How Web 3.0 will impact our collective financial future»"
    />
    <Headline
      level="h6"
      headingVariant="pastEventsDate"
      text="June 15th, 2022"
    />
    <Headline level="h6" headingVariant="pulseDate" text="2023-02-15" />
  </div>
  <div>
    <CardTypeBecomeCard
      subtitle="Become a"
      variant="becomeCard"
      title="Publisher"
      shortDescription="Publish and promote your professional expertise and insight with our audience and become a thought leader."
    />
  </div>
  <div>
    <CardTypeTalkCard
      variant="talkCard"
      episodeNumber=""
      author="name"
      shortDescription="Banks have shied away from this opportunity"
      :hasOverlay="true"
    />
  </div>

  <Grids gridVariant="fullBleed">
    <h2>full-bleed</h2>
  </Grids>
  <Grids gridVariant="guttersOnly">
    <h2>gutters-only</h2>
  </Grids>
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
