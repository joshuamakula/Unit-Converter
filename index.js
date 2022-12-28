/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const meterFeet = document.getElementById('meter-feet')
const litersGallons = document.getElementById('liters-gallons')
const kiogramPounds = document.getElementById('kiogram-pounds')
console.log(kiogramPounds)
convertBtn.addEventListener("click", function() {
    // Meters to feet
    let num = inputEl.value
    let meters = num/3.281
    let feets = num * 3.281
    meterFeet.innerHTML = ` 
            ${inputEl.value} meters = ${Number(meters).toFixed(3)} feet
            | 
            ${inputEl.value} feet = ${Number(feets).toFixed(3)} meters
        `
        
    // liters-gallons
    let liters = inputEl.value/0.264
    let gallons = inputEl.value*0.264
    litersGallons.innerHTML = ` 
            ${inputEl.value} liters = ${Number(gallons).toFixed(3)} gallons
            | 
            ${inputEl.value} gallons = ${Number(liters).toFixed(3)} liters
        `
        
    // kiogram-Pounds
        let kilos = inputEl.value/2.204
        let pounds = inputEl.value*2.204
        kiogramPounds.innerHTML = ` 
                ${inputEl.value} kilos = ${Number(pounds).toFixed(3)} pounds
                | 
                ${inputEl.value} pounds = ${Number(kilos).toFixed(3)} kilos
        `
})