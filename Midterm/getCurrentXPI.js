function getCurrentXPI(currency){
    let url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json` //URL string, with country code
    fetch(url).then(res => { //Fetch Response
        return res.json() //Put it in a json format
    }).then((data) =>{ //Take that data, and do the following with it

        console.log(data)
        console.log(data.bpi.USD.rate)
        console.log(data.time.updated)
        
        let bpiParagraph = document.querySelector('#BPI')

        bpiParagraph.innerHTML = data.bpi.USD.rate + " " + data.time.updated
    
        
    }).catch((error) =>{ //Error handling
        console.log(error)
        alert('An error has occured! Please try again.')
    })
}