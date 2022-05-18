<template>
  <div>
    <div class="relative flex items-start content-center justify-center m-10">
      <div class="flex w-10/12 sm:w-7/12">
        <div class="lightboxcontainer">
          <div class="lightboxgallery">
            <div class="lightboxgallery">
              <img
                style="width: 900px"
                src="/Images/c2/sectionOne/lightBoxOne/1_ServiceFloor.jpg"
              />
            </div>
          </div>

          <client-only>
            <vue-easy-lightbox
              v-if="this.$i18n.locale === 'ar'"
              :visible="visible"
              :index="index"
              :imgs="imgstwoAR"
              @hide="visible = false"
              @on-prev-click="handlePrevClick"
              @on-next-click="handleNextClick"
            />
          </client-only>

          <client-only v-if="this.$i18n.locale === 'en'">
            <vue-easy-lightbox
              :visible="visible"
              :index="index"
              :imgs="imgstwoEN"
              @hide="visible = false"
              @on-prev-click="handlePrevClick"
              @on-next-click="handleNextClick"
            />
          </client-only>
        </div>
      </div>
      <div
        class="absolute left-0 flex-col hidden w-2/12 mt-4 ml-10 md:block lg:block xl:block"
      >
        <p
          v-if="this.$i18n.locale === 'ar'"
          class="text-base text-right font-nassimBold"
        >
          رسم لطابق قياسي في مبنى دورافور (عين المريسة - ١٩٤٨) يظهر طابق علوي
          مخصص للخدمات
        </p>

        <p v-if="this.$i18n.locale === 'en'" class="text-base font-nassimBold">
          Floor plan drawing of a typical floor in the Duraffourd building, Ain
          el Mreisseh (1948), depicting an upper level intended as servants’
          quarters.
        </p>

        <p
          @click="showawa(1)"
          :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
          class="flex flex-row items-start mt-5 text-sm cursor-pointer"
        >
          <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
            <i class="far fa-file"></i>
          </span>

          <span v-if="this.$i18n.locale === 'ar'">
            صورة لمبنى دورافور مع محيط عين المريسة
          </span>
          <span v-if="this.$i18n.locale === 'en'">
            Duraffourd building and Ain el Mreisseh surrounds
          </span>
        </p>

        <p
          @click="showawa(0)"
          :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
          class="flex flex-row items-start mt-5 text-sm cursor-pointer"
        >
          <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
            <i class="far fa-file"></i>
          </span>
          <span v-if="this.$i18n.locale === 'en'">
            Typical floor plan drawing, Duraffourd building
          </span>
          <span v-if="this.$i18n.locale === 'ar'">
            خريطة طابق قياسي في مبنى دورافور
          </span>
        </p>
        <p v-if="this.$i18n.locale === 'ar'" class="mt-5 text-base text-right">
          ( من المركز العربي للعمارة )
        </p>
      </div>
    </div>
    <div class="flex content-center justify-center">
      <div
        class="left-0 flex-col block float-right w-8/12 mt-4 text-sm text-right md:hidden lg:hidden xl:hidden float"
      >
        <p
          v-if="this.$i18n.locale === 'ar'"
          class="text-base text-right font-nassimBold"
        >
          رسم لطابق قياسي في مبنى دورافور (عين المريسة - ١٩٤٨) يظهر طابق علوي
          مخصص للخدمات
        </p>

        <p
          v-if="this.$i18n.locale === 'en'"
          class="text-base text-left font-nassimBold"
        >
          Floor plan drawing of a typical floor in the Duraffourd building, Ain
          el Mreisseh (1948), depicting an upper level intended as servants’
          quarters.
        </p>

        <p
          class="flex items-start mt-5 text-sm cursor-pointer"
          :class="
            this.$i18n.locale === 'en'
              ? ' ltr flex-row-reverse  '
              : 'rtl flex-row'
          "
          @click="showawa(1)"
          style="direction: rtl"
        >
          <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
            <i class="far fa-file"></i>
          </span>
          <span v-if="this.$i18n.locale === 'ar'">
            صورة لمبنى دورافور مع محيط عين المريسة
          </span>
          <span v-if="this.$i18n.locale === 'en'" class="mt-1">
            Duraffourd building and Ain el Mreisseh surrounds
          </span>
        </p>

        <p
          :class="
            this.$i18n.locale === 'en'
              ? ' ltr mt-1 flex-row-reverse  '
              : 'rtl flex-row'
          "
          @click="showawa(0)"
          style="direction: rtl"
          class="flex flex-row items-start mt-5 text-sm cursor-pointer"
        >
          <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
            <i class="far fa-file"></i>
          </span>
          <span v-if="this.$i18n.locale === 'en'" class="mt-1">
            Typical floor plan drawing, Duraffourd building
          </span>
          <span v-if="this.$i18n.locale === 'ar'">
            خريطة طابق قياسي في مبنى دورافور
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgstwoAR: [
        {
          src:
            'https://makhdoumin.vercel.app/Images/c2/sectionOne/lightBoxOne/1a_Plan.png',
          title: 'خريطة طابق قياسي في مبنى دورافور',
        },
        {
          src: 'https://makhdomeen.vercel.app/lb/1b_Oldpicture.jpg',
          title: 'صورة لمبنى دورافور مع محيط عين المريسة',
        },
      ],
      imgstwoEN: [
        {
          src:
            'https://makhdoumin.vercel.app/Images/c2/sectionOne/lightBoxOne/1a_Plan.png',
          title: 'Typical floor plan drawing, Duraffourd building',
        },
        {
          src: 'https://makhdomeen.vercel.app/lb/1b_Oldpicture.jpg',
          title: 'Duraffourd building and Ain el Mreisseh surrounds',
        },
      ],
      visible: false,
      index: 0,
    }
  },
  methods: {
    showawa(index) {
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
