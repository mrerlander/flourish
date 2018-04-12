import React from 'react';
import {Row, Input} from 'react-materialize';

const Form = props => (

<Row>
    <form>
        <Input
            onChange={props.handleInputChange} 
            name="revenue"
            placeholder="$"
            s={12}
            label="Avg Monthly Total Revenue"
        />
        <Input 
            onChange={props.handleInputChange}
            name="fixed"
            placeholder="$"
            s={12}
            label="Fixed Monthly Expenses"
        />
        <Input 
            onChange={props.handleInputChange}
            name="variable"
            placeholder="$"
            s={12} 
            label="Avg Monthly Variable Expenses"
        />
    </form>
</Row>

);

export default Form;