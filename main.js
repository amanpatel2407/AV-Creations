// Set the target date for the countdown
const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Stop the countdown when the date is reached
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".coming-soon .title").textContent =
      "Event Started!";
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  }
}, 1000);




var form = document.getElementById('myForm');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("myForm")),
  }).then(
    response => response.json()
  ).then((html) => {

    alert('Your Message submitted successfully!');
  });
});