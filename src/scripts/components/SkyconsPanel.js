'use strict';

// Libraries
var React = require('react/addons'),
    Skycons = require("../../scripts/assets/skycons.js"),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Slider = mui.Slider;
injectTapEventPlugin();

require('../../styles/SkyconsPanel.less');

var SkyconsPanel = React.createClass({
    
    getInitialState: function () {
        return {
            iconElement: "icon1",
            color: "red",
            iconType: "PARTLY_CLOUDY_NIGHT"
        };
    },
    
    componentDidMount: function() {
        this.getIconComponents();
        this.getWeatherIcon();
    },
    
    getIconComponents: function() {
        this.setState({
            iconElement: this.props.iconElement,
            color: this.props.color,
            iconType: this.props.iconType
        });
    },
    
    getWeatherIcon() {
        // Skycons
        var skycons = new Skycons({"color": this.state.color});
        skycons.set(document.getElementById(this.state.iconElement), this.state.iconType);
        skycons.play();
    },
    
    render: function () {
        return (
            <div>
                <canvas id={this.props.iconElement} width="128" height="128"></canvas>
            </div>
        );
    }
});

module.exports = SkyconsPanel;