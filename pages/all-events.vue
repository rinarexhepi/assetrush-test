<template>
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
        <VideoCard variant="pastPresenters" number="1"
          ><img
            class="rounded-xl max-h-full max-w-full"
            src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
          />
          <div
            class="absolute top-0 flex flex-col h-full items-end justify-between over"
          >
            <div class=" h-full flex-1">
              <h3
                class="text-white lg:text-4xl md:text-2xl sm:text-md text-xl font-semibold mx-5 lg:mt-6 md:mt-5 sm:mt-4 mt-4"
              >
                How Web 3.0 will impact our collective financial future
              </h3>
            </div>
            <div class="h-full flex-1 pr-2">
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
                text="PLAY"
                :reverse="true"
                :iconBackground="true"
                icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
                alt="play"
                loading="lazy"
                @click="openModal()"
              />
            </div>
          </div>
        </VideoCard>
      </li>
      <li class="splide__slide bg-primary">
        <VideoCard variant="pastPresenters" number="2"
          ><img
            class="rounded-xl max-h-full max-w-full"
            src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
          />
          <div
            class="absolute top-0 flex flex-col h-full items-end justify-between over"
          >
            <div class=" h-full flex-1">
              <h3
                class="text-white lg:text-4xl md:text-2xl sm:text-md text-xl font-semibold mx-5 lg:mt-6 md:mt-5 sm:mt-4 mt-4"
              >
                How Web 3.0 will impact our collective financial future
              </h3>
            </div>
            <div class="h-full flex-1 pr-2">
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
                text="PLAY"
                :reverse="true"
                :iconBackground="true"
                icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
                alt="play"
                loading="lazy"
                @click="openModal()"
              />
            </div>
          </div>
        </VideoCard>
      </li>
      <li class="splide__slide bg-primary">
        <VideoCard variant="pastPresenters" number="3"
          ><img
            class="rounded-xl max-h-full max-w-full"
            src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
          />
          <div
            class="absolute top-0 flex flex-col h-full items-end justify-between over"
          >
            <div class=" h-full flex-1">
              <h3
                class="text-white lg:text-4xl md:text-2xl sm:text-md text-xl font-semibold mx-5 lg:mt-6 md:mt-5 sm:mt-4 mt-4"
              >
                How Web 3.0 will impact our collective financial future
              </h3>
            </div>
            <div class="h-full flex-1 pr-2">
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
                text="PLAY"
                :reverse="true"
                :iconBackground="true"
                icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
                alt="play"
                loading="lazy"
                @click="openModal()"
              />
            </div>
          </div>
        </VideoCard>
      </li>
      <li class="splide__slide bg-primary">
        <VideoCard variant="pastPresenters" number="4"
          ><img
            class="rounded-xl max-h-full max-w-full"
            src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
          />
          <div
            class="absolute top-0 flex flex-col h-full items-end justify-between over"
          >
            <div class=" h-full flex-1">
              <h3
                class="text-white lg:text-4xl md:text-2xl sm:text-md text-xl font-semibold mx-5 lg:mt-6 md:mt-5 sm:mt-4 mt-4"
              >
                How Web 3.0 will impact our collective financial future
              </h3>
            </div>
            <div class="h-full flex-1 pr-2">
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase lg:px-5 lg:py-3 px-3 py-3 font-semibold lg:mr-6"
                text="PLAY"
                :reverse="true"
                :iconBackground="true"
                icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
                alt="play"
                loading="lazy"
                @click="openModal()"
              />
            </div>
          </div>
        </VideoCard>
      </li>
    </BaseSlider>
    <BaseSlider>
      <li class="splide__slide">
        <EpisodeCard
          variant="episodesCard"
          episodeNumber="2"
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
        >
        </EpisodeCard>
      </li>
      <li class="splide__slide">
        <EpisodeCard
          variant="episodesCard"
          episodeNumber="2"
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
        >
        </EpisodeCard>
      </li>
      <li class="splide__slide">
        <EpisodeCard
          variant="episodesCard"
          episodeNumber="2"
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
          @openModal="openModal"
        >
        </EpisodeCard>
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
        </div> </Modal
    ></Transition>
  </div>
</template>
<script lang="ts">
import EpisodeCard from "~/components/VideoCard/EpisodeCard.vue";
import Modal from "~/components/VueFinalModal/Modal.vue";

export default {
  components: {
    Modal,
    EpisodeCard,
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
