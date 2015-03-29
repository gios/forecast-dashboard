'use strict';

var React = require('react/addons'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    RaisedButton = mui.RaisedButton,
    TextField = mui.TextField,
    Dialog = mui.Dialog,
    Snackbar = mui.Snackbar;
injectTapEventPlugin();

require('../../styles/ToolbarPanel.less');

var ToolbarPanel = React.createClass({
    
    componentDidMount: function () {
        document.addEventListener('keypress', this._handleEnterKey);
    },
    
    getInitialState: function () {
        return {
            latitudeErrorText: 'This field must be numeric.',
            latitudeFloatingErrorText: 'This field must be numeric.',
            longitudeErrorText: 'This field must be numeric.',
            longitudeFloatingErrorText: 'This field must be numeric.'
        };
    },
            
    _latitudeHandleFloatingErrorInputChange: function(e) {
        var value = e.target.value;
        var isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
        this.setState({
            latitudeFloatingErrorText: isNumeric ? 'OK' : 'This field must be numeric.' 
        });
    },
    
    _longitudeHandleFloatingErrorInputChange: function(e) {
        var value = e.target.value;
        var isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
        this.setState({
            longitudeFloatingErrorText: isNumeric ? 'OK' : 'This field must be numeric.' 
        });
    },
    
    _handleClick: function () {
        this.refs.forecastProcessed.show();
        this.props.replaceCoords(this.refs.latitude.getValue(), this.refs.longitude.getValue());
        setTimeout(() => {
            this.props.loadForecastFromServer();
            this.refs.forecastProcessed.dismiss();
        }, 1000);
    },
    
    _toolbarMenu: function (e, selectedIndex, menuItem) {
        switch (selectedIndex) {
        case 0:
            break;
        case 1:
            this.refs.aboutDialog.show();
            break;
        case 2:
            this.refs.versionDialog.show();
            break;
        default:
            console.log('_toolbarMenu - invalid selectedIndex');
        }
    },

    _handleEnterKey: function (e) {
        if (e.keyCode === 13) {
            this._handleClick();
        }
    },
    
    render: function () {
        
        var menuActions = [
            {
                text: 'Cancel'
            }
        ];

        var filterOptions = [
            {
                payload: '1',
                text: 'Home'
            },
            {
                payload: '2',
                text: 'About'
            },
            {
                payload: '3',
                text: 'Version'
            },
        ];
        
        return (
            <div className="ToolbarPanel">
                <Toolbar>
                    <ToolbarGroup float="left" className="toolbarMenu">
                        <DropDownMenu onChange={this._toolbarMenu} menuItems={filterOptions} />
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <TextField ref="latitude" className="latitude" hintText="Enter latitude" errorText={this.state.latitudeFloatingErrorText}
                        onChange={this._latitudeHandleFloatingErrorInputChange} />
                        <TextField ref="longitude" className="longitude" hintText="Enter longitude" errorText={this.state.longitudeFloatingErrorText}
                        onChange={this._longitudeHandleFloatingErrorInputChange} />
                        <RaisedButton className="searchLocationButton" onTouchTap={this._handleClick} label="Search Location" secondary={true} />
                        <Snackbar ref="forecastProcessed" message="Your forecast processed..." />
                    </ToolbarGroup>
                </Toolbar>
                <Dialog ref="aboutDialog" title="Forecast Dashboard - Gios" actions={menuActions}>
                    Simple forecast-dashboard app with forecast.io API
                </Dialog>
                <Dialog ref="versionDialog" title="Forecast Dashboard - Gios" actions={menuActions}>
                    3/29/2015 - Version 2.0.1
                </Dialog>
            </div>
        );
    }
});

module.exports = ToolbarPanel;