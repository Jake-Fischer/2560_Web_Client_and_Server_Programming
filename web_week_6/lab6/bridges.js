let usaCenter = [31.51073, -96.4247]  // Array of latitude and longitude 
let zoomLevel = 3   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridges-map').setView(usaCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

bridges =  [
    {"name": "Verrazano-Narrows Bridge", "citystate": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "citystate": "San Francisco and Marin, CA", "span":1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "citystate": "Mackinaw and St Ignace, MI", "span":1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "citystate": "New York, NY amd New Jersey, NJ", "span":1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "citystate": "Tacoma and Kitsnap, WA", "span":853.44, "coordinates": [47.2690,-122.5517] }
]

bridges.forEach(function(bridge){
    //Draw marker for each bridge
    let markerText = `${bridge.name}<br>${bridge.citystate}<br>${bridge.span}<br>${bridge.coordinates}`
    L.marker(bridge.coordinates).bindPopup(markerText).addTo(map)
})

// Add some markers for Minneapolis College and Saint Paul College
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)

// let stPaulCoordinates = [44.94839, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)

// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale College<br><a href="http://www.normandale.edu/">Website</a>')
//     .addTo(map)

// Add a circle approximately around the Twin Cities metro 
// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//         color: 'green',    // use any CSS color name
//         radius: 30000,
//         fillOpacity: 0.1
//     })
//     .bindPopup("Twin Cities Metro Area")
//     .addTo(map)