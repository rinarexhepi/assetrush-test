<template>
  <div class="bg-primary">
    <Hero></Hero>
    <Ticker />
    <!-- <BannerList v-if="sections['event-banner-list']" v-bind="sections['event-banner-list']" /> -->
    <Banner
      headline="Upcoming Event"
      posterImage="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/ac5a57c4-7aaa-4f61-902e-9ca78ded0936/AR-ZH23_Key-Art_no-text.png?format=2500w"
      shortDescription="Tuesday, 23 May 2023"
      title="AssetRush × Zurich 2023"
    />
    <Banner
      headline="Latest Event"
      posterImage="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/ac5a57c4-7aaa-4f61-902e-9ca78ded0936/AR-ZH23_Key-Art_no-text.png?format=2500w"
      shortDescription="Tuesday, 23 May 2023"
      title="AssetRush × Zurich 2023"
    />
    <div class="container mx-auto">
      <div class="flex flex-col">
        <div class="flex flex-col gap-6 mb-20">
          <div class="flex justify-between pt-16">
            <Headline level="h2" headingVariant="ecosystem"
              >AssetRush TALK</Headline
            >
            <StrapiButton
              class="w-fit h-auto py-4 px-6"
              buttonVariant="secondary"
              text="Enquire"
            />
          </div>
          <p class="text-2xl text-white pr-80">
            A series of stimulating exchanges between Philippe A. Naegeli or
            Martha Boeckenfeld and leading FinTech innovators.
          </p>
        </div>
        <div class="card w-1/2 relative overflow-hidden rounded-lg">
          <div
            class="bg-custom-gradient absolute top-0 left-0 w-1/2 h-full z-10 opacity-60"
          ></div>
          <div class="relative h-72">
            <img
              class="absolute top-0 left-0 w-full h-full object-cover opacity-30"
              src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/627916ef2f793779818a9779/1652102895216/noise.png"
            />
            <img
              class="object-cover"
              src="https://www.g2fp.com/hubfs/trevor.png"
            />
          </div>
          <div class="text-white bg-purple-600 p-8 relative">
            <div class="flex justify-between z-20 relative">
              <div class="flex flex-col">
                <span class="text-white opacity-80 text-lg">Episode 35</span>
                <h4 class="text-white text-2xl">Trevor Skidmore</h4>
              </div>
              <StrapiButton
                class="w-fit h-auto py-4 px-6"
                buttonVariant="secondary"
                text="Play"
              />
            </div>
            <p
              class="font-benet text-white text-4xl whitespace-normal pr-24 mt-12 mb-12 z-20 relative"
            >
              «Banks have shied away from this opportunity.»
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <SliderCardList /> -->
    <EventCardList />
    <div class="container mx-auto py-14">
      <BannerBox />
    </div>
    <Subscription />
  </div>
</template>

<script setup lang="ts">
// import { useCmsifiedPage } from "~/composables/useCmsifiedPage";
// // const { find } = useStrapi();

// const pageSlug = "home";
// const { fetch } = useCmsifiedPage();

// const { data: page } = await useAsyncData(`page-${pageSlug}`, () =>
//   fetch(pageSlug)
// );
// const sections = page.value?.sections;

// setTimeout(() => {
//   const { data: page } = useAsyncData(`page-${pageSlug}`, () =>
//     fetch(pageSlug)
//   );

//   console.log(page);
// });
</script>
