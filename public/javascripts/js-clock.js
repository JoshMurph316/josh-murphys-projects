const secondHand = document.querySelector('.second-hand'),
    minuteHand = document.querySelector('.min-hand'),
    hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90,
        minutesDegrees = ((minutes / 60) * 360) + 90,
        hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // calls set date function every second