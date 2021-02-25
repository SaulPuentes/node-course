const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6094c0d31c61a4ca5ccd63bd19cbf64f&query=37.8267,-122.4233&units=f'

request({ url, json: true }, (error, response) => {
    const currentData  = response.body.current
    const temperature = currentData.temperature
    const feelslike = currentData.feelslike
    const weatherDescription = currentData.weather_descriptions[0]
    console.log(`${weatherDescription}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
})

// Geocoding
// Adrdress -> Lat/Long -> Weather

//
// Goal: Print the lat/long for los Angeles
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work! 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F1bHB1ZW50ZXMiLCJhIjoiY2tjbDBxbXN2MTk3bjMxb2VlNXgwZWh3ciJ9.8qHJkpsbqdABEmifFUtuSQ'

request({url: geocodeURL, json: true}, (error, response) => {
    const LAcenter = response.body.features[0].center
    const latitude = LAcenter[0]
    const longitude = LAcenter[1]
    console.log('latitude: ', latitude)
    console.log('longitude: ', longitude)
})