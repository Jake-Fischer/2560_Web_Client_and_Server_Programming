function chartPrice(rates,times) {
    //Log for testing
    //console.log(rates)
    //Get context
    let ctx = document.querySelector('#price-chart');
    //Create the chart
    let lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times, //Times array is passed to this function
            datasets: [
                {
                    label:'Price',
                    data: rates //Rates array is passed to this function
                }               //Something is up with this, my x axis is filling with times just as it should
            ]                   //But there are no points on my grid I have yet to figure this out
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true, //Default grid structure, this must be changed
                        suggestedMax: 100000,
                        suggestedMin: 1000,
                        stepSize: 1,
                        maxTicksLimit:10
                    }
                }]
            }
        }
    }); 
}