
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




document.getElementById('add-name').addEventListener('click', function(){  
 
  const name = document.getElementById('input-name').value;

  // Exemplo de como adicionar um item na lista.
  const lista = document.getElementById('name-list');
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(name));
  lista.appendChild(li);
  
});



