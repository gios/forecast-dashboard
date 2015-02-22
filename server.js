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

// Forecast API
var forecast = new Forecast({
    service: 'forecast.io',
    key: '75e082171b2e3f48839528d4feba6de9',
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

function* getData(next) {
    this.set('Access-Control-Allow-Origin', '*');
    this.body = yield getForecastData([-33.8683, 151.2086]);
}

// Routes
app.use(route.get('/forecast', getData));

app.listen(3000);

console.log('listening on port 3000');