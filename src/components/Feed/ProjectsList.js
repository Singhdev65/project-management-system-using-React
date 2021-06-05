import { Card, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import "./ProjectList.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import db from '../../firebase';

const ProjectsList = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        db.collection("projects").onSnapshot( (snapshot) => (
            setNames(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )
            ))
        ))
    },[])

    return (
        <Card className="projectList">
        <Link to="Projects" >
        <h3>All Projects</h3> 
        {names.map(({id, data: {name, description}}) => (
            <Card 
            className="projectList__name" key={id}>
            <h4>{name}</h4>
            <IconButton onClick={() => db.collection("projects").doc(id).delete()}>
                <CancelIcon style={{color: "red"}}/>
            </IconButton>
            </Card>
        ))} 
        </Link>                    
        </Card>
    )
}

export default ProjectsList;
