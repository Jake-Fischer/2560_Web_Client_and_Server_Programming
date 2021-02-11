//Pre-req test
let takenCSharp = false
let takenJava = true

if (takenCSharp || takenJava){
    console.log('You meet the pre-requisites for Andriod')
} else{
    console.log('You do not meet the pre-requisites')
}

//US senator test
let age = 35
let usCitizenTime = '35'
let stateOfResidence = 'Wisconsin'
let stateToRepresent = 'Minnesota'

if (age >=30 && usCitizenTime >=9 && stateOfResidence == stateToRepresent){
    console.log("You are elligible to be a senator")
} else{
    console.log('Sorry you are not elligible')
}

//Best practice to use === unless you know type coersion is okay
if('' === 0){
    console.log('The same')
} else{
    console.log('Not the same')
}