'use strict';

var express = require('express'),
    app = express(),
    Forecast = require('forecast');

// Static files
app.use(express.static(__dirname + '/src'));

// Forecast API
var forecast = new Forecast({
    service: 'forecast.io',
    key: 'API Key',
    units: 'celcius',
    cache: true,
    ttl: {
        minutes: 27,
        seconds: 45
    }
});

// Functions
function getForecastData(coords, callback) {
    forecast.get(coords, function (err, weather) {
        if (err) {
            callback(err, null);
        }
        callback(null, weather);
    });
}

app.get('/forecast/:coords', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var parseData = req.params.coords.split(',');

    getForecastData(parseData, function (err, data) {
        if (err) {
            console.error(err);
        }
        res.send(data);
    });
});

console.log("Start server...");
app.listen(process.env.PORT || 3000);
