async function getCurrentXPI(currency){
    //URL with USD as currency to start chart 1
    let url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json` //URL string, with country code
    const response = await fetch(url)
    const data = await response.json()
    return data
}

//Default data to start the updating chart with
let chartData = [] //Will hold objects containing price and time variables
let rates = [] //Will hold rates
let times = [] //Will hold times

//Create the first chart
let ctx1 = document.querySelector('#price-chart');
let lineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: times, //Times array is passed to this function
        datasets: [
            {
                label:'Price',
                data: rates
            }       
        ]
    },
    options: {
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: false, //Default grid structure
                    stepSize: 1,
                    maxTicksLimit:10
                }
            }]
        }
    }
});

//Create the second chart to hold historical data
let ctx2 = document.querySelector('#second-price-chart');
let lineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: times, //Times array is passed to this function
        datasets: [
            {
                label:'Price',
                data: rates 
            }
        ]
    },
    options: {
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: false, //Default grid structure
                    stepSize: 1,
                    maxTicksLimit:10
                }
            }]
        }
    }
}); 

//Create arrays to hold historic rates and times
let historicRates = []
let historicTimes =[]

//Call function to get historic rates from the API and graph them
getHistoricRates()

//Call initialize, which starts finding and plotting the live price of BTC every minute
initialize()

function getHistoricRates(){
    //Get the proper dates
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() -1)
    yesterday = getISODate(yesterday)

    let tenDaysAgo = new Date()
    tenDaysAgo.setDate(tenDaysAgo.getDate() -10)
    tenDaysAgo = getISODate(tenDaysAgo)

    //Make the API call
    let start = tenDaysAgo
    let end = yesterday
    let url = `https://api.coindesk.com/v1/bpi/historical/close/USD.json?start=${start}&end=${end}` //URL string, currency, start, and end are all fed too the function
    fetch(url).then(res => { //Fetch Response
        return res.json() //Put it in a json format
    }).then((data) =>{ //Take that data, and do the following with it

        //Take the keys, make them into an array called dates
        let dates = Object.keys(data.bpi)
        //Take the values, make them into an array called values
        let values = Object.values(data.bpi)

        //Set the chart data to the correct historical data and update the chart
        lineChart2.data.labels = dates
        lineChart2.data.datasets[0].data = values
        lineChart2.update()

        //Log stuff for testing 
        console.log(dates)
        console.log(values)
    
        

    }).catch((error) =>{ //Error handling
        console.log(error)
        alert('An error has occured! Please try again.')
    })
}

function getISODate(date){
    //This is a function to get the correct date format from the date
    //Found here - https://stackoverflow.com/questions/25159330/convert-an-iso-date-to-the-date-format-yyyy-mm-dd-in-javascript
    year = date.getFullYear();
    month = date.getMonth()+1;
    dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    let ISODate = year+'-' + month + '-'+dt
    return ISODate
}

function initialize(){
    //This function begins the live price chart. It begins with a call, plots the first point, then calls update after 60 seconds
    getCurrentXPI('USD').then(data =>{
        //Show the price and time received
        let bpiParagraph = document.querySelector('#BPI')
        let timeParagraph = document.querySelector('#time-retreived')
        bpiParagraph.innerHTML = data.bpi.USD.rate
        timeParagraph.innerHTML = data.time.updated
    
        //Save price and time, and create timeRate object
        let currentRate = data.bpi.USD.rate_float
        let currentTime = data.time.updated
        console.log(currentRate)
        console.log(currentTime)
        let timeRate = {'x': currentTime, 'y': currentRate}
    
        chartData.push(timeRate)
    
        //log for testing
        console.log(chartData)
        console.log(rates)
        console.log(times)
        
        addRate(currentRate, currentTime)
    })
    setTimeout( function(){
        update()
    },60000)
}

function update(){
    //This is the function that will run each minute. It makes a call, adds a point, and then after 60 seconds runs again.
    getCurrentXPI('USD').then(data =>{
        console.log(data)
    
        //Show the price and time received
        let bpiParagraph = document.querySelector('#BPI')
        let timeParagraph = document.querySelector('#time-retreived')
        bpiParagraph.innerHTML = data.bpi.USD.rate
        timeParagraph.innerHTML = data.time.updated
    
        //Save price and time, and create timeRate object
        let currentRate = data.bpi.USD.rate_float
        let currentTime = data.time.updated
        console.log(currentRate)
        console.log(currentTime)

        //This array is for testing and logging to the console, it is not used in the program
        let timeRate = {'x': currentTime, 'y': currentRate}
        chartData.push(timeRate)
    
        //log for testing
        console.log(chartData)
        console.log(rates)
        console.log(times)

        //Update the chart
        addRate(currentRate, currentTime)
    })
    setTimeout( function(){
        update()
    },60000)
}

