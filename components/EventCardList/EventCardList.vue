<template>
  <section :class="baseClass">
    <div class="container mx-auto">
      <Headline level="h2" headingVariant="ecosystem" class="py-16 mt-8"
        >Past Events</Headline
      >
    </div>
    <div class="container mx-auto pt-6 pb-16">
      <div class="relative flex gap-6" :class="hasCols">
        <div
          v-for="number in 3"
          :key="number"
          :class="(cardClass, calcCols)"
          class="relative p-12 rounded-2xl overflow-hidden"
        >
          <img
            class="absolute top-0 left-0 object-cover w-full h-full"
            src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/627aaface054d65a97809aca/1652207537442/AR-space.jpg"
          />
          <div class="flex flex-col relative z-10 h-full">
            <div class="flex flex-col gap-3 mb-10">
              <p class="text-white/60 text-4xl font-gtplanar font-bold">
                June 15th, 2022
              </p>
              <span class="block w-full h-1 bg-slate-400"></span>
            </div>
            <h3 class="text-white text-6xl font-benet font-bold mb-20">
              AssetRush × <br />
              Zurich V
            </h3>
            <StrapiButton
              class="w-fit mt-auto"
              buttonVariant="third"
              text="Find out more"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Past AR presenters -->
    <div class="container mx-auto">
      <Headline level="h2" headingVariant="ecosystem" class="py-16 mt-8"
        >Past AR Presenters</Headline
      >
    </div>
    <div class="container mx-auto pt-6 pb-16">
      <div class="w-1/3 relative rounded-2xl overflow-hidden">
        <img
          class="absolute top-0 left-0 w-full h-full object-cover"
          src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/62b0a7c82d21161d968a5d8f/1655744461795/Nicolas+De+Skowronski+Cover+Picture-min.png"
        />
        <div class="flex flex-col gap-44 z-10 relative p-10">
          <h3 class="text-4xl text-white font-gtplanar">
            «How Web 3.0 will impact our collective financial future»
          </h3>
          <StrapiButton
            class="w-fit mt-auto ml-auto"
            buttonVariant="third"
            text="Play"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed } from "vue";

const baseClass = "as-event-card-list";
const cardClass = "as-event-card";
export default defineComponent({
  props: {
    cols: {
      type: Number,
      default: 4,
    },
  },
  setup(props) {
    const { cols } = toRefs(props);
    const calcCols = computed(() => {
      return cols.value === 2 ? "w-[49%]" : "w-1/3";
    });
    const hasCols = computed(() => {
      return cols.value === 2 ? "flex-wrap justify-between" : "flex-nowrap";
    });
    return {
      baseClass,
      cardClass,
      calcCols,
      hasCols,
    };
  },
});
</script>
