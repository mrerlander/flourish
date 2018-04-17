import React, { Component } from "react";
import Header from '../component/header';
import Footer from '../component/footer';
import './about.css';
import CardPanel from "react-materialize/lib/CardPanel";

class About extends Component {

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
            <div id="about-us-content">
            <CardPanel>
            <h4>About Us</h4>
            <p>Our mission is simple. We're here to help you succeed by helping you meet and exceed your business' financial goals.</p>
            <p>We recognize that all small businesses have unique challenges and and are working on building a platform that will allow you to automatically save money on your terms.</p>
            </CardPanel>
            <CardPanel>
            <h4>Meet The Team</h4>
            <h5>Peter Gustafson (CEO / Co-Founder)</h5>
            <img src={require('../images/peter.jpg')} alt="mike" id="peterImage"></img>
            <p>Peter is an accomplished leader with over 5 years experience in the software industry. Peter 
                is currently President and CEO of Flourish. Previously Peter was Customer Success Operations Manager at Trading Technolgies where 
                he led the effort to help sell-side clients migrate over to TT's new cloud based platform.
                Before joining Trading Technologies, Peter spent three years in Seattle working at 2 early-stage SAAS startups in various Sales, Account Management and Operations leadership roles.
                Peter earned his BA in Global Affairs and Economics from George Mason University and most recently completed a Full-Stack Web Development bootcamp at Northwestern University.</p>
                <h5>Michael Erlander (CTO / Co-Founder)</h5>
            <img src={require('../images/michael.png')} alt="mike" id="mikeImage"></img>
            <p>Michael Erlander is the co-founder and CTO of Flourish. 
                Prior to Flourish, Michael was CEO of Grand Central Communications, an internet service for business-to-businessnintegration. 
                Before joining Grand Central, Craig was a senior vice president at Excite@Home where henoversaw the Excite Search and Community business units and managed Network Programming. 
                Craig holds an MBA from Stanford Graduate School of Business and a BS in Electrical Engineering from Virginia Tech. </p>
                </CardPanel>
                <CardPanel>
                <h4>Our Investors</h4>
                <img src="http://logosolusa.com/wp-content/uploads/parser/The-Human-Fund-Logo-1.png" alt="human fund" id="human-fund"></img>
                </CardPanel>
                <CardPanel>
                    <h4>World Headquarters</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.9514860337035!2d-87.74596848465436!3d41.95837707921596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc36486cd0bb%3A0x776d02f1da5d7b60!2s2112+Chicago!5e0!3m2!1sen!2sus!4v1523916561290"></iframe>
                    </CardPanel>
            </div>
            <Footer />
            </div>
        )
    };
};

export default About;