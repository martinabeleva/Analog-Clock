const secondsHand = document.getElementById("seconds-hand")
const minutesHand = document.getElementById("minutes-hand")
const hoursHand = document.getElementById("hours-hand")

function getTime(){

    const timeNow = new Date();
    const secs = timeNow.getSeconds();
    const minutes = timeNow.getMinutes();
    const hours = timeNow.getHours();
    const timeInterval = 6;

    secondsHand.style.transform = "rotate(" + (secs * timeInterval) + "deg)"
    minutesHand.style.transform = "rotate(" + (minutes * timeInterval + secs/10) + "deg)"
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes/2) + "deg)"
}
setInterval(getTime, 100)