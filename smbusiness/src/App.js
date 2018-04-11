import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Demo from './pages/demo';
import './App.css';

const App = () => (
    <Router>
      <Route
        exact path='/demo'
        component={Demo}
      />
    </Router>
);

export default App;
