<template>
  <div
    @mouseleave="clicked = false"
    @click="clicked = true"
    class="relative cursor-pointer"
  >
    <video
      ref="vref"
      class="block object-cover w-full duration-150 transform opacity-50  hover:opacity-100"
      autoplay="autoplay"
      loop
      muted
    >
      <source src="/videos/strip.mp4" type="video/mp4" />
      <source src="/videos/strip.mp4" type="video/mp4" />
      <source src="/videos/strip.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <transition name="fadeTwo">
      <div
        v-if="clicked"
        class="absolute inset-0 inset-x-0 z-50 w-32 h-10 mx-auto my-auto mt-8"
      >
        <div class="z-50 flex flex-row items-center">
          <svg
            @click="mute()"
            class="ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current  w-66 hover:text-black hover:shadow hover:bg-gray-100"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"
            />
          </svg>

          <svg
            @click="repeat()"
            class="w-64 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current  hover:text-black hover:shadow hover:bg-gray-100"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"
            />
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
      isVisiblee: true,
    }
  },
  props: {
    position: {
      type: String,
    },
  },
  methods: {
    mute() {
      this.$emit('mute')
    },

    repeat() {
      this.$emit('repeat')
    },
  },
  mounted() {
    if (this.position == '1') {
      this.$refs.vref.play()
    } else if (this.position == '2') {
      this.$refs.vref.currentTime = 50
      this.$refs.vref.play()
    } else if (this.position == '3') {
      this.$refs.vref.currentTime = 150
      this.$refs.vref.play()
    } else if (this.position == '4') {
      this.$refs.vref.currentTime = 150
      this.$refs.vref.play()
    } else if (this.position == '5') {
      this.$refs.vref.currentTime = 50
      this.$refs.vref.play()
    } else if (this.position == '6') {
      this.$refs.vref.play()
    }
  },
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
