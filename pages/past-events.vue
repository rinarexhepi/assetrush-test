<template>
  <div class="bg-primary">
    <section>
      <div class="items-center">
        <EventsLatest
          posterImage="'~/assets/img/hero-join.jpeg'"
          :button="false"
        />
      </div>
      <div class="relative p-8 pt-24 ml-16">
        <Headline level="h2" headingVariant="ecosystem">
          Past Events
        </Headline>
      </div>
      <div class="relative py-6">
        <div class="w-screen overflow-hidden my-8">
          <div class="flex flex-col items-center w-full">
            <div class="flex lg:flex-row flex-col">
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
            <div class="flex lg:flex-row flex-col">
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
          </div>
        </div>
      </div>
      <div>
        <InfoNewsletter />
      </div>
      <div
        class="flex lg:flex-row flex-col gap-6 justify-center items-center w-full py-10"
      >
        <CardTypeRowEcosystem
          class="lg:w-[37%] lg:h-[40%] w-[50%] box-border"
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
        <CardTypeRowEcosystem
          class="lg:w-[37%] lg:h-[40%] w-[50%]"
          title="Join the ecosystem"
          shortDescription="Innovate with us"
        />
      </div>
    </section>
  </div>
</template>
