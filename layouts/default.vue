<template>
  <div class="relative flex flex-col font-nassimRegular">
    <VideoBackground />
    <Navbar class="sticky top-0 flex justify-center bg-black" />
    <Nuxt class="z-20 bg-white" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapternav: 0,
    }
  },
  methods: {
    handleScroll() {
      this.chapternav = window.scrollY
    },
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>

<style>
.rtl {
  direction: rtl;
}

video::cue {
  opacity: 1;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
</style>
