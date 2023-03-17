<template>
  <div class="bg-primary relative">
    <section>
      <div class="relative w-screen pt-32">
        <BaseSliderInfiniteSlider />
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

          <StrapiButton
            class="font-md text-xs w-max"
            buttonVariant="primary"
            text="All episodes"
            url="talk"
          />
        </div>
      </div>
      <div class="relative py-6">
        <div class="w-screen overflow-hidden my-8">
          <BaseSlider>
            <li class="splide__slide">
              <CardTypeEpisodeCard
                variant="episodesCard"
                episodeNumber="35"
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
                episodeNumber="34"
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
                episodeNumber="33"
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
                episodeNumber="32"
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
                episodeNumber="31"
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

      <div class="relative py-6 flex lg:flex-row flex-col h-full w-full gap-2">
        <div class=" w-[25%]">
          <CardTypePastEvent
            variant="pastEvents"
            shortDescription="Asset Rush x Metaverse"
            date="July 15th, 2022"
          >
          </CardTypePastEvent>
        </div>
        <div class=" w-[25%]">
          <CardTypePastEvent
            variant="pastEvents"
            shortDescription="Asset Rush x Metaverse"
            date="July 15th, 2022"
          >
          </CardTypePastEvent>
        </div>
        <div class="  w-[25%]">
          <CardTypePastEvent
            variant="pastEvents"
            shortDescription="Asset Rush x Metaverse"
            date="July 15th, 2022"
          >
          </CardTypePastEvent>
        </div>
        <div class=" w-[25%]">
          <CardTypePastEvent
            variant="pastEvents"
            shortDescription="Asset Rush x Metaverse"
            date="July 15th, 2022"
          >
          </CardTypePastEvent>
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
      <div class="flex flex-row flex-wrap justify-center w-full">
        <CardTypePulseCard
          :buttonLabel="[
            { text: 'BANK', value: 'https://www.gentwo.com/' },
            { text: 'AMC', value: 'https://www.gentwo.com/' },
            { text: 'NEWS', value: 'https://www.gentwo.com/' },
            { text: 'BANK', value: 'https://www.gentwo.com/' },
            { text: 'AMC', value: 'https://www.gentwo.com/' },
            { text: 'NEWS', value: 'https://www.gentwo.com/' },
          ]"
          variant="pulseCard"
          shortDescription="Build your actively managed certificate"
          date="2023-02-15"
        ></CardTypePulseCard>
        <CardTypePulseCard
          :buttonLabel="[
            { text: 'BANK', value: 'https://www.gentwo.com/' },
            { text: 'AMC', value: 'https://www.gentwo.com/' },
            { text: 'NEWS', value: 'https://www.gentwo.com/' },
            { text: 'BANK', value: 'https://www.gentwo.com/' },
          ]"
          variant="pulseCard"
          shortDescription="Build your actively managed certificate"
          date="2023-02-15"
        ></CardTypePulseCard>

        <CardTypePulseCard
          :buttonLabel="[
            { text: 'BANK', value: 'https://www.gentwo.com/' },
            { text: 'AMC', value: 'https://www.gentwo.com/' },
            { text: 'NEWS', value: 'https://www.gentwo.com/' },
            { text: 'BANK', value: 'https://www.gentwo.com/' },
          ]"
          variant="pulseCard"
          shortDescription="Build your actively managed certificate"
          date="2023-02-15"
        ></CardTypePulseCard>
        <CardTypePulseCard
          :buttonLabel="[
            { text: 'BANK', value: 'https://www.gentwo.com/' },
            { text: 'AMC', value: 'https://www.gentwo.com/' },
          ]"
          variant="pulseCard"
          shortDescription="Build your actively managed certificate"
          date="2023-02-15"
        ></CardTypePulseCard>
      </div>
      <div>
        <InfoNewsletter />
      </div>
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
    </section>
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
