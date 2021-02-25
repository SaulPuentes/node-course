const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=6094c0d31c61a4ca5ccd63bd19cbf64f&query=37.8267,-122.4233&units=f'

// request({ url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error){
//         console.log('Unable to find location')
//     } else {
//         const currentData  = response.body.current
//         const temperature = currentData.temperature
//         const feelslike = currentData.feelslike
//         const weatherDescription = currentData.weather_descriptions[0]
//         console.log(`${weatherDescription}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
//     }
// })

//
// Goal: Handle errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoic2F1bHB1ZW50ZXMiLCJhIjoiY2tjbDBxbXN2MTk3bjMxb2VlNXgwZWh3ciJ9.8qHJkpsbqdABEmifFUtuSQ'

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to the geocode service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search')
    } else {
        const LAcenter = response.body.features[0].center
        const latitude = LAcenter[0]
        const longitude = LAcenter[1]
        console.log(latitude, longitude)
    }
})