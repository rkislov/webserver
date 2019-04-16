const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/72d59ec58db1c3025ca639dda1b0e769/" + latitude + "," + longitude + "?units=si&lang=ru";
    request({
            url,
            json: true
        },
        (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather service', undefined);
            } else if (body.error) {
                callback('unable to find location', undefined);
            } else {
                callback(undefined,
                    body.daily.data[0].summary +
                    " Сейчас " +
                    body.currently.temperature +
                    " градусов.  Вероятность дождя составляет " +
                    body.currently.precipProbability +
                    "%"
                );
            }
        }
    );
}

module.exports = forecast