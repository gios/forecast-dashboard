'use strict';

// Libraries
var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Slider = mui.Slider;
injectTapEventPlugin();

require('../../styles/InformationPanel.less');

var InformationPanel = React.createClass({
    
    render: function () {
        return (
            <div>
                <Slider name="slider1" value={0.5} />
            </div>
        );
    }
});

module.exports = InformationPanel;