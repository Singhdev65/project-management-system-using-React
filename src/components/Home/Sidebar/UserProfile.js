import { Avatar, Button, Card } from '@material-ui/core';
import React from 'react';
import './UserProfile.css';
import {useStateValue} from '../../../StateProvider';

const UserProfile = () => {
    const [{user}] = useStateValue();
    console.log(user);
    return (
        <div className="userprofile">
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
