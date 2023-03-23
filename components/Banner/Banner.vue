<template>
  <section class="py-6">
    <div class="container mx-auto pt-8" v-if="headline">
      <Headline level="h2" headingVariant="ecosystem" class="py-16">{{
        headline
      }}</Headline>
    </div>
    <div class="relative">
      <img
        v-if="posterImage"
        class="absolute top-0 left-0 w-full h-full object-cover"
        :src="posterImage"
      />
      <div
        :class="{
          'container mx-auto': variant === 'full',
          'px-24': variant === 'half',
        }"
      >
        <div
          class="relative z-10 text-white flex flex-col gap-4"
          :class="{
            'py-40': variant === 'full',
            'py-44 2xl:py-64': variant === 'half',
          }"
        >
          <h3 class="text-6xl font-gtplanar font-bold">{{ title }}</h3>
          <p v-if="subtitle" class="text-2xl">{{ subtitle }}</p>
          <p v-if="shortDescription" class="text-2xl">Tuesday, 23 May 2023</p>
          <StrapiButton
            class="w-fit mt-4"
            buttonVariant="third"
            text="Subscribe"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    headline: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: "full",
    },
    posterImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    shortDescription: {
      type: String,
      required: false,
    },
    button: {
      type: Boolean,
      required: false,
    },
  },
});
</script>
