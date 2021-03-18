function chartPrice(rates,times) {
    let ctx = document.querySelector('#price-chart');
    let lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [
                {
                    label:'Price',
                    data:rates
                }
            ]
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        suggestedMax: 1000000,
                        suggestedMin: 1000,
                        stepSize: 1,
                        maxTicksLimit:10
                    }
                }]
            }
        }
    }); 
}