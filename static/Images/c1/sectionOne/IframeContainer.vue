<template>
  <div class="w-full">
    <div class="overlay"></div>
    <div class="w-full">
      <div class="pyramid" style="position:relative; display:block;" id="gifpart"  ref="mapimage" >
        <div id="loading-status"></div>
        <div style="float: left;">
          <img id="unmute" src="/Images/c1/sectionOne/unmute.png" style="position: absolute; width: 10%; display: block; z-index: 100;" @click="playmusic(1)"/><img id="mute" src="/Images/c1/sectionOne/mute.png" style="position: absolute; width: 10%; display: none; z-index: 100;" @click="playmusic(0)"/>
          <audio id="audioplayer">
            <source src="/Images/c1/sectionOne/horse.ogg" type="audio/ogg">
            <source src="/Images/c1/sectionOne/horse.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>
        </div>
        <div style="width:100%; height:100">
          
        </div>
        <modal ref="modalName">
          <template v-slot:body>
          </template>
        </modal>

        
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./Modal";
  export default {
        components: {
          Modal
        },
        data() {
          
            return{
              
            }
        },
        created(){
          
        },
        mounted(){
          
        },



        methods:{
          playmusic(play_state){
            var audioplay = document.getElementById("audioplayer");
            console.log(play_state);
            if(play_state == 1){
              document.getElementById("mute").style.display = "block";
              document.getElementById("unmute").style.display = "none";
              audioplay.play();
            }
            if(play_state == 0){
              document.getElementById("unmute").style.display = "block";
              document.getElementById("mute").style.display = "none";
              audioplay.pause();
            }
          }
        }
    }
</script>

<style>
    
</style>