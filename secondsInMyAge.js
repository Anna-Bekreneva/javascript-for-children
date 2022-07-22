const secondsInAMinute = 60;
const minutesInAHour = 60;
const hourInADay = 24;
const daysInAYear = 365;
const myAge = 18;

//Количество секунд в 1 часе
const secondsInAHour = secondsInAMinute * minutesInAHour;

//Количество секунд в сутках
const secondInADay = secondsInAHour * hourInADay;

//Количество секунд в году
const secondsInAYear = secondInADay * daysInAYear;

//Количество секунд во мне
const secondsInMyAge = myAge * secondsInAYear;

console.log(secondsInMyAge)






