import React from 'react';
import "./Sidebar.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import { IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { BrowserRouter as Router, useHistory } from 'react-router';

const Sidebar = () => {
    const history = useHistory();
    console.log(history)

    return (
        <div className="sidebar">
           <div className="sidebar__header">
           <IconButton onClick={() => history.push("/Feed")}>
               <DashboardIcon />
           </IconButton>
               <h3>Dashboard</h3>
           </div>
           
           <div className="sidebar__body">
           <SidebarOption Icon={AddIcon}  title="Add Project" />
           <SidebarOption Icon={PersonIcon}  title="User Profile " onClick={() => history.push("/UserProfile")}/>
           <SidebarOption Icon={GroupIcon}  title="Team Member" onClick={() => history.push("/Team")}/>
           <SidebarOption Icon={LocalActivityIcon}  title="Active Clients"/>
           <SidebarOption Icon={AllInclusiveIcon}  title="Clients"/>
           </div>
        </div>
    )
}

export default Sidebar;
