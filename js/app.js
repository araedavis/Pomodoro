$(document).ready(function(){

var minutes = 25;
var seconds = 0;

var intervalId;

function displayTime(){
    var timerHTML = "<h2>" + minutes + ":" + seconds + "</h2>";
    
    if (seconds < 10) { //adds leading zero for seconds
       timerHTML = "<h2>" + minutes + ":0" + seconds + "</h2>"; ;
    }

    $('#timer').html(timerHTML);
  }

function countdown(){
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    displayTime();
  }

function startTimer(){
  if (minutes > 0 || seconds > 0){
    intervalId = setInterval(countdown, 1000);
  }
}

function pauseTimer(){
  clearInterval(intervalId);

  displayTime();
}


  displayTime();
	

	//plus & minus button controls
      //need to add logic to prevent negative values
      //logic for plus and minus buttons to add to minutes when counter is paused?

	$(".plus").click(function() {
      minutes++;
      displayTime();
    });

    $(".minus").click(function() {
      minutes--;
      displayTime();
    });


   //start, pause, refresh, break controls 
   $(".start").click(function(){
   		$('.start').toggleClass('paused');
     	$(".start-i").toggleClass('fa-play fa-pause');


      //still have to figure out how to clear interval / pause timer 
    if($('.start').hasClass('paused') == false){
      startTimer();

    } else if($('.start').hasClass('paused') == true){
      pauseTimer();
      
    }
      
   });

   $(".refresh").click(function(){
      minutes = "00";
      seconds = 0;
      displayTime();
   });

   $(".break").click(function(){
      minutes = 5;
      displayTime();
   });
      

});