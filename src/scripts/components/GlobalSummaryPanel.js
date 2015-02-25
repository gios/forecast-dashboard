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
    
    getCurrentlyTime: function () {
        return moment.unix(this.props.currently.time).format("MMMM Do YYYY, h:mm:ss");
    },
    
    _handleClick: function (e) {
         this.refs.snackbar.show();
    },

     _handleAction: function () {
         alert("We removed this forecast from your favorites.");
    },
    
    render: function () {
        return (
            <div className="GlobalSummaryPanel">
                <Paper zDepth={1}>
                    <h1>{this.props.data.timezone}</h1>
                    <SkyconsPanel iconElement="icon1" iconType={this.props.currently.icon} />
                    <h2>{this.getCurrentlyTime()}</h2>
                    <InformationPanel currently={this.props.currently} />
                    <RaisedButton className="favoritesButton" onTouchTap={this._handleClick} label="Add to my favorites" />
                    <Snackbar ref="snackbar" message="This forecast added to your favorites" action="undo" onActionTouchTap={this._handleAction} />
                </Paper>
            </div>
        );
    }
});

module.exports = GlobalSummaryPanel;