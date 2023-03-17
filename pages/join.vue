<script lang="ts" setup></script>

<template>
  <div class="bg-joinBackground overflow-scroll">
    <section>
      <div class="relative ">
        <EventsLatest
          posterImage="~/assets/img/Geneva_Key-Art.png"
          headline="Latest Event"
          variant="events"
          title="AssetRush x Geneva 2023"
          :button="false"
        />
      </div>
      <div class="relative w-screen overflow-hidden pt-16">
        <BaseSlider>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>

          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>

          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-joinBackground">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
          <li class="splide__slide bg-primajoinBackgroundry">
            <img src="~/assets/img/ArLogo.png" alt="ArLogo" />
          </li>
        </BaseSlider>
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
        <CardTypeBecomeCard
          subtitle="Become a"
          variant="becomeCard"
          title="Presenter"
          shortDescription="Publish and promote your professional expertise and insight with our audience and become a thought leader."
        />
        <CardTypeBecomeCard
          subtitle="Become a"
          variant="becomeCard"
          title="Publisher"
          shortDescription="Publish and promote your professional expertise and insight with our audience and become a thought leader."
        />
        <CardTypeBecomeCard
          subtitle="Become a"
          variant="becomeCard"
          title="TALK guest"
          shortDescription="Publish and promote your professional expertise and insight with our audience and become a thought leader."
        />
        <CardTypeBecomeCard
          subtitle="Become a"
          variant="becomeCard"
          title="Partner"
          shortDescription="Publish and promote your professional expertise and insight with our audience and become a thought leader."
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
