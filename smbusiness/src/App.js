import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Demo from './pages/demo';
import Landing from './pages/landing';
import About from './pages/about';
import './App.css';
import HowItWorks from './pages/howItWorks';

const App = () => (
    <Router>
      <div>
        <Route
          exact path='/'
          component={Landing}
        />
        <Route
          exact path='/about'
          component={About}
        />
        <Route
          exact path='/howitworks'
          component={HowItWorks}
        />
        <Route
          exact path='/demo'
          component={Demo}
        />
      </div>
    </Router>
);

export default App;
