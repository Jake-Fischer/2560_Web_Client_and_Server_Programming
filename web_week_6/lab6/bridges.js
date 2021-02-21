let usaCenter = [31.51073, -96.4247]  // Array of latitude and longitude of the center fo the usa 
let zoomLevel = 3   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridges-map').setView(usaCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

//Our data to use with markers
bridges =  [
    {"name": "Verrazano-Narrows Bridge", "citystate": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "citystate": "San Francisco and Marin, CA", "span":1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "citystate": "Mackinaw and St Ignace, MI", "span":1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "citystate": "New York, NY amd New Jersey, NJ", "span":1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "citystate": "Tacoma and Kitsnap, WA", "span":853.44, "coordinates": [47.2690,-122.5517] }
]

//Loop through data, and draw a marker for each object in the array
bridges.forEach(function(bridge){
    //Draw marker for each bridge
    let markerText = `Name: ${bridge.name}<br>Location: ${bridge.citystate}<br> Length: ${bridge.span} m<br>Coordinates: ${bridge.coordinates}`
    L.marker(bridge.coordinates).bindPopup(markerText).addTo(map)
})
