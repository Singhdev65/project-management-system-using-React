import React, { useEffect, useState } from 'react';
import "./Team.css";
import { Avatar, Card } from '@material-ui/core';

const Team = () => {
    const  [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=30")
        .then(res => res.json())
        .then(data => {setMembers(data.results)})
    }, []);

    

    return (
        <div className="team">
            <h4>Team Members</h4> 
            {members.map((member) => (
                <Card className="team__card">
                <Avatar src={member.picture.medium}/>
                    <h3>{member.name.first}</h3>
                    <h5>{member.email}</h5>
                    <h5>{member.phone}</h5>
                </Card>
            ))}
        </div>
    )
}

export default Team;
