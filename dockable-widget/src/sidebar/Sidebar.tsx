import * as React from 'react';
import { sidebar } from './Sidebar.css';

export interface SidebarProps {
    show: boolean;
}

class Sidebar extends React.PureComponent<SidebarProps>
{
    constructor(props: SidebarProps)
    {
        super(props);
    }

    render()
    {
        const { show } = this.props;
        const transform = show === false ? 'translateX(-100%)' : 'translateX(0%)';
        return <div className={sidebar} style={{ transform }}></div>;
    }
}

export default Sidebar;