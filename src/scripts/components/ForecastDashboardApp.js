'use strict';

// Libraries
var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui');
injectTapEventPlugin();

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;
(window !== window.top ? window.top : window).mui = mui;

// Custom components
var ToolbarPanel = require("../../scripts/components/ToolbarPanel"),
    GlobalSummaryPanel = require("../../scripts/components/GlobalSummaryPanel");

// LESS
require('../../styles/normalize.less');
require('../../styles/main.less');

var ForecastDashboardApp = React.createClass({
    
    getInitialState: function () {
        return {
            data: {}
        };
    },
    
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        setTimeout(() => {
            console.log(this.state.data);
        }, 1000);
    },
    
    render: function () {
        return (
            <div className='main'>
            <ToolbarPanel />
                <div className="container">
                    <div className="flex1">
                        <GlobalSummaryPanel data={this.state.data} />
                    </div>
                    <div className="flex2"></div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastDashboardApp;