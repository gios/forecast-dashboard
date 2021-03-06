'use strict';

var React = require('react/addons'),
    Skycons = require("../../scripts/assets/skycons.js"),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Slider = mui.Slider;
injectTapEventPlugin();

require('../../styles/SkyconsPanel.less');

// Skycons
var skycons = new Skycons({"color": "#505050"});

var SkyconsPanel = React.createClass({
    
    getInitialState: function () {
        return {
            iconElement: "icon1",
            iconType: "rain"
        };
    },
    
    componentDidMount: function() {
        this.runWeatherIcon();
        setInterval(this.runWeatherIcon, 10000);
    },
    
    runWeatherIcon: function () {
        setTimeout(() => {
            this.getIconComponents();
            this.getWeatherIcon();
        }, 100);
    },
    
    getIconComponents: function() {
        this.setState({
            iconElement: this.props.iconElement,
            iconType: this.props.iconType
        });
    },
    
    getWeatherIcon() {
        skycons.set(document.getElementById(this.state.iconElement), this.state.iconType);
        skycons.play();
    },
    
    render: function () {
        return (
            <div>
                <canvas id={this.props.iconElement} className="SkyconsPanel" width="128" height="128"></canvas>
            </div>
        );
    }
});

module.exports = SkyconsPanel;