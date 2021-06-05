import { Avatar, Button, Card, IconButton } from '@material-ui/core';
import React from 'react';
import './UserProfile.css';
import {useStateValue} from '../../StateProvider';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';

const UserProfile = () => {
    const [{user}] = useStateValue();
    const history = useHistory();
    return (
        <div className="userprofile">
        <IconButton style={{marginLeft: "4rem"}}>
                <KeyboardBackspaceIcon fontSize = "large" onClick={() => history.push("/")}/>
            </IconButton >
                <Card className="userprofile__card">
                    <div className="userprofile__top">
                    <Avatar src={user.photoURL} className="user__Avatar"/>
                    <div className="userprofile__topinfo">
                    <h2>{user.displayName}</h2>
                    <h6>Noida, IN</h6>
                    </div>
                    </div>
                    <div className="userprofile__bottom">
                            <input type="text" value={user.displayName} />
                            <input type="text" value={user.email} />
                            <input type="text" value={user.phoneNumber} placeholder="Enter Phone Number"/>
                            <Button 
                        variant="contained"
                        color="primary" 
                        style={{marginTop: "1rem", background:"#007bff"}}>Save</Button>
                    </div>
                    
                </Card>
        </div>
    )
}

export default UserProfile
