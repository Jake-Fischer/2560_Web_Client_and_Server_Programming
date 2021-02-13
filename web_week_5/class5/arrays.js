let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])

console.log(animals[1000]) // Returns undefined

animals[3] = 'giraffe' // This will create undefined elements up to 6, and make 6 giraffe
console.log(animals) // Acts weird and could cause bugs

animals[1] = 'zebra'
console.log(animals[1])

//Doing things to the first and last item in the array

animals.push('elephant') // Add to end
console.log(animals)

let lastAnimal = animals.pop() // Remove last item and assign it to a variable
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer') // Add to beginning
console.log(animals)

let firstAnimal = animals.shift() // Remove first value from array, and assign it to firstAnimal
console.log(firstAnimal)
console.log(animals)

animals.reverse() // Reverses the array
console.log(animals)

animals.sort() // Organizes array in alph order
console.log(animals)

let numberOfAnimals = animals.length // Get the number of items in an array
console.log(numberOfAnimals)

// console.log(animnals.indexOf('lion')) Finds the location of item in array if its there returns -1 if not found

//Simple check if item is in array, if not return message
if (animals.indexOf('walrus') == -1){
    console.log('That item is not in your array')
}

// Better way to check if item is in array. Returns true if true, false if false
if (animals.includes('cheetah')){
    console.log('cheetah is in the array')
}

console.log(animals.join(' * ')) // Joins items into single string, joined by what's given to the function

//Loop through each animal
animals.forEach( function(animal){
    console.log(animal.toUpperCase())
})


//Get the length of each item in the array
animals.forEach( function(animal){
    console.log(animal.length)
})

animals.push('alligator')

//Create new array, with the lengths of the previous array
let animalLengths = []
animals.forEach( function(animal){
    let animalLength = animal.length // Why does this work, even though I dont use 'let' to declare the variable?
    animalLengths.push(animalLength)
})

console.log(animalLengths)

