const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6094c0d31c61a4ca5ccd63bd19cbf64f&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error){
            callback('Unable to find location', undefined)
        } else {
            const currentData  = response.body.current
            const temperature = currentData.temperature
            const feelslike = currentData.feelslike
            const weatherDescription = currentData.weather_descriptions[0]
            callback(undefined, `${weatherDescription}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
        }
    })
}

module.exports = forecast