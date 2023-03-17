<template>
  <div class="py-10 flex flex-row justify-center gap-8 w-full">
    <div class="flex flex-col gap-8">
      <div class=" flex flex-col w-full">
        <Headline level="h6" headingVariant="subtitles"
          >AssetRush pulse newsletter
        </Headline>
        <p class="text-md text-white">
          stay in the loop with our monthly newsletter
        </p>
      </div>
      <div class="flex lg:flex-row flex-col gap-2">
        <input
          type="text"
          placeholder="Your Email Address"
          name="email"
          id=""
          class="rounded-full border-2 py-3 px-7 border-slate-600 bg-transparent"
        />
        <StrapiButton buttonVariant="primary" text="Subscribe" class="w-max" />
      </div>
    </div>
    <div class=" flex  lg:flex-row flex-col items-center gap-4  ">
      <Headline level="h5" headingVariant="pastARPresenters"
        >Asset Rush on Youtube</Headline
      >
      <img
        class="flex shrink-0  h-[65px]"
        src="~/assets/img/youtube.png"
        alt="youtube"
      />
    </div>
  </div>
</template>
