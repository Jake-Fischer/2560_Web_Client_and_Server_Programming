let ctx = document.querySelector('#test-chart');
let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [
            {
                label:'2015',
                data:[1000,56002,1000,58474,75455,58226,58447,58458,78559,65210,54711,78512]
            }
        ]
    },
    options: {
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: true, //Default grid structure, this must be changed
                    suggestedMax: 100000,
                    suggestedMin: 0,
                    stepSize: 1,
                    maxTicksLimit:10
                }
            }]
        }
    }
});
