//this array represents an empty board
var startingBoard = function () {
  return [null, null, null, null, null, null, null, null, null];
};

//needs to be a dynamic array that changes with the turn count
var currentBoard;

//boolean to determine if X or O turn
var turn;

//update the board with each turn
var updateBoard = function (status) {
  var board = document.querySelector('#gameboard')
  if (!board) return;
  board.innerHTML = constructBoard(status || currentBoard);
};

//return to starting board
var reset = function () {
  currentBoard = startingBoard();
  turn = 'X';
  updateBoard();
};

//build the game board
var constructBoard = function (status) {
  var winner = checkForWinner();
  var rows = winner ? '<p><strong>' + winner + ' WINS</string></p>' : '';
  rows += '<table><tbody>';
  rows += constructBoxes(status, winner);
  rows += '</tbody></table><p><button id="restart">Restart Game</button></p>';
  return rows;
};

//check position of box
var checkFirstRow = function (id) {
  return (id + 1) % 3 === 1;
};

//check position of box
var checkLastRow = function (id) {
  return (id + 1) % 3 === 0;
};

//make move box
var constructBoxes = function (status, winner) {
  var rows = '';
  status.forEach(function (box, id) {
    var value = box ? box : '';
    var selected = box ? ' aria-pressed="true"' : '';
    var disabled = box || winner ? ' disabled' : '';
    if (checkFirstRow(id)) {
      rows += '<tr>';
    }
    rows += '<td><button class="game-box" data-id="' + id + '"' + selected + disabled + '>' + value + '</button></td>';
    if (checkLastRow(id)) {
      rows += '</tr>';
    }
  });
  return rows;
};

//show the X or O
var renderMove = function (box) {
  var selected = box.getAttribute('data-id');
  if (!selected) return;
  currentBoard[selected] = turn;
  updateBoard();
  turn = turn === 'X' ? 'O' : 'X';

};

//handle clicks to boxes or buttons
document.addEventListener('click', function (event) {
  if (event.target.matches('.game-box') && !event.target.hasAttribute('disabled')) {
    renderMove(event.target);
  }
  if (event.target.matches('#restart')) {
    reset();
  }

}, false);

//check for winner
var checkForWinner = function () {
  var winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];

  var checkForWinner = winningCombos.filter(function (win) {
    return (currentBoard[win[0]] && currentBoard[win[0]] === currentBoard[win[1]] && currentBoard[win[0]] === currentBoard[win[2]]);
  });
  return (checkForWinner.length > 0 ? currentBoard[checkForWinner[0][0]] : false);
};

//call the reset function at the start of the game
reset();
