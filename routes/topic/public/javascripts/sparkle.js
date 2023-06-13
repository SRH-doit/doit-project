document.addEventListener("click", function (event) {
    var star = document.createElement("div");
    star.className = "star";
    star.style.left = event.pageX - 10 + "px";
    star.style.top = event.pageY - 10 + "px";
    document.body.appendChild(star);
​
    setTimeout(function () {
        star.parentNode.removeChild(star);
    }, 3000);
});