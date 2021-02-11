console.log('Hello World!')

// Three ways to create variables

let color = 'blue'
var size = 'medium' // Not recomended
const language = 'JavaScript' //Set a constant

let quantity = 5 //Numbers
let distance = 4.5

let text = "Hello" //Strings, single or double quotes work.

console.log('There are ' + quantity + ' programmers') //Can concantinate strings and ints


//Temperatures and printing them 
let todayTemp = 75

console.log("Today's temperature is " + todayTemp + "F")

let tempC = (todayTemp - 32 ) * 5 / 9

console.log("Today's temperature is " + tempC.toFixed(2) + "C")
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is ${todayTemp}F`)

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${className} ${classCode}`)