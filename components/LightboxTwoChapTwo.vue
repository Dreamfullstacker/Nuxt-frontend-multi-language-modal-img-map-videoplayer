<template>
  <div
    class="relative flex flex-col-reverse items-center justify-center w-10/12 mb-5 sm:w-3/6 sm:flex-row"
  >
    <div
      :class="
        this.$i18n.locale === 'en' ? ' ltr text-left ' : ' rtl text-right '
      "
      class="top-0 mt-5 -mr-32 sm:h-10 sm:mt-0 sm:pr-10 sm:-ml-48 sm:left-0 sm:w-48 sm:absolute font-nassimRegular"
    >
      <p
        v-if="this.$i18n.locale === 'ar'"
        class="text-base text-right font-nassimBold"
      >
        لافتة دعائية للقروض السكنية
      </p>

      <p v-if="this.$i18n.locale === 'en'" class="text-base font-nassimBold">
        Advertisement for housing loans
      </p>

      <p
        @click="showie(1)"
        :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
        class="flex flex-row items-start mt-5 text-sm cursor-pointer"
      >
        <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
          <i class="far fa-file"></i>
        </span>
        <span v-if="this.$i18n.locale === 'en'"
          >Banner on a building under construction on Gemmayze Street, 2015
        </span>

        <span v-if="this.$i18n.locale === 'ar'">
          لافتة على مبنى قيد الإنشاء في شارع الجميزة (٢٠١٥)
        </span>
      </p>

      <p
        @click="showie(2)"
        :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
        class="flex flex-row items-start mt-3 text-sm cursor-pointer"
      >
        <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
          <i class="far fa-file"></i>
        </span>

        <span v-if="this.$i18n.locale === 'ar'">
          لافتة على مبنى قيد الإنشاء في حيّ راس النبع (٢٠١٩)
        </span>
        <span v-if="this.$i18n.locale === 'en'"
          >Banner on a building under construction in the Ras al Nabeh
          neighborhood, 2019
        </span>
      </p>
      <div></div>
    </div>
    <div class="">
      <div class="">
        <div class="">
          <img
            style="width: 100% !important"
            src="/Images/c2/sectionOne/lightBoxTwo/2_Advertisement.jpg"
          />
        </div>
      </div>

      <client-only>
        <vue-easy-lightbox
          :visible="visible"
          :index="index"
          :imgs="imgs"
          @hide="visible = false"
          @on-prev-click="handlePrevClick"
          @on-next-click="handleNextClick"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        '/Images/c2/sectionOne/lightBoxTwo/2_Advertisement.jpg',
        '/Images/c2/sectionOne/lightBoxTwo/2a_PlanfromAd.jpg',
        '/Images/c2/sectionOne/lightBoxTwo/2b_AdRasNabe3.jpg',
      ],
      visible: false,
      index: 0,
    }
  },
  methods: {
    showie(index) {
      this.index = index
      this.visible = true
    },
    handlePrevClick(oldIndex, newIndex) {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
    },
    handleNextClick(oldIndex, newIndex) {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
    },
  },
}
</script>

<style></style>
