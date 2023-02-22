<template>
  <Transition appear>
    <vimeo-player
      ref="videoPlayerEl"
      @ready="videoPlayerEl && videoPlayerEl.play()"
    />
  </Transition>
</template>
<script lang="ts">
import  Modal from '~/components/VueFinalModal/Modal.vue'
import type { PropType } from 'vue'
import { Video } from '~/components/Video/Video.ts'

export default defineComponent({
    components:{
        Modal
    },
    props: {
    videos: { type: Array as PropType<Video[]>, default: () => [] },
    title: { type: String, default: '' },
  },

  setup() {
    const selectedVideo = ref<Video>()
    const shouldRenderVideoModal = ref(false)
    const videoPlayerEl = ref<HTMLVideoElement>()
    function showVideo(video: Video) {
      selectedVideo.value = video
      shouldRenderVideoModal.value = true
      videoPlayerEl.value?.play()
    }

    function hideVideo() {
      videoPlayerEl.value?.pause()
      shouldRenderVideoModal.value = false
    }

    return {
      showVideo,
      hideVideo,
      selectedVideo,
      shouldRenderVideoModal,
      videoPlayerEl
    }
  },
})
</script>

<style lang="scss" scoped>
.fade-button-leave-to {
  opacity: 0;
}
</style>
