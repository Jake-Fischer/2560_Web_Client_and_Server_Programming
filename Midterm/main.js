//Test to see main works
let test = document.querySelector('#test')
test.innerHTML = 'Working'


main() //First call

function main(){

    //Test data
    let example_currency = 'USD'
    let start = '2013-09-01'
    let end = '2013-09-05'

    //Call the function, and assign what it returns to a variable
    //This is where I am having problems, for some reason, nothing is being returned to datesvalues
    let datesValues = getXPIRange(example_currency, start, end)

    console.log(datesValues)

    // setTimeout(function(){
    //     console.log(datesValues)
    // }, 3000);
    // console.log(datesValues)

    //Chart tests
    // let canvas = document.querySelector('#price-chart')
    // let context = canvas.getContext('2d')

    // let chart = new Chart(context, {
    //     type: 'line',
    //     data: values,
    //     options: {
    //         scales: {
    //             xAxes: [{
    //                 type: 'category',
    //                 labels: dates
    //             }]
    //         }
    //     }
    // });
}