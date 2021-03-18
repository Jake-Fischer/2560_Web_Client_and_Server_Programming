
let currencySelection = document.querySelector('#currency-select')

//Default data to start USD chart with 
let defaultCurrency = 'USD'
let chartData = [] //Will hold objects containing price and time variables
let rates = [] //Will hold rates
let times = [] //Will hold times

//Call main function to start
getCurrentXPI(defaultCurrency, chartData, rates, times)

function getCurrentXPI(currency, chartData, rates, times){
    //URL with USD as currency to start chart 1
    let url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json` //URL string, with country code
    fetch(url).then(res => { //Fetch Response
        return res.json() //Put it in a json format
    }).then((data) =>{ //Take that data, and do the following with it
        
        console.log(data)
        //Show the price and time received
        let bpiParagraph = document.querySelector('#BPI')
        let timeParagraph = document.querySelector('#time-retreived')
        bpiParagraph.innerHTML = data.bpi.USD.rate
        timeParagraph.innerHTML = data.time.updated

        //Save price and time, and create timeRate object
        let currentRate = data.bpi.USD.rate
        let currentTime = data.time.updated
        let timeRate = {'x': currentTime, 'y': currentRate}

        setTimeout( function() {

            //log for testing
            console.log(timeRate)

            //Add timeRate to chartData
            chartData.push(timeRate)
            //Add rate to rates array
            rates.push(currentRate)
            //Add times to times array
            times.push(currentTime)

            //log for testing
            console.log(chartData)
            console.log(rates)
            console.log(times)

            //Call chart price with the times and the rates, this will redraw the chart with the current numbers
            chartPrice(rates,times)

            //Call main again to restart
            getCurrentXPI(currency, chartData, rates, times)

        }, 60000) //Wait 60 seconds after doing this, to ensure API has responded. This api also only updates the price server side every 1 minute
    }).catch((error) =>{ //Error handling
        console.log(error)
        alert('An error has occured! Please try again.')
    })
}

//To do
//1. Add a second chart bellow that begins when one enters in a valid currency
// this chart will update every minute aswell, if a new currency is entered
// this chart will switch to tracking the new currency
//2. When the program first starts, get the last ten minutes of activity and plot it first
//3. Then run the main program, which will remove the last piece of data from the array and add the current price
