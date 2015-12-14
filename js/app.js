$(document).ready(function() {

  //change contents of #timer
  //to equal value of #workMinutes
  var minutes = 25;
  var seconds = 0;


  function setMinutes() {
    $("#timer").html("<h2>" + minutes + "</h2>");
  };
  
  function formatClock() {
    if (seconds < 10) { //adds leading zero for seconds
       seconds = "0" + seconds;
      }
  }
    
  function displayTimer() {
      if (seconds < 10) { //adds leading zero for seconds
        seconds = "0" + seconds;
      }
    }

  function countdown() {

    function displayTimer() {
      if (seconds < 10) { //adds leading zero for seconds
        seconds = "0" + seconds;
      }

      var timerHTML = '<h2>' + minutes + ':' + seconds + "</h2>";
      $('#timer').html(timerHTML);
    }

    function startTimer() {
      displayTimer();
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }

      if (minutes === 0 && seconds === 00) { //ends interval when timer hits zero
        clearInterval(interval);
        $('#timer').html('00:00');
      }

    };

    var interval = setInterval(startTimer, 1000); //starts interval
    
      //on pause button press
      $(".paused").click(function(){
        
        //change icon to play icon
        $('.fa-pause').addClass('fa-play').removeClass('fa-pause');
        $('.start').toggleClass('start');
        //stop interval
        window.clearInterval(interval);
        
        //display last values of minutes and seconds, formatted
        $('#timer').html("<h2>" + minutes + ":" + seconds + "</h2>");
        
        $('.start').toggleClass('paused');
        
        
        //logic for plus and minus buttons to add to minutes when counter is paused?
      });
     
  } //end startTimer function
  
    //start a new interval when play button is pressed again
  function resumeTimer(){
    
  }
  
  //reset timer to default break - 5 minutes
  function resetTimer(){
    
  }


  //on plus btn press
  //add time to #work
  //on minus btn press
  //subtract time from #work
  setMinutes();

    $(".plus").click(function() {
      minutes++;
      setMinutes();
    });

    $(".minus").click(function() {
      minutes--;
      setMinutes();
    });

   $(".start").click(function(){
     //change icon to pause icon
     $('.fa-play').addClass('fa-pause').removeClass('fa-play');
     $('.start').toggleClass('paused');
     
     countdown();
   });
 
});

//so the pause button works, although the paused time needs to be formatted. BUT how to prevent the interval from then resetting? Tried adding toggle classes - didn't help. 