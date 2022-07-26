const animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]
const perfectAnimals = []
let perfectAnimal
animals.forEach(animal => {
    perfectAnimal = animal + " - прекрасное животное"
    perfectAnimals.unshift(perfectAnimal)
})
console.log(perfectAnimals)

const animals2 = ["Кот", "Рыба", "Лемур", "Комодский варан"]
for (let i = 0; i < animals2.length; i++) {
    console.log(animals2[i] = animals2[i] + " - прекрасное животное")
}