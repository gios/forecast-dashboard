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
    
    getCurrentlyDate: function (time) {
        return moment.unix(time).format("MMMM Do YYYY, h:mm:ss");
    },
    
    getCurrentlyTime: function (time) {
        return moment.unix(time).format("h:mm:ss");
    },
    
    render: function () {
        var self = this;
        var forecastDaily = this.props.daily.map(function (l) {
            return (
                <div>
                <SkyconsPanel iconElement="daily" iconType={l.icon} />
                    <div className="forecastDaily">
                        <p><strong>Time</strong> (Час) :&nbsp;&nbsp;</p>
                        <p>{self.getCurrentlyDate(l.time)}</p>
                        <p><strong>Summary</strong> (Резюме) :&nbsp;&nbsp;</p>
                        <p>{l.summary}</p>
                    </div>
                    <table className="forecastDailyInfo">
                        <tr>
                            <td><strong>Sunrise Time</strong> (Час сходу) :&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.sunriseTime)}</td>
                        </tr>
                        <tr>
                            <td><strong>Sunset Time</strong> (Час заходу) :&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.sunsetTime)}</td>
                        </tr>
                        <tr>
                            <td><strong>Moon Phase</strong> (Фаза Місяця) :&nbsp;&nbsp;</td>
                            <td>{l.moonPhase}</td>
                        </tr>
                        <tr>
                            <td><strong>Precip Intensity</strong> (Інтенсивність опадів) :&nbsp;&nbsp;</td>
                            <td>{l.precipIntensity}</td>
                        </tr>
                        <tr>
                            <td><strong>Precip Intensity Max</strong> (Максимальна інтенсивність опадів) :&nbsp;&nbsp;</td>
                            <td>{l.precipIntensityMax}</td>
                        </tr>
                        <tr>
                            <td><strong>Precip Probability</strong> (Імовірність опадів) :&nbsp;&nbsp;</td>
                            <td>{l.precipProbability}</td>
                        </tr>
                        <tr>
                            <td><strong>Precip Type</strong> (Тип опадів) :&nbsp;&nbsp;</td>
                            <td>{l.precipType}</td>
                        </tr>
                        <tr>
                            <td><strong>Temperature Min</strong> (Мінімальна температура) :&nbsp;&nbsp;</td>
                            <td>{l.temperatureMin}</td>
                        </tr>
                        <tr>
                            <td><strong>Temperature Min Time</strong> (Час мінімальної температури) :&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.temperatureMinTime)}</td>
                        </tr>
                        <tr>
                            <td><strong>Temperature Max</strong> (Максимальна температура) :&nbsp;&nbsp;</td>
                            <td>{l.temperatureMax}</td>
                        </tr>
                        <tr>
                            <td><strong>Temperature Max Time</strong> (Час максимальної температури) :&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.temperatureMaxTime)}</td>
                        </tr>
                        <tr>
                            <td><strong>Apparent Temperature Min</strong> (Удавана мінімальна температура) :&nbsp;&nbsp;</td>
                            <td>{l.apparentTemperatureMin}</td>
                        </tr>
                        <tr>
                            <td><strong>Apparent Temperature Min Time</strong> (Час удаваної мінімальної температури) :&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.apparentTemperatureMinTime)}</td>
                        </tr>
                        <tr>
                            <td><strong>Apparent Temperature Max</strong> (Удавана максимальна температура) :&nbsp;&nbsp;</td>
                            <td>{l.apparentTemperatureMax}</td>
                        </tr>
                        <tr>
                            <td><strong>Apparent Temperature Max Time</strong> (Час удаваної максимальної температури) :&nbsp;&nbsp;</td>
                            <td>{self.getCurrentlyTime(l.apparentTemperatureMaxTime)}</td>
                        </tr>
                        <tr>
                            <td><strong>Dew Point</strong> (Точка роси) :&nbsp;&nbsp;</td>
                            <td>{l.dewPoint}</td>
                        </tr>
                        <tr>
                            <td><strong>Humidity</strong> (Вологість) :&nbsp;&nbsp;</td>
                            <td>{l.humidity}</td>
                        </tr>
                        <tr>
                            <td><strong>Wind Speed</strong> (Швидкість вітру) :&nbsp;&nbsp;</td>
                            <td>{l.windSpeed}</td>
                        </tr>
                        <tr>
                            <td><strong>Wind Bearing</strong> (Орієнтація вітру) :&nbsp;&nbsp;</td>
                            <td>{l.windBearing}</td>
                        </tr>
                        <tr>
                            <td><strong>Cloud Cover</strong> (Хмарний покрив) :&nbsp;&nbsp;</td>
                            <td>{l.cloudCover}</td>
                        </tr>
                        <tr>
                            <td><strong>Pressure</strong> (Тиск) :&nbsp;&nbsp;</td>
                            <td>{l.pressure}</td>
                        </tr>
                        <tr>
                            <td><strong>Ozone</strong> (Озон) :&nbsp;&nbsp;</td>
                            <td>{l.ozone}</td>
                        </tr>
                    </table>
                </div>
            );
        });
        
        return (
            <div className="DailyPanel">
                <Tabs>
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