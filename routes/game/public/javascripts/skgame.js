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
  for (let row = 0; row < tileCount; row++) {
    for (let col = 0; col < tileCount; col++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      gameGrid.appendChild(tile);
    }
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

  snakeBody.forEach(snakePart => {
    const snakePartIndex = snakePart.y * tileCount + snakePart.x;
    tiles[snakePartIndex].classList.add('snake-body');
  });

  const snakeHeadIndex = snakeY * tileCount + snakeX;
  tiles[snakeHeadIndex].classList.add('snake-head');

  const foodIndex = foodY * tileCount + foodX;
  tiles[foodIndex].classList.add('food');
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
