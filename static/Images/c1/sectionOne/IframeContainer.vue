<template>
  <div class="w-full" v-if="isLoaded">
    <div class="overlay"></div>
    <div class="w-full">
      <div
        class="pyramid"
        style="position: relative; display: block"
        id="gifpart"
        ref="mapimage"
      >
        <div id="loading-status"></div>
        <div style="float: left">
          <img
            id="unmute"
            src="/Images/c1/sectionOne/unmute.png"
            style="position: absolute; width: 10%; display: block; z-index: 100"
            @click="playmusic(1)"
          /><img
            id="mute"
            src="/Images/c1/sectionOne/mute.png"
            style="position: absolute; width: 10%; display: none; z-index: 100"
            @click="playmusic(0)"
          />
          <audio id="audioplayer">
            <source src="/Images/c1/sectionOne/horse.ogg" type="audio/ogg" />
            <source
              src="/Images/c1/sectionOne/landing_audio.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div style="width: 100%; height: 100">
          
          <div
            id="video-overlay14"
            class="video-overlay"
            @mouseover="mouseOver(14)"
            @mouseout="mouseOut(14)"
            @click="$refs.modalName.openModal('w14')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay13"
            class="video-overlay"
            @mouseover="mouseOver(13)"
            @mouseout="mouseOut(13)"
            @click="$refs.modalName.openModal('w13')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay12"
            class="video-overlay"
            @mouseover="mouseOver(12)"
            @mouseout="mouseOut(12)"
            @click="$refs.modalName.openModal('w12')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay11"
            class="video-overlay"
            @mouseover="mouseOver(11)"
            @mouseout="mouseOut(11)"
            @click="$refs.modalName.openModal('w11')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay10"
            class="video-overlay"
            @mouseover="mouseOver(10)"
            @mouseout="mouseOut(10)"
            @click="$refs.modalName.openModal('w10')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 75%" />
          </div>
          <div
            id="video-overlay9"
            class="video-overlay"
            @mouseover="mouseOver(9)"
            @mouseout="mouseOut(9)"
            @click="$refs.modalName.openModal('w9')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay8"
            class="video-overlay"
            @mouseover="mouseOver(8)"
            @mouseout="mouseOut(8)"
            @click="$refs.modalName.openModal('w8')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay7"
            class="video-overlay"
            @mouseover="mouseOver(7)"
            @mouseout="mouseOut(7)"
            @click="$refs.modalName.openModal('w7')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay6"
            class="video-overlay"
            @mouseover="mouseOver(6)"
            @mouseout="mouseOut(6)"
            @click="$refs.modalName.openModal('w6')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay5"
            class="video-overlay"
            @mouseover="mouseOver(5)"
            @mouseout="mouseOut(5)"
            @click="$refs.modalName.openModal('w5')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay4"
            class="video-overlay"
            @mouseover="mouseOver(4)"
            @mouseout="mouseOut(4)"
            @click="$refs.modalName.openModal('w4')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 75%" />
          </div>
          <div
            id="video-overlay3"
            class="video-overlay"
            @mouseover="mouseOver(3)"
            @mouseout="mouseOut(3)"
            @click="$refs.modalName.openModal('w3')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 75%" />
          </div>
          <div
            id="video-overlay2"
            class="video-overlay"
            @mouseover="mouseOver(2)"
            @mouseout="mouseOut(2)"
            @click="$refs.modalName.openModal('w2')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div
            id="video-overlay1"
            class="video-overlay"
            @mouseover="mouseOver(1)"
            @mouseout="mouseOut(1)"
            @click="$refs.modalName.openModal('w1')"
          >
            <img src="/Images/c1/sectionOne/play.png" style="width: 85%" />
          </div>
          <div id="videoEle" class="container1">
            <video playsinline autoplay muted loop id="video-div">
              <source src="/Images/c1/sectionOne/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <modal ref="modalName">
          <template v-slot:body> </template>
        </modal>
      </div>
    </div>
  </div>
  <div v-else>
    <img src="/Images/c1/sectionOne/image-loader.gif" />
  </div>
