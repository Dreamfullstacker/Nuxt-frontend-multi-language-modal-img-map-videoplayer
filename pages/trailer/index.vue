<template>
  <div class="flex flex-col items-center justify-center bg-black">
    <div class="relative w-9/12 h-auto" style="padding-top: 56.25%">
      <iframe
        v-if="this.$i18n.locale === 'en'"
        class="absolute inset-0 w-full h-full"
        src="https://player.vimeo.com/video/559903974?autoplay=1&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        v-if="this.$i18n.locale === 'ar'"
        class="absolute inset-0 w-full h-full"
        src="https://player.vimeo.com/video/559902052?autoplay=1&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'test',
}
</script>
