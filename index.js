'use strict'

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=ea36b1d33203285e402fefc59c388f5f'
var displayTime = new Date()
$('#localtime').html(displayTime)

$.ajax({
  url: url,
  success: function (result) {
    console.log(result)
    console.log(result.name)
    let displayCity = `Current weather in ${result.name}`
    $('#location').html(displayCity)

    let F = Math.round(result.main.temp * (9 / 5) - 459.67)

    let displayTemp = `Temperature: ${F}&#176;F`
    $('#temperature').html(displayTemp)
    let windSpeed = Math.round(result.wind.speed / 0.44704)
    let displayWind = `Wind: ${windSpeed} mph`
    $('#wind').html(displayWind)

    let displaySky = `Sky conditions: ${result.weather[0].description}`
    $('#sky').html(displaySky)
  },
})
