
window.addEventListener('DOMContentLoaded', function(){
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
  //timer

  let deadline = '2020-01-01'; //yyyy-mm-dd

  function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
      // hours = Math.floor((t/1000/60/60) % 24);
      //  days = Math.floor((t/(1000*60*60*24)));
  return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
      };
  }

  function setClock(id, endtime) {
  var clock = document.getElementById(id);
      hoursSpan = clock.querySelector('.hours'),
      minutesSpan = clock.querySelector('.minutes'),
      secondsSpan = clock.querySelector('.seconds'),
      timeinterval = setInterval(updateClock, 1000);

  function updateClock() {
    var timeRemaining = (Date.parse(endtime) - Date.parse(new Date())) / 1000; //time remaining (rest time)
    
    if (timeRemaining >= 0) {
      var t = getTimeRemaining(endtime);
      hoursSpan.textContent = t.hours;
      minutesSpan.textContent =("0" + t.minutes).slice(-2);
      secondsSpan.textContent = ("0" + t.seconds).slice(-2);
    } else {
      hoursSpan.textContent = "00";
      minutesSpan.textContent ="00";
      secondsSpan.textContent = "00";
    }
    
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }    
  }

  setClock('timer', deadline); 

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  //overlay

  let more = document.querySelector(".more"),
      overlay = document.querySelector(".overlay"),
      popupClose = document.querySelector(".popup-close");


  more.addEventListener("click", function() {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  popupClose.addEventListener("click", function() {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });
});
  

