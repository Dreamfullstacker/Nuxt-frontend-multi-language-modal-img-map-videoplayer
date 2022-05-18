<template>
  <div class="relative items-center justify-center w-20 h-32">
    <transition-group name="fade" tag="div">
      <div v-for="number in [currentNumber]" :key="number">
        <img class="object-cover" :src="images[currentNumber]" alt="" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
    },
  },
  data() {
    return {
      images: [
        '/Images/c1/sectionTwo/g1/woman3.jpg',
        '/Images/c1/sectionTwo/g1/woman4.jpg',
        '/Images/c1/sectionTwo/g1/woman5.jpg',
        '/Images/c1/sectionTwo/g1/woman6.jpg',
        '/Images/c1/sectionTwo/g1/woman1.jpg',
        '/Images/c1/sectionTwo/g1/woman2.jpg',
      ],
      currentNumber: this.position,
      timer: null,
    }
  },
  mounted: function () {
    this.startRotation()
  },

  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 6000)
    },

    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },

    next: function () {
      if (this.currentNumber < 5) {
        this.currentNumber += 1
      } else {
        this.currentNumber = 0
      }
    },
  },
  computed: {
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.3;
}
</style>
