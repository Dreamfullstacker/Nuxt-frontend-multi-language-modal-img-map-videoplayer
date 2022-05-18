<template>
  <div class="relative">
    <div
      :id="divId"
      v-if="imageSource"
      class="relative flex flex-row items-center content-center justify-center bg-fixed bg-center bg-top bg-no-repeat bg-cover sm:bg-contain bg-covers h-99"
      :style="{
        backgroundImage: `url(${imageSource})`,
      }"
    ></div>
    <div
      class="flex flex-col items-center justify-center w-full font-bold bg-black shadow-xl opacity-75 h-99"
    >
      <p class="mt-5 text-3xl text-center text-white sm:text-2xl">
        {{ chapterNumber }}
      </p>
      <p class="mt-1 text-5xl text-center text-white sm:text-6xl">
        {{ chapterTitle }}
      </p>

      <p class="mt-1 text-5xl text-center text-white sm:text-6xl">
        {{ chapterSubTitle }}
      </p>

      <p class="mt-5 text-3xl text-center text-white sm:text-2xl">
        {{ sectionNumber }}
      </p>

      <p class="mt-1 text-5xl text-center text-white sm:text-6xl">
        {{ sectionTitle }}
      </p>

      <p class="mt-1 text-5xl text-center text-white sm:text-4xl">
        {{ sectionSubTitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'chapterNumber',
    'chapterTitle',
    'sectionNumber',
    'sectionTitle',
    'sectionSubTitle',
    'chapterSubTitle',
    'imageSource',
    'divId',
  ],
}
</script>
