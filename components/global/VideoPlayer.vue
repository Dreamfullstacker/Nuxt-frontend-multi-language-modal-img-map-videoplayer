<template>
  <div
    v-observe-visibility="visibilityChanged"
    class="relative z-40 flex items-center content-center justify-center"
  >
    <button
      @click="repeatInterview"
      :class="interviewrepeat ? 'block' : 'hidden'"
      class="absolute z-40 flex flex-row items-center invisible px-4 py-2 mr-20 font-semibold text-white bg-transparent border border-gray-400 rounded shadow fill-current sm:visible sm:mt-48 sm:top-0 sm:right-0 hover:text-black hover:bg-gray-100"
    >
      <svg
        class="w-5 mr-4"
        version="1.1"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M4 0c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88 -1.66 0-3-1.34-3-3 0-1.66 1.34-3 3-3 .83 0 1.55.36 2.09.91l-1.09 1.09h3v-3l-1.19 1.19c-.72-.72-1.71-1.19-2.81-1.19Z"
        /></svg
      >{{ $t('RepeatInterview') }}
    </button>

    <button
      @click="interviewFullscreen"
      :class="interviewrepeat ? 'block' : 'hidden'"
      class="absolute z-40 flex flex-row items-center invisible px-4 py-2 ml-20 font-semibold text-white bg-transparent border border-gray-400 rounded shadow fill-current sm:visible sm:mt-48 sm:top-0 sm:left-0 hover:text-black hover:bg-gray-100"
    >
      <svg
        class="w-8 mr-4"
        version="1.1"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0 0h18v18h-18Z" fill="none"></path>
        <path
          d="M4.5 11h-1.5v4h4v-1.5h-2.5v-2.5Zm-1.5-4h1.5v-2.5h2.5v-1.5h-4v4Zm10.5 6.5h-2.5v1.5h4v-4h-1.5v2.5Zm-2.5-10.5v1.5h2.5v2.5h1.5v-4h-4Z"
        ></path>
      </svg>
      {{ $t('FullScreen') }}
    </button>
    <video
      v-if="this.$i18n.locale === 'en'"
      preload="metadata"
      class="w-screen"
      ref="interview"
      autoplay="autoplay"
      loop
      muted
    >
      <source :src="videoSrc" type="video/mp4" />
      <source :src="videoSrc" type="video/mp4" />
      <source :src="videoSrc" type="video/mp4" />
      <track
        label="English"
        kind="subtitles"
        srclang="en"
        :src="videoSubEN"
        default
      />

      Your browser does not support the video tag.
    </video>

    <video
      v-if="this.$i18n.locale === 'ar'"
      preload="metadata"
      class="w-screen"
      ref="interview"
      autoplay="autoplay"
      loop
      muted
    >
      <source :src="videoSrc" type="video/mp4" />
      <source :src="videoSrc" type="video/mp4" />
      <source :src="videoSrc" type="video/mp4" />
      <track
        label="Arabic"
        kind="subtitles"
        srclang="ar"
        :src="videoSubAR"
        default
      />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interviewaudio: true,
      interviewrepeat: true,
    }
  },
  props: {
    videoSrc: {
      type: String,
    },
    videoSubEN: {
      type: String,
    },

    videoSubAR: {
      type: String,
    },
  },
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
        this.$refs.interview.muted = false
      } else {
        this.$refs.interview.muted = true
      }
    },
  },
}
</script>

<style></style>
