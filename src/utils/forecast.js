const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=91413642f63c034ff74de461091ba737`

    request({ url, json: true }, (error, {body} = {}) => {

        if (error) {
            callback(`Unable to connect to weather service! ${error}`, undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'It is currently ' + body.current.temp + ' degress out. There is a ' + body.current.wind_speed + ' wind speed')
        }
    })
}

module.exports = forecast
