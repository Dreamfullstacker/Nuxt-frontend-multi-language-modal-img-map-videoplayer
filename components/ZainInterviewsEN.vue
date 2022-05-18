<template>
  <div class="flex flex-col mt-5 mb-5 sm:flex-row">
    <div class="m-3">
      <div
        @mouseenter="InsideFrameIndia = true"
        @mouseleave="InsideFrameIndia = false"
        class="relative z-40 flex items-center content-center justify-center"
      >
        <button
          @click="startIndia"
          :class="Indiaaudio ? 'block' : 'hidden'"
          class="absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black"
        >
          {{ $t('PlayInterview') }}
        </button>
        <div class="absolute bottom-0 z-40 mb-10 mr-5">
          <div v-if="InsideFrameIndia" class="z-50 flex flex-row items-center">
            <div :class="Indiarepeat ? 'block' : 'hidden'">
              <svg
                :class="IndiaMute ? 'hidden' : 'block'"
                @click="muteIndia"
                class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"
                />
              </svg>

              <svg
                :class="IndiaMute ? 'block' : 'hidden'"
                @click="playIndia"
                class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M16 21c3.52-1.55 5.99-4.91 5.99-9 0-4.1-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 2.95-1.62 5.61-4 7v2Z"
                  />
                  <path
                    d="M16 7v10c1.22-1.1 2-3.23 2-5 0-1.78-.78-3.9-2-5ZM4 17h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-16c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L6.67 6.97h-2.7c-1.11 0-2 .89-2 2v6c0 1.1.89 2 2 2Zm0-8h3c.03 0 .06-.02.09-.02 .06-.01.125-.02.18-.04 .06-.03.13-.05.19-.08 .02-.02.05-.02.08-.04l4.445-2.97v12.264l-4.445-2.97c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6Z"
                  />
                </g>
              </svg>
            </div>

            <svg
              @click="repeatIndia"
              :class="Indiarepeat ? 'block' : 'hidden'"
              class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"
              />
            </svg>

            <svg
              @click="indiaFullscreen"
              :class="Indiarepeat ? 'block' : 'hidden'"
              class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
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
          </div>
        </div>

        <div
          @click="backwardsIndia"
          :class="Indiaaudio ? 'hidden' : 'block'"
          class="absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
        ></div>

        <div
          @click="forwardsIndia"
          :class="Indiaaudio ? 'hidden' : 'block'"
          class="absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
        ></div>

        <video
          preload="metadata"
          class="w-screen"
          ref="india"
          id="indiaac"
          autoplay="autoplay"
          loop
          muted
        >
          <source src="/videos/India.mp4" type="video/mp4" />
          <source src="/videos/India.mp4" type="video/mp4" />
          <source src="/videos/India.mp4" />

          <track
            label="English"
            kind="subtitles"
            srclang="en"
            src="/videos/India.vtt"
            default
          />

          Your browser does not support the video tag. /> Your browser does not
          support the video tag.
        </video>
      </div>
    </div>

    <div class="m-3">
      <div
        @mouseenter="InsideFrameP1 = true"
        @mouseleave="InsideFrameP1 = false"
        class="relative z-40 flex items-center content-center justify-center"
      >
        <button
          @click="startPhillippins1"
          :class="phillippins1audio ? 'block' : 'hidden'"
          class="absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black"
        >
          {{ $t('PlayInterview') }}
        </button>
        <div class="absolute bottom-0 z-40 mb-10 mr-5">
          <div v-if="InsideFrameP1" class="z-50 flex flex-row items-center">
            <div :class="phillippins1repeat ? 'block' : 'hidden'">
              <svg
                @click="mutePhillippins1"
                :class="phillippins1Mute ? 'hidden' : 'block'"
                class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"
                />
              </svg>

              <svg
                :class="phillippins1Mute ? 'block' : 'hidden'"
                @click="playPhillippins1"
                class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M16 21c3.52-1.55 5.99-4.91 5.99-9 0-4.1-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 2.95-1.62 5.61-4 7v2Z"
                  />
                  <path
                    d="M16 7v10c1.22-1.1 2-3.23 2-5 0-1.78-.78-3.9-2-5ZM4 17h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-16c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L6.67 6.97h-2.7c-1.11 0-2 .89-2 2v6c0 1.1.89 2 2 2Zm0-8h3c.03 0 .06-.02.09-.02 .06-.01.125-.02.18-.04 .06-.03.13-.05.19-.08 .02-.02.05-.02.08-.04l4.445-2.97v12.264l-4.445-2.97c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6Z"
                  />
                </g>
              </svg>
            </div>

            <svg
              @click="repeatPhillippins1"
              :class="phillippins1repeat ? 'block' : 'hidden'"
              class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"
              />
            </svg>

            <svg
              @click="phillippins1Fullscreen"
              :class="phillippins1repeat ? 'block' : 'hidden'"
              class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
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
          </div>
        </div>

        <div
          @click="backwardsPhillippins1"
          :class="phillippins1audio ? 'hidden' : 'block'"
          class="absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
        ></div>

        <div
          @click="backwardsPhillippins1"
          :class="phillippins1audio ? 'hidden' : 'block'"
          class="absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
        ></div>

        <video
          preload="metadata"
          class="w-screen"
          ref="phillippins1"
          id="philip1"
          autoplay="autoplay"
          loop
          muted
        >
          <source src="/videos/phillippins1.mp4" type="video/mp4" />
          <source src="/videos/phillippins1.mp4" type="video/mp4" />
          <source src="/videos/phillippins1.mp4" type="video/mp4" />
          <track
            label="English"
            kind="subtitles"
            srclang="en"
            src="/videos/phillippins1.vtt"
            default
          />

          Your browser does not support the video tag. /> Your browser does not
          support the video tag.
        </video>
      </div>
    </div>

    <div class="m-3">
      <div
        @mouseenter="InsideFrameP2 = true"
        @mouseleave="InsideFrameP2 = false"
        class="relative z-40 flex items-center content-center justify-center"
      >
        <button
          @click="startPhillippins2"
          :class="phillippins2audio ? 'block' : 'hidden'"
          class="absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black"
        >
          {{ $t('PlayInterview') }}
        </button>
        <div class="absolute bottom-0 z-40 mb-10 mr-5">
          <div v-if="InsideFrameP2" class="z-50 flex flex-row items-center">
            <div :class="phillippins2repeat ? 'block' : 'hidden'">
              <svg
                @click="mutePhillippins2"
                :class="phillippins2Mute ? 'hidden' : 'block'"
                class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"
                />
              </svg>

              <svg
                :class="phillippins2Mute ? 'block' : 'hidden'"
                @click="playPhillippins2"
                class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M16 21c3.52-1.55 5.99-4.91 5.99-9 0-4.1-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 2.95-1.62 5.61-4 7v2Z"
                  />
                  <path
                    d="M16 7v10c1.22-1.1 2-3.23 2-5 0-1.78-.78-3.9-2-5ZM4 17h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-16c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L6.67 6.97h-2.7c-1.11 0-2 .89-2 2v6c0 1.1.89 2 2 2Zm0-8h3c.03 0 .06-.02.09-.02 .06-.01.125-.02.18-.04 .06-.03.13-.05.19-.08 .02-.02.05-.02.08-.04l4.445-2.97v12.264l-4.445-2.97c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6Z"
                  />
                </g>
              </svg>
            </div>

            <svg
              @click="repeatPhillippins2"
              :class="phillippins2repeat ? 'block' : 'hidden'"
              class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"
              />
            </svg>

            <svg
              @click="phillippins2Fullscreen"
              :class="phillippins2repeat ? 'block' : 'hidden'"
              class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
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
          </div>
        </div>

        <div
          @click="backwardsPhillippins2"
          :class="phillippins2audio ? 'hidden' : 'block'"
          class="absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
        ></div>

        <div
          @click="backwardsPhillippins2"
          :class="phillippins2audio ? 'hidden' : 'block'"
          class="absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
        ></div>

        <video
          preload="metadata"
          class="w-screen"
          ref="phillippins2"
          id="philip2"
          autoplay="autoplay"
          loop
          muted
        >
          <source src="/videos/phillippins2.mp4" type="video/mp4" />
          <source src="/videos/phillippins2.mp4" type="video/mp4" />
          <source src="/videos/phillippins2.mp4" type="video/mp4" />
          <track
            label="English"
            kind="subtitles"
            srclang="en"
            src="/videos/phillippins1.vtt"
            default
          />

          Your browser does not support the video tag. /> Your browser does not
          support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Indiaaudio: true,
      Indiarepeat: false,
      InsideFrameIndia: false,
      InsideFrameP2: false,
      InsideFrameP1: false,
      phillippins1audio: true,
      phillippins1repeat: false,
      phillippins2audio: true,
      phillippins2repeat: false,
      currentTime: 0,
      chapternav: 0,
      indiaPause: false,
      IndiaMute: false,
      phillippins1Mute: false,
      phillippins2Mute: false,
    }
  },

  methods: {
    startIndia() {
      this.indiaShowCaptions()
      this.$refs.phillippins1.muted = true
      this.$refs.phillippins2.muted = true
      this.$refs.india.muted = !this.$refs.india.muted
      this.Indiaaudio = false
      this.Indiarepeat = true
    },

    startPhillippins1() {
      this.phillippins1ShowCaptions()
      this.$refs.india.muted = true
      this.$refs.phillippins2.muted = true
      this.$refs.phillippins1.muted = !this.$refs.phillippins1.muted
      this.phillippins1audio = false
      this.phillippins1repeat = true
    },

    startPhillippins2() {
      this.phillippins2ShowCaptions()
      this.$refs.india.muted = true
      this.$refs.phillippins1.muted = true
      this.$refs.phillippins2.muted = !this.$refs.phillippins2.muted
      this.phillippins2audio = false
      this.phillippins2repeat = true
    },

    repeatIndia() {
      setTimeout(() => {
        this.$refs.phillippins1.muted = true
        this.$refs.phillippins2.muted = true
        this.$refs.india.currentTime = 0
        this.$refs.india.play()
      }, 500)
    },

    repeatPhillippins1() {
      setTimeout(() => {
        this.$refs.india.muted = true
        this.$refs.phillippins2.muted = true
        this.$refs.phillippins1.currentTime = 0
        this.$refs.phillippins1.play()
      }, 500)
    },

    repeatPhillippins2() {
      setTimeout(() => {
        this.$refs.india.muted = true
        this.$refs.phillippins1.muted = true
        this.$refs.phillippins2.currentTime = 0
        this.$refs.phillippins2.play()
      }, 500)
    },

    indiaFullscreen() {
      this.$refs.india.requestFullscreen()
    },

    phillippins1Fullscreen() {
      this.$refs.phillippins1.requestFullscreen()
    },

    phillippins2Fullscreen() {
      this.$refs.phillippins2.requestFullscreen()
    },

    backwardsIndia() {
      this.$refs.india.currentTime = this.$refs.india.currentTime - 5
    },

    backwardsPhillippins1() {
      this.$refs.phillippins1.currentTime =
        this.$refs.phillippins1.currentTime - 5
    },

    backwardsPhillippins2() {
      this.$refs.phillippins2.currentTime =
        this.$refs.phillippins2.currentTime - 5
    },

    forwardsIndia() {
      this.$refs.india.currentTime = this.$refs.india.currentTime + 5
    },

    forwardsPhillippins1() {
      this.$refs.phillippins1.currentTime =
        this.$refs.phillippins1.currentTime + 5
    },

    forwardsPhillippins2() {
      this.$refs.phillippins2.currentTime =
        this.$refs.phillippins2.currentTime + 5
    },

    mutePhillippins2() {
      this.phillippins2Mute = true
      this.phillippins2HideCaptions()

      setTimeout(() => {
        this.$refs.phillippins2.muted = true
      }, 500)
    },

    muteIndia() {
      this.IndiaMute = true
      this.indiaHideCaptions()
      setTimeout(() => {
        this.$refs.india.muted = !this.$refs.india.muted
      }, 500)
    },

    playIndia() {
      this.IndiaMute = false
      this.indiaShowCaptions()
      setTimeout(() => {
        this.$refs.india.muted = !this.$refs.india.muted
      }, 500)
    },

    mutePhillippins1() {
      this.phillippins1Mute = true
      this.phillippins1HideCaptions()

      setTimeout(() => {
        this.$refs.phillippins1.muted = !this.$refs.phillippins1.muted
      }, 500)
    },

    playPhillippins1() {
      this.phillippins1Mute = false
      this.phillippins1ShowCaptions()

      setTimeout(() => {
        this.$refs.phillippins1.muted = !this.$refs.phillippins1.muted
      }, 500)
    },

    playPhillippins2() {
      this.phillippins2Mute = false
      this.phillippins2ShowCaptions()

      setTimeout(() => {
        this.$refs.phillippins2.muted = !this.$refs.phillippins2.muted
      }, 500)
    },

    indiaShowCaptions() {
      var video = document.querySelector('#indiaac')
      function showTracks() {
        for (var i = 0; i < video.textTracks.length; i++) {
          video.textTracks[i].mode = 'showing'
        }
      }
      showTracks()
    },

    indiaHideCaptions() {
      var video = document.querySelector('#indiaac')
      function showTracks() {
        for (var i = 0; i < video.textTracks.length; i++) {
          video.textTracks[i].mode = 'hidden'
        }
      }

      showTracks()
    },

    phillippins1ShowCaptions() {
      var phivideo = document.querySelector('#philip1')
      function showTracks() {
        for (var i = 0; i < phivideo.textTracks.length; i++) {
          phivideo.textTracks[i].mode = 'showing'
        }
      }
      showTracks()
    },

    phillippins1HideCaptions() {
      var phivideo = document.querySelector('#philip1')
      function hideTracks() {
        for (var i = 0; i < phivideo.textTracks.length; i++) {
          phivideo.textTracks[i].mode = 'hidden'
        }
      }
      hideTracks()
    },

    phillippins2ShowCaptions() {
      var phivideo2 = document.querySelector('#philip2')
      function showTracks() {
        for (var i = 0; i < phivideo2.textTracks.length; i++) {
          phivideo2.textTracks[i].mode = 'showing'
        }
      }
      showTracks()
    },

    phillippins2HideCaptions() {
      var phivideo2 = document.querySelector('#philip2')
      function hideTracks() {
        for (var i = 0; i < phivideo2.textTracks.length; i++) {
          phivideo2.textTracks[i].mode = 'hidden'
        }
      }
      hideTracks()
    },
  },
  mounted() {
    var vid = document.querySelector('#indiaac')
    var phivideo2 = document.querySelector('#philip2')
    var phivideo1 = document.querySelector('#philip1')

    function hideTracks() {
      for (var i = 0; i < vid.textTracks.length; i++) {
        vid.textTracks[i].mode = 'hidden'
      }
    }

    function hideTracksPh2() {
      for (var i = 0; i < phivideo2.textTracks.length; i++) {
        phivideo2.textTracks[i].mode = 'hidden'
      }
    }

    function hideTracksPh() {
      for (var i = 0; i < phivideo1.textTracks.length; i++) {
        phivideo1.textTracks[i].mode = 'hidden'
      }
    }

    hideTracksPh2()
    hideTracksPh()
    hideTracks()
  },
}
</script>

<style scoped>
.stickynav {
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 0;
  opacity: 100;
  z-index: 2;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.stickyscroll {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 0;
  opacity: 100;
  z-index: 2;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

video::cue {
  opacity: 1;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.fade-enter-active {
  transition: opacity 5s;
}

.fade-leave-active {
  transition: opacity 5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls-enclosure {
  display: none !important;
}

video::cue {
  font-size: 20px;
}
</style>
