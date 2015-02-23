var ForecastDashboardApp = require('./ForecastDashboardApp'),
    React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var content = document.getElementById('content');

var Routes = (
    <Route handler={ForecastDashboardApp}>
        <Route name="other" handler = {ForecastDashboardApp} />
    </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler url="http://localhost:3000/forecast" pollInterval={2000} />, content);
});