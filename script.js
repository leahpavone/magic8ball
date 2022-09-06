const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most Likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

const ball = document.querySelector(".eight-ball");
const triangle = document.querySelector(".triangle");
const message = document.querySelector(".message");
message.textContent = "8";
const input = document.querySelector("#input");
const shakeButton = document.querySelector(".shake-button");
const resetButton = document.querySelector(".reset-button");

const getRandomMessage = (answersArray) => {
  let answer = answersArray[Math.floor(Math.random() * answersArray.length)];
  message.textContent = answer;
  return answer;
};

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getRandomMessage(answers);
    input.value = "";
    message.classList.add("fade-in");
    triangle.classList.add("fade-in");
    ball.classList.add("shaker");
    shakeButton.style.display = "none";
    resetButton.style.display = "block";
  } else {
    message.classList.remove("fade-in");
    triangle.classList.remove("fade-in");
    ball.classList.remove("shaker");
    shakeButton.style.display = "block";
    resetButton.style.display = "none";
  }
});

shakeButton.addEventListener("click", () => {
  ball.classList.add("shaker");
  message.classList.add("fade-in");
  triangle.classList.add("fade-in");
  input.value = "";
  getRandomMessage(answers);
  shakeButton.style.display = "none";
  resetButton.style.display = "block";
});

resetButton.addEventListener("click", () => {
  ball.classList.remove("shaker");
  message.classList.remove("fade-in");
  triangle.classList.remove("fade-in");
  shakeButton.style.display = "block";
  resetButton.style.display = "none";
});
