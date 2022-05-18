<template>
  <div>
    <div class="hidden sm:block">
      <div class="flex justify-center">
        <div class="flex w-6/12 md:w-6/12 lg:w-6/12 xl:w-8/12">
          <div class="lightboxcontainer">
            <div class="lightboxgallery">
              <div class="lightboxgallery">
                <img
                  style="width: 800px"
                  src="/Images/c2/sectionFour/lightBoxTwo/001.jpg"
                />
              </div>
            </div>

            <client-only>
              <vue-easy-lightbox
                :visible="visible"
                :index="index"
                :imgs="imgsSlider5"
                @hide="visible = false"
                @on-prev-click="handlePrevClick"
                @on-next-click="handleNextClick"
              />
            </client-only>
          </div>
        </div>

        <div
          class="absolute left-0 flex flex-col w-40 mt-4 text-base md:ml-16 lg:ml-24 xl:ml-32"
        >
          <p
            v-if="this.$i18n.locale === 'ar'"
            class="text-right font-nassimBold"
          >
            رسم للطابق السادس في مبنى في حيّ البسطة (١٩٨٠) يظهر تحويل شرفة
            المطبخ الى غرفة خادمة
          </p>

          <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
            Floor plan drawing of the 6th floor of a building in the Basta
            neighborhood (1980), depicting the kitchen balcony transformed into
            a maid’s room
          </p>

          <p
            @click="show(1)"
            :class="
              this.$i18n.locale === 'en'
                ? ' ltr text-left '
                : ' rtl text-right '
            "
            class="flex flex-row items-start mt-5 text-sm cursor-pointer"
          >
            <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
              <i class="far fa-file"></i>
            </span>
            <span v-if="this.$i18n.locale === 'ar'">
              صورة لغرفة الخادمة بعد استحداثها في شرفة المطبخ
            </span>
            <span v-if="this.$i18n.locale === 'en'">
              Kitchen balcony after it was repurposed into a maid’s room
            </span>
          </p>

          <p
            @click="show(2)"
            :class="
              this.$i18n.locale === 'en'
                ? ' ltr text-left '
                : ' rtl text-right '
            "
            class="flex flex-row items-start mt-5 text-sm cursor-pointer"
          >
            <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
              <i class="far fa-file"></i>
            </span>

            <span v-if="this.$i18n.locale === 'ar'">
              خريطة «قبل» و «بعد» لشقة الطابق السادس في مبنى في حيّ البسطة
              (١٩٨٠)
            </span>
            <span v-if="this.$i18n.locale === 'en'"
              >The “before” and “after” plans of an apartment on the 6th floor
              of a building in the Basta neighborhood (1980)</span
            >
          </p>
        </div>
      </div>
    </div>

    <div class="block sm:hidden">
      <div
        class="flex flex-col items-center content-center justify-center text-base"
      >
        <div class="block sm:hidden">
          <div class="flex flex-col mt-10 mb-10">
            <div class="lightboxcontainer">
              <div class="lightboxgallery">
                <div class="lightboxgallery">
                  <img
                    style="height: 170px; width: 350px"
                    src="/Images/c2/sectionFour/lightBoxTwo/001.jpg"
                  />
                </div>
              </div>

              <client-only>
                <vue-easy-lightbox
                  :visible="visible"
                  :index="index"
                  :imgs="imgsSlider5"
                  @hide="visible = false"
                  @on-prev-click="handlePrevClick"
                  @on-next-click="handleNextClick"
                />
              </client-only>
            </div>
          </div>
        </div>
        <div class="justify-center w-10/12 mt-4 -mt-12">
          <p
            v-if="this.$i18n.locale === 'ar'"
            :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
            class="text-right font-nassimBold"
          >
            رسم للطابق السادس في مبنى في حيّ البسطة (١٩٨٠) يظهر تحويل شرفة
            المطبخ الى غرفة خادمة
          </p>

          <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
            Floor plan drawing of the 6th floor of a building in the Basta
            neighborhood (1980), depicting the kitchen balcony transformed into
            a maid’s room
          </p>

          <p
            :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
            @click="show(1)"
            class="flex flex-row items-start mt-5 text-sm cursor-pointer"
          >
            <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
              <i class="far fa-file"></i>
            </span>
            <span v-if="this.$i18n.locale === 'ar'">
              صورة لغرفة الخادمة بعد استحداثها في شرفة المطبخ
            </span>
            <span v-if="this.$i18n.locale === 'en'">
              Kitchen balcony after it was repurposed into a maid’s room
            </span>
          </p>

          <p
            @click="show(2)"
            :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
            class="flex flex-row items-start mt-5 text-sm cursor-pointer"
          >
            <span :class="this.$i18n.locale === 'en' ? '  mr-2' : 'ml-2'">
              <i class="far fa-file"></i>
            </span>
            <span v-if="this.$i18n.locale === 'ar'">
              خريطة «قبل» و «بعد» لشقة الطابق السادس في مبنى في حيّ البسطة
              (١٩٨٠)
            </span>
            <span v-if="this.$i18n.locale === 'en'"
              >The “before” and “after” plans of an apartment on the 6th floor
              of a building in the Basta neighborhood (1980)</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsSlider5: [
        'https://makhdomeen.vercel.app/basta/001.jpg',
        'https://makhdomeen.vercel.app/basta/002.jpg',
        'https://makhdomeen.vercel.app/basta/003.jpg',
      ],
      visible: false,
      index: 0,
    }
  },

  methods: {
    show(index) {
      this.index = index
      this.visible = true
    },
    showie(index) {
      this.index = index
      this.visible = true
    },
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

<style></style>
