const words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "подоконник",
    "клавиатура",
    "процессор",
    "Кот"
]

const word = words[Math.floor(Math.random() * words.length)]
let count = word.length + 5

const answerArray = [];
for (let i = 0; i < word.length; i ++) {
    answerArray[i] = "_"
}

let remainingLetters = word.length

while (remainingLetters > 0 && count > 0) {
    alert( `${answerArray.join(" ")}  
    У вас осталось  ${count}  попытки`)

    const guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase()
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.")
    } else {
        for (let j = 0; j < word.length; j++) {

            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("Вы уже вводили эту букву")
                    count ++;
                }
            }
        }
    }
    count--;
    if (count === 0) {
        alert("У вас закончились попытки")
        break
    }
}

alert(answerArray.join(" "))
alert("Было загадано слово " + word)