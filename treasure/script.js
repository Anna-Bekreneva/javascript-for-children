let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x
    let diffY = event.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
};

let getDistanceHint = function (distance) {
    let res = ''
    if (distance < 10) {
        res = "Обожжешься!"
    } else if (distance < 20) {
        res = "Очень горячо"
    } else if (distance < 40) {
        res = "Горячо"
    } else if (distance < 80) {
        res = "Тепло"
    } else if (distance < 160) {
        res = "Холодно"
    } else if (distance < 320) {
        res = "Очень холодно"
    } else if (distance < 400) {
        res = "Очень-очень холодно!"
    } else {
        res = "Замерзнешь!"
    }
    return res + (maxClicks - clicks);
};

let width = 800
let height = 800
let clicks = 0
let maxClicks = 5

// Случайная позиция клада
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

 $("#map").click(function (event) {
    clicks++;
    maxClicks--;

let distance = getDistance(event, target);
let distanceHint = getDistanceHint(distance);

$("#distance").text(distanceHint);

if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
if (maxClicks === 0) {
    alert("Конец игры! Сделано кликов: " + clicks);
}
});
