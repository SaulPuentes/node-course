const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6094c0d31c61a4ca5ccd63bd19cbf64f&query=37.8267,-122.4233'

request({ url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})