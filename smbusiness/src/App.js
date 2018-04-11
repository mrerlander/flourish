import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Demo from './pages/demo';
import Landing from './pages/landing';
import './App.css';

const App = () => (
    <Router>
      <div>
        <Route
          exact path='/'
          component={Landing}
        />
        <Route
          exact path='/demo'
          component={Demo}
        />
      </div>
    </Router>
);

export default App;
