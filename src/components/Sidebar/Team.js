import React, { useEffect, useState } from 'react';
import "./Team.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Avatar, Card, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';

const Team = () => {
    const [members, setMembers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=30")
            .then(res => res.json())
            .then(data => { setMembers(data.results) })
    }, []);

    return (
        <div className="team">
            <IconButton style={{ marginLeft: "4rem" }}>
                <KeyboardBackspaceIcon fontSize="large" onClick={() => history.push("/")} />
            </IconButton >
            <h4>Team Members</h4>
            {members.map((member) => (
                <Card className="team__card">
                    <Avatar src={member.picture.medium} />
                    <h3>{member.name.first}</h3>
                    <h5>{member.email}</h5>
                    <h5>{member.phone}</h5>
                </Card>
            ))}
        </div>
    )
}

export default Team;
