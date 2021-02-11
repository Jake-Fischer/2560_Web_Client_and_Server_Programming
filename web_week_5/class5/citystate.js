function cityStateAddress(city, state){
    let address = `${city}, ${state.toUpperCase()}`
    return address
}

console.log(cityStateAddress("Minneapolis", "mn"))
let address = cityStateAddress('Seattle', "wa")
console.log(address)
