import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarCon from './components/Navbar';
import Landing from './components/Landing';
import Sessiontask from './components/Sessiontask';
import Localtask from './components/Localtask';
import SessionObj from './components/SessionObj';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavbarCon />
        <Route exact path='/' component={Landing} />
        <Route exact path='/session' component={Sessiontask} />
        <Route exact path='/local' component={Localtask} />
        <Route exact path='/sessionobj' component={SessionObj} />
      </div>
    </Router>
  );
}

export default App;
