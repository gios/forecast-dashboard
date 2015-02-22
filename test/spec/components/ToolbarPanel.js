'use strict';

describe('ToolbarPanel', function () {
  var React = require('react/addons');
  var ToolbarPanel, component;

  beforeEach(function () {
    ToolbarPanel = require('../../../src/scripts/components/ToolbarPanel.js');
    component = React.createElement(ToolbarPanel);
  });

  it('should create a new instance of ToolbarPanel', function () {
    expect(component).toBeDefined();
  });
});
