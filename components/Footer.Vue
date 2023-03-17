<template>
  <section>
    <div
      class="relative flex flex-col items-center gap-6 lg:px-96 md:px-36 px-20 bg-indigo-900"
    >
      <div class="text-white flex lg:flex-row flex-col lg:gap-8 w-full py-5">
        <div class="lg:w-1/5 w-full float-left">
          <ul class="flex flex-col lg:gap-2 gap-5">
            <li>
              <img src="~/assets/img/logo-full.png" alt="" />
            </li>
            <li class="flex flex-col">
              <span>© 2018–2022 All rights reserved</span>
              <NuxtLink to="">Privacy Policy & Disclaimer</NuxtLink>
            </li>
            <li class="flex flex-col">
              <span>Contact Us</span>
              <span class="text-gray-400"
                >Brandschenkestrasse 45, 8002 Zurich +41 44 512 75 00
              </span>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/5">
          <ul class="flex lg:flex-col ">
            <li>
              <NuxtLink to="">Pulse</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/5">
          <ul class="flex lg:flex-col">
            <li>
              <NuxtLink to="">Events</NuxtLink>
            </li>
            <li>
              <NuxtLink to="">Talk</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/5">
          <ul>
            <li class="flex lg:flex-col">
              <NuxtLink to="">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="">Join</NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="relative bg-gray-900 bg-opacity-40 w-[200px] h-full py-5 px-7 rounded-full"
        >
          <ul class="flex lg:flex-row gap-3 items-center">
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[25px]"
                  src="~/assets/img/icon-social--envelope.png"
                  alt=""
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[25px]"
                  src="~/assets/img/icon-social--map.png"
                  alt=""
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[25px]"
                  src="~/assets/img/icon-social--linkedin.png"
                  alt=""
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[25px]"
                  src="~/assets/img/icon-social--youtube.png"
                  alt=""
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
