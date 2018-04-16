import React, { Component } from "react";
import Header from '../component/header';
import EmailInputForm from '../component/email-input-form';
import './landing.css';
import {Row, Col} from "react-materialize";

class Landing extends Component {

    constructor() {
        super();
        this.state = {
            email: ""
        }
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name
        this.setState({ [name]: value });
      };

      handleSubmit = (event) => {
          event.preventDefault();

        const userEmail = event.target.firstElementChild.firstElementChild.value;
        // debugger;
        fetch("/savedemails", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userEmail : userEmail })
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            // return this.setState({email: [...res]})
          });    
        };

    render() {
        return (
            <div>
            <Header />
            <br/>
            <Row>
                <Col s={12} className="center">
            <img src={require('../images/rain.png')} alt="logo" id="landingLogo"></img>
            </Col>
            </Row>
            <Row>
            <Col s={12}>
            <h3 id="headerValueStatement">The world's first free automated savings app designed for small businesses.</h3>
            </Col>
            </Row>
            <Row>
            <Col s={4} offset="s4" className="center">
            <EmailInputForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
            </Col>
            </Row>            
    </div>
        )
    };
};

export default Landing;