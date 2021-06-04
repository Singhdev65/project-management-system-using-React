import React from 'react';
import './SidebarOption.css';
import { IconButton } from '@material-ui/core';

const SidebarOption = ({Icon, title}) => {


    return (
        <div className="sidebarOption">
            <IconButton>
                <Icon />
            </IconButton>
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarOption;
