const dog = {
    name: 'Оладушек',
    legs: 4,
    isAwesome: true,
    age: 6,
}

const speak = function () {
    console.log(this.sound + "! Меня зовут " + this.name + "!")
}
const cat = {
    sound: "Мяу",
    name: "Варежка",
    speak: speak
}