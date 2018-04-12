import React from 'react';
import {Row, Input, Button} from 'react-materialize';

const EmailInputForm = props => (

<Row>
    <form onSubmit={props.handleSubmit}>
        <Input
            name="email"
            onChange={props.handleInputChange} 
            placeholder="Enter your email address here"
            s={12}
        />
        <Button
            type="submit"
            waves="light"
        >
        Submit
        </Button>
    </form>
</Row>

);

export default EmailInputForm;