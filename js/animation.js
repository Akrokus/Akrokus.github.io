(function(){
    document.addEventListener('DOMContentLoaded', function() {
      
        videoPlay();
      
        stopVideo();
        
        
        
        
        function videoPlay(){
            let buttonm = document.querySelector(".play_button_icon");
            let cover = document.querySelector(".cover"); 
            let video = document.querySelector('.video');
           
            buttonm.addEventListener("click", function(){
               cover.style.display = "none";
               video.play();
               
            })
        }
        function stopVideo(){
            let buttonm = document.querySelector(".stop_button");
            let cover = document.querySelector(".cover"); 
            let video = document.querySelector('.video');

            buttonm.addEventListener("click", function(){
                cover.style.display = "block";
                video.pause();
            })
        }

        function openBlock(){
            let generalBlock = document.querySelector(".general_block");
let block_hove = document.querySelector(".block_hover");
let block_opacity = document.querySelector(".block_opacity");
 block_hove.addEventListener("mouseover", function(){
 
 animate(100, 200,1, 0, 1, 0.01);
 
 
  
 })
  block_hove.addEventListener("mouseout", function(){
 	
  animate(200, 100,-1, 1, 0.01, -0.01);
 })
 
 function animate(start, end, cross,opasity, noneOpacity, opacityCross){
 	  let id = setInterval(frame, 10);
  let pos =start;
  
  function frame() {
    if (pos == end) {
    blockOpacity(opasity, noneOpacity, opacityCross);
      clearInterval(id);
    } else {
      pos=pos + cross;
      generalBlock.style.height = pos + 'px';
    }
    }
 }
 
 function blockOpacity(opasity, noneOpacity, opacityCross){
 	  let id = setInterval(frame, 10);
  let pos =opasity;
  
  function frame() {
    if (pos == noneOpacity) {
      clearInterval(id);
    } else {
      pos=pos + opacityCross;
      block_opacity.style.opacity = pos;
    }
    }
 }
        }

       
        })
}());





