<template>
  <div
    :class="this.$i18n.locale === 'en' ? 'flex-row' : 'flex-row-reverse'"
    class="relative flex items-start justify-center w-5/6 mt-10 md:w-3/6"
  >
    <div
      :class="
        this.$i18n.locale === 'en'
          ? 'text-left ltr md:left-0   pr-5'
          : 'text-right md:right-0 rtl md:-mr-32 lg:-mr-48 pl-5'
      "
      class="w-24 text-sm  md:absolute md:top-0 md:-ml-32 lg:-ml-48 md:w-48 sm:text-2xl"
    >
      <p class="font-nassimBold">{{ roleOne }}</p>
      <p>{{ roleOneName }}</p>
      <p>{{ roleOneNameTwo }}</p>
      <p class="mt-5 font-nassimBold">{{ roleTwo }}</p>
      <p>{{ roleTwoName }}</p>
      <p>{{ roleTwoNameTwo }}</p>
      <p class="mt-5 font-nassimBold">{{ roleThree }}</p>
      <p>{{ roleThreeName }}</p>
    </div>

    <div
      class="static flex flex-col w-10/12 text-sm font-nassimBold sm:text-2xl"
      :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
    >
      <p
        v-if="title"
        class="mb-3 text-sm text-center font-nassimBold sm:text-3xl"
      >
        {{ title }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'roleOne',
    'roleOneName',
    'roleOneNameTwo',
    'roleTwo',
    'roleTwoName',
    'roleTwoNameTwo',
    'title',
    'roleThree',
    'roleThreeName',
  ],
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
