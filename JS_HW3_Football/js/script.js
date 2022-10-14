const ball = document.querySelector(".ball");
const lLabel = document.querySelector("#_left");
const RLabel = document.querySelector("#_right");
const CLabel = document.querySelector("#_center");

ball.addEventListener("mousedown", onBallTouched)

function ballMove(e)
{
    ball.style.left = e.clientX-25+"px";
    ball.style.top = e.clientY-25+"px";
    if(e.clientX<=30 && (e.clientY>190 && e.clientY<380)) leftGoal();
    if (e.clientX>=730 && (e.clientY>190&&e.clientY<380)) rightGoal();
    if (e.clientX>760 || e.clientY>550) outOfBounds();

}
function outOfBounds()
{
    CLabel.textContent = "OUT";
    ball.removeEventListener("drag", ballMove);
    ball.removeEventListener("dragstart", ballMove);
    ball.removeEventListener("dragend", ballMove);
    ball.style.left = "360px";
    ball.style.top = "260px";
}
function leftGoal()
{
    lLabel.textContent = parseInt(lLabel.textContent) + 1;
    CLabel.textContent = ":";
    ball.removeEventListener("drag", ballMove);
    ball.removeEventListener("dragstart", ballMove);
    ball.removeEventListener("dragend", ballMove);
    ball.style.left = "360px";
    ball.style.top = "260px";
    if (parseInt(lLabel.textContent) == 10) {
        alert("Девый игрок победил");
        lLabel.textContent = "0";
        RLabel.textContent = "0";
    }
}function rightGoal()
{
    RLabel.textContent = parseInt(RLabel.textContent) + 1;
    CLabel.textContent = ":";
    ball.removeEventListener("drag", ballMove);
    ball.removeEventListener("dragstart", ballMove);
    ball.removeEventListener("dragend", ballMove);
    ball.style.left = "360px";
    ball.style.top = "260px";
    if (parseInt(RLabel.textContent) == 10) {
        alert("Правый игрок победил");
        lLabel.textContent = "0";
        RLabel.textContent = "0";
    }
}

function onBallTouched() {
    ball.addEventListener("dragstart", ballMove)
    ball.addEventListener("drag", ballMove)
    ball.addEventListener("dragend", ballMove)
}