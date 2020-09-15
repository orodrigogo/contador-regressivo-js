
function RegressiveCounter(value){  
  document.getElementById('timer-value').innerText = value;

  setTimeout(function(){

    if(value > 0)
      RegressiveCounter(value - 1); 
    else{
      document.querySelector('audio').play();
      document.getElementById('image').src = './img/tetra.gif';
    }

  }, 1000);
  
}


document.getElementById('button').addEventListener('click', function(){  
  const timerValue = document.getElementById('input').value;
  RegressiveCounter(timerValue);
});



