//minutes = default work block
  var minutes = 25;
  var seconds = 0;

  if (seconds < 10) { //adds leading zero for seconds
       seconds = "0" + seconds;
  };

  function displayTime(){
    $("#timer").html("<h2>" + minutes + ":" + seconds + "</h2>");
    
  }

  function countdown(){
    displayTime();
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
  }

  function startTimer() {
    var interval = setInterval(countdown, 1000); //starts interval
    return interval;

    if (minutes === 0 && seconds === 00) { //ends interval when timer hits zero
      clearInterval(interval);
      $('#timer').html('<h2>00:00</h2>');
      } 

    if($('.start').hasClass('paused')){
      clearInterval(interval);
      $('#timer').html("<h2>" + minutes + ":" + seconds + "</h2>");
    }
  };


   function resetTimer(){
    
    }

