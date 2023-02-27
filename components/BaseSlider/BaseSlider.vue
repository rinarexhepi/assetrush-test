<template>
  <div class="slider-container">
    <div class="mb-6">
      <!-- HACK: v-if is a work-around for https://github.com/gs-shop/vue-slick-carousel/issues/214#issuecomment-1044351228 -->
      <VueSlickCarousel
        v-if="$slots.default && $slots.default.length"
        v-bind="config"
        ref="sliderEl"
      >
        <div v-for="card in cards">
          <slot :card="card"></slot>
        </div>
      </VueSlickCarousel>
    </div>
    <div
      class="slider-arrows mt-atuo flex flex-row gap-3"
      :class="sliderArrowsClass"
    >
      <button @click="showPrev">
        <LeftEncircled class="w-10 h-10" />
      </button>
      <button @click="showNext">
        <RightEncircled class="w-10 h-10" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { vueSlickCarouselConfig } from './const.ts'
import {VueSlickConfig} from './vueSlickConfig'

interface VueSlickResponsive {
  breakpoint?: number
  settings?: VueSlickConfig
}

export default defineComponent({
  props: {
    cards: {
        type: Array,
        required: true
    },
    config: {
      type: Object as PropType<VueSlickConfig>,
      default: () => vueSlickCarouselConfig,
    },
    sliderArrowsClass: {
      type: Array,
      default: () => [],
    },
    class: {
        type: String,
        default: ''
    }
  },
  setup() {
    const sliderEl = ref()
     function showPrev() {
      sliderEl.value?.prev()
    }

    function showNext() {
      sliderEl.value?.next()
    }
    return { sliderEl, showPrev, showNext }
  },
})
</script>

<style lang="scss" scoped>
:deep(.slick-list) {
  overflow: visible;
}
</style>
