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

    <div class="flex flex-col w-10/12 mt-4 ml-6 text-base text-left">
      <p class="font-nassimBold">
        Typical floor plan drawing, Mirage Tower building, Tayyouneh (2015)
      </p>

      <p
        @click="showawawa(1)"
        class="flex flex-row items-start mt-5 text-sm cursor-pointer"
      >
        <span class="mt-1 mr-2">
          <i class="far fa-file"></i>
        </span>

        Excerpts from the 2004 Lebanese building law
      </p>

      <p
        @click="showawawa(2)"
        class="flex flex-row items-start mt-5 text-sm cursor-pointer"
      >
        <span class="mt-1 ml-2">
          <i class="far fa-file"></i>
        </span>

        Advertisement of floor plan for residential building on Sayydeh street,
        Ashrafieh (2009)
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
        'https://makhdomeen.vercel.app/slider7/001.jpg',
        'https://makhdomeen.vercel.app/slider7/002.jpg',
        'https://makhdomeen.vercel.app/slider7/003.jpg',
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
