import { Button, Card, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Projects.css';
import EditIcon from '@material-ui/icons/Edit';
import db from '../../firebase';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {BrowserRouter as Router} from 'react-router-dom';
import { useHistory } from 'react-router';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState();
    const history = useHistory();

    console.log(history)

    useEffect(() => {
        db.collection("projects").onSnapshot(snapshot =>  setProjects(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        })))) 
    }, [])
    
    return (
        <div className="projects">
            <Router>
            <IconButton style={{marginLeft: "4rem"}}>
                <KeyboardBackspaceIcon fontSize = "large" onClick={() => history.push("/")}/>
            </IconButton >
            </Router>
        
            {projects.map(({id, data: {name, description}}) => (
                   <Card key={id} className="projects__card">
                   <h3>{name}</h3>
                   {!editMode ? (
                    <div className="projects__description">
                    <p>{description}</p>
                    <IconButton 
                      onClick={() => setEditMode(!editMode)}
                    >
                    <EditIcon fontSize="small"  />
                    </IconButton>
                    
                    </div>
                    ) : (
                        <div className="projects__editmode">
                        <textarea defaultValue={description}onChange={(e) => setTextAreaValue(e.target.value)}/>
                        <Button 
                        variant="contained"
                        color="primary" 
                        onClick={() => db.collection("projects").doc(id).update({description: textAreaValue})}
                        style={{marginTop: "1rem", background:"#007bff"}}>Save</Button>
                        </div>
                        
                        )}
                   </Card>  
                     
                   
            ))} 
            <Button 
                        variant="contained"
                        color="primary" 
                         onClick=
                       {() => setEditMode(false)}
                       style={{marginTop: "1rem", background:"#007bff" }}
                       className="projects__button">Submit</Button>
        </div>
    )
}

export default Projects;
