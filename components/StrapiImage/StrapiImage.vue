<template>
  <NuxtImg
    :width="image.width"
    :height="image.height"
    :format="isSvg ? undefined : 'webp'"
    :preload="preload"
    :loading="loading"
    :fetchpriority="loading === 'lazy' ? 'low' : 'high'"
    :decoding="loading === 'lazy' ? 'async' : 'sync'"
    :alt="image.alternativeText || ''"
    class="select-none"
  />
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Image, ImageFormat } from '~/types'
import { AspectRatio } from './aspectRatio'
import { Loading } from './loading'
export default defineComponent({
  props: {
    image: { type: Object as PropType<Image>, required: true },
    size: { type: String as PropType<keyof ImageFormat>, default: 'small' },
    preload: { type: Boolean, default: false },
    loading: { type: String as PropType<Loading>, default: 'lazy' },
    aspectRatio: { type: String as PropType<AspectRatio>, default: ''},
  },
  setup(props) {
    const isSvg = computed(() => props.image.ext === '.svg')
    const urlForPreferredSize = computed(() => props.image.formats?.[props.size]?.url)
    const imagePath = computed(() => {
      if (isSvg.value || !urlForPreferredSize.value) {
        return props.image.url
      }

      return urlForPreferredSize.value
    })
    return { isSvg, imagePath }
  },
})
</script>
