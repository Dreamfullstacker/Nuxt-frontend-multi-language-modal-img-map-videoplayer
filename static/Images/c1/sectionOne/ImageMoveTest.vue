<template>
<div id="imagemove_container" @wheel="zoom">
    <div class="" style="width: 100vw; height: 1000px;">
		<div class= "flex flex-row h-half">
			<div class="col-6 flex justify-end align-items-end flex-column h-full">
				<img src="/Images/c1/sectionOne/image1.png" class="test" id="first" style="z-index: 100; position: relative;">
			</div>
			<div class="col-6 flex justify-end  align-items-start flex-column h-full" >
				<img src="/Images/c1/sectionOne/image2.png" id="second" class="test" style="z-index: 3; position: relative;">
			</div>
		</div>
		<div class= "flex flex-row h-half">
			<div class="col-6 flex align-items-end flex-column h-full">
				<img src="/Images/c1/sectionOne/image3.png" id="third" class="test" style="z-index: 2;">
			</div>
			<div class="col-6 flex align-items-start flex-column h-full">
				<img src="/Images/c1/sectionOne/image4.png" id="fourth" class="test" style="z-index: 0;">
			</div>
		</div>
	</div>
</div>
</template>
<script>
  export default {
        components: {
          
        },
        data() {
          
            return{
                scale : 0,
                direction : 0,
                el : document.getElementById('imagemove_container'),
                supportsPassive : false,
                wheelOpt : this.supportsPassive ? { passive: false } : false,
                wheelEvent : 'onwheel' in document.createElement('body') ? 'wheel' : 'mousewheel',
                keys : {37: 1, 38: 1, 39: 1, 40: 1}
            }
        },
        created(){
          
        },
        mounted(){
        //   this.disableScroll()
        //   this.el.onwheel = this.zoom;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { this.supportsPassive = true; 
                console.log(this.supportsPassive)}
            }));
        } catch(e) {}
        },
        methods:{
            preventDefault(e) {
                console.log(e)
                e.preventDefault();
                return false;
            },
            preventDefaultForScrollKeys(e) {
                if (this.keys[e.keyCode]) {
                    this.preventDefault(e);
                    return false;
                }
            },
            disableScroll() {
                console.log(this.wheelEvent);
                console.log(this.wheelOpt);
                document.addEventListener('wheel', this.preventDefault, {passive: false});
                document.addEventListener('mousewheel', this.preventDefault, {passive: false});
                document.addEventListener('DOMMouseScroll', this.preventDefault, {passive: false});
                window.addEventListener('touchmove', this.preventDefault, {passive: false}); // mobile
                window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
                console.log("disableScroll");
            },

                // call this to Enable
            enableScroll() {
                document.removeEventListener('wheel', this.preventDefault, {passive: false});
                document.removeEventListener('mousewheel', this.preventDefault, {passive: false});
                document.removeEventListener('DOMMouseScroll', this.preventDefault, {passive: false});
                window.removeEventListener('touchmove', this.preventDefault, {passive: false});
                window.removeEventListener('keydown', this.preventDefaultForScrollKeys, {passive: false});
            },
            zoom(event){
                if(this.scale < 5){
                    this.scale += Math.abs(event.deltaY) * 0.001;
                    console.log(this.scale);
                }
                if(this.scale <5){
                    this.disableScroll();
                    console.log("stoped");
                }
                else{
                    this.enableScroll();
                    console.log("scroll");
                }
                document.getElementById("first").style.marginBottom = -20 - this.scale * 3 + "%"
                document.getElementById("first").style.marginRight = this.scale * -6.5 + "%";
                document.getElementById("second").style.marginBottom = this.scale * -3 + "%"
                document.getElementById("second").style.marginLeft = this.scale * -6.3 + "%";
                document.getElementById("third").style.marginTop = -this.scale * 6 + "%"
                document.getElementById("third").style.marginRight = this.scale * -3 + "%";
                document.getElementById("fourth").style.marginTop = this.scale * -4 + "%"
                document.getElementById("fourth").style.marginLeft = this.scale * -4.9 + "%";
            }
        }
    }
</script>

<style>
    .test{
        width: 70%;
        height: auto;
    }
    #first{
        margin-bottom: -20%;
    }
    #fourth{
        margin-top: 0%;
    }
    .h-half{
        height: 50%;
    }
    .col-6{
        width: 50%;
    }
    .align-items-end{
        align-items: flex-end!important;
    }
    .align-items-start{
        align-items: flex-start!important;
    }
    .flex-column {
        flex-direction: column!important;
    }
</style>