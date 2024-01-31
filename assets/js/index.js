const countDownDate = new Date("May 1, 2024 15:37:25").getTime();

function getTimeRemaining(endTime = countDownDate) {
  const distance = endTime - Date.now();

  return {
    'days': Math.floor(distance / (1000 * 60 * 60 * 24)),
    'hours': Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    'minutes': Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    'seconds': Math.floor((distance % (1000 * 60)) / 1000),
    'total': distance
  };
}

function updateCountdown(endTime =countDownDate) {
  const t = getTimeRemaining(endTime);
  const countdown = document.getElementById("countdown");

  countdown.innerHTML = `${t.days}d ${t.hours}h ${t.minutes}m ${t.seconds}s`;

  if (t.total <= 0) {
    clearInterval(timeInterval);
    countdown.innerHTML = "WIR SIND ONLINE!";
  }
}

const timeInterval = setInterval(() => updateCountdown(countDownDate), 1000);