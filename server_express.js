'use strict';

var express = require('express'),
    app = express(),
    Forecast = require('forecast');

// Static files
app.use(express.static('dists'));

// Forecast API
var forecast = new Forecast({
    service: 'forecast.io',
    key: 'c9a592453daab6c91fe9c62eb69d527b',
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
