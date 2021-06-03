import React, { useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';

const App = () => {
  const [{user}] = useStateValue();
  return (
    <div className="app">
     {(!user) ? (<Login />) : (
      <div className="app__body">
      <Sidebar />
      <Router>
      <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/Projects" exact component={Projects} />
      {/* <Projects /> */}
      </Switch>
      </Router>
      </div>       
    )}
    </div>
  );
}

export default App;
