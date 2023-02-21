<template>
  <Transition name="fade-video" appear>
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
::v-deep .description p {
  @apply text-xl md:text-2xl;
}
::v-deep .vodal-dialog {
  background: linear-gradient(301deg, #1e2021 0.02%, #0d0e0f 100%) !important;
  border-radius: 25px !important;
  padding: 30px !important;
  display: flex !important;
  flex-direction: column;
  align-items: center !important;
  justify-content: center !important;
  max-width: 1536px;
}

.fade-video-enter-active,
.fade-video-leave-active {
  transition: all 0.11s ease-in-out;
}
.fade-button-enter-active,
.fade-button-leave-active {
  transition: all 0.8s cubic-bezier(1, -0.53, 0.28, 0.98);
}

.fade-video-enter-from,
.fade-video-leave-to,
.fade-button-enter,
.fade-button-leave-to {
  opacity: 0;
}
</style>
