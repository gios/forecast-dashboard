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

// Custom components
var SkyconsPanel = require("../../scripts/components/SkyconsPanel"),
    InformationPanel = require("../../scripts/components/InformationPanel");

// LESS
require('../../styles/GlobalSummaryPanel.less');

var GlobalSummaryPanel = React.createClass({
    
    _handleClick: function (e) {
         this.refs.snackbar.show();
    },

     _handleAction: function () {
         // We can add more code here! In this example, we'll just include an alert.
         alert("We removed the event from your calendar.");
    },
    
    render: function () {
        return (
            <div>
                <Paper className="boxWrapper" zDepth={1}>
                    <h1>{this.props.data.timezone}</h1>
                    <SkyconsPanel iconElement="icon1" color="#505050" iconType="partly-cloudy-day" />
                    <InformationPanel />
                    <RaisedButton onTouchTap={this._handleClick} label="Add to my calendar" />
                    <Snackbar ref="snackbar" message="Event added to your calendar"action="undo" onActionTouchTap={this._handleAction} />
                </Paper>
            </div>
        );
    }
});

module.exports = GlobalSummaryPanel;