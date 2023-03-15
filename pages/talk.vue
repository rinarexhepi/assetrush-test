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
      <div>
        <Headline headingVariant="talkParagraphLeft">
          Episode Guide
        </Headline>
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
    </section>
  </div>
</template>

<style scoped></style>
