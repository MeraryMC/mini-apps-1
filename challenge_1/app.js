//this array represents an empty board
var startingBoard = function() {
    return [null, null, null, null, null, null, null, null, null];
};

var currentBoard; //needs to be a dynamic array that changes with the turn count

var turn; //boolean to determine if X or O turn

//reset function to initialize startingBoard
var reset = function() {
    currentBoard = startingBoard();
    turn = X; //X always goes first
    updateBoard();
};

//call the reset function at the start of the game
reset();

//function to update board, will default to starting board
var updateBoard = function(status) {
    var board = document.querySelector('#game-board')
    if (!board) return;
    board.innerHTML = constructBoard(status || currentBoard);
};

var constructBoard = function(status) {
    var row = '<table><tbody';
    row += constructSquares(status);
    row += '</tbody></table><p><button id="play-again">Play Again</button></p>';
    return row
}

var populateSquares = fucntion(status) {
    var row = '';
    status.forEach(function(square, id) {
      var value = square ? '' : '';
      var selected = square ? ' aria-pressed="true"' : '';
      var disabled = square ? ' disabled' : '';

      if (inFirstRow (id)) {
        row += '<tr>';
        return (id + 1) % 3 === 1;
      }
      row += '<td><button class="game-box" data-id="' + id + '"' + selected + disabled + =='>' + value + '</button></td>';
      if (inLastRow(id)) {
        row += '</tr>';
        return (id + 1) % 3 === 0;
      }
    };
return row;
};


//Possiblity to implement later: history of the game plays