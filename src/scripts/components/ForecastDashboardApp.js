'use strict';

// Libraries
var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    Snackbar = mui.Snackbar,
    CSSReactTransitionGroup = React.addons.CSSTransitionGroup;
injectTapEventPlugin();

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;
(window !== window.top ? window.top : window).mui = mui;

// Custom components
var InformationPanel = require("../../scripts/components/InformationPanel");

// CSS
require('../../styles/normalize.less');
require('../../styles/main.less');

var ForecastDashboardApp = React.createClass({
    _handleClick: function (e) {
         this.refs.snackbar.show();
    },

     _handleAction: function () {
         //We can add more code here! In this example, we'll just include an alert.
         alert("We removed the event from your calendar.");
    },
    
    render: function () {
        return (
            <div className='main'>
                <InformationPanel />
                <RaisedButton onTouchTap={this._handleClick} label="Add to my calendar" />
                <Snackbar ref="snackbar" message="Event added to your calendar"action="undo" onActionTouchTap={this._handleAction} />
            </div>
        );
    }
});

module.exports = ForecastDashboardApp;