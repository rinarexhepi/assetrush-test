<template>
  <div class="bg-primary">
    <Hero></Hero>
    <div class="container mx-auto pb-24">
      <div class="flex flex-col gap-12 pt-14 pb-24 mx-auto">
        <h3 class="text-4xl text-white font-gtplanar">
          In collaboration with:
        </h3>
        <img
          class="w-1/4"
          src="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/c40711a1-9442-44e9-ae27-17ce056ef330/MicrosoftTeams-image+%282%29.png?format=750w"
        />
      </div>
      <div class="flex">
        <div class="flex text-white text-2xl uppercase gap-0.5">
          <a href="#episode" class="bg-secondary px-6 py-2 rounded-l-full"
            >Block 1</a
          >
          <a class="bg-secondary px-6 py-2 rounded-r-full" href="#">Block 2</a>
        </div>
      </div>
    </div>
    <div class="container mx-auto pb-24">
      <div class="flex flex-col">
        <div
          class="as-card-horizontal relative flex rounded-2xl overflow-hidden hover:bg-white/5 transition-all hover:scale-105 duration-300"
        >
          <div class="flex flex-col w-1/2 p-10 z-10 gap-20 relative">
            <div
              class="w-full h-full absolute left-0 top-0 bg-custom-gradient opacity-80 -z-10"
            ></div>
            <p class="font-benet text-white text-4xl whitespace-normal pr-24">
              «Banks have shied away from this opportunity.»
            </p>
            <div class="flex flex-col font-gtplanar gap-2">
              <img
                class="w-1/4"
                src="https://images.squarespace-cdn.com/content/6278bb92688b50292499e115/0a16b440-9848-4cc9-9840-589b8be7c427/EFG_Official.png?content-type=image%2Fpng"
              />
              <h4 class="text-white text-2xl">DANIEL IOANNIS ZÜRCHER</h4>
              <p class="text-white text-2xl mb-4">
                Global Head Independent Asset Managers
              </p>
              <a href="#">
                <img
                  width="25"
                  src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6297241c6e1669281164b64f/1654072348661/icon-social--linkedin.png"
                />
              </a>
            </div>
            <StrapiButton
              class="w-fit mt-auto"
              buttonVariant="third"
              text="More info"
            />
          </div>
          <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            src="https://images.squarespace-cdn.com/content/6278bb92688b50292499e115/25bec6c4-5b36-43db-91b2-23e546b8b1e7/Daniel+zuercher_EFG.jpg?content-type=image%2Fjpeg"
          />
          <div
            class="w-1/2 flex justify-center items-center rounded-l-2xl overflow-hidden relative"
          >
            <div
              class="wistia_embed wistia_async_5fjfkrkerq popover=true cursor-pointer popoverContent=html"
              style="display:inline-block; white-space:nowrap;"
              id="wistia-5fjfkrkerq-1"
            >
              <img
                src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/627b648217bdad7dd91bba40/1652253826023/icon--event-play.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto pb-44">
      <div class="flex flex-wrap gap-6 justify-between">
        <div>
          <iframe
            width="580"
            height="390"
            src="https://www.youtube.com/embed/yt_tESlnYG0?controls=0&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=yt_tESlnYG0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-gtm-yt-inspected-9="true"
          ></iframe>
        </div>
        <div>
          <iframe
            width="580"
            height="390"
            src="https://www.youtube.com/embed/yt_tESlnYG0?controls=0&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=yt_tESlnYG0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-gtm-yt-inspected-9="true"
          ></iframe>
        </div>
        <div>
          <iframe
            width="580"
            height="390"
            src="https://www.youtube.com/embed/yt_tESlnYG0?controls=0&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=yt_tESlnYG0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-gtm-yt-inspected-9="true"
          ></iframe>
        </div>
        <div>
          <iframe
            width="580"
            height="390"
            src="https://www.youtube.com/embed/yt_tESlnYG0?controls=0&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=yt_tESlnYG0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-gtm-yt-inspected-9="true"
          ></iframe>
        </div>
      </div>
      <StrapiButton
        class="w-fit flex py-4 px-6 mt-24 mx-auto"
        buttonVariant="primary"
        text="View more"
      />
    </div>
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