</template>
<script>
import Modal from './Modal'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.isLoaded = true
      console.log('AAAAAAAAAA' + this.isLoaded)
    }, 5000)
  },

  methods: {
    playmusic(play_state) {
      var audioplay = document.getElementById('audioplayer')
      console.log(play_state)
      if (play_state == 1) {
        document.getElementById('mute').style.display = 'block'
        document.getElementById('unmute').style.display = 'none'
        audioplay.play()
      }
      if (play_state == 0) {
        document.getElementById('unmute').style.display = 'block'
        document.getElementById('mute').style.display = 'none'
        audioplay.pause()
      }
    },
    mouseOver(id) {
      document.getElementById('video-overlay' + id).style.opacity = '0.5'
    },
    mouseOut(id) {
      document.getElementById('video-overlay' + id).style.opacity = '0'
    },
  },
}
</script>

<style>
.container1 {
  position: relative;
  height: auto;
}
.container1 video {
  /* position: absolute; */
  z-index: 1;
  width: 100%;
}
.video-overlay {
  width: 90px;
  height: 130px;
  z-index: 1;
  position: absolute;
  opacity: 0;
  background-color: #988969;
}
.video-overlay-sm {
  width: 84px;
  height: 80px;
}

#video_overlays {
  position: absolute;
  width: 160px;
  min-height: 40px;
  background-color: #dadada;
  z-index: 300000;
  bottom: 10px;
  left: 10px;
  text-align: center;
  opacity: 2.5;
}
#video-overlay1 {
  margin-top: 90%;
  margin-left: 64%;
  width: 8.5%;
  /* height: 25%; */
  padding-top: 3%;
  padding-left: 0.8%;
  padding-bottom: 10%;
}
#video-overlay2 {
  margin-top: 116%;
  margin-left: 21%;
  width: 8.5%;
  /* height: 25%; */
  padding-top: 3.5%;
  padding-left: 1%;
  padding-bottom: 9.5%;
}
#video-overlay3 {
  margin-top: 131%;
  margin-left: 74.4%;
  width: 7%;
  /* height: 13%; */
  padding-top: 2%;
  padding-left: 1.5%;
  padding-bottom: 5.5%;
}
#video-overlay4 {
  margin-top: 158%;
  margin-left: 32.5%;
  width: 9.3%;
  /* height: 14%; */
  padding-top: 1.5%;
  padding-left: 1.8%;
  padding-bottom: 6.5%;
}
#video-overlay5 {
  margin-top: 170%;
  margin-left: 85.8%;
  width: 8.3%;
  /* height: 21%; */
  padding-top: 3%;
  padding-left: 0.8%;
  padding-bottom: 9.5%;
}
#video-overlay6 {
  margin-top: 197.5%;
  margin-left: 21%;
  width: 8.3%;
  /* height: 23%; */
  padding-top: 3%;
  padding-left: 0.8%;
  padding-bottom: 9.5%;
}
#video-overlay7 {
  margin-top: 223.5%;
  margin-left: 53%;
  width: 8.3%;
  /* height: 23%; */
  padding-top: 3%;
  padding-left: 0.8%;
  padding-bottom: 9.5%;
}
#video-overlay8 {
  margin-top: 249.5%;
  margin-left: 32%;
  width: 8.3%;
  /* height: 23%; */
  padding-top: 3%;
  padding-left: 0.8%;
  padding-bottom: 9.5%;
}
#video-overlay9 {
  margin-top: 250%;
  margin-left: 85.8%;
  width: 8.3%;
  /* height: 23%; */
  padding-top: 3%;
  padding-left: 0.8%;
  padding-bottom: 8.5%;
}
#video-overlay10 {
  margin-top: 290%;
  margin-left: 74%;
  width: 7.5%;
  /* height: 6%; */
  padding-top: 1.5%;
  padding-left: 1.5%;
  padding-bottom: 6.5%;
}
#video-overlay11 {
  margin-top: 302%;
  margin-left: 21%;
  width: 8%;
  /* height: 6%; */
  padding-top: 3.5%;
  padding-left: 1.3%;
  padding-bottom: 9%;
}
#video-overlay12 {
  margin-top: 328.5%;
  margin-left: 85.5%;
  width: 9%;
  /* height: 6%; */
  padding-top: 3.5%;
  padding-left: 1.3%;
  padding-bottom: 9%;
}
#video-overlay13 {
  margin-top: 355.5%;
  margin-left: 43.5%;
  width: 5.5%;
  /* height: 6%; */
  padding-top: 4.5%;
  padding-left: 0.5%;
  padding-bottom: 7%;
}
#video-overlay14 {
  margin-top: 369.8%;
  margin-left: 1%;
  width: 8.5%;
  /* height: 6%; */
  padding-top: 1%;
  padding-left: 1.5%;
  padding-bottom: 6.7%;
}
</style>
