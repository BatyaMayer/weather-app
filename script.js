//Render current date 
let body = document.getElementById('body')
body.onload = function () {
    showDate()
}

function showDate() {
    let date = new Date()
    let elDate = document.querySelector(".date-today")
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednsday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let currDay = days[date.getDay()]
    let currMonth = months[date.getMonth()]
    let currDateOfMonth = date.getDate()
    let currYear = date.getFullYear()
    if (currDateOfMonth === 1) {
        currDateOfMonth += "st"
    } else if (currDateOfMonth > 1 && currDateOfMonth < 3) {
        currDateOfMonth += "nd"
    } else if (currDateOfMonth === 3) {
        currDateOfMonth += "rd"
    } else {
        currDateOfMonth += "th"
    }

    elDate.innerHTML = `${currDay}, ${currMonth} ${currDateOfMonth} ${currYear}`
}

//Coversion Celsius to Fahrenheit
let elCelsius = document.querySelector(".celsius")
let elFahrenheit = document.querySelector(".fahrenheit")
let elCurrTemp = document.querySelector("#curr-temp")

elCelsius.addEventListener("click", function () {
    elCurrTemp.innerHTML = "20°"
    elCelsius.classList.add("chosen")
    elFahrenheit.classList.remove("chosen")
})

elFahrenheit.addEventListener("click", function () {
    elCurrTemp.innerHTML = 20 * 1.8 + 32 + "°"
    elCelsius.classList.remove("chosen")
    elFahrenheit.classList.add("chosen")
})


//Change city name to user's input value
let elForm = document.querySelector(".city-search")
let elSearchBar = document.querySelector(".input-bar")
let elCityName = document.querySelector(".location")
elForm.addEventListener("submit", function (event) {

    event.preventDefault()
    elCityName.innerHTML = capitalizeWord(elSearchBar.value)

})

//Issues
//1. Empty input
//2. Input that is not str 





// Capitalize city name
function capitalizeWord(str) {

    let cityNameArray = str.toLowerCase().split(" ")
    let result = cityNameArray.map(
        function (value) {
            let firstLetter = value[0]
            let firstLetterUpperCase = value[0].toUpperCase()
            return value.replace(firstLetter, firstLetterUpperCase)
        })

    return result.join(" ")
}



