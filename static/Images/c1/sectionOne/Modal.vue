<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()"/>

      <div class="modal__dialog">
        <div class="modal__header">
          <slot name="header"/>
          <button type="button" class="modal__close" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="modal__body">
          <slot name="body"/>
          <!-- <video playsinline autoplay muted loop controls style="width:100%; height:480px;">
            <source id="videoIframe" type="video/mp4" src="https://www.youtube.com/embed/RAHItEOxuI0?controls=0">
          </video> -->
            <div
                @mouseenter="InsideFrameIndia = true"
                @mouseleave="InsideFrameIndia = false"
                class="relative z-40 flex items-center content-center justify-center">
                <!-- <button
                @click="startIndia"
                :class="Indiaaudio ? 'block' : 'hidden'"
                class="absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black"
                >
                    PlayInterview
                </button> -->
                <div class="absolute bottom-0 z-40 mb-10 mr-5">
                <div v-if="InsideFrameIndia" class="z-50 flex flex-row items-center">
                    <svg
                      v-if="!mute"
                        @click="muteIndia"
                        :class="Indiarepeat ? 'block' : 'hidden'"
                        class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                        version="1.1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        v-if="mute"
                        @click="muteIndia"
                        :class="Indiarepeat ? 'block' : 'hidden'"
                        class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                        version="1.1"
                        viewBox="0 0 16 16"> 
                      <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/> 
                      <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/> 
                      <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/> 
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      v-if="playpause"
                      @click="playstopIndia"
                      :class="Indiarepeat ? 'block' : 'hidden'"
                      class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                      viewBox="0 0 16 16"> 
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> 
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/> 
                    </svg>
                    <svg 
                      v-if="!playpause"
                      @click="playstopIndia"
                      :class="Indiarepeat ? 'block' : 'hidden'"
                      class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                      viewBox="0 0 16 16"> 
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path> 
                      <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"></path> 
                    </svg>

                    <svg
                        @click="repeatIndia"
                        :class="Indiarepeat ? 'block' : 'hidden'"
                        class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                        version="1.1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                        <path
                            d="M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"
                        />
                    </svg>

                    <svg
                        @click="indiaFullscreen"
                        :class="Indiarepeat ? 'block' : 'hidden'"
                        class="w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100"
                        version="1.1"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                        <path d="M0 0h18v18h-18Z" fill="none"></path>
                        <path
                            d="M4.5 11h-1.5v4h4v-1.5h-2.5v-2.5Zm-1.5-4h1.5v-2.5h2.5v-1.5h-4v4Zm10.5 6.5h-2.5v1.5h4v-4h-1.5v2.5Zm-2.5-10.5v1.5h2.5v2.5h1.5v-4h-4Z"
                        ></path>
                    </svg>
                </div>
            </div>

            <div
                @click="backwardsIndia"
                :class="Indiaaudio ? 'hidden' : 'block'"
                class="absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
                ></div>

            <div
                @click="forwardsIndia"
                :class="Indiaaudio ? 'hidden' : 'block'"
                class="absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25"
                ></div>

            <video
                preload="metadata"
                class="w-screen"
                ref="india"
                id="indiaaa"
                autoplay="autoplay"
                loop
                
            >
                <source :src="videourl" type="video/mp4" />
                <!-- <source src="/videos/India.mp4" type="video/mp4" />
                <source src="/videos/India.mp4" /> -->

            Your browser does not support the video tag. /> Your browser does not
            support the video tag.
            </video>
        </div>
        </div>

        <div class="modal__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      mute : false,
      show: false,
      playpause : true,
      Indiaaudio: true,
      Indiarepeat: true,
      InsideFrameIndia: true,
      InsideFrameP2: false,
      InsideFrameP1: false,
      videourl:"",
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    //   document.querySelector("source").src = "";
    // document.getElementById("indiaaa").src = url;
    this.videourl = '';
    },
    async openModal(youtubeID) {
        this.show = true;
        document.querySelector("body").classList.add("overflow-hidden");
        this.videourl = '/Images/c1/sectionFour/' + youtubeID + '.mp4';
        // this.videourl= 'https://www.youtube.com/embed/' + youtubeID + '?controls=0';
        // document.querySelector("source").src = url;
        // console.log(document.getElementById("indiaaa"));
        // document.getElementById("indiaaa").src = url;
        // console.log(document.querySelector("source").src);
        // console.log(url);
    },
    startIndia() {
      this.$refs.india.muted = !this.$refs.india.muted
      this.Indiaaudio = false
      this.Indiarepeat = true
    },
    backwardsIndia() {
      this.$refs.india.currentTime = this.$refs.india.currentTime - 5
    },
    forwardsIndia() {
      this.$refs.india.currentTime = this.$refs.india.currentTime + 5
    },
    muteIndia() {
      setTimeout(() => {
        this.$refs.india.muted = !this.$refs.india.muted
        this.mute = !this.mute
      }, 500)
    },
    playstopIndia() {
      this.playpause = !this.playpause
      if(this.playpause == true)
      this.$refs.india.pause()
      else this.$refs.india.play()
    },
    repeatIndia() {
      setTimeout(() => {
        this.$refs.india.currentTime = 0
        this.$refs.india.play()
      }, 500)
    },
    indiaFullscreen() {
      this.$refs.india.requestFullscreen()
    },

  }
};
</script>


<style>
.modal {
	 position: fixed;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 z-index: 9;
	 overflow-x: hidden;
	 overflow-y: auto;
}
 .modal__backdrop {
	 position: fixed;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 background-color: rgba(0, 0, 0, 0.3);
	 z-index: 1;
}
 .modal__dialog {
	 position: relative;
	 width: 600px;
	 /* background-color: #fff; */
	 border-radius: 5px;
	 margin: 150px auto;
	 display: flex;
	 flex-direction: column;
	 z-index: 2;
}
 @media screen and (max-width: 992px) {
	 .modal__dialog {
		 width: 90%;
	}
}
 .modal__close {
	 width: 30px;
	 height: 30px;
}
 .modal__header {
	 display: flex;
	 align-items: flex-start;
	 justify-content: space-between;
	 padding: 20px 20px 10px;
}
 .modal__body {
	 padding: 10px 20px 10px;
	 overflow: auto;
	 display: flex;
	 flex-direction: column;
	 align-items: stretch;
}
 .modal__footer {
	 padding: 10px 20px 20px;
}
 .fade-enter-active, .fade-leave-active {
	 transition: opacity 0.2s;
}
 .fade-enter, .fade-leave-to {
	 opacity: 0;
}
 
</style>
