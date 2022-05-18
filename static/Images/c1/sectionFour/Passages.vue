<template>
    <div style="background-color:black; width:100%">
        <div style="padding-top: 100px;">
            </div>
        <div class="main" id="maintag">     
    
        
        </div>
        <div class="parentDiv">
            <div class="light">
                <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(1)" @mouseover="setmouseover(1)" @mouseleave="setmouseleave(1)">
                <div class="middle">
                    <video class="VisaChipCardVideo" id="VisaChipCardVideo1" width=""  v-on:click = "videocontrol(1)" @mouseover="setmouseover(1)" @mouseleave="setmouseleave(1)" poster = "/Images/c1/sectionFour/w1.png">
                        <source src="/Images/c1/sectionFour/w1.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <!--<div class="fade" ></div>-->
            <div class="title" >
            <span v-on:click = "videocontrol(1)" class="lightbox_open" id="1" style="color: #FFFFFF;"> بقول بنتي
            </span>
            </div>
        </div>
    
        <div class="parentDiv">
            <div class="light">
                <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(2)" @mouseover="setmouseover(2)" @mouseleave="setmouseleave(2)">
                <div class="middle">
                    <!--<a class="boxclose lightbox_close" id="boxclose_2" ></a>-->
                    <video class="VisaChipCardVideo" id="VisaChipCardVideo2" width=""  v-on:click = "videocontrol(2)" @mouseover="setmouseover(2)" @mouseleave="setmouseleave(2)" poster = "/Images/c1/sectionFour/w2.png">
                        <!-- <source src="ango 2_23.97.mp4" type="video/mp4"> -->
                        <source src="/Images/c1/sectionFour/w2.mp4" type="video/mp4">
                        <!--Browser does not support <video> tag -->
                    </video>
                </div>
            </div>
            <!-- <div class="fade" ></div>-->
            <div class="title" >
            <span v-on:click = "videocontrol(2)" class="lightbox_open" id="1" style="color: #FFFFFF;">ستي هي التي ربتنا
            </span>
            </div>
        </div>
        <div class="parentDiv">
        <div class="light">
            <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(3)" @mouseover="setmouseover(3)" @mouseleave="setmouseleave(3)">
            <div class="middle">
                <!--<a class="boxclose lightbox_close" id="boxclose_3" ></a>-->
                <video class="VisaChipCardVideo" id="VisaChipCardVideo3" width=""  v-on:click = "videocontrol(3)" @mouseover="setmouseover(3)" @mouseleave="setmouseleave(3)" poster = "/Images/c1/sectionFour/w3.png">
                <!-- <source src="racell 23.97.mp4" type="video/mp4"> -->
                <source src="/Images/c1/sectionFour/w3.mp4" type="video/mp4">
                    <!--Browser does not support <video> tag -->
                </video>
            </div>
        </div>
        
        <!-- <div class="fade" ></div>-->
        
        <div class="title" >
            <span v-on:click = "videocontrol(3)" class="lightbox_open" id="1" style="color: #FFFFFF;">حسنت لنا علاقتنا الزوجية
            </span>
        </div>
        </div>
        <div class="parentDiv">
        <div class="light">
            <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(4)" @mouseover="setmouseover(4)" @mouseleave="setmouseleave(4)">
            <div class="middle">
                <!--<a class="boxclose lightbox_close" id="boxclose_4" ></a>-->
                <video class="VisaChipCardVideo" id="VisaChipCardVideo4" width=""  v-on:click = "videocontrol(4)"  @mouseover="setmouseover(4)" @mouseleave="setmouseleave(4)" poster = "/Images/c1/sectionFour/w4.png">
                <!-- <source src="rima 23.97.mp4" type="video/mp4"> -->
                <source src="/Images/c1/sectionFour/w4.mp4" type="video/mp4">
                    <!--Browser does not support <video> tag -->
                </video>
            </div>
        </div>
        <!--<div class="fade" ></div>-->
        <div class="title" >
            <span v-on:click = "videocontrol(4)" class="lightbox_open" id="1" style="color: #FFFFFF;">  بحب يمشي بالبوكسر
            </span>
        </div>
        </div>
        <div class="parentDiv">
        <div class="light">
            <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(5)" @mouseover="setmouseover(5)" @mouseleave="setmouseleave(5)">
            <div class="middle">
                <!--<a class="boxclose lightbox_close" id="boxclose_5" ></a>-->
                <video class="VisaChipCardVideo" id="VisaChipCardVideo5" width=""  v-on:click = "videocontrol(5)" @mouseover="setmouseover(5)" @mouseleave="setmouseleave(5)" poster = "/Images/c1/sectionFour/w5.png">
                <!-- <source src="rita 1_23.97.mp4" type="video/mp4"> -->
                <source src="/Images/c1/sectionFour/w5.mp4" type="video/mp4">
                    <!--Browser does not support <video> tag -->
                </video>
            </div>
        </div>
        <!--<div class="fade" ></div>-->
        <div class="title">
            <span v-on:click = "videocontrol(5)" class="lightbox_open" id="1" style="color: #FFFFFF;">انا ما رح فني غير الكوكب
            </span>
        </div>
        </div>
        <div class="parentDiv">
        <div class="light">
            <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(6)" @mouseover="setmouseover(6)" @mouseleave="setmouseleave(6)">
            <div class="middle">
                <!--<a class="boxclose lightbox_close" id="boxclose_6" ></a>-->
                <video class="VisaChipCardVideo" id="VisaChipCardVideo6" width=""  v-on:click = "videocontrol(6)" @mouseover="setmouseover(6)" @mouseleave="setmouseleave(6)" poster = "/Images/c1/sectionFour/w6.png">
                <!-- <source src="rita 2_23.97.mp4" type="video/mp4"> -->
                <source src="/Images/c1/sectionFour/w6.mp4" type="video/mp4">
                    <!--Browser does not support <video> tag -->
                </video>
            </div>
        </div>
        <!--<div class="fade" ></div>-->
        <div class="title">
            <span v-on:click = "videocontrol(6)" class="lightbox_open" id="1" style="color: #FFFFFF;">صار عندها علاقة حنان مع الاولاد
            </span>
        </div>
        </div>
        <div class="parentDiv">
        <div class="light">
            <img class="playbtn"  src="/Images/c1/sectionFour/arrow.png" v-on:click = "videocontrol(7)" @mouseover="setmouseover(7)" @mouseleave="setmouseleave(7)">
            <div class="middle">
                <!--<a class="boxclose lightbox_close" id="boxclose_7" ></a>-->
                <video class="VisaChipCardVideo" id="VisaChipCardVideo7" width="" v-on:click = "videocontrol(7)" @mouseover="setmouseover(7)" @mouseleave="setmouseleave(7)" poster = "/Images/c1/sectionFour/w7.png">
                <!-- <source src="unknown 1_23.97.mp4" type="video/mp4"> -->
                <source src="/Images/c1/sectionFour/w7.mp4" type="video/mp4">
                    <!--Browser does not support <video> tag -->
                </video>
            </div>
        </div>
        <!--<div class="fade" ></div>-->
        <div class="title">
            <span v-on:click = "videocontrol(7)" class="lightbox_open" id="1" style="color: #FFFFFF;">سودة ومن ثقافة تانية بخفف من حضورها
            </span>
        </div>
        </div>
    </div>
