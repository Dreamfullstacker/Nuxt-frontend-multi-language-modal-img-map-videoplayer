var videoElement = document.getElementById('videoEle');

$(document).ready(function(){
	$( window ).resize(function() {
	setTimeout(function(){
		var body = document.body,
    html = document.documentElement;

var cHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
					 //  var cHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
		
	var cWidth = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );
	console.log('width'+cWidth);
	console.log('height'+cHeight);
	cWidth=videoElement.offsetWidth;
	var cHeight=$(document).height();
	var xAxis=cWidth*0.85;
	var yAxis=cHeight*0.5;
	//var xAxis=856;
	//var yAxis=3284;
		$('#video-overlay').css('top',yAxis+'px');
			$('#video-overlay').css('left',xAxis+'px');
		$('#video-overlay').mouseover(function() {
			$('#video-overlay').css('opacity',0.5);
		});
		$('#video-overlay').mouseout(function() {
			$('#video-overlay').css('opacity',0);
		});
	});
	});
	setTimeout(function(){
	/*var cHeight=videoElement.clientHeight;
	//var cHeight = document.getElementById('videoEle').offsetHeight;
	var body = document.body,
    html = document.documentElement;

var cHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
					 //  var cHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
		
	var cWidth = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );
	console.log('width'+cWidth);
	console.log('height'+cHeight);
	var xAxis=cWidth*0.85;
	var yAxis=cHeight*0.82;*/
	var xAxis=1156;
	var yAxis=4433;
		$('#video-overlay').css('top',yAxis+'px');
			$('#video-overlay').css('left',xAxis+'px');
		$('#video-overlay').mouseover(function() {
			$('#video-overlay').css('opacity',0.5);
		});
		$('#video-overlay').mouseout(function() {
			$('#video-overlay').css('opacity',0);
		});
	var xAxis=211;
	var yAxis=3020;
		$('#video-overlay1').css('top',yAxis+'px');
			$('#video-overlay1').css('left',xAxis+'px');
		$('#video-overlay1').mouseover(function() {
			$('#video-overlay1').css('opacity',0.5);
		});
		$('#video-overlay1').mouseout(function() {
			$('#video-overlay1').css('opacity',0);
		});	
	var xAxis=740;
	var yAxis=2898;
		$('#video-overlay2').css('top',yAxis+'px');
			$('#video-overlay2').css('left',xAxis+'px');
		$('#video-overlay2').mouseover(function() {
			$('#video-overlay2').css('opacity',0.5);
		});
		$('#video-overlay2').mouseout(function() {
			$('#video-overlay2').css('opacity',0);
		});		
	var xAxis=325;
	var yAxis=2505;
		$('#video-overlay3').css('top',yAxis+'px');
			$('#video-overlay3').css('left',xAxis+'px');
		$('#video-overlay3').mouseover(function() {
			$('#video-overlay3').css('opacity',0.5);
		});
		$('#video-overlay3').mouseout(function() {
			$('#video-overlay3').css('opacity',0);
		});		
	
	var xAxis=858;
	var yAxis=2498;
		$('#video-overlay4').css('top',yAxis+'px');
			$('#video-overlay4').css('left',xAxis+'px');
		$('#video-overlay4').mouseover(function() {
			$('#video-overlay4').css('opacity',0.5);
		});
		$('#video-overlay4').mouseout(function() {
			$('#video-overlay4').css('opacity',0);
		});	
	var xAxis=537;
	var yAxis=2237;
		$('#video-overlay5').css('top',yAxis+'px');
			$('#video-overlay5').css('left',xAxis+'px');
		$('#video-overlay5').mouseover(function() {
			$('#video-overlay5').css('opacity',0.5);
		});
		$('#video-overlay5').mouseout(function() {
			$('#video-overlay5').css('opacity',0);
		});	
var xAxis=214;
	var yAxis=1977;
		$('#video-overlay6').css('top',yAxis+'px');
			$('#video-overlay6').css('left',xAxis+'px');
		$('#video-overlay6').mouseover(function() {
			$('#video-overlay6').css('opacity',0.5);
		});
		$('#video-overlay6').mouseout(function() {
			$('#video-overlay6').css('opacity',0);
		});		
var xAxis=856;
	var yAxis=1688;
		$('#video-overlay7').css('top',yAxis+'px');
			$('#video-overlay7').css('left',xAxis+'px');
		$('#video-overlay7').mouseover(function() {
			$('#video-overlay7').css('opacity',0.5);
		});
		$('#video-overlay7').mouseout(function() {
			$('#video-overlay7').css('opacity',0);
		});	
var xAxis=326;
	var yAxis=1576;
		$('#video-overlay8').css('top',yAxis+'px');
			$('#video-overlay8').css('left',xAxis+'px');
		$('#video-overlay8').mouseover(function() {
			$('#video-overlay8').css('opacity',0.5);
		});
		$('#video-overlay8').mouseout(function() {
			$('#video-overlay8').css('opacity',0);
		});		
	var xAxis=742;
	var yAxis=1308;
		$('#video-overlay9').css('top',yAxis+'px');
			$('#video-overlay9').css('left',xAxis+'px');
		$('#video-overlay9').mouseover(function() {
			$('#video-overlay9').css('opacity',0.5);
		});
		$('#video-overlay9').mouseout(function() {
			$('#video-overlay9').css('opacity',0);
		});	
		var xAxis=215;
	var yAxis=1165;
		$('#video-overlay10').css('top',yAxis+'px');
			$('#video-overlay10').css('left',xAxis+'px');
		$('#video-overlay10').mouseover(function() {
			$('#video-overlay10').css('opacity',0.5);
		});
		$('#video-overlay10').mouseout(function() {
			$('#video-overlay10').css('opacity',0);
		});
		var xAxis=647;
	var yAxis=901;
		$('#video-overlay11').css('top',yAxis+'px');
			$('#video-overlay11').css('left',xAxis+'px');
		$('#video-overlay11').mouseover(function() {
			$('#video-overlay11').css('opacity',0.5);
		});
		$('#video-overlay11').mouseout(function() {
			$('#video-overlay11').css('opacity',0);
		});		
	var xAxis=11;
	var yAxis=4985;
		$('#video-overlay12').css('top',yAxis+'px');
			$('#video-overlay12').css('left',xAxis+'px');
		$('#video-overlay12').mouseover(function() {
			$('#video-overlay12').css('opacity',0.5);
		});
		$('#video-overlay12').mouseout(function() {
			$('#video-overlay12').css('opacity',0);
		});	
var xAxis=436;
	var yAxis=3553;
		$('#video-overlay13').css('top',yAxis+'px');
			$('#video-overlay13').css('left',xAxis+'px');
		$('#video-overlay13').mouseover(function() {
			$('#video-overlay13').css('opacity',0.5);
		});
		$('#video-overlay13').mouseout(function() {
			$('#video-overlay13').css('opacity',0);
		});			
	},500);
	
	
	$('#video-overlay').click(function(){
		showVideo('VAy7jSMbLb4');
	});
	$('#video-overlay12').click(function(){
		showVideo('PHZAtZjWuxc');
	});
	$('#video-overlay13').click(function(){
		showVideo('Z4UhzAPEfWk');
	});
	$('#video-overlay1').click(function(){
		showVideo('ZWx4W6ewJu4');
	});
		$('#video-overlay2').click(function(){
		showVideo('9cjOrkYzgt0');
	});
	$('#video-overlay3').click(function(){
		showVideo('AU5T-qo0H3U');
	});
	$('#video-overlay4').click(function(){
		showVideo('yuddeFzEWCc');
	});
	$('#video-overlay7').click(function(){
		showVideo('zjhlCazLnFA');
	});
	$('#video-overlay5').click(function(){
		showVideo('Y3iY89zExkw');
	});	
	$('#video-overlay8').click(function(){
		showVideo('Y3iY89zExkw');
	});
	$('#video-overlay9').click(function(){
		showVideo('omyOx8VAo3Y');
	});
	$('#video-overlay10').click(function(){
		showVideo('9DzZF2_sGsY');
	});
	$('#video-overlay6').click(function(){
		showVideo('RAHItEOxuI0');
	});
	$('#video-overlay11').click(function(){
		showVideo('RAHItEOxuI0');
	});
	
});
handleClick = function(e) {

    console.log("Mouse-X: " + (e.clientX + window.pageXOffset));
    console.log("Mouse-Y: " + (e.clientY + window.pageYOffset));
	//const mediaQuery = window.matchMedia('(max-width: 767px) && (min-width: 569px)')
	//const mediaQuery = window.matchMedia('(max-width: 767px)')
	 
	
	var xAxis=e.clientX + window.pageXOffset;
		var yAxis=e.clientY + window.pageYOffset;
		var cHeight=videoElement.clientHeight;
		var cWidth=videoElement.clientWidth;
// Check if the media query is true

console.log('width'+cWidth);
console.log('height'+cHeight);
//if (mediaQuery.matches) {
  // Then trigger an alert
  ///alert('Media Query Matched!')
  var y=yAxis/cHeight;
  var x=xAxis/cWidth;
  console.log('y'+y);
console.log('x'+x);
  
		if((y >= 0.82 && y <= 0.86) && (x >= 0.84 && x <= 0.94)){
			console.log('RED WOMEN');
			showVideo('38rl7VA1oBA');
		}
/*}
	else{
	
		if((xAxis > 1310 && xAxis <1442) &&  (yAxis >4986 && yAxis < 5185)){
			console.log('RED WOMEN100');
			showVideo('Nfqx8atZdSE');
		}
	}*/
    
    e.preventDefault();
}


if(videoElement){
  videoElement.addEventListener('mousedown', handleClick, false);
 // videoElement.addEventListener('mouseover', mouseover, false);
    console.log('Houssam');
}
    else{
           console.log('Houssam11');
 
    }
	
function showVideo(youtubeID){

	var url = 'https://www.youtube.com/embed/' + youtubeID+'?controls=0'; 
	document.getElementById('videoIframe').src = url;
	// Get the modal
	var modal = document.getElementById('videoModal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block"; 
	// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById('videoIframe').src = '';

}
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('videoIframe').src = '';
    }
}
}
    
    
    
