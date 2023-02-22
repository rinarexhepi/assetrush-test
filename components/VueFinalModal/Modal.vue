<template>
  <div
    class=" w-screen h-screen bg-slate-800 bg-opacity-40 "
    v-if="showModal"
    @click="closeModal()"
  >
    <button @click="closeModal()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="30px"
        height="30px"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"
        />
      </svg>
    </button>
    <div class="m-20 bg-slate-900 text-white z-20 rounded-lg" @click.stop>
      <slot />
      <div>
        <h2 v-if="title" class="text-3xl">{{ title }}</h2>
        <p v-if="description" class="text-lg">{{ description }}</p>
        <NuxtLink
          v-if="cta"
          class="border absolute bg-slate-900 p-3 rounded-xl"
          href=""
          >{{ cta }}</NuxtLink
        >
        <Transition>
          <VideoTestimonials
            :options="{ responsive: true }"
            class="m-16 w-full z-0 "
            video-url=""
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    cta: {
      type: String,
      default: "",
    },
    showModal: {
      type: Boolean,
      default: "false",
    },
  },
  emits: ["close-modal"],
  setup(_, { emit }) {
    const shouldCloseModal = ref(true);

    function closeModal() {
      shouldCloseModal.value = false;
      emit("close-modal");
    }
    return {
      shouldCloseModal,
      closeModal,
    };
  },
});
</script>
