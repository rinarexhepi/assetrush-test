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
      <li class="splide__slide">
        <VideoCard variant="episodesCard" episodeNumber="" :hasOverlay="true">
          <div class="z-0">
            <img
              class="rounded-t-2xl"
              src="https://www.g2fp.com/hubfs/trevor.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div class="m-2">
            <div class="flex flex-row justify-between mx-6 my-8 z-20">
              <div class="z-20">
                <h3 :episodeNumber="1" class="uppercase text-white text-lg">
                  #episode
                </h3>
                <h3 class="text-white text-3xl">name</h3>
              </div>
              <div>
                <StrapiButton
                  buttonVariant="secondary"
                  class="uppercase px-5 py-3 font-semibold"
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
            <div class="relative z-20">
              <p
                class="text-4xl text-white mx-4 pb-36 font-serif font-semibold z-20"
              >
                Banks have shied away from this opportunity
              </p>
            </div>
          </div>
        </VideoCard>
      </li>
      <li class="splide__slide">
        <VideoCard variant="episodesCard" episodeNumber="" :hasOverlay="true">
          <div>
            <img
              class="rounded-t-2xl"
              src="https://www.g2fp.com/hubfs/trevor.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div class="m-2">
            <div class="flex flex-row justify-between mx-6 my-8">
              <div class="relative z-20">
                <h3 :episodeNumber="1" class="uppercase text-white text-lg">
                  #episode
                </h3>
                <h3 class="text-white text-3xl">name</h3>
              </div>
              <div>
                <StrapiButton
                  buttonVariant="secondary"
                  class="uppercase px-5 py-3 font-semibold"
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
            <div class="relative z-20">
              <p
                class="text-4xl text-white mx-4 pb-36 font-serif font-semibold"
              >
                Banks have shied away from this opportunity
              </p>
            </div>
          </div>
        </VideoCard>
      </li>
      <li class="splide__slide">
        <VideoCard variant="episodesCard" episodeNumber="" :hasOverlay="true">
          <div>
            <img
              class="rounded-t-2xl"
              src="https://www.g2fp.com/hubfs/trevor.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div class="m-2">
            <div class="flex flex-row justify-between mx-6 my-8">
              <div class="z-20">
                <h3 :episodeNumber="1" class="uppercase text-white text-lg">
                  #episode
                </h3>
                <h3 class="text-white text-3xl">name</h3>
              </div>
              <div>
                <StrapiButton
                  buttonVariant="secondary"
                  class="uppercase px-5 py-3 font-semibold"
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
            <div class="relative z-20">
              <p
                class="text-4xl text-white mx-4 pb-36 font-serif font-semibold"
              >
                Banks have shied away from this opportunity
              </p>
            </div>
          </div>
        </VideoCard>
      </li>
      <li class="splide__slide bg-slate-300">
        <VideoCard variant="pastPresenters" number="1">
          <div class=" box-border relative mt-8">
            <img
              class="absolute rounded-xl"
              src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
            />
            <div class=" box-border absolute flex flex-col items-end ">
              <h3
                class="text-white lg:text-3xl md:text-2xl font-semibold mx-5 my-7"
              >
                How Web 3.0 will impact our collective financial future
              </h3>
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase px-5 py-3 font-semibold relative mt-8 mr-6 w-44"
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
      <li class="splide__slide bg-slate-300">
        <VideoCard variant="pastPresenters" number="2">
          <div class="relative mt-8">
            <img
              class="absolute rounded-xl"
              src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
            />
            <div class="absolute flex flex-col items-end ">
              <h3
                class="text-white lg:text-3xl md:text-2xl font-semibold mx-5 my-7 "
              >
                How Web 3.0 will impact our collective financial future
              </h3>
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase px-5 py-3 font-semibold relative mt-8 mr-6 w-44"
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
      <li class="splide__slide bg-slate-300">
        <VideoCard variant="pastPresenters" number="3">
          <div class="relative mt-8">
            <img
              class="absolute rounded-xl"
              src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
            />
            <div class="absolute flex flex-col items-end">
              <h3
                class="text-white lg:text-3xl md:text-2xl font-semibold mx-5 my-7 "
              >
                How Web 3.0 will impact our collective financial future
              </h3>
              <StrapiButton
                buttonVariant="secondary"
                class="uppercase px-5 py-3 font-semibold relative mt-8 mr-6 w-44 box-border"
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
