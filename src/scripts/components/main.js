var ForecastDashboardApp = require('./ForecastDashboardApp'),
    React = require('react'),
    Router = require('react-router'),
    Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ForecastDashboardApp}>
    <Route name="/" handler={ForecastDashboardApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
