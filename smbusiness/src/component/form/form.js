import React from 'react';
import {Col, Input, Dropdown, Button, NavItem, Icon} from 'react-materialize';
import './form.css';

//why do you want to save
//how much do you want to save
//by when? (slider of 30 day increments)
//pass to chart, affects profit size only

const Form = props => (
    <Col 
        s={12}
        l={6}
    >
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
            <Dropdown trigger={
                <Button>Tell us why you want to save<Icon right>arrow_downward</Icon></Button>
              }>
              <NavItem onClick={props.handleGoal}>Rainy day fund</NavItem>
              <NavItem onClick={props.handleGoal}>Purchase new equipment</NavItem>
              <NavItem onClick={props.handleGoal}>Open a new location</NavItem>
              <NavItem onClick={props.handleGoal}>Other</NavItem>
            </Dropdown>
        </form>
    </Col>
);

export default Form;