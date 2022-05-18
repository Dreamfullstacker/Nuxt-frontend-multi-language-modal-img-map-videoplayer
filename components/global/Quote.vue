<template>
  <p
    :class="this.$i18n.locale === 'en' ? ' ltr sm:ml-20 ' : ' rtl sm:mr-20'"
    class="flex m-5"
  >
    <slot></slot>
  </p>
</template>

<script>
export default {}
</script>

<style></style>
