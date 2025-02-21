//code was based on Evelins video, got extra help from student Erik Sandquist
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const resetButton = document.getElementById("reset-button");

img1.addEventListener("click", function (event) {
  img1.style.width = "1000px";
  img2.style.width = "300px";
});

img2.addEventListener("click", function (event) {
  img2.style.width = "1000px";
  img1.style.width = "300px";
});

resetButton.addEventListener("click", function () {
  img1.style.width = "100%";
  img2.style.width = "100%";
});