function addRate(rate, time){
    //This is the function we use to update the live chart
    lineChart.data.labels.push(time)
    lineChart.data.datasets[0].data.push(rate)
    lineChart.update()
}



//This is all for when I figure out how to graph another currency concurently
//As of now, I am having a hard time parsing the response for the correct data
let currencySelection = document.querySelector('#currency-select')
let secondCurrencyButton = document.querySelector('#switch-currency')

secondCurrencyButton.addEventListener('click', function(){
    let currencyChosen = currencySelection.value
    if (checkCurrency(currencyChosen)){

    } else {
        alert('Please enter a valid currency')
    }

    secondChartUpdater(currencyChosen)
})

function secondChartUpdater(currency){
    getCurrentXPI(currency).then(data =>{
        console.log(data)
        
        //Show the price and time received
        // let bpiParagraph = document.querySelector('#BPI')
        // let timeParagraph = document.querySelector('#time-retreived')
        // bpiParagraph.innerHTML = data.bpi.USD.rate
        // timeParagraph.innerHTML = data.time.updated
    
        //Save price and time, and create timeRate object
        let currentRate = data.bpi.USD.rate_float
        let currentTime = data.time.updated
        
    
        //Add rate to rates array
        secondRates.push(currentRate)
        //Add times to times array
        secondTimes.push(currentTime)
    
        //log for testing
        console.log(secondRates)
        console.log(secondTimes)
    
        //Call chart price with the times and the rates, this will redraw the chart with the current numbers
        chartPrice(secondRates,secondTimes,2)
    
        //Call main again to restart
        //getCurrentXPI('USD')
    })
    setTimeout( function(){
        secondChartUpdater(currency)
    },60000)
}

