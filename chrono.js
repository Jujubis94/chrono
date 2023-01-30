const chrono = {
  minutes: 0,
  seconds: 0,
  tenthOfSeconds: 0,
  timer: null,
  init: function () {
    const idchrono = document.querySelector("#chrono");
    const minutesDiv = document.createElement("div");
    minutesDiv.classList.add("el-minutes");
    minutesDiv.innerHTML = this.minutes;

    const secondsDiv = document.createElement("div");
    secondsDiv.classList.add("el-seconds");
    secondsDiv.innerHTML = this.seconds;

    const tenthOfSecondsDiv = document.createElement("div");
    tenthOfSecondsDiv.classList.add("el-tenthOfSeconds");
    tenthOfSecondsDiv.innerHTML = this.tenthOfSeconds;

    idchrono.appendChild(minutesDiv);
    idchrono.appendChild(secondsDiv);
    idchrono.appendChild(tenthOfSecondsDiv);
  },
  display: function () {
    document.querySelector(".el-minutes").textContent = this.minutes;
    document.querySelector(".el-seconds").textContent = this.seconds;
    document.querySelector(".el-tenthOfSeconds").textContent = this.tenthOfSeconds;
  },
  changeTheTime: function () {
    this.tenthOfSeconds++;
    if (this.tenthOfSeconds === 10) {
      this.tenthOfSeconds = 0;
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
    }
    this.display();
  },

  start: function () {
    this.timer = setInterval(this.changeTheTime.bind(this), 100);
  },
  reset: function() {
    this.minutes = 0;
    this.seconds = 0;
    this.tenthOfSeconds = 0;
    this.display();
  },
  stop: function() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

stopButton.addEventListener("click", () => chrono.stop());
resetButton.addEventListener("click", () => {
  chrono.reset();
  if (!chrono.timer) {
    chrono.start();
  }
});

chrono.init();
chrono.start();
