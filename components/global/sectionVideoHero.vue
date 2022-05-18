<template>
  <div>
    <div
      :id="divId"
      class="relative z-40 flex items-center content-center justify-center normal h-99"
    >
      <video
        preload="metadata"
        class="object-cover w-screen h-99"
        autoplay="autoplay"
        loop
        muted
      >
        <source :src="videoSource" type="video/mp4" />
        <source :src="videoSource" type="video/mp4" />
        <source :src="videoSource" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>

    <div
      class="z-40 flex flex-col items-center justify-center w-full -mt-2 bg-black opacity-75 h-99"
    >
      <p
        class="mt-5 text-3xl text-center text-white font-nassimBold sm:text-2xl"
      >
        {{ sectionNumber }}
      </p>
      <p
        class="mt-5 text-5xl text-center text-white font-nassimBold sm:text-6xl"
      >
        {{ sectionTitle }}
      </p>
      <p
        class="mt-1 text-3xl text-center text-white font-nassimBold sm:text-4xl"
      >
        {{ sectionSubTitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'sectionNumber',
    'sectionTitle',
    'sectionNumber',
    'sectionTitle',
    'videoSource',
    'sectionSubTitle',
    'divId',
  ],
}
</script>

<style>
/* .inverted {
  filter: invert(100%);
} */
</style>
