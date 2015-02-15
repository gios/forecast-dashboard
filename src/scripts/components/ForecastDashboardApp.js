'use strict';

var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    DatePicker = mui.DatePicker,
    ReactTransitionGroup = React.addons.TransitionGroup;
injectTapEventPlugin();

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.less');
require('../../styles/main.less');

var imageURL = require('../../images/yeoman.png');

var ForecastDashboardApp = React.createClass({
    render: function () {
        return (
            <div className='main'>
                <ReactTransitionGroup transitionName="fade">
                    <img src={imageURL} />
                    <DatePicker hintText="Portrait Dialog" />
                </ReactTransitionGroup>
            </div>
        );
    }
});

module.exports = ForecastDashboardApp;