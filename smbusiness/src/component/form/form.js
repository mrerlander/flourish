import React from 'react';
import {Row, Input, Button} from 'react-materialize';

const Form = props => (

<Row>
    <form>
        <Input 
            placeholder="$"
            s={12}
            label="Fixed Monthly Expenses"
        />
        <Input 
            placeholder="$"
            s={12} 
            label="Avg Monthly Variable Expenses"
        />
        <Input 
            placeholder="$"
            s={12}
            label="Avg Monthly Total Revenue"
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

export default Form;