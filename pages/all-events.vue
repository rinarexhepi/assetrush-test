<template>
  testing template
  <!-- <Headline level="h1" headingVariant="heading" text="The Next Chapter" />
  <Headline
    level="h4"
    headingVariant="subtitles"
    text="Creating the future of finance"
  />
  <Headline level="h2" headingVariant="subheading" text="Latest Event" />
  <Headline
    level="h3"
    headingVariant="videoCardText"
    text="
                  «Banks have shied away from this opportunity.»
                "
  />
  <Headline
    level="h4"
    headingVariant="pastEventsCard"
    text="AssetRush x Metaverse"
  />

  <Headline
    level="h5"
    headingVariant="pastARPresenters"
    text="«How Web 3.0 will impact our collective financial future»"
  />
  <Headline level="h6" headingVariant="pastEventsDate" text="June 15th, 2022" />
  <Headline level="h6" headingVariant="pulseDate" text="2023-02-15" /> -->

  <div class="flex lg:flex-row flex-col items-center">
    <CardTypePastEvent
      variant="pastEvents"
      shortDescription="Asset Rush x Metaverse"
      date="July 15th, 2022"
    >
    </CardTypePastEvent>
    <CardTypePastEvent
      variant="pastEvents"
      shortDescription="Asset Rush x Metaverse"
      date="July 15th, 2022"
    >
    </CardTypePastEvent>
    <CardTypePastEvent
      variant="pastEvents"
      shortDescription="Asset Rush x Metaverse"
      date="July 15th, 2022"
    >
    </CardTypePastEvent>
  </div>

  <div class="flex lg:flex-row flex-col items-center">
    <CardTypePulseCard
      variant="pulseCard"
      shortDescription="Build your actively managed certificate"
      date="2023-02-15"
    ></CardTypePulseCard>
    <CardTypePulseCard
      variant="pulseCard"
      shortDescription="Build your actively managed certificate"
      date="2023-02-15"
    ></CardTypePulseCard>
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

  <div class="w-screen overflow-hidden">
    <BaseSlider>
      <li class="splide__slide bg-primary">
        <CardTypeVideoCard
          variant="pastPresenters"
          number="1"
          shortDescription="How web 3.0 will impact our collective financial future"
          @openModal="openModal"
        >
        </CardTypeVideoCard>
      </li>
      <li class="splide__slide bg-primary">
        <CardTypeVideoCard
          variant="pastPresenters"
          number="2"
          shortDescription="How web 3.0 will impact our collective financial future"
          @openModal="openModal"
        >
        </CardTypeVideoCard>
      </li>
      <li class="splide__slide bg-primary">
        <CardTypeVideoCard
          variant="pastPresenters"
          number="3"
          shortDescription="How web 3.0 will impact our collective financial future"
          @openModal="openModal"
        >
        </CardTypeVideoCard>
      </li>
      <li class="splide__slide bg-primary">
        <CardTypeVideoCard
          variant="pastPresenters"
          number="4"
          shortDescription="How web 3.0 will impact our collective financial future"
          @openModal="openModal"
        >
        </CardTypeVideoCard>
      </li>
    </BaseSlider>

    <BaseSlider>
      <li class="splide__slide">
        <CardTypeEpisodeCard
          variant="episodesCard"
          episodeNumber=""
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
          @openModal="openModal"
        >
        </CardTypeEpisodeCard>
      </li>
      <li class="splide__slide">
        <CardTypeEpisodeCard
          variant="episodesCard"
          episodeNumber="2"
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
          @openModal="openModal"
        >
        </CardTypeEpisodeCard>
      </li>
      <li class="splide__slide">
        <CardTypeEpisodeCard
          variant="episodesCard"
          episodeNumber="2"
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
          @openModal="openModal"
        >
        </CardTypeEpisodeCard>
      </li>
    </BaseSlider>

    <Transition>
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

          <VideoTestimonials
            :options="{ responsive: true }"
            class="m-16 w-full z-0 "
            video-url="https://vimeo.com/444369368"
          />
        </div>
      </Modal>
    </Transition>
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
