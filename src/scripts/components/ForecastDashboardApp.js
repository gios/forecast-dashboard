'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
console.log(ReactTransitionGroup);

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var ForecastDashboardApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ForecastDashboardApp;
