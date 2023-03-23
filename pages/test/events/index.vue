<template>
  <div class="bg-primary">
    <div class="pt-20">
      <div class="container mx-auto">
        <Headline level="h2" headingVariant="ecosystem" class="py-16 mt-8"
          >Latest & Upcoming Events</Headline
        >
      </div>
      <div class="flex w-full">
        <Banner
          variant="half"
          class="w-1/2"
          posterImage="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/ac5a57c4-7aaa-4f61-902e-9ca78ded0936/AR-ZH23_Key-Art_no-text.png?format=2500w"
          shortDescription="Tuesday, 23 May 2023"
          title="AssetRush × Zurich"
        />
        <Banner
          variant="half"
          class="w-1/2"
          posterImage="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/ac5a57c4-7aaa-4f61-902e-9ca78ded0936/AR-ZH23_Key-Art_no-text.png?format=2500w"
          shortDescription="Tuesday, 23 May 2023"
          title="AssetRush × Zurich"
        />
      </div>
    </div>
    <EventCardList />
    <Ticker />
    <Subscription />
    <BannerBoxList class="py-12" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {},
});
</script>
