'use strict';

var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    moment = require('moment'),
    RaisedButton = mui.RaisedButton,
    Paper = mui.Paper,
    Snackbar = mui.Snackbar;
injectTapEventPlugin();

var SkyconsPanel = require("../../scripts/components/SkyconsPanel"),
    InformationPanel = require("../../scripts/components/InformationPanel");

require('../../styles/GlobalSummaryPanel.less');

var GlobalSummaryPanel = React.createClass({
    
    getInitialState: function () {
        return {
            data: {},
            currently: {},
            hourly: {},
            daily: {}
        };
    },
    
    getCurrentlyTime: function () {
        return moment.unix(this.props.currently.time).format("MMMM Do YYYY, h:mm:ss");
    },
    
    _handleClick: function (e) {
         this.refs.snackbar.show();
    },

     _handleAction: function () {
         alert("We removed the event from your calendar.");
    },
    
    componentWillMount: function() {
        setTimeout(() => {
            console.log(this.props.data);
            console.log(this.props.currently);
        }, 1000);
    },
    
    render: function () {
        return (
            <div>
                <Paper zDepth={1}>
                    <h1>{this.props.data.timezone}</h1>
                    <SkyconsPanel iconElement="icon1" color="#505050" iconType={this.props.currently.icon} />
                    <h2>{this.getCurrentlyTime()}</h2>
                    <InformationPanel data={this.props.currently} />
                    <RaisedButton onTouchTap={this._handleClick} label="Add to my calendar" />
                    <Snackbar ref="snackbar" message="Event added to your calendar" action="undo" onActionTouchTap={this._handleAction} />
                </Paper>
            </div>
        );
    }
});

module.exports = GlobalSummaryPanel;