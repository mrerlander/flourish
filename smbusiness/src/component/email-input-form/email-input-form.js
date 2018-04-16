import React from 'react';
import { Input, Button } from 'react-materialize';
import './email-input-form.css';

const EmailInputForm = props => (
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
);

export default EmailInputForm;