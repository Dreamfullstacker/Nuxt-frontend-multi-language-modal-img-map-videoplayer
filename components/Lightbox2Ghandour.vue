<template>
  <div class="container">
    <div class="gallery">
      <div class="pic" @click="() => showTheImage(idx)">
        <img src="/Images/c2/sectionThree/lightBoxOne/001.jpg" />
      </div>
    </div>

    <client-only>
      <vue-easy-lightbox
        class="x"
        :visible="visible"
        :index="index"
        :imgs="imgs"
        @hide="visible = false"
        @on-prev-click="handlePrevClick"
        @on-next-click="handleNextClick"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          src: 'https://makhdomeen.vercel.app/Ghandour/002.jpg',
          title:
            'مبنى فؤاد سعد المنطقة: الروشة المعماري: أديب شاير سنة البناء: ١٩٦٨ مساحة الشقة: 250 متراً مربعاً مساحة الخدمات: ٤٣ متراً مربعاً “غرفة الخادمة”: ١٢.٦ متراً مربعاً نسبة “غرفة الخادمة” من المساحة الإجمالية: ٤.٦ في المئة.',
        },
        {
          src: 'https://makhdomeen.vercel.app/Ghandour/003.jpg',
          title:
            'مبنى كميل شهاب المنطقة: الروشة المعماري: ريمون غصن سنة البناء: ١٩٥٧ مساحة الشقة: ٢٤٥ متراً مربعاً مساحة الخدمات: ٥٣ متراً مربعاً “غرفة الخادمة”: ٨ أمتار مربّعة نسبة “غرفة الخادمة” من المساحة الإجمالية: ٣.٢ في المئة.',
        },
        {
          src: 'https://makhdomeen.vercel.app/Ghandour/004.jpg',
          title:
            'مبنى الشيخة هميزي المنطقة: الروشة المعماري: بيار نعمة سنة البناء: ١٩٦٥ مساحة الشقة: ٣٢٤ متراً مربعاً مساحة الخدمات: ٥٩ متراً مربعاً “غرفة الخادمة”: ١٢.٦ متراً مربعاً نسبة “غرفة الخادمة” من المساحة الإجمالية: ٣.٢ في المئة.',
        },
      ],
      visible: false,
      index: 0, // default
    }
  },
  methods: {
    showTheImage(index) {
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
  margin-right: 0px;
  width: auto;
}
</style>
