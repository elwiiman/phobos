const getRandomNumber = (limit) => Math.floor(limit * Math.random());

const getRandomFromArray = (data) => data[getRandomNumber(data.length)];

const doSomething = () => {
  const timeArray = new Array(200, 300, 150, 250, 2000, 3000, 1000, 1500);

  console.log("execute something");
  const randomNumber = getRandomNumber(12);
  console.log("randomNumber", randomNumber);
  cointainer.style.backgroundImage = `url(./gifs/${randomNumber}.gif)`;

  clearInterval(timer);
  timer = setInterval(doSomething, getRandomFromArray(timeArray));
};

let timer = setInterval(doSomething, 1000);
const cointainer = document.getElementById("container");
