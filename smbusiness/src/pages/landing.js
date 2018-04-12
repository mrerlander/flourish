import React, { Component } from "react";
import Header from '../component/header';
import EmailInputForm from '../component/email-input-form';
import Footer from '../component/footer';

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
            <EmailInputForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
            <Footer />
            </div>
        )
    };
};

export default Landing;