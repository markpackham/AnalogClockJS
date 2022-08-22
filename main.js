const secondsHand = document.getElementsByClassName("seconds-hand");
const minutesHand = document.getElementsByClassName("minutes-hand");
const hoursHand = document.getElementsByClassName("hours-hand");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
}
