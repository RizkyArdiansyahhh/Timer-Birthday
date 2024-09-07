const birthday = new Date(2025, 6, 6).getTime();

const Countdown = setInterval(function () {
  const today = new Date().getTime();
  const difference = birthday - today;

  const day = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((difference % (1000 * 60)) / 1000);

  const text = document.body.children[1];
  text.innerHTML = `${day} day ${hour} Hour ${minute} Minute ${second} Second left`;

  if (difference <= 0) {
    clearInterval(Countdown);
    text.innerHTML = "Happy Birthday";
  }
}, 1000);
