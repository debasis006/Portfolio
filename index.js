const icon = document.getElementById("icon");
const span = document.getElementById("span");

function changeColor() {
  span.style.color = getRandom();
  setTimeout(changeColor, 1000);
}
function getRandom() {
  const LIMIT_VALUE = 256;
  let red = getRandomNumber(LIMIT_VALUE);
  let green = getRandomNumber(LIMIT_VALUE);
  let blue = getRandomNumber(LIMIT_VALUE);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

function getRandomNumber(limitValue) {
  let randomNumber = Math.random();
  randomNumber = randomNumber * limitValue;
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
}

changeColor();

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
  if (document.body.classList.contains("dark_mode")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
});
