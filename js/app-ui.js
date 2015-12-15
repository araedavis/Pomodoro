$(document).ready(function(){
	
	$("#timer").html("<h2>" + minutes + "</h2>");

	//plus & minus button controls
	$(".plus").click(function() {
      minutes++;
      displayTime();
    });

    $(".minus").click(function() {
      minutes--;
      displayTime();
    });


   //start, pause, refresh, break controls 
   $(".paused").click(function(){
   		$('.start').removeClass('paused').addClass('running');
   		startTimer();
     	$(".start-i").removeClass('fa-play').addClass('fa-pause');
   });

    
   $(".running").click(function(){
   		$('.start').addClass("paused").removeClass('running');
   		$(".start-i").removeClass('fa-pause').addClass('fa-play');
     	
        
        
        //logic for plus and minus buttons to add to minutes when counter is paused?
      }); 

});