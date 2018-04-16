import React from 'react';
import { Input, Button, Row } from 'react-materialize';
// import './email-input-form.css';

const ContactUsForm = props => (
    <div>
    <h4>Contact Us</h4>
        <Row>
        <form id="ContactUsForm" onSubmit={props.handleSubmit}>
                <Input s={12}
                name="first_name"
                onChange={props.handleInputChange}
                placeholder="First Name"
            />
                <Input s={12}
                name="last_name"
                onChange={props.handleInputChange}
                placeholder="Last Name"
            />
                <Input s={12}
                name="company_name"
                onChange={props.handleInputChange}
                placeholder="Company Name"
            />
            <Input s={12}
                name="email"
                onChange={props.handleInputChange}
                placeholder="Email Address"
            />
            <Input s={12}
                name="message"
                type="textarea"
                onChange={props.handleInputChange}
                placeholder="Message"
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