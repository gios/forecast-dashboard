'use strict';

var React = require('react/addons'),
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
    
    componentDidUpdate: function() {
        this.refs.changeIcon.runWeatherIcon();
        this.refs.updateInformationPanel.runCurrentlyComponents();
    },
    
    getCurrentlyDate: function () {
        return moment.unix(this.props.currently.time).format("MMMM Do YYYY");
    },
    
    getCurrentlyTime: function () {
        return moment.unix(this.props.currently.time).format("h:mm:ss");
    },
    
    render: function () {
        return (
            <div className="GlobalSummaryPanel">
                <Paper zDepth={1}>
                    <h1>{this.props.data.timezone}</h1>
                    <SkyconsPanel iconElement="icon1" iconType={this.props.currently.icon} ref="changeIcon" />
                    <h2>{this.getCurrentlyDate()}</h2>
                    <h2>{this.getCurrentlyTime()}</h2>
                    <InformationPanel currently={this.props.currently} ref="updateInformationPanel"/>
                </Paper>
            </div>
        );
    }
});

module.exports = GlobalSummaryPanel;