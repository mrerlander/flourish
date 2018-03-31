import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Foot from './component/footer';
import Form from './component/form';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />        
        <Foot />
      </div>
    );
  }
}

export default App;
