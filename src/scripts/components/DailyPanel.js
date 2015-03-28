'use strict';

var React = require('react/addons'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    moment = require('moment'),
    Tabs = mui.Tabs,
    Tab = mui.Tab,
    SvgIcon = mui.SvgIcon;
injectTapEventPlugin();

var SkyconsPanel = require("../../scripts/components/SkyconsPanel");

require('../../styles/DailyPanel.less');

var DailyPanel = React.createClass({
    
    componentDidUpdate: function (element) {
        if (typeof element.daily[0] !== 'undefined') {
            this.refs.changeIcon.runWeatherIcon();
        }
    },
    
    getCurrentlyDate: function (time) {
        return moment.unix(time).format("MMMM Do YYYY, h:mm:ss");
    },
    
    getCurrentlyTime: function (time) {
        return moment.unix(time).format("h:mm:ss");
    },
    
    _changeSkyconsIcon: function (tabIndex, tab) {
        this.refs.changeIcon.runWeatherIcon();
    },
    
    render: function () {
        var self = this;
        var forecastDaily = this.props.daily.map(function (l) {
            return (
                <div>
                    <div className="forecastDaily">
                        <SkyconsPanel iconElement="daily" iconType={l.icon} ref="changeIcon" />
                        <p title='Час'><strong>Time</strong>:&nbsp;&nbsp;</p>
                        <p>{self.getCurrentlyDate(l.time)}</p>
                        <p title='Резюме'><strong>Summary</strong>:&nbsp;&nbsp;</p>
                        <p id='summaryText'>{l.summary}</p>
                    </div>
                    <table className="forecastDailyInfo">
                        <tr>
                            <td title='Час сходу'><strong>Sunrise Time</strong>:&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.sunriseTime)}</td>
                        </tr>
                        <tr>
                            <td title='Час заходу'><strong>Sunset Time</strong>:&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.sunsetTime)}</td>
                        </tr>
                        <tr>
                            <td title='Фаза Місяця'><strong>Moon Phase</strong>:&nbsp;&nbsp;</td>
                            <td>{l.moonPhase}</td>
                        </tr>
                        <tr>
                            <td title='Інтенсивність опадів'><strong>Precip Intensity</strong>:&nbsp;&nbsp;</td>
                            <td>{l.precipIntensity}</td>
                        </tr>
                        <tr>
                            <td title='Максимальна інтенсивність опадів'><strong>Precip Intensity Max</strong>:&nbsp;&nbsp;</td>
                            <td>{l.precipIntensityMax}</td>
                        </tr>
                        <tr>
                            <td title='Імовірність опадів'><strong>Precip Probability</strong>:&nbsp;&nbsp;</td>
                            <td>{l.precipProbability}</td>
                        </tr>
                        <tr>
                            <td title='Тип опадів'><strong>Precip Type</strong>:&nbsp;&nbsp;</td>
                            <td>{l.precipType}</td>
                        </tr>
                        <tr>
                            <td title='Мінімальна температура'><strong>Temperature Min</strong>:&nbsp;&nbsp;</td>
                            <td>{l.temperatureMin}</td>
                        </tr>
                        <tr>
                            <td title='Час мінімальної температури'><strong>Temperature Min Time</strong>:&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.temperatureMinTime)}</td>
                        </tr>
                        <tr>
                            <td title='Максимальна температура'><strong>Temperature Max</strong>:&nbsp;&nbsp;</td>
                            <td>{l.temperatureMax}</td>
                        </tr>
                        <tr>
                            <td title='Час максимальної температури'><strong>Temperature Max Time</strong>:&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.temperatureMaxTime)}</td>
                        </tr>
                        <tr>
                            <td title='Удавана мінімальна температура'><strong>Apparent Temperature Min</strong>:&nbsp;&nbsp;</td>
                            <td>{l.apparentTemperatureMin}</td>
                        </tr>
                        <tr>
                            <td title='Час удаваної мінімальної температури'><strong>Apparent Temperature Min Time</strong>:&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.apparentTemperatureMinTime)}</td>
                        </tr>
                        <tr>
                            <td title='Удавана максимальна температура'><strong>Apparent Temperature Max</strong>:&nbsp;&nbsp;</td>
                            <td>{l.apparentTemperatureMax}</td>
                        </tr>
                        <tr>
                            <td title='Час удаваної максимальної температури'><strong>Apparent Temperature Max Time</strong>:&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.apparentTemperatureMaxTime)}</td>
                        </tr>
                        <tr>
                            <td title='Точка роси'><strong>Dew Point</strong>:&nbsp;&nbsp;</td>
                            <td>{l.dewPoint}</td>
                        </tr>
                        <tr>
                            <td title='Вологість'><strong>Humidity</strong>:&nbsp;&nbsp;</td>
                            <td>{l.humidity}</td>
                        </tr>
                        <tr>
                            <td title='Швидкість вітру'><strong>Wind Speed</strong>:&nbsp;&nbsp;</td>
                            <td>{l.windSpeed}</td>
                        </tr>
                        <tr>
                            <td title='Орієнтація вітру'><strong>Wind Bearing</strong>:&nbsp;&nbsp;</td>
                            <td>{l.windBearing}</td>
                        </tr>
                        <tr>
                            <td title='Хмарний покрив'><strong>Cloud Cover</strong>:&nbsp;&nbsp;</td>
                            <td>{l.cloudCover}</td>
                        </tr>
                        <tr>
                            <td title='Тиск'><strong>Pressure</strong>:&nbsp;&nbsp;</td>
                            <td>{l.pressure}</td>
                        </tr>
                        <tr>
                            <td title='Озон'><strong>Ozone</strong>:&nbsp;&nbsp;</td>
                            <td>{l.ozone}</td>
                        </tr>
                    </table>
                </div>
            );
        });
        
        return (
            <div className="DailyPanel">
                <Tabs onChange={this._changeSkyconsIcon}>
                    <Tab label="Day 1">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 1</h2>
                            {forecastDaily[0]}
                        </div>
                    </Tab>
                    <Tab label="Day 2">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 2</h2>
                            {forecastDaily[1]}
                        </div>
                    </Tab>
                    <Tab label="Day 3">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 3</h2>
                            {forecastDaily[2]}
                        </div>
                    </Tab>
                    <Tab label="Day 4">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 4</h2>
                            {forecastDaily[3]}
                        </div>
                    </Tab>
                    <Tab label="Day 5">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 5</h2>
                            {forecastDaily[4]}
                        </div>
                    </Tab>
                    <Tab label="Day 6">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 6</h2>
                            {forecastDaily[5]}
                        </div>
                    </Tab>
                    <Tab label="Day 7">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 7</h2>
                            {forecastDaily[6]}
                        </div>
                    </Tab>
                    <Tab label="Day 8">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Forecast for Day 8</h2>
                            {forecastDaily[7]}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});

module.exports = DailyPanel;