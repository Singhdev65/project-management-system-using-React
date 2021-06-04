import React, { useState } from 'react';
import "./FeedAddProject.css";
import { Button, Card } from '@material-ui/core';
import db from '../../../firebase';


const FeedAddProject = () => {
const [projectName,  setProjectName] = useState();
const [projectDecsription, setProjectDescription] = useState();

const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("projects").add({
        name: projectName, 
        description: projectDecsription,
    })
    .then( () => {
        alert("data is Submitted");
     })
     .catch((error) => {
         alert(error.message)
     })
    setProjectName("");
    setProjectDescription("");
}

    return (
        <Card className="addproject">
            <h3>New Project</h3>
            <div className="addproject__body">
                <input 
                type="text" placeholder="Project Name" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                />
                <textarea 
                placeholder="project Description" 
                value={projectDecsription}
                onChange={(e) => setProjectDescription(e.target.value)}
                />
            </div>
            <Button 
            variant="contained"
            color="primary" 
            onClick={handleSubmit}
            style={{marginTop: "1rem", background:"#007bff"}}>Add Project</Button>
        </Card>
    )
}

export default FeedAddProject;
