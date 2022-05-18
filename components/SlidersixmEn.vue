<template>
  <div class="flex flex-col justify-center w-10/12 ml-10">
    <div
      class="flex flex-col-reverse items-center content-center justify-center mt-10 text-base"
    >
      <div class="flex flex-col w-10/12 text-base text-left">
        <div class="sticky top-0">
          <p class="font-bold text-left">
            Typical floor plan drawing, residential building in Ashrafieh (2001)
          </p>
          <p
            @click="showawa(1)"
            class="flex flex-row items-start mt-5 text-sm cursor-pointer"
          >
            <span class="float-left ml-2 mr-1">
              <i class="far fa-file"></i>
            </span>

            Building permit plan from the Engineering Department of Beirut
            Municipality
          </p>
        </div>
      </div>

      <div class="flex content-center justify-center">
        <div class="lightboxcontainer">
          <div class="lightboxgallery">
            <div class="lightboxgallery">
              <img src="https://makhdomeen.vercel.app/slider6/001.jpg" />
            </div>
          </div>

          <client-only>
            <vue-easy-lightbox
              :visible="visible"
              :index="index"
              :imgs="imgstwo"
              @hide="visible = false"
              @on-prev-click="handlePrevClick"
              @on-next-click="handleNextClick"
            />
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      imgstwo: [
        'https://makhdomeen.vercel.app/slider6/001.jpg',
        'https://makhdomeen.vercel.app/slider6/002.jpg',
        'https://makhdomeen.vercel.app/slider6/003.jpg',
      ],
      visible: false,
      index: 0, // default
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
