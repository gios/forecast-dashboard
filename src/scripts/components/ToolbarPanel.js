'use strict';

// Libraries
var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    RaisedButton = mui.RaisedButton,
    TextField = mui.TextField;
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
            latitudeFloatingErrorText: isNumeric ? '' : 'This field must be numeric.' 
        });
    },
    
    _longitudeHandleFloatingErrorInputChange: function(e) {
        var value = e.target.value;
        var isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
        this.setState({
            longitudeFloatingErrorText: isNumeric ? '' : 'This field must be numeric.' 
        });
    },

    render: function () {
        
        var filterOptions = [
            { payload: '1', text: 'All Broadcasts' },
            { payload: '2', text: 'All Voice' },
            { payload: '3', text: 'All Text' },
            { payload: '4', text: 'Complete Voice' },
            { payload: '5', text: 'Complete Text' },
            { payload: '6', text: 'Active Voice' },
            { payload: '7', text: 'Active Text' },
        ];
        
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup key={0} float="left">
                        <DropDownMenu menuItems={filterOptions} />
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <TextField className="latitude" hintText="Enter latitude" errorText={this.state.latitudeFloatingErrorText}
                        onChange={this._latitudeHandleFloatingErrorInputChange} />
                        <TextField className="longitude" hintText="Enter longitude" errorText={this.state.longitudeFloatingErrorText}
                        onChange={this._longitudeHandleFloatingErrorInputChange}/>
                        <span className="mui-toolbar-separator">&nbsp;</span>
                        <RaisedButton label="Search Loaction" primary={true} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
});

module.exports = ToolbarPanel;