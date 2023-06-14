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

  if (snakeX < 0) snakeX = tileCount - 1;
  if (snakeX >= tileCount) snakeX = 0;
  if (snakeY < 0) snakeY = tileCount - 1;
  if (snakeY >= tileCount) snakeY = 0;

  gameGrid.innerHTML = '';
  snakeBody.forEach(segment => {
    const snakeSegment = document.createElement('div');
    snakeSegment.style.gridColumnStart = segment.x + 1;
    snakeSegment.style.gridRowStart = segment.y + 1;
    snakeSegment.classList.add('snake-body');
    gameGrid.appendChild(snakeSegment);
  });

  const snakeHead = document.createElement('div');
  snakeHead.style.gridColumnStart = snakeX + 1;
  snakeHead.style.gridRowStart = snakeY + 1;
  snakeHead.classList.add('snake-head');
  gameGrid.appendChild(snakeHead);

  snakeBody.push({ x: snakeX, y: snakeY });

  if (snakeBody.length > score + 1) {
    snakeBody.shift();
  }

  if (snakeX === foodX && snakeY === foodY) {
    score++;
    scoreElement.innerText = score;
    generateFood();
  }

  if (checkCollision()) {
    gameOver();
  }
}

function generateFood() {
  foodX = Math.floor(Math.random() * tileCount);
  foodY = Math.floor(Math.random() * tileCount);
  const food = document.createElement('div');
  food.style.gridColumnStart = foodX + 1;
  food.style.gridRowStart = foodY + 1;
  food.classList.add('food');
  gameGrid.appendChild(food);
}

function checkCollision() {
  for (let i = 0; i < snakeBody.length - 1; i++) {
    if (snakeBody[i].x === snakeX && snakeBody[i].y === snakeY) {
      return true;
    }
  }
  return false;
}

function gameOver() {
  alert('Game Over!');
  snakeX = 0;
  snakeY = 0;
  snakeXSpeed = 1;
  snakeYSpeed = 0;
  snakeBody = [];
  score = 0;
  scoreElement.innerText = score;
  createGameGrid();
}

function changeDirection(event) {
  const LEFT_KEY = 'ArrowLeft';
  const UP_KEY = 'ArrowUp';
  const RIGHT_KEY = 'ArrowRight';
  const DOWN_KEY = 'ArrowDown';

  const key = event.key;

  if (key === LEFT_KEY && snakeXSpeed !== 1) {
    snakeXSpeed = -1;
    snakeYSpeed = 0;
  } else if (key === UP_KEY && snakeYSpeed !== 1) {
    snakeXSpeed = 0;
    snakeYSpeed = -1;
  } else if (key === RIGHT_KEY && snakeXSpeed !== -1) {
    snakeXSpeed = 1;
    snakeYSpeed = 0;
  } else if (key === DOWN_KEY && snakeYSpeed !== -1) {
    snakeXSpeed = 0;
    snakeYSpeed = 1;
  }
}

function startGame() {
  createGameGrid();
  generateFood();
  setInterval(moveSnake, 100);
}

document.addEventListener('keydown', changeDirection);
startGame();
