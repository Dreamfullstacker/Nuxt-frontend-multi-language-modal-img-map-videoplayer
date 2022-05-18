<template>
  <div>
    <div
      v-observe-visibility="visibilityChanged"
      class="relative z-40 flex items-center content-center justify-center"
    >
      <video
        preload="metadata"
        class="w-screen bluur"
        ref="interview"
        autoplay="autoplay"
        loop
        muted
      >
        <source src="/videos/invisible_maids_.mp4" type="video/mp4" />
        <source src="/videos/invisible_maids_.mp4" type="video/mp4" />
        <source src="/videos/invisible_maids_.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interviewaudio: true,
      interviewrepeat: false,
    }
  },
  props: {},
  methods: {
    startInterview() {
      this.$refs.interview.muted = !this.$refs.interview.muted
      this.interviewaudio = false
      this.interviewrepeat = true
    },
    repeatInterview() {
      setTimeout(() => {
        this.$refs.interview.currentTime = 0
        this.$refs.interview.play()
      }, 500)
    },
    interviewFullscreen() {
      this.$refs.interview.requestFullscreen()
    },
    visibilityChanged(isVisible, entry) {
      if (isVisible == true) {
        this.$refs.interview.play()
      } else {
        this.$refs.interview.pause()
      }
    },
  },
  mounted() {
    this.$refs.interview.play()
  },
}
</script>

<style scoped>
video {
  -webkit-filter: blur(10px); /* Chrome, Safari, Opera */
  filter: blur(10px);
}

video:hover {
  -webkit-filter: blur(0px); /* Chrome, Safari, Opera */
  filter: blur(0px);
}
</style>
