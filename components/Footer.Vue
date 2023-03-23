<!-- <template>
  <section>
    <div
      class="relative flex flex-col items-center gap-6 lg:px-96 md:px-36 px-20 bg-indigo-900"
    >
      <div class="text-white flex lg:flex-row flex-col lg:gap-8 w-full py-5">
        <div class="lg:w-1/5 w-auto float-left">
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
          <ul class="flex lg:flex-col">
            <li class="p-1">
              <NuxtLink to="pulse">Pulse</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/5">
          <ul class="flex lg:flex-col">
            <li class="p-1">
              <NuxtLink to="all-events">Events</NuxtLink>
            </li>
            <li class="p-1">
              <NuxtLink to="talk">Talk</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/5">
          <ul class="flex lg:flex-col flex-row">
            <li class=" p-1">
              <NuxtLink to="about">About Us</NuxtLink>
            </li>
            <li class=" p-1">
              <NuxtLink to="contact-us">Contact</NuxtLink>
            </li>
            <li class=" p-1">
              <NuxtLink to="join">Join</NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="relative bg-gray-900 bg-opacity-40 w-[180px] h-full py-5 px-7 rounded-full"
        >
          <ul class="flex lg:flex-row gap-3 items-center">
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[20px]"
                  src="~/assets/img/icon-social--envelope.png"
                  alt=""
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[20px]"
                  src="~/assets/img/icon-social--map.png"
                  alt=""
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[20px]"
                  src="~/assets/img/icon-social--linkedin.png"
                  alt=""
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <img
                  class="max-w-[20px]"
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
</template> -->
<template>
  <footer class="bg-primary py-24">
    <div class="container mx-auto flex gap-6">
      <div
        class="flex flex-col w-2/4 font-gtplanar gap-6 text-sm text-white pr-12"
      >
        <div>
          <img
            width="240"
            src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/627a135b3083d16e1742ea7c/1652167515610/logo-full.png"
          />
          <span class="text-xs">powered by GenTwo</span>
        </div>
        <p>
          © 2018–2023 All rights reserved <br />
          Privacy Policy & Disclaimer
        </p>
        <p class="text-white/60">
          <span class="block text-white">Contact Us</span>
          Brandschenkestrasse 45, 8002 Zurich
          <a class="hover:text-white block" href="tel:+41 44 512 75 00"
            >+41 44 512 75 00</a
          >
        </p>
      </div>
      <div class="w-1/4">
        <ul class="flex flex-col gap-2 text-sm text-white font-gtplanar">
          <li>
            <a href="#">Pulse</a>
          </li>
        </ul>
      </div>
      <div class="w-1/4">
        <ul class="flex flex-col gap-2 text-sm text-white font-gtplanar">
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Talk</a>
          </li>
        </ul>
      </div>
      <div class="w-1/4">
        <ul class="flex flex-col gap-2 text-sm text-white font-gtplanar">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Join</a>
          </li>
        </ul>
      </div>
      <div class="w-1/4">
        <ul class="flex gap-1 py-4 px-6 bg-white/20 rounded-full">
          <li>
            <a href="#">
              <img
                class="w-1/2 mx-auto object-contain"
                src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/629723a21f1bdc42f0372d10/1654072226614/icon-social--envelope.png"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                class="w-1/2 mx-auto object-contain"
                src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/629723da23afb408ee9c89b9/1654072282553/icon-social--map.png"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                class="w-1/2 mx-auto object-contain"
                src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6297241c6e1669281164b64f/1654072348661/icon-social--linkedin.png"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                class="w-1/2 mx-auto object-contain"
                src="https://static1.squarespace.com/static/6278bb92688b50292499e115/t/6297244cb52818388b9fa7d6/1654072396270/icon-social--youtube.png"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
