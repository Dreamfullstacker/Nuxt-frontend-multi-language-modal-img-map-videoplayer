<template>
  <div
    class="relative flex flex-col-reverse items-center justify-center w-full mb-5 sm:flex-row"
  >
    <div class="">
      <div>
        <img
          style="width: 120% !important"
          src="/Images/c2/sectionFour/10_abir_parents.jpg"
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
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        'https://makhdomeen.vercel.app/lb1/4a_clemenceau.jpg',
        'https://makhdomeen.vercel.app/lb1/4b_clemenceau.jpg',
        'https://makhdomeen.vercel.app/lb1/4c_MichelChiha_floorplan.jpg',
        'https://makhdomeen.vercel.app/lb1/4d_YousefAftimosFloorplan.jpg',
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
