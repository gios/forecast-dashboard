'use strict';

var React = require('react/addons'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Chart = require("chart.js"),
    LineChart = require("react-chartjs").Line;
injectTapEventPlugin();

Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = true;

require('../../styles/ChartPanel.less');

var ChartPanel = React.createClass({

    render: function () {

        var temperatureMin = this.props.daily.map(function (l) {
            return l.temperatureMin;
        });

        var temperatureMax = this.props.daily.map(function (l) {
            return l.temperatureMax;
        });

        var chartData = {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: temperatureMin
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: temperatureMax
                }
            ]
        };

        return (
            <div>
                <LineChart className="ChartPanel" data={chartData} width="1400" height="250" redraw />
            </div>
        );
    }
});

module.exports = ChartPanel;
