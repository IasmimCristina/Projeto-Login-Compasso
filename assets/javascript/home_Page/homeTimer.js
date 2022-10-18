const timer600 = document.querySelector(".timer-numbers");
const seconds = document.querySelector(".timer-seconds");

let time = 600;

let countdown = setInterval(() => {
  --time;
  timer600.textContent = time;

  if (time == 1) {
    seconds.innerHTML = "second";
  } else {
    seconds.innerHTML = "seconds";

  }
  if (time == -1) { logoutAction(); }
}, 1000)


