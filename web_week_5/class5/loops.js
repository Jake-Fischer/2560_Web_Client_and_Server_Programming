let birds = ["Owl", "Robin", "Eagle"]

console.log(birds)

birds.forEach( function(bird, index){
    //This code will repeat once for each object in array
    //Function will be called for each object in the array (bird)
    console.log(index, bird)
})

//Traditional for loop
for (let x = 0; x <birds.length; x++){
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}

// While loop example
let maxVal = 100
let number = 1
while(number<maxVal){
    number = number * 2
    console.log('number = ' + number)
}

//Various strings library functions
let text = 'hello'

let stringLength = text.length //Length is a property

let shout = text.toUpperCase() //Upper

let wisper = text.toLowerCase() //Lower

let whereIsW = text.indexOf('w') // Index of first matching character of -1 if not found

let wisperAndShout = wisper.concat(shout) // Join strings together

let replaceO = text.replace('o', '0') //Replace the first instance of first thing with the second thing

let replaceAll = text.replace(/o/g, '0') //Replace all of first thing with second thing g stands for global
console.log(replaceAll)

//Example of using Regex to replace things in a string
let message = "The classes are 1150, 1250, 2560"
let replaceRegex = message.replace(/\d{4}/g, "ITEC $&") //$& refers to the thing found that should be replaced
console.log(replaceRegex)

