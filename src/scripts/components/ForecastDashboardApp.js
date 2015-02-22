'use strict';

// Libraries
var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    Paper = mui.Paper,
    Snackbar = mui.Snackbar;
injectTapEventPlugin();

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;
(window !== window.top ? window.top : window).mui = mui;

// Custom components
var InformationPanel = require("../../scripts/components/InformationPanel"),
    SkyconsPanel = require("../../scripts/components/SkyconsPanel"),
    ToolbarPanel = require("../../scripts/components/ToolbarPanel");

// CSS
require('../../styles/normalize.less');
require('../../styles/main.less');

var ForecastDashboardApp = React.createClass({
    
    _handleClick: function (e) {
         this.refs.snackbar.show();
    },

     _handleAction: function () {
         // We can add more code here! In this example, we'll just include an alert.
         alert("We removed the event from your calendar.");
    },
    
    render: function () {
        return (
            <div className='main'>
                <ToolbarPanel />
                <Paper className="boxWrapper" zDepth={1}>
                    <h1>{this.props.name}</h1>
                    <SkyconsPanel iconElement="icon1" color="#505050" iconType="rain" />
                    <InformationPanel />
                    <RaisedButton onTouchTap={this._handleClick} label="Add to my calendar" />
                    <Snackbar ref="snackbar" message="Event added to your calendar"action="undo" onActionTouchTap={this._handleAction} />
                </Paper>
            </div>
        );
    }
});

module.exports = ForecastDashboardApp;