let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#time')

let update = 10000
let maxFailedAttempts = 3 

let issMarker 
let issIcon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

iss(maxFailedAttempts) //Call function once to start. Once the fetch request has been made, the iss function
// will call itself after a delay of update miliseconds

function iss(attempts){
    if(attempts <=0){
        alert('Attempt to connect to server failed')
        return
    }
    fetch(url).then(res => {
        return res.json()
    }).then((issData) =>{
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        //Create marker if it doesnt exist
        //Move marker if it does exist
        if (!issMarker){
            //Create marker
            issMarker = L.marker([lat,long], {icon: issIcon}).addTo(map)
        }else{
            issMarker.setLatLng([lat, long])
        }

        let now = Date()
        timeIssLocationFetched.innerHTML = `This data was fetched at: ${now}`

    }).catch((error) =>{
        attempts = atempts - 1
        console.log("Error:", error)
    }).finally(()=>{
        setTimeout(iss, update, attempts)
    })
}


