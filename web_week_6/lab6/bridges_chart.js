//Set up canvas and context to draw the chart
let canvas = document.querySelector('#bridges-chart')
let context = canvas.getContext('2d')

//Data for the chart stored in objects in an array
let bridges =  [
    {"name": "Verrazano-Narrows Bridge", "citystate": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "citystate": "San Francisco and Marin, CA", "span":1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "citystate": "Mackinaw and St Ignace, MI", "span":1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "citystate": "New York, NY amd New Jersey, NJ", "span":1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "citystate": "Tacoma and Kitsnap, WA", "span":853.44, "coordinates": [47.2690,-122.5517] }
]

//Make new arrays - I am not sure if this part is nessicary or not, I made new arrays
let bridge_names = [] // because I wasn't sure if the formatting of the chart bellow needed the data to be in an array or not
let bridge_citystates = [] // I also think it's good to have it just incase we need the information
let bridge_spans = []
let bridge_coordinates = []

//Loop through the bridges array and make new arrays with the data, again, not sure if this is nessicary, but I tried it and it's working so it works i guess
bridges.forEach(function(bridge){
    bridge_names.push(bridge.name)
    bridge_citystates.push(bridge.citystate)
    bridge_spans.push(bridge.span)
    bridge_coordinates.push(bridge.coordinates)
})

//Now make the chart
chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: bridge_names,  //Now I can put in a handy array
        datasets: [{
            label: 'Length of bridge, in meters',
            data: bridge_spans,   // Chart data, the spans of the bridges
            backgroundColor: ['#df1190', '#19bbd4', '#ff2626', '#f2ff25', '#ff4dcb']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})