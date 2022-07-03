//Restart game button
var restart = document.querySelector("#b")
//Grabs all the cells
var cells = document.querySelectorAll('td')

//Clear all the cells
function clearBoard() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}
restart.addEventListener('click', clearBoard);

//Check the cell marker
function changeMarker() {
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

//Add event listeners to all the cells
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', changeMarker);
}
