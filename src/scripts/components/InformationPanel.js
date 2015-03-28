'use strict';

var React = require('react/addons'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Menu = mui.Menu,
    Snackbar = mui.Snackbar;
injectTapEventPlugin();

require('../../styles/InformationPanel.less');

var InformationPanel = React.createClass({
    
    getInitialState: function () {
        return {
            summary: '',
            precipIntensity: 0,
            precipProbability: 0,
            precipType: '',
            temperature: 0,
            apparentTemperature: 0,
            dewPoint: 0,
            humidity: 0,
            windSpeed: 0,
            windBearing: 0,
            visibility: 0,
            cloudCover: 0,
            pressure: 0,
            ozone: 0,
            translateText: ''
        };
    },
    
    componentDidMount: function() {
        this.runCurrentlyComponents();
        setInterval(this.runCurrentlyComponents, 10000);
    },
    
    runCurrentlyComponents: function () {
        setTimeout(() => {
            this.getCurrentlyComponents();
        }, 100);
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

    _onItemTap: function(e, key, menuItem) {
        switch(key) {
            case 1:
                this.setState({
                    translateText: 'Інтенсивність опадів'
                });
                this.refs.translateText.show();
                break;
            case 2:
                this.setState({
                    translateText: 'Імовірність опадів'
                });
                this.refs.translateText.show();
                break;
            case 3:
                this.setState({
                    translateText: 'Тип опадів'
                });
                this.refs.translateText.show();
                break;
            case 4:
                this.setState({
                    translateText: 'Температура'
                });
                this.refs.translateText.show();
                break;
            case 5:
                this.setState({
                    translateText: 'Удавана температура'
                });
                this.refs.translateText.show();
                break;
            case 6:
                this.setState({
                    translateText: 'Точка роси'
                });
                this.refs.translateText.show();
                break;
            case 7:
                this.setState({
                    translateText: 'Вологість'
                });
                this.refs.translateText.show();
                break;
            case 8:
                this.setState({
                    translateText: 'Швидкість вітру'
                });
                this.refs.translateText.show();
                break;
            case 9:
                this.setState({
                    translateText: 'Орієнтація вітру'
                });
                this.refs.translateText.show();
                break;
            case 10:
                this.setState({
                    translateText: 'Видимість'
                });
                this.refs.translateText.show();
                break;
            case 11:
                this.setState({
                    translateText: 'Хмарний покрив'
                });
                this.refs.translateText.show();
                break;
            case 12:
                this.setState({
                    translateText: 'Тиск'
                });
                this.refs.translateText.show();
                break;
            case 13:
                this.setState({
                    translateText: 'Озон'
                });
                this.refs.translateText.show();
                break;
            default:
                this.refs.translateText.dismiss();
        }
    },
    
    render: function () {
        
        var numberMenuItems = [
            {
                payload: '1',
                text: this.state.summary
            },
            {
                payload: '2',
                text: 'Precip Intensity',
                number: this.state.precipIntensity
            },
            {
                payload: '3',
                text: 'Precip Probability',
                number: this.state.precipProbability
            },
            {
                payload: '4',
                text: 'Precip Type',
                number: this.state.precipType
            },
            {
                payload: '5',
                text: 'Temperature',
                number: this.state.temperature
            },
            {
                payload: '6',
                text: 'Apparent Temperature',
                number: this.state.apparentTemperature
            },
            {
                payload: '7',
                text: 'Dew Point',
                number: this.state.dewPoint
            },
            {
                payload: '8',
                text: 'Humidity',
                number: this.state.humidity
            },
            {
                payload: '9',
                text: 'Wind Speed',
                number: this.state.windSpeed
            },
            {
                payload: '10',
                text: 'Wind Bearing',
                number: this.state.windBearing
            },
            {
                payload: '11',
                text: 'Visibility',
                number: this.state.visibility
            },
            {
                payload: '12',
                text: 'Cloud Cover',
                number: this.state.cloudCover
            },
            {
                payload: '13',
                text: 'Pressure',
                number: this.state.pressure
            },
            {
                payload: '14',
                text: 'Ozone',
                number: this.state.ozone
            }
        ];
        
        return (
            <div>
                <Menu className="InformationPanel" menuItems={numberMenuItems} onItemTap={this._onItemTap} />
                <Snackbar ref="translateText" message={this.state.translateText} />
            </div>
        );
    }
});

module.exports = InformationPanel;