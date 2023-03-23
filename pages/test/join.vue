<template>
  <div class="bg-primary">
    <Hero></Hero>
    <Ticker />
    <div class="container mx-auto">
      <div class="max-w-screen-lg pt-14 pb-28 mx-auto">
        <h3 class="text-4xl text-white font-gtplanar">
          Join the future of finance — register to present at a future event,
          publish your innovation in Pulse, or be featured as Philippe’s guest
          in AssetRushTalk.
        </h3>
      </div>
    </div>
    <div class="bg-primary container mx-auto">
      <div class="flex flex-col pb-44">
        <details class="bg-white px-12 py-20 rounded-lg">
          <summary class="text-8xl text-blue-600 font-benet cursor-pointer">
            <div class="flex justify-between items-center">
              <h4 class="flex flex-col">
                <span class="text-2xl text-blue-800/70 font-sans"
                  >Become a</span
                >
                Presneter
              </h4>
              <div class="plus-icon">
                <span></span>
                <span></span>
              </div>
            </div>
          </summary>
          <div
            class="flex justify-between items-center text-2xl text-blue-800/70 pt-20"
          >
            Selected innovators can freely present their ideas and share their
            aspirations to an exclusive audience of investors and market
            professionals.
            <StrapiButton
              class="w-fit mt-auto py-4 px-6"
              buttonVariant="secondary"
              text="Enquire"
            />
          </div>
        </details>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="max-w-screen-md pb-28 mx-auto">
        <div class="card rounded-lg overflow-hidden relative">
          <img
            class="aspect-video"
            src="https://images.squarespace-cdn.com/content/v1/6278bb92688b50292499e115/ac5a57c4-7aaa-4f61-902e-9ca78ded0936/AR-ZH23_Key-Art_no-text.png?format=2500w"
          />
          <div
            class="flex absolute w-1/2 left-0 top-0 h-full backdrop-blur-sm bg-opacity-60 z-10"
          >
            <div
              class="absolute w-full h-full bg-gradient-to-b from-purple-700 to-pink-500 opacity-80"
            ></div>
            <h4
              class="mt-auto px-6 py-10 font-gtplanar text-2xl uppercase text-white z-10"
            >
              Marketing team
            </h4>
          </div>
          <StrapiButton
            class="w-fit mt-auto py-4 px-6 absolute right-6 bottom-6"
            buttonVariant="secondary"
            text="Contact"
          />
        </div>
      </div>
    </div>
    <Subscription />
  </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>

<style scoped lang="scss">
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}

details {
  &[open] {
    summary ~ * {
      animation: toggle 0.3s ease-in-out;

      @keyframes toggle {
        0% {
          opacity: 0;
          transform: translateY(-10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }

    .plus-icon span:last-of-type {
      transform: rotate(-90deg) translate(-50%, 0%);
      top: -1px;
      opacity: 0;
    }
  }
  .plus-icon {
    width: 30px;
    height: 30px;
    position: relative;

    span {
      background-color: black;
      position: absolute;

      &:first-of-type {
        width: 100%;
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-of-type {
        height: 100%;
        width: 2px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
      }
    }
  }
}
</style>
