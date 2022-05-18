<template>
  <div
    v-observe-visibility="visibilityChanged"
    class="block object-cover min-w-full"
  >
    <strip position="1" @mute="a7a()" @repeat="a7tean()" />

    <audio ref="a1" src="/videos/audio.mp3" loop autoplay="autoplay"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible == true) {
        this.$refs.a1.currentTime = 6000

        this.$refs.a1.play()
      } else {
        this.$refs.a1.pause()
      }
    },
    a7a() {
      this.audioPlayer.muted = !this.audioPlayer.muted
    },
    a7tean() {
      this.audioPlayer.currentTime = 0
      this.audioPlayer.muted = false
    },
  },
  mounted() {
    this.audioPlayer = this.$el.querySelectorAll('audio')[0]
  },
}
</script>

<style></style>
