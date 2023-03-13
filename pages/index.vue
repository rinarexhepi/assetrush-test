<template>
  <div class="bg-primary h-screen relative">
    <section>
      <div
        class="absolute flex flex-col justify-between gap-6 items-center mt-[200px] w-full"
      >
        <Headline
          level="h4"
          headingVariant="subtitles"
          text="Creating the future of finance"
        />
        <Headline level="h1" headingVariant="heading" text="The Next Chapter" />
        <StrapiButton
          buttonVariant="secondary"
          class=" uppercase px-5 py-3 font-semibold w-max"
          text="Intro"
          :reverse="true"
          :iconBackground="true"
          icon="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6278e1b2b3b9d8705d65d301/1652089266787/icon--video-play+%281%29.png"
          alt="play"
          loading="lazy"
          @click="$emit('openModal')"
        />
      </div>
    </section>
    <section>
      <BaseSlider></BaseSlider>
    </section>
    <section>
      <div class="relative">
        <Headline
          level="h2"
          headingVariant="subheading"
          text="Latest Event"
          class="absolute"
        />
      </div>
    </section>
    <section>
      <div class="relative w-full h-min">
        <img
          class="absolute w-full h-[550px]"
          src="~/assets/img/Geneva_Key-Art.png"
          alt=""
        />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
export default defineComponent({});
</script>
