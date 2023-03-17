<template>
  <div class="bg-primary h-screen relative overflow-scroll">
    <section>
      <div class="relative w-screen overflow-hidden pt-32">
        <BaseSliderInfiniteSlider>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>

          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>

          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primary">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
        </BaseSliderInfiniteSlider>
      </div>
      <div class="relative p-8 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Upcoming Event
        </Headline>
      </div>
      <div class="relative py-6">
        <EventsLatest
          posterImage="~/assets/img/Geneva_Key-Art.png"
          headline="Latest Event"
          variant="events"
          title="AssetRush x Geneva 2023"
          shortDescription="Wednesday, 1 March 2023"
          :button="false"
        />
      </div>
      <div class="relative py-6 p-8 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Latest Event
        </Headline>
      </div>
      <div class="relative py-6">
        <EventsLatest
          posterImage="~/assets/img/zurich.png"
          headline="Latest Event"
          variant="events"
          title="AssetRush x Geneva 2023"
          shortDescription="Wednesday, 1 March 2023"
          posterimage=""
          :button="true"
        />
      </div>
      <div class="relative mx-16 py-8">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-col mx-8 gap-4">
            <Headline level="h2" headingVariant="ecosystem">
              AssetRush TALK
            </Headline>
            <Headline level="h2" headingVariant="subtitles">
              A series of stimulating exchanges between Philippe A. Naegeli or
              Martha Boeckenfeld and leading FinTech innovators.
            </Headline>
          </div>
          <div>
            <StrapiButton
              class="font-md text-xs"
              buttonVariant="primary"
              text="All episodes"
            />
          </div>
        </div>
      </div>
      <div class="relative py-6">
        <div class="w-screen overflow-hidden my-8">
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
        </div>
      </div>
      <div class="relative py-6 ml-16">
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
      <div class="relative py-4 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Past AR Presenters
        </Headline>
      </div>

      <div class="relative my-6">
        <div>
          <CardTypeEcosystemCard
            title="Join the ecosystem"
            shortDescription="Innovate with us"
          />
        </div>
      </div>
      <div class="relative py-4 pl-20">
        <Headline level="h2" headingVariant="ecosystem">
          Pulse
        </Headline>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-row">
          <CardTypePulseCard
            :buttonLabel="[
              { text: 'BANK' },
              { text: 'AMC' },
              { text: 'NEWS' },
              { text: 'BANK' },
              { text: 'AMC' },
              { text: 'NEWS' },
            ]"
            variant="pulseCard"
            shortDescription="Build your actively managed certificate"
            date="2023-02-15"
          ></CardTypePulseCard>
          <CardTypePulseCard
            :buttonLabel="[
              { text: 'BANK' },
              { text: 'AMC' },
              { text: 'NEWS' },
              { text: 'BANK' },
            ]"
            variant="pulseCard"
            shortDescription="Build your actively managed certificate"
            date="2023-02-15"
          ></CardTypePulseCard>
        </div>
        <div class="flex flex-row">
          <CardTypePulseCard
            :buttonLabel="[
              { text: 'BANK' },
              { text: 'AMC' },
              { text: 'NEWS' },
              { text: 'BANK' },
            ]"
            variant="pulseCard"
            shortDescription="Build your actively managed certificate"
            date="2023-02-15"
          ></CardTypePulseCard>
          <CardTypePulseCard
            :buttonLabel="[{ text: 'BANK' }, { text: 'AMC' }]"
            variant="pulseCard"
            shortDescription="Build your actively managed certificate"
            date="2023-02-15"
          ></CardTypePulseCard>
        </div>
      </div>
    </section>
    <Transition>
      <Modal
        :showModal="shouldRenderModal"
        @closeModal="shouldRenderModal = false"
        class="inset-0 align-center"
      >
        <div class="flex justify-center flex-row ">
          <div class="absolute z-10">
            <!-- <h1 class="text-3xl">This is a title</h1>
            <p class="text-lgs">This is a description</p>
            <NuxtLink
              class="border absolute bg-slate-900 p-3 rounded-xl"
              href="join"
            >
              <span>index page</span>
            </NuxtLink> -->
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

export default defineComponent({
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
});
</script>
