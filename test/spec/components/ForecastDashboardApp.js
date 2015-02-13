'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ForecastDashboardApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ForecastDashboardApp = require('../../../src/scripts/components/ForecastDashboardApp.js');
    component = React.createElement(ForecastDashboardApp);
  });

  it('should create a new instance of ForecastDashboardApp', function () {
    expect(component).toBeDefined();
  });
});
