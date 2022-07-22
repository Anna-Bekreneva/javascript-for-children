const string = "эЙ, кАК деЛа?"
const stringLower = string.toLowerCase()
const firstUpper = stringLower[0].toUpperCase()
const res = firstUpper + stringLower.slice(1)
console.log(res)

