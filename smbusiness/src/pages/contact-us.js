import React, { Component } from "react";
import Header from '../component/header';
import Footer from '../component/footer';
import {Col, Row, CardPanel} from 'react-materialize';
import ContactUsForm from '../component/contact-us-form';

class ContactUs extends Component {

    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            company_name: "",
            email: "",
            message: ""
        }
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        const first_name = event.target.children[0].firstElementChild.value;
        const last_name = event.target.children[1].firstElementChild.value;
        const company_name = event.target.children[2].firstElementChild.value;
        const email = event.target.children[3].firstElementChild.value;
        const message = event.target.children[4].firstElementChild.value;
        event.target.reset();

        debugger;
        fetch("/contactusmessages", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ first_name: first_name, last_name: last_name, company_name: company_name, email: email, message: message })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // document.getElementById("ContactUsForm").reset();
                // return this.setState({email: [...res]})
            });

        
            // document.getElementById("ContactUsForm").reset();

        // event.target.lastElementChild.setAttribute("disabled", "disabled");    
    };

    render() {
        return (
            <div>
                <Header />
                <Row>
                <Col s={6} offset="s3">
                <CardPanel>
            <ContactUsForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
                </CardPanel>
                </Col>
                </Row>
                <Footer />
            </div>
        )
    };
};

export default ContactUs;