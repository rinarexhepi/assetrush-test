<template>
  <div class="flex lg:flex-row flex-col w-full justify-around my-10 gap-16">
    <div class="flex flex-col flex-1 gap-8">
      <div class=" flex flex-col">
        <Headline level="h6" headingVariant="subtitles"
          >AssetRush pulse newsletter</Headline
        >
        <p class="text-md text-white">
          stay in the loop with our monthly newsletter
        </p>
      </div>
      <div class="flex lg:flex-row flex-col gap-2 sm:px-10 ">
        <input
          type="text"
          placeholder="Your Email Address"
          name="email"
          id=""
          class="rounded-full border-2 py-3 px-7 border-slate-600 bg-transparent"
        />
        <StrapiButton buttonVariant="primary" text="Subscribe" />
      </div>
    </div>
    <div class="flex lg:flex-row flex-col flex-1 items-center gap-4">
      <Headline
        class="flex-1"
        level="h5"
        headingVariant="pastARPresenters"
        text="Asset Rush on Youtube"
      />
      <img
        class="flex-1 flex shrink-0  h-[65px]"
        src="~/assets/img/youtube.png"
        alt="youtube"
      />
    </div>
  </div>
</template>
