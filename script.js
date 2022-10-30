const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setTime() {

    var now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (6 * seconds);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const mins = now.getMinutes();
    const minsDegrees = (6 * mins);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (30 * hour + mins / 2);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(() => {
    setTime();
}, 1000);