<template>
  <div class="relative">
    <div
      :id="divId"
      v-if="imageSource"
      class="relative flex flex-row items-center content-center justify-center bg-fixed bg-top bg-no-repeat bg-cover bg-covers h-66 md:h-66 lg:h-99"
      :style="{
        backgroundImage: `url(${imageSource})`,
      }"
    >
      <p
        v-if="cornerCaption"
        class="absolute top-0 left-0 z-50 mt-2 ml-4 text-xl font-bold"
      >
        {{ cornerCaption }}
      </p>
    </div>
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

      <p class="mt-1 text-5xl text-center text-white sm:text-6xl">
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
    'cornerCaption',
  ],
}
</script>
