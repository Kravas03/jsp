class Timer {
  constructor(minutes, seconds, targetId) {
    this.element = document.getElementById(targetId);
    this.minutes = minutes;
    this.seconds = seconds;
    this.interval = null;
  }
  updateClock() {
    const minutes = this.minutes.toString().padStart(2, "0");
    const seconds = this.seconds.toString().padStart(2, "0");
    this.element.textContent = `${minutes} : ${seconds}`;
  }
  startTimer() {
    this.updateClock();
    this.interval = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
				clearInterval(this.interval);
        alert("Час вийшов!");
      } else {
        if (this.seconds === 0) {
          this.seconds = 59;
          this.minutes--;
        } else {
          this.seconds--;
        }
        this.updateClock();
      }
    }, 1000);
  }
}
const tim = new Timer(0,  10, "timer");
tim.startTimer();
