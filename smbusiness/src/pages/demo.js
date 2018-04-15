import React, { Component } from "react";
import Header from '../component/header';
import Form from '../component/form';
import Footer from '../component/footer';
import PieChart from '../component/pieChart';
import GoalForm from '../component/goalForm';
import {Row} from 'react-materialize';

class Demo extends Component {

    constructor(){
        super();
        this.state={
            email: "",
            fixed: 0,
            variable: 0,
            revenue: 0,
            goalType: null,
            goalAmount: 0
        }
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
          [name]: value
        });
    }

    handleGoal = event => {
        event.preventDefault();

        switch (event.target.textContent){
            case "Rainy day fund":
            this.setState({goal: 1});
            break;

            case "Purchase new equipment":
            this.setState({goal: 2})
            break;

            case "Open a new location":
            this.setState({goal: 3})
            break;

            case "Other":
            this.setState({goal: 1})
            break;

            default:
            this.setState({goal: 1})
            break;
        }      
    }

    render(){
        return (
            <div>
                <Header />
                <Row>
                <Form 
                    handleInputChange={this.handleInputChange}
                    handleGoal={this.handleGoal}
                />
                <PieChart 
                    fixed={this.state.fixed}
                    variable={this.state.variable}
                    revenue={this.state.revenue}
                />
                </Row>
                {(this.state.goal > 0) && 
                    <GoalForm
                    goalType={this.state.goalType}
                    handleInputChange={this.handleInputChange}
                />}
                <Footer />
            </div>
        )
    };
};

export default Demo;