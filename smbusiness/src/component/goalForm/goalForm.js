import React from 'react';
import {Input, Col} from 'react-materialize';

const GoalForm = props => (
        <form>
            <Col
                s={12}
                l={6}
            >
                <Input 
                    onChange={props.handleInputChange}
                    name="goalAmount"
                    placeholder="$"
                    s={12} 
                    label="Goal $ amount"
                />
            </Col>
        </form>
)

export default GoalForm;