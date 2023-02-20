<template>
  <div
    class=" w-screen h-screen bg-slate-800 bg-opacity-40"
    v-if="showModal"
    @click="closeModal()"
  >
    <button @click="closeModal()">
      <i>X</i>
    </button>
    <div class="m-20 bg-red-100" @click.stop>
      <slot />
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
