import React from 'react';
import { Input, Button, Row } from 'react-materialize';
import './contact-us-form.css';

const ContactUsForm = props => (
    <div>
    <h4>Contact Us</h4>
        <Row>
        <form id="ContactUsForm" onSubmit={props.handleSubmit}>
                <Input s={12}
                name="first_name"
                // onChange={props.handleInputChange}
                label="First Name"
            />
                <Input s={12}
                name="last_name"
                // onChange={props.handleInputChange}
                label="Last Name"
            />
                <Input s={12}
                name="company_name"
                // onChange={props.handleInputChange}
                label="Company Name"
            />
            <Input s={12}
                name="email"
                // onChange={props.handleInputChange}
                label="Email Address"
            />
            <Input s={12}
                name="message"
                type="textarea"
                // onChange={props.handleInputChange}
                label="Message"
            />
            <Button
                type="submit"
                waves="light"
                id="submitButton"
            >
                Submit
        </Button>
        </form>
        </Row>
        </div>
);

export default ContactUsForm;