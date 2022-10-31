var hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    container = document.querySelector('.container'),
    start = document.querySelector('.start'),
    pause = document.querySelector('.pause'),
    reset = document.querySelector('.reset'),
    count_time = 0;


start.onclick = function(){
  var counter = setInterval(function(){
    count_time++;
    if (count_time > 0) {
      seconds.textContent = count_time;
    }
    if (count_time === 60) {
      count_time = 0;
      minutes.textContent++;
    }
    if (minutes.textContent == 60) {
      minutes.textContent = 0;
      hours.textContent++;
    }
  }, 1000);

  pause.removeAttribute('disabled');
  reset.removeAttribute('disabled');
  start.setAttribute('disabled', 'disabled');

  pause.onclick = function(){
    clearInterval(counter);
    start.removeAttribute('disabled');
    pause.setAttribute('disabled', 'disabled');
  }
  reset.onclick = function(){
    clearInterval(counter);
    count_time = 0;
    seconds.textContent = 0;
    minutes.textContent = 0;
    hours.textContent = 0;
    start.removeAttribute('disabled');
    reset.setAttribute('disabled', 'disabled');
    pause.setAttribute('disabled', 'disabled');
  }
}