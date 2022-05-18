<template>
  <div>
    <div
      @click="togglePlayer"
      :disabled="showPlayer"
      :class="disableButton ? 'opacity-25' : 'opacity-100'"
      class="flex flex-col items-center content-center justify-between mt-5 mb-5"
    >
      <div
        class="flex items-center content-center justify-center w-20 h-20 bg-gray-400 rounded-full cursor-pointer hover:shadow-2xl"
      >
        <svg class="w-8 ml-1" version="1.1" viewBox="0 0 22 28">
          <path
            d="M440.415,583.554l-18.997,-12.243c-1.127,-0.607 -2.418,-0.544 -2.418,1.635v24.108c0,1.992 1.385,2.306 2.418,1.635l18.997,-12.243c0.782,-0.799 0.782,-2.093 0,-2.892"
            transform="matrix(1,0,0,1,-419,-571)"
            fill-rule="evenodd"
            fill="#000"
            stroke="none"
          />
        </svg>
      </div>
      <div class="flex flex-col items-center content-center justify-center">
        <p class="mt-2">
          {{ $t('audioPlyrCaption') }}
        </p>
        <p class="mt-1 font-nassimRegular">{{ $t('audioPlyrVOName') }}</p>
        <p>01:45</p>
      </div>
    </div>
    <div
      @click="pause()"
      @mouseover="active = true"
      @mouseleave="active = false"
      :class="showPlayer ? 'block' : 'hidden'"
      class="child"
    >
      <audio ref="audio1" src="/maher.mp3" @timeupdate="onTimeUpdate" hidden />
      <div
        v-if="playing"
        :class="active ? 'w-64' : 'w-16'"
        class="flex flex-row items-center justify-center h-16 ml-8 text-black bg-gray-300 rounded-full"
      >
        <p :class="active ? 'hidden' : 'block'">
          - {{ convertTime(fullDuration - currentTime) }}
        </p>
        <div
          :class="active ? 'flex' : 'hidden'"
          class="flex-row items-center content-center justify-center"
        >
          <svg
            class="h-8 text-white"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g fill="#000">
              <path
                d="M9 19c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1 .6 0 1 .4 1 1v12c0 .6-.4 1-1 1Z"
              />
              <path
                d="M15 19c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1 .6 0 1 .4 1 1v12c0 .6-.4 1-1 1Z"
              />
            </g>
          </svg>
          <p class="cursor-pointer"><!-- TEXT HERE --></p>
        </div>
      </div>
      <div
        @click="playAudio()"
        class="flex flex-row items-center justify-center w-16 h-16 ml-8 text-black bg-gray-300 rounded-full cursor-pointer"
        v-if="!playing"
      >
        <svg class="w-8 ml-1" version="1.1" viewBox="0 0 22 28">
          <path
            d="M440.415,583.554l-18.997,-12.243c-1.127,-0.607 -2.418,-0.544 -2.418,1.635v24.108c0,1.992 1.385,2.306 2.418,1.635l18.997,-12.243c0.782,-0.799 0.782,-2.093 0,-2.892"
            transform="matrix(1,0,0,1,-419,-571)"
            fill-rule="evenodd"
            fill="#000"
            stroke="none"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: 0,
      fullDuration: 0,
      showPlayer: false,
      disableButton: false,
      audiopaused: false,
      active: false,
      playing: null,
    }
  },
  methods: {
    onTimeUpdate() {
      this.fullDuration = this.$refs.audio1.duration
      this.currentTime = this.$refs.audio1.currentTime
    },
    play() {
      this.showPlayer = !this.showPlayer
      this.disableButton = !this.disableButton
      this.$refs.audio1.volume = 1.5
      return this.$refs.audio1.play()
    },
    pause() {
      this.playing = false
      this.$refs.audio1.pause()
      setTimeout(() => {
        this.showPlayer = false
        this.disableButton = false
      }, 10000)
    },
    playAudio() {
      console.log('clicked play audio')
      this.playing = true
      this.$refs.audio1.play()
    },
    togglePlayer() {
      this.playing = true
      this.$refs.audio1.play()
      this.showPlayer = !this.showPlayer
      this.disableButton = !this.disableButton
    },
    convertTime(seconds) {
      const format = (val) => `0${Math.floor(val)}`.slice(-2)
      var minutes = (seconds % 3600) / 60
      return [minutes, seconds % 60].map(format).join(':')
    },
  },
}
</script>

<style>
.vueplayer {
  width: 700px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.child {
  position: -webkit-sticky;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 20%;
  z-index: 9999;
}
</style>
