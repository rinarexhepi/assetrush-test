<script lang="ts" setup></script>

<template>
  <div class="bg-primary overflow-scroll">
    <section>
      <div class="relative">
        <CardTypeSingleTalk
          variant="singleTalk"
          subtitle="AssetRush"
          title="TALK"
          posterImage="~/assets/img/elonmusk.jpeg"
          shortDescription="Meet the innovators and pioneers"
        />
      </div>
      <div class="relative w-screen overflow-hidden pt-16">
        <BaseSliderAutoplaySlider>
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
        </BaseSliderAutoplaySlider>
      </div>
      <div class="relative py-16">
        <Grids gridVariant="standard">
          <StandardSmallLayout>
            <template v-slot:first>
              <Headline headingVariant="talkParagraph">
                Join Philippe A. Naegeli and Martha Boeckenfeld for a
                stimulating exchange — from AI-based market forcasts to the role
                of neuroscience in asset management — with leading FinTech
                innovators.
              </Headline>
            </template>
          </StandardSmallLayout>
        </Grids>
      </div>
      <div class="flex flex-row w-full justify-center py-6">
        <StrapiButton
          class="rounded-l-full mx-0.5"
          buttonVariant="primaryCornered"
          text="episode guide"
        />
        <StrapiButton
          class="rounded-r-full"
          buttonVariant="primaryCornered"
          text="subscribe"
        />
      </div>
      <div class="relative">
        <Grids gridVariant="centered">
          <StandardLayout>
            <template v-slot:first>
              <div class="relative mx-10">
                <Headline headingVariant="talkParagraphLeft">
                  Episode Guide
                </Headline>
              </div>
            </template>
          </StandardLayout>
        </Grids>
      </div>

      <div class="relative py-8 flex flex-col gap-8">
        <CardTypeTalkCard
          variant="talkCard"
          episodeNumber=""
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
        />
        <CardTypeTalkCard
          variant="talkCard"
          episodeNumber=""
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
        />
        <CardTypeTalkCard
          variant="talkCard"
          episodeNumber=""
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
        />
        <CardTypeTalkCard
          variant="talkCard"
          episodeNumber=""
          author="name"
          shortDescription="Banks have shied away from this opportunity"
          :hasOverlay="true"
        />
      </div>
      <div class="flex flex-row">
        <CardTypeEcosystemCard
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
        <CardTypeEcosystemCard
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
