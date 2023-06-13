let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = [
        "SPAM IS GOAT",
        "Web Project",
        "Seoul Robotics High School",
        "Do IT!",
        "Elice",
    ];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

//텍스트 한글자 씩 출력 함수
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

//randomString 옆에 소괄호 까먹지 말기(없으면 작동 안됨)
dynamic(randomString());
//커서 깜빡임 효과
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);
