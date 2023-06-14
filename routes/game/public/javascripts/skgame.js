const tileCount = 30;
const tileSize = 20;
const gameGrid = document.querySelector('.game-grid');
const scoreElement = document.getElementById('score');
let snakeX = 0;
let snakeY = 0;
let snakeXSpeed = 1;
let snakeYSpeed = 0;
let snakeBody = [];
let foodX = 0;
let foodY = 0;
let score = 0;

function createGameGrid() {
  gameGrid.innerHTML = '';
  for (let i = 0; i < tileCount * tileCount; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    gameGrid.appendChild(tile);
  }
}

function moveSnake() {
  snakeX += snakeXSpeed;
  snakeY += snakeYSpeed;

  if (snakeX < 0 || snakeX >= tileCount || snakeY < 0 || snakeY >= tileCount) {
    gameOver();
    return;
  }

  const snakeHead = { x: snakeX, y: snakeY };
  snakeBody.unshift(snakeHead);

  if (snakeX === foodX && snakeY === foodY) {
    score++;
    scoreElement.innerText = score;
    generateFood();
  } else {
    snakeBody.pop();
  }

  if (checkCollision()) {
    gameOver();
    return;
  }

  updateGameGrid();
}

function updateGameGrid() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.classList.remove('snake-head', 'snake-body', 'food');
  });

  snakeBody.forEach((snakePart, index) => {
    const snakePartElement = document.createElement('div');
    snakePartElement.classList.add('snake-body');
    snakePartElement.style.gridColumnStart = snakePart.x + 1;
    snakePartElement.style.gridRowStart = snakePart.y + 1;
    gameGrid.appendChild(snakePartElement);
  });

  const snakeHeadElement = document.createElement('div');
  snakeHeadElement.classList.add('snake-head');
  snakeHeadElement.style.gridColumnStart = snakeX + 1;
  snakeHeadElement.style.gridRowStart = snakeY + 1;
  gameGrid.appendChild(snakeHeadElement);

  const foodElement = document.createElement('div');
  foodElement.classList.add('food');
  foodElement.style.gridColumnStart = foodX + 1;
  foodElement.style.gridRowStart = foodY + 1;
  gameGrid.appendChild(foodElement);
}

function generateFood() {
  foodX = Math.floor(Math.random() * tileCount);
  foodY = Math.floor(Math.random() * tileCount);

  snakeBody.forEach(snakePart => {
    if (snakePart.x === foodX && snakePart.y === foodY) {
      generateFood();
    }
  });
}

function checkCollision() {
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[i].x === snakeX && snakeBody[i].y === snakeY) {
      return true;
    }
  }
  return false;
}

function gameOver() {
  alert('Game Over');
  snakeX = 0;
  snakeY = 0;
  snakeXSpeed = 1;
  snakeYSpeed = 0;
  snakeBody = [];
  foodX = 0;
  foodY = 0;
  score = 0;
  scoreElement.innerText = score;
  createGameGrid();
  generateFood();
}

function handleKeyPress(event) {
  const keyPressed = event.key;
  switch (keyPressed) {
    case 'ArrowUp':
      if (snakeYSpeed !== 1) {
        snakeXSpeed = 0;
        snakeYSpeed = -1;
      }
      break;
    case 'ArrowDown':
      if (snakeYSpeed !== -1) {
        snakeXSpeed = 0;
        snakeYSpeed = 1;
      }
      break;
    case 'ArrowLeft':
      if (snakeXSpeed !== 1) {
        snakeXSpeed = -1;
        snakeYSpeed = 0;
      }
      break;
    case 'ArrowRight':
      if (snakeXSpeed !== -1) {
        snakeXSpeed = 1;
        snakeYSpeed = 0;
      }
      break;
  }
}

document.addEventListener('keydown', handleKeyPress);
createGameGrid();
generateFood();
setInterval(moveSnake, 200);
