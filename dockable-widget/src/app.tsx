import * as React from 'react';
import { app } from './app.css';
import SidebarController from './sidebar/SidebarController';

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
                <h1>Sidebar</h1>
                <SidebarController />
            </div>
        );
    }
}

export default App;