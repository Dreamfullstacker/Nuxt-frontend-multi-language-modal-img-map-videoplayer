(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{393:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("78246190",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";r(393)},437:function(t,e,r){var n=r(53)((function(i){return i[1]}));n.push([t.i,".stickynav[data-v-e212ac8e]{left:10px}.stickynav[data-v-e212ac8e],.stickyscroll[data-v-e212ac8e]{position:fixed;bottom:10px;padding:0;opacity:1;z-index:2;transform-origin:100% 100%}.stickyscroll[data-v-e212ac8e]{right:10px}video[data-v-e212ac8e]::cue{opacity:1;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}.fade-enter-active[data-v-e212ac8e],.fade-leave-active[data-v-e212ac8e]{transition:opacity 5s}.fade-enter[data-v-e212ac8e],.fade-leave-to[data-v-e212ac8e]{opacity:0}[data-v-e212ac8e]::-webkit-media-controls,video[data-v-e212ac8e]::-webkit-media-controls{display:none!important}video[data-v-e212ac8e]::-webkit-media-controls-enclosure{display:none!important}video[data-v-e212ac8e]::cue{font-size:20px}",""]),n.locals={},t.exports=n},483:function(t,e,r){"use strict";r.r(e);r(61);var n={data:function(){return{Indiaaudio:!0,Indiarepeat:!1,InsideFrameIndia:!1,InsideFrameP2:!1,InsideFrameP1:!1,phillippins1audio:!0,phillippins1repeat:!1,phillippins2audio:!0,phillippins2repeat:!1,currentTime:0,chapternav:0,indiaPause:!1,IndiaMute:!1,phillippins1Mute:!1,phillippins2Mute:!1}},methods:{startIndia:function(){this.indiaShowCaptions(),this.$refs.phillippins1.muted=!0,this.$refs.phillippins2.muted=!0,this.$refs.india.muted=!this.$refs.india.muted,this.Indiaaudio=!1,this.Indiarepeat=!0},startPhillippins1:function(){this.phillippins1ShowCaptions(),this.$refs.india.muted=!0,this.$refs.phillippins2.muted=!0,this.$refs.phillippins1.muted=!this.$refs.phillippins1.muted,this.phillippins1audio=!1,this.phillippins1repeat=!0},startPhillippins2:function(){this.phillippins2ShowCaptions(),this.$refs.india.muted=!0,this.$refs.phillippins1.muted=!0,this.$refs.phillippins2.muted=!this.$refs.phillippins2.muted,this.phillippins2audio=!1,this.phillippins2repeat=!0},repeatIndia:function(){var t=this;setTimeout((function(){t.$refs.phillippins1.muted=!0,t.$refs.phillippins2.muted=!0,t.$refs.india.currentTime=0,t.$refs.india.play()}),500)},repeatPhillippins1:function(){var t=this;setTimeout((function(){t.$refs.india.muted=!0,t.$refs.phillippins2.muted=!0,t.$refs.phillippins1.currentTime=0,t.$refs.phillippins1.play()}),500)},repeatPhillippins2:function(){var t=this;setTimeout((function(){t.$refs.india.muted=!0,t.$refs.phillippins1.muted=!0,t.$refs.phillippins2.currentTime=0,t.$refs.phillippins2.play()}),500)},indiaFullscreen:function(){this.$refs.india.requestFullscreen()},phillippins1Fullscreen:function(){this.$refs.phillippins1.requestFullscreen()},phillippins2Fullscreen:function(){this.$refs.phillippins2.requestFullscreen()},backwardsIndia:function(){this.$refs.india.currentTime=this.$refs.india.currentTime-5},backwardsPhillippins1:function(){this.$refs.phillippins1.currentTime=this.$refs.phillippins1.currentTime-5},backwardsPhillippins2:function(){this.$refs.phillippins2.currentTime=this.$refs.phillippins2.currentTime-5},forwardsIndia:function(){this.$refs.india.currentTime=this.$refs.india.currentTime+5},forwardsPhillippins1:function(){this.$refs.phillippins1.currentTime=this.$refs.phillippins1.currentTime+5},forwardsPhillippins2:function(){this.$refs.phillippins2.currentTime=this.$refs.phillippins2.currentTime+5},mutePhillippins2:function(){var t=this;this.phillippins2Mute=!0,this.phillippins2HideCaptions(),setTimeout((function(){t.$refs.phillippins2.muted=!0}),500)},muteIndia:function(){var t=this;this.IndiaMute=!0,this.indiaHideCaptions(),setTimeout((function(){t.$refs.india.muted=!t.$refs.india.muted}),500)},playIndia:function(){var t=this;this.IndiaMute=!1,this.indiaShowCaptions(),setTimeout((function(){t.$refs.india.muted=!t.$refs.india.muted}),500)},mutePhillippins1:function(){var t=this;this.phillippins1Mute=!0,this.phillippins1HideCaptions(),setTimeout((function(){t.$refs.phillippins1.muted=!t.$refs.phillippins1.muted}),500)},playPhillippins1:function(){var t=this;this.phillippins1Mute=!1,this.phillippins1ShowCaptions(),setTimeout((function(){t.$refs.phillippins1.muted=!t.$refs.phillippins1.muted}),500)},playPhillippins2:function(){var t=this;this.phillippins2Mute=!1,this.phillippins2ShowCaptions(),setTimeout((function(){t.$refs.phillippins2.muted=!t.$refs.phillippins2.muted}),500)},indiaShowCaptions:function(){var video=document.querySelector("#indiaac");!function(){for(var i=0;i<video.textTracks.length;i++)video.textTracks[i].mode="showing"}()},indiaHideCaptions:function(){var video=document.querySelector("#indiaac");!function(){for(var i=0;i<video.textTracks.length;i++)video.textTracks[i].mode="hidden"}()},phillippins1ShowCaptions:function(){var t=document.querySelector("#philip1");!function(){for(var i=0;i<t.textTracks.length;i++)t.textTracks[i].mode="showing"}()},phillippins1HideCaptions:function(){var t=document.querySelector("#philip1");!function(){for(var i=0;i<t.textTracks.length;i++)t.textTracks[i].mode="hidden"}()},phillippins2ShowCaptions:function(){var t=document.querySelector("#philip2");!function(){for(var i=0;i<t.textTracks.length;i++)t.textTracks[i].mode="showing"}()},phillippins2HideCaptions:function(){var t=document.querySelector("#philip2");!function(){for(var i=0;i<t.textTracks.length;i++)t.textTracks[i].mode="hidden"}()}},mounted:function(){var t=document.querySelector("#indiaac"),e=document.querySelector("#philip2"),r=document.querySelector("#philip1");!function(){for(var i=0;i<e.textTracks.length;i++)e.textTracks[i].mode="hidden"}(),function(){for(var i=0;i<r.textTracks.length;i++)r.textTracks[i].mode="hidden"}(),function(){for(var i=0;i<t.textTracks.length;i++)t.textTracks[i].mode="hidden"}()}},l=(r(436),r(15)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col mt-5 mb-5 sm:flex-row"},[r("div",{staticClass:"m-3"},[r("div",{staticClass:"relative z-40 flex items-center content-center justify-center",on:{mouseenter:function(e){t.InsideFrameIndia=!0},mouseleave:function(e){t.InsideFrameIndia=!1}}},[r("button",{staticClass:"absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black",class:t.Indiaaudio?"block":"hidden",on:{click:t.startIndia}},[t._v("\n        "+t._s(t.$t("PlayInterview"))+"\n      ")]),t._v(" "),r("div",{staticClass:"absolute bottom-0 z-40 mb-10 mr-5"},[t.InsideFrameIndia?r("div",{staticClass:"z-50 flex flex-row items-center"},[r("div",{class:t.Indiarepeat?"block":"hidden"},[r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.IndiaMute?"hidden":"block",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.muteIndia}},[r("path",{attrs:{d:"M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"}})]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.IndiaMute?"block":"hidden",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.playIndia}},[r("g",[r("path",{attrs:{d:"M16 21c3.52-1.55 5.99-4.91 5.99-9 0-4.1-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 2.95-1.62 5.61-4 7v2Z"}}),t._v(" "),r("path",{attrs:{d:"M16 7v10c1.22-1.1 2-3.23 2-5 0-1.78-.78-3.9-2-5ZM4 17h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-16c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L6.67 6.97h-2.7c-1.11 0-2 .89-2 2v6c0 1.1.89 2 2 2Zm0-8h3c.03 0 .06-.02.09-.02 .06-.01.125-.02.18-.04 .06-.03.13-.05.19-.08 .02-.02.05-.02.08-.04l4.445-2.97v12.264l-4.445-2.97c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6Z"}})])])]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.Indiarepeat?"block":"hidden",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.repeatIndia}},[r("path",{attrs:{d:"M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"}})]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.Indiarepeat?"block":"hidden",attrs:{version:"1.1",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.indiaFullscreen}},[r("path",{attrs:{d:"M0 0h18v18h-18Z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M4.5 11h-1.5v4h4v-1.5h-2.5v-2.5Zm-1.5-4h1.5v-2.5h2.5v-1.5h-4v4Zm10.5 6.5h-2.5v1.5h4v-4h-1.5v2.5Zm-2.5-10.5v1.5h2.5v2.5h1.5v-4h-4Z"}})])]):t._e()]),t._v(" "),r("div",{staticClass:"absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25",class:t.Indiaaudio?"hidden":"block",on:{click:t.backwardsIndia}}),t._v(" "),r("div",{staticClass:"absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25",class:t.Indiaaudio?"hidden":"block",on:{click:t.forwardsIndia}}),t._v(" "),r("video",{ref:"india",staticClass:"w-screen",attrs:{preload:"metadata",id:"indiaac",autoplay:"autoplay",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:"/videos/India.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/India.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/India.mp4"}}),t._v(" "),r("track",{attrs:{label:"English",kind:"subtitles",srclang:"en",src:"/videos/India.vtt",default:""}}),t._v("\n\n        Your browser does not support the video tag. /> Your browser does not\n        support the video tag.\n      ")])])]),t._v(" "),r("div",{staticClass:"m-3"},[r("div",{staticClass:"relative z-40 flex items-center content-center justify-center",on:{mouseenter:function(e){t.InsideFrameP1=!0},mouseleave:function(e){t.InsideFrameP1=!1}}},[r("button",{staticClass:"absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black",class:t.phillippins1audio?"block":"hidden",on:{click:t.startPhillippins1}},[t._v("\n        "+t._s(t.$t("PlayInterview"))+"\n      ")]),t._v(" "),r("div",{staticClass:"absolute bottom-0 z-40 mb-10 mr-5"},[t.InsideFrameP1?r("div",{staticClass:"z-50 flex flex-row items-center"},[r("div",{class:t.phillippins1repeat?"block":"hidden"},[r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins1Mute?"hidden":"block",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.mutePhillippins1}},[r("path",{attrs:{d:"M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"}})]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins1Mute?"block":"hidden",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.playPhillippins1}},[r("g",[r("path",{attrs:{d:"M16 21c3.52-1.55 5.99-4.91 5.99-9 0-4.1-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 2.95-1.62 5.61-4 7v2Z"}}),t._v(" "),r("path",{attrs:{d:"M16 7v10c1.22-1.1 2-3.23 2-5 0-1.78-.78-3.9-2-5ZM4 17h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-16c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L6.67 6.97h-2.7c-1.11 0-2 .89-2 2v6c0 1.1.89 2 2 2Zm0-8h3c.03 0 .06-.02.09-.02 .06-.01.125-.02.18-.04 .06-.03.13-.05.19-.08 .02-.02.05-.02.08-.04l4.445-2.97v12.264l-4.445-2.97c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6Z"}})])])]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins1repeat?"block":"hidden",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.repeatPhillippins1}},[r("path",{attrs:{d:"M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"}})]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins1repeat?"block":"hidden",attrs:{version:"1.1",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.phillippins1Fullscreen}},[r("path",{attrs:{d:"M0 0h18v18h-18Z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M4.5 11h-1.5v4h4v-1.5h-2.5v-2.5Zm-1.5-4h1.5v-2.5h2.5v-1.5h-4v4Zm10.5 6.5h-2.5v1.5h4v-4h-1.5v2.5Zm-2.5-10.5v1.5h2.5v2.5h1.5v-4h-4Z"}})])]):t._e()]),t._v(" "),r("div",{staticClass:"absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25",class:t.phillippins1audio?"hidden":"block",on:{click:t.backwardsPhillippins1}}),t._v(" "),r("div",{staticClass:"absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25",class:t.phillippins1audio?"hidden":"block",on:{click:t.backwardsPhillippins1}}),t._v(" "),r("video",{ref:"phillippins1",staticClass:"w-screen",attrs:{preload:"metadata",id:"philip1",autoplay:"autoplay",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:"/videos/phillippins1.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/phillippins1.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/phillippins1.mp4",type:"video/mp4"}}),t._v(" "),r("track",{attrs:{label:"English",kind:"subtitles",srclang:"en",src:"/videos/phillippins1.vtt",default:""}}),t._v("\n\n        Your browser does not support the video tag. /> Your browser does not\n        support the video tag.\n      ")])])]),t._v(" "),r("div",{staticClass:"m-3"},[r("div",{staticClass:"relative z-40 flex items-center content-center justify-center",on:{mouseenter:function(e){t.InsideFrameP2=!0},mouseleave:function(e){t.InsideFrameP2=!1}}},[r("button",{staticClass:"absolute z-50 px-4 py-2 font-semibold text-transparent bg-transparent border border-transparent rounded shadow hover:bg-gray-100 hover:text-black",class:t.phillippins2audio?"block":"hidden",on:{click:t.startPhillippins2}},[t._v("\n        "+t._s(t.$t("PlayInterview"))+"\n      ")]),t._v(" "),r("div",{staticClass:"absolute bottom-0 z-40 mb-10 mr-5"},[t.InsideFrameP2?r("div",{staticClass:"z-50 flex flex-row items-center"},[r("div",{class:t.phillippins2repeat?"block":"hidden"},[r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins2Mute?"hidden":"block",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.mutePhillippins2}},[r("path",{attrs:{d:"M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"}})]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins2Mute?"block":"hidden",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.playPhillippins2}},[r("g",[r("path",{attrs:{d:"M16 21c3.52-1.55 5.99-4.91 5.99-9 0-4.1-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 2.95-1.62 5.61-4 7v2Z"}}),t._v(" "),r("path",{attrs:{d:"M16 7v10c1.22-1.1 2-3.23 2-5 0-1.78-.78-3.9-2-5ZM4 17h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-16c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L6.67 6.97h-2.7c-1.11 0-2 .89-2 2v6c0 1.1.89 2 2 2Zm0-8h3c.03 0 .06-.02.09-.02 .06-.01.125-.02.18-.04 .06-.03.13-.05.19-.08 .02-.02.05-.02.08-.04l4.445-2.97v12.264l-4.445-2.97c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6Z"}})])])]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins2repeat?"block":"hidden",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.repeatPhillippins2}},[r("path",{attrs:{d:"M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"}})]),t._v(" "),r("svg",{staticClass:"w-12 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current hover:text-black hover:shadow hover:bg-gray-100",class:t.phillippins2repeat?"block":"hidden",attrs:{version:"1.1",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.phillippins2Fullscreen}},[r("path",{attrs:{d:"M0 0h18v18h-18Z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M4.5 11h-1.5v4h4v-1.5h-2.5v-2.5Zm-1.5-4h1.5v-2.5h2.5v-1.5h-4v4Zm10.5 6.5h-2.5v1.5h4v-4h-1.5v2.5Zm-2.5-10.5v1.5h2.5v2.5h1.5v-4h-4Z"}})])]):t._e()]),t._v(" "),r("div",{staticClass:"absolute left-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25",class:t.phillippins2audio?"hidden":"block",on:{click:t.backwardsPhillippins2}}),t._v(" "),r("div",{staticClass:"absolute right-0 z-40 w-1/12 h-full bg-white opacity-0 cursor-pointer hover:opacity-25",class:t.phillippins2audio?"hidden":"block",on:{click:t.backwardsPhillippins2}}),t._v(" "),r("video",{ref:"phillippins2",staticClass:"w-screen",attrs:{preload:"metadata",id:"philip2",autoplay:"autoplay",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:"/videos/phillippins2.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/phillippins2.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/phillippins2.mp4",type:"video/mp4"}}),t._v(" "),r("track",{attrs:{label:"English",kind:"subtitles",srclang:"en",src:"/videos/phillippins1.vtt",default:""}}),t._v("\n\n        Your browser does not support the video tag. /> Your browser does not\n        support the video tag.\n      ")])])])])}),[],!1,null,"e212ac8e",null);e.default=component.exports}}]);