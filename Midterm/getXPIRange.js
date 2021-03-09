function getXPIRange(currency, start, end){
    let datesValues = []
    let url = `https://api.coindesk.com/v1/bpi/historical/close/${currency}.json?start=${start}&end=${end}` //URL string, currency, start, and end are all fed too the function
    fetch(url).then(res => { //Fetch Response
        return res.json() //Put it in a json format
    }).then((data) =>{ //Take that data, and do the following with it

        //Log stuff for testing
        console.log(data)
        // console.log(data.bpi)
        // console.log(data.time.updated)
        
        //Select where to show the price
        let bpiParagraph = document.querySelector('#BPI')
        
        //Set the bpi paragraph to the time updated - This is a short term thing for testing
        bpiParagraph.innerHTML = data.time.updated

        //Take the keys, make them into an array called dates
        let dates = Object.keys(data.bpi)
        //Take the values, make them into an array called values
        let values = Object.values(data.bpi)

        //Put both arrays into an array to be returned
        let datesValues = [dates,values]
        console.log(dates)
        console.log(values)
        console.log(datesValues)
    
        //return datesValues

    }).catch((error) =>{ //Error handling
        console.log(error)
        alert('An error has occured! Please try again.')
    })
    return datesValues
}

