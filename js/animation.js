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

       
        })
}());





