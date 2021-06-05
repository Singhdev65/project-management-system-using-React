import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import Projects from './components/Feed/Projects'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import Team from './components/Sidebar/Team';
import UserProfile from './components/Sidebar/UserProfile';

const App = () => {
  const [{user}] = useStateValue();
  return (
    <div className="app">
     {(!user) ? (<Login />) : (
      <div className="app__body">
      <Router>
      <Switch>
      <Route path="/" exact>
      <Sidebar />
      <Feed />
      </Route>
      <Route path="/Projects" component={Projects} />
      <Route path="/Team" component={Team} />
      <Route path="/UserProfile" component={UserProfile} />
      </Switch>
      </Router>
      </div>       
    )}
    </div>
  );
}

export default App;
