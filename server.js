'use strict';

var koa = require('koa'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser'),
    logger = require('koa-logger'),
    route = require('koa-route'),
    send = require('koa-send'),
    app = koa();

// Middleware
app.use(logger());
app.use(bodyParser());

// Functions
function *getAPI() {
    yield send(this, __dirname + '/ForecastTestAPI.json');
}

// Routes
app.use(route.get('/ForecastTestAPI.json', getAPI));

app.listen(3000);

console.log('listening on port 3000');