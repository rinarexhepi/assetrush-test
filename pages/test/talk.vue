<template>
  <div class="bg-primary">
    <Hero :card="true"></Hero>
    <Ticker />
    <!-- simple desc with buttons -->
    <div class="container mx-auto">
      <div class="max-w-screen-md pt-20 mx-auto">
        <h3 class="text-4xl text-white font-gtplanar">
          Join Philippe A. Naegeli and Martha Boeckenfeld for a stimulating
          exchange — from AI-based market forcasts to the role of neuroscience
          in asset management — with leading FinTech innovators.
        </h3>
        <div class="flex justify-center mt-36">
          <div class="flex text-white text-2xl uppercase gap-0.5">
            <a href="#episode" class="bg-secondary px-6 py-2 rounded-l-full"
              >Episode guide</a
            >
            <a class="bg-secondary px-6 py-2 rounded-r-full" href="#"
              >Subscribe</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- horizontal cards -->
    <div class="container mx-auto pb-44" id="eposide">
      <Headline level="h3" headingVariant="subtitles" class="py-16 mt-8"
        >Latest & Upcoming Events</Headline
      >
      <div class="flex flex-col">
        <div
          class="wistia_embed wistia_async_5fjfkrkerq popover=true popoverContent=html"
          style="width: 100% !important"
          id="wistia-5fjfkrkerq-1"
        >
          <div
            class="as-card-horizontal relative flex rounded-2xl overflow-hidden hover:bg-white/5 hover:cursor-pointer transition-all hover:scale-105 duration-300"
          >
            <div class="flex flex-col w-1/2 p-6">
              <div class="flex flex-col font-gtplanar gap-2 mb-36">
                <span class="text-gray-400 text-lg uppercase">Episode 35</span>
                <h4 class="text-white text-4xl mb-4">Trevor Skidmore</h4>
                <p class="text-gray-400 text-2xl">
                  Strategic Projects at Open Mineral AG
                </p>
              </div>
              <StrapiButton
                class="w-fit mt-auto"
                buttonVariant="third"
                text="Play"
              />
            </div>
            <div class="w-1/2 rounded-l-2xl overflow-hidden relative">
              <div
                class="w-1/2 h-full absolute left-0 top-0 bg-custom-gradient opacity-80"
              ></div>
              <p
                class="w-7/12 absolute bottom-6 left-6 font-benet text-white text-5xl whitespace-normal"
              >
                «Banks have shied away from this opportunity.»
              </p>
              <img
                class="w-full h-full object-cover"
                src="https://www.g2fp.com/hubfs/trevor.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Subscription />
    <BannerBoxList />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    onMounted(() => {
      const wistiaScript = document.createElement("script");
      wistiaScript.setAttribute("async", "");
      wistiaScript.setAttribute("defer", "");

      wistiaScript.setAttribute(
        "src",
        `https://fast.wistia.com/assets/external/E-v1.js`
      );
      document.body.appendChild(wistiaScript);
    });
  },
});
</script>
