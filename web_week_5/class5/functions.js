//Similar to what you know
//Functions do not have to be defined before they are used


//Function takes text, creates shouty text by converting to uppercase and then retuns
function shout(text){
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))

//Can use functions like this 
let message = shout('hello web programmers')
console.log(message)

//F to C functions, with optional decimalPlaces value
function f_to_c(f, decimalPlaces){
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces){ // Undefined values are considered to be false 'falsy' value
        return celsius.toFixed(decimalPlaces)
    } else{
        return celsius
    }
    
}

//F to C example
let todayTemp = 75 
todayCelsius = f_to_c(todayTemp, 3)
console.log(todayCelsius)