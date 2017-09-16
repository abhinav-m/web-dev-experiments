$(document).ready(function() {
  makeBoard();
  setMover();
});

function setMover() {
  $(document).keypress(makeMove);
}

function makeBoard() {
 var board =  $('.wrapper');

 for(let i = 0; i < 32 ; i++){
 board.append(`<div class="${ i==11 ? 'cell lord-down-0':'cell' }" id=${i}></div>`);
 }

}


function makeMove(e) {
  var board =  $('.wrapper');
}
