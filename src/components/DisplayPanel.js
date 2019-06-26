import React from 'react';

const DisplayPanel = (props) => {

    return (<div className="display-panel">
            <div id="val-display">{props.value}</div>
            </div>);
    
}

export default DisplayPanel;