</template>

<style >
    @font-face {
        font-family: Nassim;
        font-weight: 400;
        src: url('Regular.woff') format('woff');
    }   
    .parentDiv {
        /*border: 1px solid red;*/
        height: 300px;
        width: auto;
        font-family: Nassim;
        font-size:2em;
        color: black;
    }
    .title{
        float: left;
        padding-bottom: 50px;
    }
    .VisaChipCardVideo{
        height:  200px;
        width: 300px;
    }
    /* .VisaChipCardVideo:hover{
        opacity: 0.5;
    } */
    .light {
        float: left ;
        border: 0px solid #FFF;
        z-index: 1002;
        overflow: visible;
        width: 300px;
    }
    .middle{
        width: 100%;
        /* background-color: #988969; */
    }

    .boxclose:before {
        content: "x";
    }
    .fade:hover ~ #boxclose {
        display:none;
    }
    .test:hover ~ .test2 {
        display: none;
    }
    @media screen and (max-width: 567px) {
    
    }
    .title > span{
        /* text-decoration: none; */
        position: relative;
    }
    .title > span:after {    
        /* text-decoration: none; */
        bottom: 0;
        content: "";
        display: block;
        height: 10px;
        left: 50%;
        width: fit-content;
        position: absolute;
        background: #f1d130;
        transition: width 0.3s ease 0s;
        width: 0;
    }
    .title > span:hover:after { 
        width: 100%; 
        left: 0; 
    }
  
    .title > span:hover{
        cursor: pointer;

    }
    video{
        background: black;
    }
    .playbtn{
        opacity: 0;
        position : absolute;
        height : 70px; 
        width : auto;
        cursor: pointer;
        z-index: 1;
        margin-left: 90px;
        margin-top : 70px;
    }
    .light:hover .playbtn{
        opacity: 1;
    } 
    .light:hover .VisaChipCardVideo{
        opacity: 0.5;
    }
