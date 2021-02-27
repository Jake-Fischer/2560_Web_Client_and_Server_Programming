const weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'
const forecastTable = document.querySelector('#weather-forecast')

fetch(weatherUrl)
    .then( response => response.json() ) // no curly braces { }
    .then( json => {
        let properties = json.properties
        let forecastPeriods = properties.periods
        
        forecastPeriods.forEach( period => {
            let name = period.name // e.g. Tuesday
            let temp = period.temperature  // e.g. 44 
            let details = period.detailedForecast 
            let iconUrl = period.icon

            let tableRow = document.createElement('tr')  // make one table row
        
            let tableDataDay = document.createElement('td')   // td table cell for day eg. "Tuesday"
            tableDataDay.innerHTML = name

            tableRow.appendChild(tableDataDay)

            // TODO make td for temperature
            let tableDataTemp = document.createElement('td')
            tableDataTemp.innerHTML = `${temp} F`
            tableRow.appendChild(tableDataTemp)

            let tableDataIcon = document.createElement('td')
            let iconImage = document.createElement('img')
            iconImage.src = iconUrl

            tableDataIcon.appendChild(iconImage)
            tableRow.appendChild(tableDataIcon)

            let tableDataDetails = document.createElement('td')
            tableDataDetails.innerHTML = details
            tableRow.appendChild(tableDataDetails)
            
            forecastTable.appendChild(tableRow)
            
            // bonus question - can you display a weather icon in a new column in your table? 
            // there's a URL to an icon in the response

        })
    })
    .catch( error => {
        alert('oops! something went wrong')  // user friendly - most users can't do anything about a stack trace
        console.log(error)  // for the developer to debug the app
    })

    // type this - try in browser - is JSON in console?