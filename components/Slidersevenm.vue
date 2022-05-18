<template>
  <div class="flex flex-col justify-center mt-10 mb-10">
    <div class="flex">
      <div class="lightboxcontainer">
        <div class="lightboxgallery">
          <div class="lightboxgallery">
            <img src="https://makhdomeen.vercel.app/slider7/001.jpg" />
          </div>
        </div>

        <client-only>
          <vue-easy-lightbox
            :visible="visible"
            :index="index"
            :imgs="imgList"
            @hide="visible = false"
            @on-prev-click="handlePrevClick"
            @on-next-click="handleNextClick"
          />
        </client-only>
      </div>
    </div>

    <div class="flex flex-col w-10/12 mt-4 ml-6 text-base text-right">
      <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
        رسم لطابق قياسي في مبنى Mirage Tower في الطيونة (٢٠١٥)
      </p>

      <p v-if="this.$i18n.locale === 'en'" class="text-left font-nassimBold">
        Typical floor plan drawing, Mirage Tower building, Tayyouneh (2015)
      </p>
      <p
        :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
        @click="showawawa(1)"
        class="flex flex-row items-start mt-5 text-sm cursor-pointer"
      >
        <span :class="this.$i18n.locale === 'en' ? ' mr-2' : ' ml-2'">
          <i class="far fa-file"></i>
        </span>
        <span v-if="this.$i18n.locale === 'ar'" class="text-right">
          مقطتفات من قانون البناء اللبناني الصادر في العام ٢٠٠٤
        </span>
        <span v-if="this.$i18n.locale === 'en'" class="text-left">
          Excerpts from the 2004 Lebanese building law
        </span>
      </p>

      <p
        @click="showawawa(2)"
        :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
        class="flex flex-row items-start mt-5 text-sm cursor-pointer"
      >
        <span :class="this.$i18n.locale === 'en' ? ' mr-2' : ' ml-2'">
          <i class="far fa-file"></i>
        </span>
        <span v-if="this.$i18n.locale === 'ar'" class="text-right">
          خريطة إعلانية لمبنى سكني في شارع السيدة، الأشرفية (٢٠٠٩)
        </span>
        <span v-if="this.$i18n.locale === 'en'" class="text-left">
          Advertisement of floor plan for residential building on Sayydeh
          street, Ashrafieh (2009)
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      imgList: [
        'https://makhdoumin.vercel.app/Images/c2/sectionFive/lightBoxTwo/001.jpg',
        'https://makhdoumin.vercel.app/Images/c2/sectionFive/lightBoxTwo/002.jpg',
        'https://makhdoumin.vercel.app/Images/c2/sectionFive/lightBoxTwo/003.jpg',
      ],
      visible: false,
      index: 0, // defaul
    }
  },
  methods: {
    showawawa(index) {
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
      console.log('newIndex of imgs:', newIndex)
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.gallery {
  display: flex;
}

.pic {
  cursor: pointer;
  margin-right: 8px;
}
</style>
