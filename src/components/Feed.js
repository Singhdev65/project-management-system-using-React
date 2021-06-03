import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Feed.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InfoBox from './InfoBox';
import FeedAddProject from './FeedAddProject';
import ProjectsList from './ProjectsList';
import  {useStateValue} from '../StateProvider';

const Feed = () => {
    const [{user}] = useStateValue();
    return (
        <div className="feed">
            <div className="feed__header">
                <div className="feed__headerLeft">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder="Search for project...."/>
                <button type="submit" style={{display: "none"}}>Submit</button>
                </div>

                <div className="feed__headerRight">
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
                    <Avatar src={user.photoURL}/>
                    <h5>Prince</h5>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </div>
            <div className="feed__body">
                <h3>Project Overview</h3>
                <div className="feed__bodyInfoBox">
                <InfoBox title="Total Projects" projects="239"/>
                <InfoBox title="Open Projects" projects="139"/>
                <InfoBox title="Completed Projects" projects="2939"/>
                </div>
                <div className="feed__bodyProject">
                    <FeedAddProject />
                    <ProjectsList />
                </div>
            </div>
            <div className="feed__footer">
                <h4>made with ❤️ By Prince</h4>
            </div>
        </div>
    )
}

export default Feed;
