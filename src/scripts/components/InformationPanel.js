'use strict';

var React = require('react/addons'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Menu = mui.Menu;
injectTapEventPlugin();

require('../../styles/InformationPanel.less');

var InformationPanel = React.createClass({
    
    getInitialState: function () {
        return {
            summary: "",
            precipIntensity: 0,
            precipProbability: 0,
            precipType: "",
            temperature: 0,
            apparentTemperature: 0,
            dewPoint: 0,
            humidity: 0,
            windSpeed: 0,
            windBearing: 0,
            visibility: 0,
            cloudCover: 0,
            pressure: 0,
            ozone: 0
        };
    },
    
    componentDidMount: function() {
        setInterval(() => {
            this.getCurrentlyComponents();
        }, 1000);
    },
    
    getCurrentlyComponents: function () {
        this.setState({
            summary: this.props.currently.summary,
            precipIntensity: this.props.currently.precipIntensity,
            precipProbability: this.props.currently.precipProbability,
            precipType: this.props.currently.precipType,
            temperature: this.props.currently.temperature,
            apparentTemperature: this.props.currently.apparentTemperature,
            dewPoint: this.props.currently.dewPoint,
            humidity: this.props.currently.humidity,
            windSpeed: this.props.currently.windSpeed,
            windBearing: this.props.currently.windBearing,
            visibility: this.props.currently.visibility,
            cloudCover: this.props.currently.cloudCover,
            pressure: this.props.currently.pressure,
            ozone: this.props.currently.ozone
        });
    },
    
    render: function () {
        
        var numberMenuItems = [
            {
                payload: '1',
                text: this.state.summary
            },
            {
                payload: '2',
                text: 'Precip Intensity (Інтенсивність опадів)',
                number: this.state.precipIntensity
            },
            {
                payload: '3',
                text: 'Precip Probability (Імовірність опадів)',
                number: this.state.precipProbability
            },
            {
                payload: '4',
                text: 'Precip Type (Тип опадів)',
                number: this.state.precipType
            },
            {
                payload: '5',
                text: 'Temperature (Температура)',
                number: this.state.temperature
            },
            {
                payload: '6',
                text: 'Apparent Temperature (Удавана температура)',
                number: this.state.apparentTemperature
            },
            {
                payload: '7',
                text: 'Dew Point (Точка роси)',
                number: this.state.dewPoint
            },
            {
                payload: '8',
                text: 'Humidity (Вологість)',
                number: this.state.humidity
            },
            {
                payload: '9',
                text: 'Wind Speed (Швидкість вітру)',
                number: this.state.windSpeed
            },
            {
                payload: '10',
                text: 'Wind Bearing (Орієнтація вітру)',
                number: this.state.windBearing
            },
            {
                payload: '11',
                text: 'Visibility (Видимість)',
                number: this.state.visibility
            },
            {
                payload: '12',
                text: 'Cloud Cover (Хмарний покрив)',
                number: this.state.cloudCover
            },
            {
                payload: '13',
                text: 'Pressure (Тиск)',
                number: this.state.pressure
            },
            {
                payload: '14',
                text: 'Ozone (Озон)',
                number: this.state.ozone
            }
        ];
        
        return (
            <div>
                <Menu className="InformationPanel" menuItems={numberMenuItems} />
            </div>
        );
    }
});

module.exports = InformationPanel;