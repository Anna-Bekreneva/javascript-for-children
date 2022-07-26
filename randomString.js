const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
let randomString = ""
while (randomString.length < 6) {
    let randomSymbol = Math.floor(Math.random() * alphabet.length)
    randomString += alphabet[randomSymbol]
}

console.log(randomString)