'use strict';

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
            color: "#505050",
            iconType: "rain"
        };
    },
    
    componentDidMount: function() {
        setInterval(() => {
            this.getIconComponents();
            this.getWeatherIcon();
        }, 10);
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
                <canvas id={this.props.iconElement} className="SkyconsPanel" width="128" height="128"></canvas>
            </div>
        );
    }
});

module.exports = SkyconsPanel;