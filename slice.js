const string = "эЙ, кАК деЛа?"
const stringLower = string.toLowerCase()
const firstUpper = stringLower[0].toUpperCase()
const res = firstUpper + stringLower.slice(1)
console.log(res)

let double = function (number) {
    return number * 2
}

console.log(double(3) + double(5))

