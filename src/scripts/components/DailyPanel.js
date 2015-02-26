'use strict';

var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Tabs = mui.Tabs,
    Tab = mui.Tab,
    SvgIcon = mui.SvgIcon;
injectTapEventPlugin();

require('../../styles/DailyPanel.less');

var DailyPanel = React.createClass({
    
    getInitialState: function () {
        return {
            daily: [],
        };
    },
    
    setDailyState: function () {
        this.setState({
            daily: this.props.daily
        });
    },
    
    componentDidMount: function () {
        setInterval(() => {
            this.setDailyState();
        }, 1000);
    },
    
    render: function () {
        var a = this.props.daily.map(function (l) {
            return <strong>{" " + l.time + " "}</strong>
        });
        
        return (
            <div className="DailyPanel">
                <Tabs>
                    <Tab label="Day 1">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab One Template Example</h2>
                            <p>This is an example of a tab template!</p>
                            {a[0]}
                            <p>You can put any sort of HTML or react component in here.</p>
                        </div>
                    </Tab>
                    <Tab label="Day 2">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                    <Tab label="Day 3">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                    <Tab label="Day 4">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                    <Tab label="Day 5">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                    <Tab label="Day 6">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                    <Tab label="Day 7">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                    <Tab label="Day 8">
                        <div className="tab-template-container">
                            <h2 className="mui-font-style-headline">Tab Two Template Example</h2>
                            <p>This is another example of a tab template!</p>
                            <p>Fair warning - the next tab routes to home!</p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});

module.exports = DailyPanel;