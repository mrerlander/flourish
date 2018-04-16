import React from 'react';
import { Input, Button, Row } from 'react-materialize';
import './email-input-form.css';

const EmailInputForm = props => (
<Row>
        <form id="emailInput" onSubmit={props.handleSubmit}>
            <Input
                name="email"
                onChange={props.handleInputChange}
                placeholder="Enter your email..."
            />
            <br/>
            <Button
                type="submit"
                waves="light"
                id="emailSubmitButton"
                className="left"
            >
                Get Early Access
        </Button>
        </form>
        </Row>
);

export default EmailInputForm;