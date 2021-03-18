let ctx = document.querySelector('#test-chart');
let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [
            {
                label:'2015',
                data:[1,2,3,4,5,6,7,8,9,10,11,12]
            }
        ]
    }
});
