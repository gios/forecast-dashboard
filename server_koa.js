'use strict';

var koa = require('koa'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser'),
    logger = require('koa-logger'),
    route = require('koa-route'),
    send = require('koa-send'),
    Forecast = require('forecast'),
    app = koa();

// Middleware
app.use(logger());
app.use(bodyParser());
app.use(serve('dist'));

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
function getForecastData(coords) {
    return function(callback) {
        forecast.get(coords, callback);
    };
}

function* getData(data, next) {
    this.set('Access-Control-Allow-Origin', '*');
    var parseData = data.split(",");
    this.body = yield getForecastData(parseData);
}

// Routes
app.use(route.get('/forecast/:coords', getData));
console.log("Start server...");
app.listen(process.env.PORT || 3000);
