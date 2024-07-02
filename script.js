const happySmile = document.getElementById("happy");
const sadSmile = document.getElementById("sad");
const normalSmile = document.getElementById("normal");



document.getElementById("good").addEventListener("click", function () {
    happySmile.style.display = "inline";
    sadSmile.style.display = "none";
    normalSmile.style.display = "none";
});
document.getElementById("bad").addEventListener("click", function () {
    happySmile.style.display = "none";
    sadSmile.style.display = "inline";
    normalSmile.style.display = "none";
});
document.getElementById("not-bad").addEventListener("click", function () {
    happySmile.style.display = "none";
    sadSmile.style.display = "none";
    normalSmile.style.display = "inline";
});