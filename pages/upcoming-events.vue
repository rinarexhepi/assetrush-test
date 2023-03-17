<template>
  <div class="bg-primary">
    <section>
      <div class="relative p-8 pt-28">
        <Headline level="h2" headingVariant="ecosystem">
          Upcoming Events
        </Headline>
      </div>
      <div class="relative py-6">
        <EventsLatest
          posterImage="~/assets/img/zurich.png"
          headline="Latest Event"
          variant="events"
          title="AssetRush x Geneva 2023"
          shortDescription="Wednesday, 1 March 2023"
          :button="true"
        />
      </div>
      <div>
        <InfoNewsletter />
      </div>
      <div
        class="flex lg:flex-row flex-col gap-6 justify-center items-center w-full py-10"
      >
        <CardTypeRowEcosystem
          class="lg:w-[30%] lg:h-[40%] w-[50%] box-border"
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
        <CardTypeRowEcosystem
          class="lg:w-[30%] lg:h-[40%] w-[50%]"
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>