function checkCurrency(currencyString) {

    let supportedCurrenciesObj = [{"currency":"AED","country":"United Arab Emirates Dirham"},
    {"currency":"AFN","country":"Afghan Afghani"},
    {"currency":"ALL","country":"Albanian Lek"},
    {"currency":"AMD","country":"Armenian Dram"},
    {"currency":"ANG","country":"Netherlands Antillean Guilder"},
    {"currency":"AOA","country":"Angolan Kwanza"},
    {"currency":"ARS","country":"Argentine Peso"},
    {"currency":"AUD","country":"Australian Dollar"},
    {"currency":"AWG","country":"Aruban Florin"},
    {"currency":"AZN","country":"Azerbaijani Manat"},
    {"currency":"BAM","country":"Bosnia-Herzegovina Convertible Mark"},
    {"currency":"BBD","country":"Barbadian Dollar"},
    {"currency":"BDT","country":"Bangladeshi Taka"},
    {"currency":"BGN","country":"Bulgarian Lev"},
    {"currency":"BHD","country":"Bahraini Dinar"},
    {"currency":"BIF","country":"Burundian Franc"},
    {"currency":"BMD","country":"Bermudan Dollar"},
    {"currency":"BND","country":"Brunei Dollar"},
    {"currency":"BOB","country":"Bolivian Boliviano"},
    {"currency":"BRL","country":"Brazilian Real"},
    {"currency":"BSD","country":"Bahamian Dollar"},
    {"currency":"BTC","country":"Bitcoin"},
    {"currency":"BTN","country":"Bhutanese Ngultrum"},
    {"currency":"BWP","country":"Botswanan Pula"},
    {"currency":"BYR","country":"Belarusian Ruble"},
    {"currency":"BZD","country":"Belize Dollar"},
    {"currency":"CAD","country":"Canadian Dollar"},
    {"currency":"CDF","country":"Congolese Franc"},
    {"currency":"CHF","country":"Swiss Franc"},
    {"currency":"CLF","country":"Chilean Unit of Account (UF)"},
    {"currency":"CLP","country":"Chilean Peso"},
    {"currency":"CNY","country":"Chinese Yuan"},
    {"currency":"COP","country":"Colombian Peso"},
    {"currency":"CRC","country":"Costa Rican Col\u00f3n"},
    {"currency":"CUP","country":"Cuban Peso"},
    {"currency":"CVE","country":"Cape Verdean Escudo"},
    {"currency":"CZK","country":"Czech Republic Koruna"},
    {"currency":"DJF","country":"Djiboutian Franc"},
    {"currency":"DKK","country":"Danish Krone"},
    {"currency":"DOP","country":"Dominican Peso"},
    {"currency":"DZD","country":"Algerian Dinar"},
    {"currency":"EEK","country":"Estonian Kroon"},
    {"currency":"EGP","country":"Egyptian Pound"},
    {"currency":"ERN","country":"Eritrean Nnakfa"},
    {"currency":"ETB","country":"Ethiopian Birr"},
    {"currency":"EUR","country":"Euro"},
    {"currency":"FJD","country":"Fijian Dollar"},
    {"currency":"FKP","country":"Falkland Islands Pound"},
    {"currency":"GBP","country":"British Pound Sterling"},
    {"currency":"GEL","country":"Georgian Lari"},
    {"currency":"GHS","country":"Ghanaian Cedi"},
    {"currency":"GIP","country":"Gibraltar Pound"},
    {"currency":"GMD","country":"Gambian Dalasi"},
    {"currency":"GNF","country":"Guinean Franc"},
    {"currency":"GTQ","country":"Guatemalan Quetzal"},
    {"currency":"GYD","country":"Guyanaese Dollar"},
    {"currency":"HKD","country":"Hong Kong Dollar"},
    {"currency":"HNL","country":"Honduran Lempira"},
    {"currency":"HRK","country":"Croatian Kuna"},
    {"currency":"HTG","country":"Haitian Gourde"},
    {"currency":"HUF","country":"Hungarian Forint"},
    {"currency":"IDR","country":"Indonesian Rupiah"},
    {"currency":"ILS","country":"Israeli New Sheqel"},
    {"currency":"INR","country":"Indian Rupee"},
    {"currency":"IQD","country":"Iraqi Dinar"},
    {"currency":"IRR","country":"Iranian Rial"},
    {"currency":"ISK","country":"Icelandic Kr\u00f3na"},
    {"currency":"JEP","country":"Jersey Pound"},
    {"currency":"JMD","country":"Jamaican Dollar"},
    {"currency":"JOD","country":"Jordanian Dinar"},
    {"currency":"JPY","country":"Japanese Yen"},
    {"currency":"KES","country":"Kenyan Shilling"},
    {"currency":"KGS","country":"Kyrgystani Som"},
    {"currency":"KHR","country":"Cambodian Riel"},
    {"currency":"KMF","country":"Comorian Franc"},
    {"currency":"KPW","country":"North Korean Won"},
    {"currency":"KRW","country":"South Korean Won"},
    {"currency":"KWD","country":"Kuwaiti Dinar"},
    {"currency":"KYD","country":"Cayman Islands Dollar"},
    {"currency":"KZT","country":"Kazakhstani Tenge"},
    {"currency":"LAK","country":"Laotian Kip"},
    {"currency":"LBP","country":"Lebanese Pound"},
    {"currency":"LKR","country":"Sri Lankan Rupee"},
    {"currency":"LRD","country":"Liberian Dollar"},
    {"currency":"LSL","country":"Lesotho Loti"},
    {"currency":"LTL","country":"Lithuanian Litas"},
    {"currency":"LVL","country":"Latvian Lats"},
    {"currency":"LYD","country":"Libyan Dinar"},
    {"currency":"MAD","country":"Moroccan Dirham"},
    {"currency":"MDL","country":"Moldovan Leu"},
    {"currency":"MGA","country":"Malagasy Ariary"},
    {"currency":"MKD","country":"Macedonian Denar"},
    {"currency":"MMK","country":"Myanma Kyat"},
    {"currency":"MNT","country":"Mongolian Tugrik"},
    {"currency":"MOP","country":"Macanese Pataca"},
    {"currency":"MRO","country":"Mauritanian Ouguiya"},
    {"currency":"MTL","country":"Maltese Lira"},
    {"currency":"MUR","country":"Mauritian Rupee"},
    {"currency":"MVR","country":"Maldivian Rufiyaa"},
    {"currency":"MWK","country":"Malawian Kwacha"},
    {"currency":"MXN","country":"Mexican Peso"},
    {"currency":"MYR","country":"Malaysian Ringgit"},
    {"currency":"MZN","country":"Mozambican Metical"},
    {"currency":"NAD","country":"Namibian Dollar"},
    {"currency":"NGN","country":"Nigerian Naira"},
    {"currency":"NIO","country":"Nicaraguan C\u00f3rdoba"},
    {"currency":"NOK","country":"Norwegian Krone"},
    {"currency":"NPR","country":"Nepalese Rupee"},
    {"currency":"NZD","country":"New Zealand Dollar"},
    {"currency":"OMR","country":"Omani Rial"},
    {"currency":"PAB","country":"Panamanian Balboa"},
    {"currency":"PEN","country":"Peruvian Nuevo Sol"},
    {"currency":"PGK","country":"Papua New Guinean Kina"},
    {"currency":"PHP","country":"Philippine Peso"},
    {"currency":"PKR","country":"Pakistani Rupee"},
    {"currency":"PLN","country":"Polish Zloty"},
    {"currency":"PYG","country":"Paraguayan Guarani"},
    {"currency":"QAR","country":"Qatari Rial"},
    {"currency":"RON","country":"Romanian Leu"},
    {"currency":"RSD","country":"Serbian Dinar"},
    {"currency":"RUB","country":"Russian Ruble"},
    {"currency":"RWF","country":"Rwandan Franc"},
    {"currency":"SAR","country":"Saudi Riyal"},
    {"currency":"SBD","country":"Solomon Islands Dollar"},
    {"currency":"SCR","country":"Seychellois Rupee"},
    {"currency":"SDG","country":"Sudanese Pound"},
    {"currency":"SEK","country":"Swedish Krona"},
    {"currency":"SGD","country":"Singapore Dollar"},
    {"currency":"SHP","country":"Saint Helena Pound"},
    {"currency":"SLL","country":"Sierra Leonean Leone"},
    {"currency":"SOS","country":"Somali Shilling"},
    {"currency":"SRD","country":"Surinamese Dollar"},
    {"currency":"STD","country":"S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra"},
    {"currency":"SVC","country":"Salvadoran Col\u00f3n"},
    {"currency":"SYP","country":"Syrian Pound"},
    {"currency":"SZL","country":"Swazi Lilangeni"},
    {"currency":"THB","country":"Thai Baht"},
    {"currency":"TJS","country":"Tajikistani Somoni"},
    {"currency":"TMT","country":"Turkmenistani Manat"},
    {"currency":"TND","country":"Tunisian Dinar"},
    {"currency":"TOP","country":"Tongan Pa?anga"},
    {"currency":"TRY","country":"Turkish Lira"},
    {"currency":"TTD","country":"Trinidad and Tobago Dollar"},
    {"currency":"TWD","country":"New Taiwan Dollar"},
    {"currency":"TZS","country":"Tanzanian Shilling"},
    {"currency":"UAH","country":"Ukrainian Hryvnia"},
    {"currency":"UGX","country":"Ugandan Shilling"},
    {"currency":"USD","country":"United States Dollar"},
    {"currency":"UYU","country":"Uruguayan Peso"},
    {"currency":"UZS","country":"Uzbekistan Som"},
    {"currency":"VEF","country":"Venezuelan Bol\u00edvar Fuerte"},
    {"currency":"VND","country":"Vietnamese Dong"},
    {"currency":"VUV","country":"Vanuatu Vatu"},
    {"currency":"WST","country":"Samoan Tala"},
    {"currency":"XAF","country":"CFA Franc BEAC"},
    {"currency":"XAG","country":"Silver (troy ounce)"},
    {"currency":"XAU","country":"Gold (troy ounce)"},
    {"currency":"XBT","country":"Bitcoin"},
    {"currency":"XCD","country":"East Caribbean Dollar"},
    {"currency":"XDR","country":"Special Drawing Rights"},
    {"currency":"XOF","country":"CFA Franc BCEAO"},
    {"currency":"XPF","country":"CFP Franc"},
    {"currency":"YER","country":"Yemeni Rial"},
    {"currency":"ZAR","country":"South African Rand"},
    {"currency":"ZMK","country":"Zambian Kwacha (pre-2013)"},
    {"currency":"ZMW","country":"Zambian Kwacha"},
    {"currency":"ZWL","country":"Zimbabwean Dollar"}]

    let supportedCurrencies =[]

    supportedCurrenciesObj.forEach( function(currencyObj){
        let currency = currencyObj.currency
        supportedCurrencies.push(currency)
    })

    if (supportedCurrencies.indexOf(currencyString)){
        console.log(currencyString)
        return true
    } else {
        return false
    }
}
