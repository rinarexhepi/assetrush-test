<template>
  <div class="slider-container">
    <div class="mb-6">
      <Splide ref="splideEl" :options="splideOptions"> <slot></slot> </Splide>
    </div>
    <div
      class="slider-arrows mt-auto flex flex-row gap-3"
      :class="sliderArrowsClass"
    >
      <button @click="showPrev">
        <SvgLeftEncircled :class="leftArrowClass" />
      </button>
      <button @click="showNext">
        <SvgRightEncircled :class="rightArrowClass" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Splide } from '@splidejs/splide'
import type { PropType } from 'vue'

export const slideComponentName = 'SplideSlide'

export interface SplideOptions {
    speed: number
    autoplay: boolean
    interval: number
    rewind: boolean
    perMove: number
    perPage: number
    breakpoints: Record<string | number, { perPage: number }>
}

const splideFixedOptions = {
  arrows: false,
  pagination: false
}

const splideDefaultOptions: SplideOptions = {
  speed: 600,
  autoplay: false,
  interval: 5000,
  rewind: false,
  perMove: 1,
  perPage: 3,
  breakpoints: {
    1280: { perPage: 2 },
    640: { perPage: 1 },
  },
}

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<SplideOptions>,
      default: () => splideDefaultOptions,
    },
    sliderArrowsClass: {
      type: Array,
      default: () => [],
    },
    class: {
      type: String,
      default: ''
    },
    leftArrowClass: {
      type: String ,
      default: ''
   },
    rightArrowClass: {
      type: String,
      default: ''
   }
  },
  setup(props) {
    const splideEl = ref<Splide>()
    const splideOptions = { ...splideFixedOptions, ...props.options}

     function showPrev() {
      splideEl.value?.go('<')
    }

    function showNext() {
      splideEl.value?.go('>')
    }
    return { splideEl, showPrev, showNext, splideOptions }
  },
})
</script>

<style lang="scss" scoped>
:deep(.splide__track) {
  @apply overflow-visible;
}
</style>
