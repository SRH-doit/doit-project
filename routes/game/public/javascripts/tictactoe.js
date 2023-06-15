const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function makeMove(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    const cell = document.getElementsByClassName("cell")[index];
    cell.innerText = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " 이겼다!");
      reset();
    } else if (checkDraw()) {
      alert("무승부");
      reset();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let combo of winningCombos) {
    if (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return board.every((cell) => cell !== "");
}

function reset() {
  board.fill("");
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  currentPlayer = "X";
}
