var ForecastDashboardApp = require('./ForecastDashboardApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ForecastDashboardApp}>
    <Route name="/" handler={ForecastDashboardApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
