const ball = document.querySelector(".ball");

ball.addEventListener("mousedown", onBallTouched)

function ballMove(e)
{
    ball.style.left = e.clientX-25+"px";
    ball.style.top = e.clientY-25+"px";
}

function onBallTouched() {
    ball.addEventListener("dragstart", ballMove)
    ball.addEventListener("drag", ballMove)
    ball.addEventListener("dragend", ballMove)
}