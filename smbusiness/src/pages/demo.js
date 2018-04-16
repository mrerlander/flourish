import React, { Component } from "react";
import Header from '../component/header';
import Form from '../component/form';
import Footer from '../component/footer';
import PieChart from '../component/pieChart';
import GoalForm from '../component/goalForm';
import {Row, Col, CardPanel} from 'react-materialize';
import GoalSlider from '../component/slider';
import './demo.css';


class Demo extends Component {

    constructor(){
        super();
        this.state={
            email: "",
            fixed: 0,
            variable: 0,
            revenue: 0,
            goalType: null,
            goalAmount: 0,
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
                <div className="container">
                <Row id="how-it-works">
                <Col s={12}>
                <CardPanel>
                <h4>How it Works</h4>
                <h5>1. Connect your business' bank account</h5>
                <p>To use Flourish, you need to connect your business' checking account. This allows Flourish to analyze your business' revenue and expenses, and find money it can safely set aside for your business based on your cash flow.</p>
                    <p>We use 128-bit bank-level security, and we don't store your bank login.</p>
                <h5>2. Flourish saves for you</h5>
                    <p>Every day, Flourish tries to move some money from your business' checking account to your Flourish account. Flourish never transfers more than your business can afford, so you don't have to worry about over-drafting your account. 
                        In fact, we have a no-overdraft guarantee.</p>
                <h5>3. Access your savings anytime</h5>
                    <p>We know you're saving for good reasons – a new location, a new employee, new equipment or even just a rainy day. When you need your savings, send Flourish a text message. Flourish will transfer the money from your Flourish savings back to your business' checking account next business day.</p>

                    <p>Flourish allows unlimited transfers and has no account minimums.</p>
                </CardPanel>
                </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                <Form 
                    handleInputChange={this.handleInputChange}
                    handleGoal={this.handleGoal}
                />
                <PieChart 
                    className="right"
                    fixed={this.state.fixed}
                    variable={this.state.variable}
                    revenue={this.state.revenue}
                />
                </Row>
                {(this.state.goal > 0) && 
                    <Row>
                    <GoalForm
                    goalType={this.state.goalType}
                    handleInputChange={this.handleInputChange}
                    slider={this.state.slider}
                />
                <GoalSlider />
                </Row>}
                </div>
                <Footer />
            </div>
        )
    };
};

export default Demo;