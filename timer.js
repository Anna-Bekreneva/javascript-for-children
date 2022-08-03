let counter = 5;
let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек")
    counter+=5;
}

letintervalId= setInterval(printMessage, 5000)