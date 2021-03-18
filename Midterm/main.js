//Test to see main works
let test = document.querySelector('#test')
test.innerHTML = 'Working'

let update = 10000
let maxFailedAttempts = 3 

let currencySelection = document.querySelector('#currency-select')
let defaultCurrency = 'USD'

let chartData = []

let rates = []

let times = []

getCurrentXPI(defaultCurrency, chartData, rates, times)

function getCurrentXPI(currency, chartData, rates, times){
    let url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json` //URL string, with country code
    fetch(url).then(res => { //Fetch Response
        return res.json() //Put it in a json format
    }).then((data) =>{ //Take that data, and do the following with it
        
        console.log(data)
        
        let bpiParagraph = document.querySelector('#BPI')
        let timeParagraph = document.querySelector('#time-retreived')

        bpiParagraph.innerHTML = data.bpi.USD.rate
        timeParagraph.innerHTML = data.time.updated

        let currentRate = data.bpi.USD.rate
        let currentTime = data.time.updated

        let timeRate = {'x': currentTime, 'y': currentRate}

        setTimeout( function() {

            console.log(timeRate)

            chartData.push(timeRate)

            rates.push(currentRate)
            times.push(currentTime)

            console.log(chartData)
            console.log(rates)
            console.log(times)

            chartPrice(rates,times)

            getCurrentXPI(currency,chartData, rates, times)

        }, 5000)
    }).catch((error) =>{ //Error handling
        console.log(error)
        alert('An error has occured! Please try again.')
    })
}
