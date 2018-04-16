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
                    value={(props.percent) ? props.monthlyGoal : null}
                />
            </Col>
        </form>
)

export default GoalForm;