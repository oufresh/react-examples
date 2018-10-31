import * as React from 'react';
import { app } from './app.css';
import DockingArea from './dock/component/DockingArea';
import DockingWidget from './dock/component/DockingWidget';

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
                <DockingArea style={areaStyle}>
                    <DockingWidget width={'100%'} height={'250px'} backgroundColor={'lightyellow'} />
                    <DockingWidget width={'100%'} height={'150px'} backgroundColor={'lightblue'} />
                    <DockingWidget width={'100%'} height={'150px'} backgroundColor={'lightgreen'} />
                </DockingArea>
            </div>
        );
    }
}

export default App;