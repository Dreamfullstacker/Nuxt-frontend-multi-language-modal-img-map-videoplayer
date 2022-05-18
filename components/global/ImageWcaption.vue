<template>
  <div
    class="relative flex flex-col-reverse items-center justify-center w-10/12 mb-5 sm:w-3/6 sm:flex-row"
  >
    <div
      :class="
        this.$i18n.locale === 'en' ? ' ltr text-left ' : ' rtl text-right '
      "
      class="top-0 w-9/12 mt-5 text-black sm:h-10 sm:mt-0 sm:pr-10 sm:-ml-48 sm:left-0 sm:w-48 sm:absolute font-nassimBold"
    >
      {{ imageCaption }}
      <div>
        <div
          :class="
            this.$i18n.locale === 'en' ? ' ltr text-left  ' : ' rtl text-right '
          "
          class="mt-2 black font-nassimBold"
        >
          <slot></slot>
        </div>
      </div>
    </div>
    <img :src="imageSource" />
  </div>
</template>

<script>
export default {
  props: ['imageCaption', 'imageSource'],
}
</script>
