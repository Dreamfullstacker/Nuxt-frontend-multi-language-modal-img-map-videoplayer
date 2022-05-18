<template>
  <div
    class="relative flex flex-col-reverse items-center justify-center w-10/12 mb-5  sm:w-4/6 sm:flex-row"
  >
    <div
      :class="
        this.$i18n.locale === 'en'
          ? ' ltr lg:ml-20 text-right '
          : ' rtl text-right '
      "
      class="mt-5 ml-0 text-right  lg:top-0 sm:h-10 lg:mt-0 lg:pr-10 lg:-ml-48 lg:left-0 lg:w-48 lg:absolute font-nassimBold"
    >
      {{ imageCaption }}
      <div>
        <div
          :class="
            this.$i18n.locale === 'en' ? ' ltr text-left  ' : ' rtl text-right '
          "
          class="mt-2 font-nassimRegular"
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
