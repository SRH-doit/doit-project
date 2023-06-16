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

window.onload = function () {
    const target = document.querySelector(".sm-text");

    let cookieName = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    const token = cookieName;
    if (!token) {
        target.textContent = "Do IT! WEB Project | anonymous";
        return;
    }
    const base64Url = token.split(".")[1]; // JWT 토큰에서 Base64로 인코딩된 페이로드 섹션 추출
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // URL-Safe Base64 문자열로 변환
    const payload = JSON.parse(decodeURIComponent(escape(window.atob(base64))));
    const name = payload.name; // 이름 값 가져오기
    const value = name ? decodeURIComponent(name) : "anonymous";
    target.textContent = `Do IT! WEB Project | ${value}`;
};
