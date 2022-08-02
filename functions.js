function add(a, b) {
    return a + b
}

function multiply (add, c) {
    return add * c
}

console.log(multiply(add(9824, 777), 36325))

function areArraysSame(arr1, arr2) {
    return arr1 === arr2 ? true : false
}

console.log(areArraysSame([1, 2, 3], [4, 5, 6]))