import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Projects from './components/Home/Feed/Projects';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import Team from './components/Home/Sidebar/Team';
import UserProfile from './components/Home/Sidebar/UserProfile';
import Home from './components/Home/Home';

const App = () => {
  const [{user}] = useStateValue();
  return (
    <div className="app">
     {(!user) ? (<Login />) : (
      <div className="app__body">
      <Router>
      <Switch>
      <Route to="/" exact component={Home} />
      <Route to="/Projects" component={Projects} />
      <Route to="/Team" component={Team} />
      <Route to="/UserProfile" component={UserProfile} />
      </Switch>
      </Router>
      </div>       
    )}
    </div>
  );
}

export default App;
