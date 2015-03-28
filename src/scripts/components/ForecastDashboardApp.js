'use strict';

// Libraries
var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Snackbar = mui.Snackbar;
injectTapEventPlugin();

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;
(window !== window.top ? window.top : window).mui = mui;

// Custom components
var ToolbarPanel = require("../../scripts/components/ToolbarPanel"),
    GlobalSummaryPanel = require("../../scripts/components/GlobalSummaryPanel"),
    DailyPanel = require("../../scripts/components/DailyPanel"),
    ChartPanel = require("../../scripts/components/ChartPanel");

// LESS
require('../../styles/normalize.less');
require('../../styles/main.less');

var ForecastDashboardApp = React.createClass({
    
    getInitialState: function () {
        return {
            data: {},
            currently: {},
            hourly: {},
            daily: [],
            latitude: 0,
            longitude: 0
        };
    },
    
    loadForecastFromServer: function () {
        var urlRoot = this.props.url + this.state.latitude + "," + this.state.longitude;
        $.ajax({
            url: urlRoot,
            dataType: 'json',
            success: function (data) {
                this.setState({
                    data: data,
                    currently: data.currently,
                    hourly: data.hourly,
                    daily: data.daily.data
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    
    getMyGeolocation: function (callback) {
        var self = this;
        
        if (!navigator.geolocation) {
            this.refs.geolocationSupport.show();
            return;
        }
        
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            self.setState({
                latitude: latitude,
                longitude: longitude
            });
            callback();
        }

        function error() {
            this.refs.geolocationError.show();
        }
        
        navigator.geolocation.getCurrentPosition(success, error);
    },
    
    componentWillMount: function () {
        this.getMyGeolocation();
    },
    
    componentDidMount: function() {
        this.getMyGeolocation(() => {
            this.loadForecastFromServer();
        });
        setInterval(this.loadForecastFromServer, this.props.pollInterval);
    },
    
    replaceCoords: function(latitude, longitude) {
        this.replaceState({
            latitude: latitude,
            longitude: longitude
        });
    },
    
    render: function () {
        return (
            <div className='main'>
            <ToolbarPanel replaceCoords={this.replaceCoords} loadForecastFromServer={this.loadForecastFromServer} />
                <div className="containerGlobal">
                    <div className="flex1">
                        <GlobalSummaryPanel data={this.state.data} currently={this.state.currently} />
                        <Snackbar ref="geolocationError" message="Unable to retrieve your location" />
                        <Snackbar ref="geolocationSupport" message="Geolocation is not supported by your browser" />
                    </div>
                    <div className="flex2">
                        <div className="containerSecondary">
                            <div className="chartContent">
                                <ChartPanel daily={this.state.daily} />
                            </div>
                            <div className="dailyContent">
                                <DailyPanel daily={this.state.daily} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastDashboardApp;