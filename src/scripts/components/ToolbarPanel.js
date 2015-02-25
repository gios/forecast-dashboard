'use strict';

var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    RaisedButton = mui.RaisedButton,
    TextField = mui.TextField,
    Snackbar = mui.Snackbar;
injectTapEventPlugin();

require('../../styles/ToolbarPanel.less');

var ToolbarPanel = React.createClass({
    
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
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("latitude", this.refs.latitude.getValue());
            localStorage.setItem("longitude", this.refs.longitude.getValue());
        } else {
            this.refs.webStorage.show();
        }
        console.log(localStorage.getItem("latitude"));
        console.log(localStorage.getItem("longitude"));     
    },

    render: function () {
        
        var filterOptions = [
            { payload: '1', text: 'Home' },
            { payload: '2', text: 'About' },
            { payload: '3', text: 'Version' },
        ];
        
        return (
            <div className="ToolbarPanel">
                <Toolbar>
                    <ToolbarGroup key={0} float="left">
                        <DropDownMenu menuItems={filterOptions} />
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <TextField ref="latitude" className="latitude" hintText="Enter latitude" errorText={this.state.latitudeFloatingErrorText}
                        onChange={this._latitudeHandleFloatingErrorInputChange} />
                        <TextField ref="longitude" className="longitude" hintText="Enter longitude" errorText={this.state.longitudeFloatingErrorText}
                        onChange={this._longitudeHandleFloatingErrorInputChange}/>
                        <span className="mui-toolbar-separator">&nbsp;</span>
                        <RaisedButton onTouchTap={this._handleClick} label="Search Loaction" primary={true} />
                        <Snackbar ref="webStorage" message="Sorry! No Web Storage support.." />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
});

module.exports = ToolbarPanel;