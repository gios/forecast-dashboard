'use strict';

describe('DailyPanel', function () {
  var React = require('react/addons');
  var DailyPanel, component;

  beforeEach(function () {
    DailyPanel = require('../../../src/scripts/components/DailyPanel.js');
    component = React.createElement(DailyPanel);
  });

  it('should create a new instance of DailyPanel', function () {
    expect(component).toBeDefined();
  });
});
