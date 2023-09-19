var restart = document.querySelector("#bt");

var cells = document.querySelectorAll("td");

//Get Starting player randomly
function getStartingPlayer(){
  var randomPlayer = Math.floor((Math.random() * 2) + 1);
  if(randomPlayer == 1){
    return 'X';
  }
  else{
    return 'O';
  }
}

var currentPlayer = getStartingPlayer();
function changeCurrentPlayerLabel() {
  document.getElementById('current').textContent = "Current Player: " + currentPlayer;
};
changeCurrentPlayerLabel();


function clean(){
  for(var i =0; i<cells.length;i++)
    {
      cells[i].textContent = " "
    }

    currentPlayer = getStartingPlayer();
    changeCurrentPlayerLabel();
}

restart.addEventListener('click', clean);



  function changeMarker(){
      if(this.textContent === ''){
        this.textContent = currentPlayer;
        changeCurrentPlayer();
      }
    }
  function changeCurrentPlayer(){
    if(currentPlayer === 'X'){
      currentPlayer = 'O';
    }else{
      currentPlayer = 'X';
    }
    changeCurrentPlayerLabel();
  }
  for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', changeMarker);
  }
