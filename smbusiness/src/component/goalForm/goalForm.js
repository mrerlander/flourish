import React from 'react';
import {Input} from 'react-materialize';

const GoalForm = props => (
    <form>
    <Input 
        onChange={props.handleInputChange}
        name="goalAmount"
        placeholder="$"
        s={12} 
        label="Goal $ amount"
    />
    </form>
)

export default GoalForm;