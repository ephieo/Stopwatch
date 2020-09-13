//Importing the h() function to append elements

import h from "./createElement.js";

const timerCont = document.querySelector("#timer-container");
const heading = document.querySelector("#heading");
const buttonDiv = document.querySelector("#buttonDiv");

// ----------Rendering Heading UI -------------

function pageTitle() {
  const h1 = h("h1", { className: "pagetitle" }, "Stopwatch");
  const render = heading.append(h1);
  return render;
}

// ----------Rendering Stopwatch UI -------------

function stopwatch() {
  const colon = h("span", { className: "zeroText" }, ":");
  const colon2 = h("span", { className: "zeroText" }, ":");
  const zeroText1 = h("h2", { id: "zeroTexthr" }, "00");
  const zeroText2 = h("h2", { id: "zeroTextmin" }, "00");
  const zeroText3 = h("h2", { id: "zeroTextsec" }, "00");
  const hours = h("div", { className: "hours" }, zeroText1);
  const minutes = h("div", { className: "minutes" }, zeroText2);
  const seconds = h("div", { className: "seconds" }, zeroText3);

  const timerContainer = h(
    "section",
    { className: "stopWatch" },
    hours,
    colon,
    minutes,
    colon2,
    seconds
  );
  const render = timerCont.append(timerContainer);
  return render;
}

// ----------Rendering Buttons UI -------------

function buttons() {
  const start = h("button", { id: "startBtn" }, "START");
  const pause = h("button", { id: "pauseBtn" }, "PAUSE");
  const reset = h("button", { id: "resetBtn" }, "RESET");

  const render = buttonDiv.append(start, pause, reset);
  return render;
}

//--------------Stopwatch.js-----------------

pageTitle();
stopwatch();
buttons();

const startBtn = document.querySelector("#startBtn");

const pauseBtn = document.querySelector("#pauseBtn");

const resetBtn = document.querySelector("#resetBtn");

let hr = 0;
let min = 0;
let sec = 0;
let t;

function startTime() {
  /*-------seconds -----------*/
  if (sec < 59) {
    sec++;
    document.getElementById("zeroTextsec").innerHTML = print(sec);
  } else {
    sec = 0;
    min++;
    document.getElementById("zeroTextsec").innerHTML = print(sec);
  }
  if (min <= 59) {
    document.getElementById("zeroTextmin").innerHTML = print(min);
  } else {
    min = 0;
    hr++;
    document.getElementById("zeroTextmin").innerHTML = print(min);
  }
  if (hr < 24) {
    document.getElementById("zeroTexthr").innerHTML = print(hr);
  } else {
    pause();
  }
}

//create a function that returns '00' plus the current time as it increases
function print(val) {
  if (val <= 9) {
    return "0" + val;
  } else {
    return val;
  }
}

function start() {
  t = setInterval(startTime, 1000);
  document.getElementById("startBtn").disabled = true;
}
function pause() {
  clearInterval(t);
  document.getElementById("pauseBtn").disabled = false;
}
function reset() {
  clearInterval(t);
  hr = 0;
  min = 0;
  sec = 0;
  document.getElementById("zeroTexthr").innerHTML = "00";
  document.getElementById("zeroTextmin").innerHTML = "00";
  document.getElementById("zeroTextsec").innerHTML = "00";
}

startBtn.addEventListener("click", function () {
  start();
});
pauseBtn.addEventListener("click", function () {
  pause();
});

resetBtn.addEventListener("click", function () {
  reset();
});
