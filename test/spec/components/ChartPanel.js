'use strict';

describe('ChartPanel', function () {
  var React = require('react/addons');
  var ChartPanel, component;

  beforeEach(function () {
    ChartPanel = require('../../../src/scripts/components/ChartPanel.js');
    component = React.createElement(ChartPanel);
  });

  it('should create a new instance of ChartPanel', function () {
    expect(component).toBeDefined();
  });
});
