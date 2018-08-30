import * as React from 'react';
import { app } from './app.css';
import DockingArea from './dock/component/DockingArea';

const areaStyle = {
    position: 'fixed',
    right: '0px',
    width: '200px'
};

class App extends React.Component
{
    constructor(props: any)
    {
        super(props);
    }

    render()
    {
        return (
            <div className={app}>
                <DockingArea style={areaStyle} />
            </div>
        );
    }
}

export default App;