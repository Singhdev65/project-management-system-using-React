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
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const history = useHistory();

    return (
        <div className="sidebar">
           <div className="sidebar__header">
           <IconButton onClick={() => history.push('/')}>
               <DashboardIcon />
           </IconButton>
               <h3>Dashboard</h3>
           </div>
           
           <div className="sidebar__body">
           <SidebarOption Icon={AddIcon}  title="Add Project" />
           <Link to="/UserProfile">
           <SidebarOption Icon={PersonIcon}  title="User Profile" />
           </Link>
           <Link to="/Team">
           <SidebarOption Icon={GroupIcon}  title="Team Member" />
           </Link>
           <SidebarOption Icon={LocalActivityIcon}  title="Active Clients"/>
           <SidebarOption Icon={AllInclusiveIcon}  title="About Us"/>
           </div>
        </div>
    )
}

export default Sidebar;
