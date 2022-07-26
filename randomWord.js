const randomWord = ["Взрыв", "Пещера", "Принцесса", "Карандаш", "Магия"]
const randomIndex = Math.floor(Math.random() * randomWord.length)
console.log(randomWord[randomIndex])

//Рандомная дразнилка
const randomBodyParts = ["глаз", "нос", "череп"];
const randomBodyPartsIndex = Math.floor(Math.random() * randomBodyParts.length);

const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
const randomAdjectivesIndex = Math.floor(Math.random() * randomAdjectives.length);

const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
const randomWordsIndex = Math.floor(Math.random() * randomWords.length);

const res = "У тебя " + randomBodyParts[randomBodyPartsIndex] + " словно " + randomAdjectives[randomAdjectivesIndex] + " " + randomWords[randomWordsIndex]
console.log(res)

let name = "Татьяна"
if (name === "Анна") {
    console.log("Привет мне!")
} else if (name === "Александр") {
    console.log("Привет папе!")
} else if (name === "Татьяна") {
    console.log("Привет маме!")
} else {
    console.log("Привет, незнакомец!")
}




