<template>
  <div class="flex flex-row justify-center">
    <div
      :class="this.$i18n.locale === 'en' ? 'text-left ltr' : 'text-right rtl'"
      class="flex flex-col content-center justify-center w-10/12 mt-1 mb-1 text-lg  sm:text-2xl sm:w-6/12"
    >
      <span class="pt-3 pb-6 text-xl text-center font-nassimBold sm:text-3xl">{{
        title
      }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style scoped>
.ltr {
  direction: ltr;
}

.rtl {
  direction: rtl;
}
</style>
