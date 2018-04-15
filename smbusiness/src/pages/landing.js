import React, { Component } from "react";
import Header from '../component/header';
import EmailInputForm from '../component/email-input-form';
// import Footer from '../component/footer';
import './landing.css';

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
        debugger;
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
            <h1 id="landingHeader">Flourish</h1>
            <h3 id="headerValueStatement">The world's first free automated savings app for small businesses.</h3>
            <img src="https://images.unsplash.com/photo-1502228213426-d4e9f2add0e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=85732fd87ba1c3771852abc666633901&auto=format&fit=crop&w=2250&q=80" alt="main" height="100%" width="100%"></img>
            <EmailInputForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
            {/* <Footer /> */}
            </div>
        )
    };
};

export default Landing;