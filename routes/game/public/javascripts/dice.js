function rollDice() {
    const diceCountInput = document.querySelector("#dice-count");
    const diceCount = parseInt(diceCountInput.value, 10);

    // 이전 주사위 결과 및 합 삭제
    const diceResultsDiv = document.querySelector("#dice-results");
    diceResultsDiv.innerHTML = "";
    const sumResultDiv = document.querySelector("#sum-result");
    sumResultDiv.textContent = "";

    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
        const min = 1;
        const max = 6;
        const diceNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // 주사위 결과를 출력
        const diceResultDiv = document.createElement("div");
        diceResultDiv.classList.add("dice");
        diceResultDiv.textContent = diceNumber;
        diceResultsDiv.appendChild(diceResultDiv);

        sum += diceNumber;
    }

    // 합을 표시
    const sumText = document.createElement("p");
    sumText.textContent = "주사위 합: " + sum;
    sumResultDiv.appendChild(sumText);
}

const rollButton = document.querySelector("#roll-button");
rollButton.addEventListener("click", rollDice);
