import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import "./InfoBox.css";

const InfoBox = ({title, projects}) => {
    return (
        <Card className="infobox">
            <CardContent>
                <Typography color="textSecondary" className="infobox__title">
                    {title}
                </Typography>
                <h4 className="infoBox__project">{projects}</h4>
            </CardContent>
        </Card>
    )
}

export default InfoBox
