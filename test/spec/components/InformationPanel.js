'use strict';

describe('InformationPanel', function () {
    var React = require('react/addons');
    var InformationPanel, component;

    beforeEach(function () {
        InformationPanel = require('../../../src/scripts/components/InformationPanel.js');
        component = React.createElement(InformationPanel);
    });

    it('should create a new instance of InformationPanel', function () {
        expect(component).toBeDefined();
    });
});