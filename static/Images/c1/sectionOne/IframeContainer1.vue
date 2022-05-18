<template>
  <div v-if="isLoaded" class="w-full">
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
            <source
              src="/Images/c1/sectionOne/landing_audio.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div style="width: 100%; height: 100">
          <img
            src="/Images/c1/sectionOne/building_5s.gif"
            usemap="#Map"
            style="
              height: 100;
              width: 100%;
              z-index: -1;
              left: 0px;
              top: 0px;
              padding: 0px;
              border: 0px;
            "
            id="img-imgmap201293016112"
            class="map"
          />
        </div>

        <modal ref="modalName">
          <template v-slot:body> </template>
        </modal>
        <!-- <map name="Map" id="Map">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('RAHItEOxuI0')"
            coords="724,898,641,1030" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('9DzZF2_sGsY')"
            coords="294,1164,203,1293" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('omyOx8VAo3Y')"
            coords="820,1302,739,1389" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('RAHItEOxuI0')"
            coords="424,1576,322,1660" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('RAHItEOxuI0')"
            coords="947,1693,857,1825" shape="rect">
            <area alt="" title="" target="" href="javascript:void(0);" @click="$refs.modalName.openModal('RAHItEOxuI0')"
            coords="214,1974,290,2096" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('Y3iY89zExkw')"
            coords="619,2360,537,2237" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('AU5T-qo0H3U')"
            coords="400,2503,326,2623" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('yuddeFzEWCc')"
            coords="945,2495,856,2616" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('9cjOrkYzgt0')"
            coords="816,2899,735,2981" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('ZWx4W6ewJu4')"
            coords="293,3018,212,3147" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('VAy7jSMbLb4')"
            coords="941,3286,852,3412" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('Z4UhzAPEfWk')"
            coords="495,3551,435,3678" shape="rect">
            <area target="" alt="" title="" href="javascript:void(0);" @click="$refs.modalName.openModal('PHZAtZjWuxc')"
            coords="101,3694,5,3779" shape="rect">
        </map> -->
        <map name="Map" id="Map">
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w1')"
            coords="724,898,641,1030"
            shape="rect"
            style="border: 1px solid red"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w2')"
            coords="294,1164,203,1293"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w3')"
            coords="820,1302,739,1389"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w4')"
            coords="424,1576,322,1660"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w5')"
            coords="947,1693,857,1825"
            shape="rect"
          />
          <area
            alt=""
            title=""
            target=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w6')"
            coords="214,1974,290,2096"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w7')"
            coords="619,2360,537,2237"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w8')"
            coords="400,2503,326,2623"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w9')"
            coords="945,2495,856,2616"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w10')"
            coords="816,2899,735,2981"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w11')"
            coords="293,3018,212,3147"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w12')"
            coords="941,3286,852,3412"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w13')"
            coords="495,3551,435,3678"
            shape="rect"
          />
          <area
            target=""
            alt=""
            title=""
            href="javascript:void(0);"
            @click="$refs.modalName.openModal('w14')"
            coords="101,3694,5,3779"
            shape="rect"
          />
        </map>
      </div>
    </div>
  </div>
  <div v-else>
    <img src="/Images/c1/sectionOne/image-loader.gif" />
  </div>
</template>
<script>
import Modal from './Modal'
import ImageMap from 'image-map'

// Vue.use(ImageMap);
//import $ from 'jquery';
//import "./jQuery-rwdImageMaps.js"
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
    setTimeout(() => {
    console.log(document.getElementById('gifpart').height)
    console.log(this.$refs.mapimage.clientHeight)
    console.log(document.getElementById('img-imgmap201293016112').width)
    console.log(document.getElementById('img-imgmap201293016112').height)
    ImageMap('img[usemap]')
    console.log('test')
    }, 6000)
  },

  methods: {
    getDimensions() {
      console.log('resize')
    },
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
  },
}
</script>

<style></style>
