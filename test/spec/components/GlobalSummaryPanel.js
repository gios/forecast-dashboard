'use strict';

describe('GlobalSummaryPanel', function () {
  var React = require('react/addons');
  var GlobalSummaryPanel, component;

  beforeEach(function () {
    GlobalSummaryPanel = require('../../../src/scripts/components/GlobalSummaryPanel.js');
    component = React.createElement(GlobalSummaryPanel);
  });

  it('should create a new instance of GlobalSummaryPanel', function () {
    expect(component).toBeDefined();
  });
});
