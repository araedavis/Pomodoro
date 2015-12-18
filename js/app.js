var minutes = 25;
var seconds = 0;

var intervalId;

//timer functions

  function displayTime(){ //args minutes and seconds
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

  function timeOver(){
    if(minutes == 0 && seconds == "00"){
      pauseTimer();
    }
  }

  function pauseTimer(){
    clearInterval(intervalId);
    displayTime();
  }

  function refreshTimer(){
    minutes = "00";
    seconds = 0;
    displayTime();
  }	

  function breakTime(){
    minutes = 5;
    seconds = 0;
    displayTime();
  }

  //UI controls
  	//plus & minus button controls

  	$(".plus").click(function() {
        minutes++;
        displayTime();
      });

      $(".minus").click(function() {
        if (minutes > 0){
          minutes--;
        }
        displayTime();
      });


     //start, pause controls 
     $(".start").click(function(){
     		$('.start').toggleClass('paused');
       	$(".start-i").toggleClass('fa-play fa-pause');

        if($('.start').hasClass('paused') == false){
          startTimer();
          timeOver();

        } else if($('.start').hasClass('paused') == true){
          pauseTimer();      
        }

     });

     //refresh controls

     $(".refresh").click(function(){
        refreshTimer();
     });

     //break controls

     $(".break").click(function(){
        breakTime();
     });

   //app begins
   displayTime();
      
