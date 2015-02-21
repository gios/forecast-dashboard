'use strict';

describe('SkyconsPanel', function () {
  var React = require('react/addons');
  var SkyconsPanel, component;

  beforeEach(function () {
    SkyconsPanel = require('../../../src/scripts/components/SkyconsPanel.js');
    component = React.createElement(SkyconsPanel);
  });

  it('should create a new instance of SkyconsPanel', function () {
    expect(component).toBeDefined();
  });
});
