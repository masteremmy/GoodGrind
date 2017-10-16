import React from 'react';
import ReachDOM from 'reach-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import reduxThunk from 'redux-thunk';

import './App.css'; // TODO - check if used

// Components
import Navbar from './components/navbar/Navbar.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Goals from './components/goals/Goals.js';
import Stats from './components/stats/Stats.js';
import Update from './components/update/Update.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Sad from './components/reasons/ReasonsSad.js';
import Happy from './components/reasons/ReasonsHappy.js';
import Meh from './components/reasons/ReasonsNeutral.js';

// Stating 'extends Component' has nothing to do with the children
// It is extending the capability of the class being declared
// class App is declared with the extended ability of component

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/update" component={Update} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/sad" component={Sad} />
            <Route exact path="/happy" component={Happy} />
            <Route exact path="/meh" component={Meh} />
            {/* TODO - NoMatch Route */}
          </Switch>
        </div>
      </Router>
    );
  }
}

// So there's two things - states and props
// states is used internally at that specific class
// props in-a-nutshell is externally controlled by the parent

export default App;
