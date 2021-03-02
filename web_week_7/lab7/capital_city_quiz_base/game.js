let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playagainButton = document.querySelector('#playAgain')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

//console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 


// TODO when the page loads, select an element at random from the countriesAndCodes array
// TODO display the country's name in the randomCountryElement 

function getRandomCountry(){ //Function gets a random country, displays it, and retuns the random country's info
    let country = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)] // Found from https://www.designcise.com/web/tutorial/how-to-select-a-random-element-from-a-javascript-array
    randomCountryElement.innerHTML = country.name //Set inner HTML to random country's name
    return country
}

randomCountry = getRandomCountry() //Start the program by calling this function to get and display a random country

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

submitButton.addEventListener('click', function() { //On click of submit button, run submitAsnwer
    submitAnswer()
})

window.addEventListener('keyup', function() { //On press of enterkey, run submitAnswer
    if (event.keyCode === 13){
        submitAnswer()
    }
})

function submitAnswer(){
    let answer = userAnswerElement.value.toLowerCase() //Make the user's answer lower case for comparing
    let countryCode = randomCountry['alpha-2'] //Get country code to make API call
    let url = `https://api.worldbank.org/v2/country/${countryCode.toLowerCase()}?format=json` //URL string, with country code
    fetch(url).then(res => { //Fetch Response
        return res.json() //Put it in a json format
    }).then((data) =>{ //Take that data, and do the following with it

        let countryData = data[1][0] //Select country data object from response data
        let countryCapital = countryData.capitalCity //Extract capital
        let countryName = countryData.name //Extract name
        let lowerCapital = countryCapital.toLowerCase() //Save to a lowercase version to compare with user answer

        //Check to see if user has answered anything
        if (answer === ''){
            alert(`Please enter your guess for the capital of ${countryName}`)
        } else{
            //Check user's answer, and change response text accordingly
            if (lowerCapital === answer){
                resultTextElement.innerHTML = `Correct! ${countryCapital} is the capital of ${countryName}.`
            } else {
                resultTextElement.innerHTML = `Sorry, the correct answer was ${countryCapital}.`
            }
        }
        
    }).catch((error) =>{ //Error handling
        console.log(error)
        alert('An error has occured! Please try again.')
    })
}

// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 

playagainButton.addEventListener('click', function(){
    userAnswerElement.value = '' //Reset the user's answer element
    resultTextElement.innerHTML = '' //Reset the result text element
    randomCountry = getRandomCountry() //Call getRandomCountry again to start the process over
})