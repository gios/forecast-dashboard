'use strict';

var React = require('react/addons'),
    $ = require('jquery'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    mui = require('material-ui'),
    Menu = mui.Menu;
injectTapEventPlugin();

require('../../styles/InformationPanel.less');

var InformationPanel = React.createClass({
    
    render: function () {
        
        var numberMenuItems = [
            { payload: '1', text: 'All', number: '22' },
            { payload: '2', text: 'Uncategorized', number: '6'},
            { payload: '3', text: 'Trash', number: '11' }
        ];
        
        return (
            <div>
                <Menu className="InformationPanel" menuItems={numberMenuItems} />
            </div>
        );
    }
});

module.exports = InformationPanel;