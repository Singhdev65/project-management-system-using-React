import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from '../Home/Sidebar/Sidebar';
import Feed from '../Home/Feed/Feed';

const Home = () => {
    return (
        <div className="Home">
        <Router>
        <Switch>
            <Route to="/Sidebar" component={Sidebar} />
            <Route to="/Feed" component={Feed} />
        </Switch>
       </Router>
        </div>
    )
}

export default Home