</style>

<script>

export default {
    data() {
          
        return{
            width : window.innerWidth
        }
    },
    created(){
        
    },
    watch : {
        width : function (){
            console.log("width changed")
        }
    },
    mounted(){
    var divs = document.getElementsByClassName("parentDiv");
    var randomLeft = 0;
    if (window.matchMedia("(max-width: 3000px)").matches) 
      {
      // var winWidth = $( window ).width()-250;
      var winWidth = document.getElementById("maintag").style.display.width;
       console.log('mobile.111.');
      //var winWidth = 320;
        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;
  
        // i stands for "index". you could also call this banana or haircut. it's a variable
        var topp=100;
        for ( var i=0; i < divs.length; i++ ) {
         
          // shortcut! the current div in the list
          var thisDiv = divs[i];
          
          // get random numbers for each element
          //randomTop = getRandomNumber(0, winHeight);
          console.log('innerWidth===========>', winWidth);
          randomLeft = this.getRandomNumber(0, 60);
          thisDiv.style.paddingTop = topp+"px";
          thisDiv.style.paddingLeft = randomLeft +"%";
        //   topp=topp+200;
          
        }
      }
      else{
        var winWidth = document.getElementById("maintag").style.display.width;
        // var winHeight = window.innerHeight;
  
        // i stands for "index". you could also call this banana or haircut. it's a variable
        var topp=80;
        for ( var i=0; i < divs.length; i++ ) {
         
          // shortcut! the current div in the list
          var thisDiv = divs[i];
          
          // get random numbers for each element
          //randomTop = getRandomNumber(0, winHeight);
          randomLeft = this.getRandomNumber(0, 80);
          if(randomLeft>450){
          randomLeft=450;
          }
          // update top and left position
          thisDiv.style.top = topp+"px";
          thisDiv.style.paddingLeft = randomLeft +"%";
        //   topp=topp+300;
          
        }
      }
    },

    methods:{
        videocontrol(videoID){
            console.log(videoID)
            var lightBoxVideo = document.getElementById("VisaChipCardVideo"+videoID);
            if(lightBoxVideo.paused == false)
                lightBoxVideo.pause();
            else{
                var allVideo = document.getElementsByClassName("VisaChipCardVideo");
                for ( var i=0; i < allVideo.length; i++ ) {
                    // shortcut! the current div in the list
                    var thisVideo = allVideo[i];
                    thisVideo.pause();
                }
                lightBoxVideo.play();
            }
        },
        getRandomNumber(min, max) {
        
            return Math.random() * (max - min) + min;
        },
        setmouseover(num){
            // console.log(e.target);
            document.getElementById('VisaChipCardVideo' + num).style.opacity = 0.5
            // document.getElementById('playbtn').style.display = 'block'
            // document.getElementById('VisaChipCardVideo' + num).setAttribute('poster','/Images/c1/sectionFour/hover.png');
        },
        setmouseleave(num){
            // console.log(e.target);
            document.getElementById('VisaChipCardVideo' + num).style.opacity = 1
            // document.getElementById('playbtn').style.display = 'none'
            // document.getElementById('VisaChipCardVideo' + num).setAttribute('poster','/Images/c1/sectionFour/w'+ num + '.png');
        }
    }
}
</script>
