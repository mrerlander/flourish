import React, { Component } from "react";
import Header from '../component/header';
import Form from '../component/form';
import Footer from '../component/footer';
import PieChart from '../component/pieChart';
import GoalForm from '../component/goalForm';
import {Row, Col} from 'react-materialize';
import GoalSlider from '../component/slider';
import LineGraph from '../component/lineGraph';
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
            monthlyGoal: 0,
            percent: false
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
            this.setState({goalType: 1, percent: true});
            break;

            case "Purchase new equipment":
            this.setState({goalType: 2, percent: false})
            break;

            case "Open a new location":
            this.setState({goalType: 3, percent: false})
            break;

            case "Other":
            this.setState({goalType: 1, percent: true})
            break;

            default:
            this.setState({goalType: 1, percent: true})
            break;
        }      
    }

    sliderComplete = (value, type) => {

        const profit = this.state.revenue - this.state.fixed - this.state.variable;

        if (type === 'days'){

        const monthlyGoal = (profit / value) * 30;
        this.setState({monthlyGoal: parseInt(monthlyGoal, 10)});

        } else {
            const monthlyGoal = (profit * (value / 100));
            this.setState({monthlyGoal: parseInt(monthlyGoal, 10)});
            this.setState({percent: true});
        }
    }

    render(){
        return (
            <div>
                <Header />
                <div id="wrapper">
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
                    monthlyGoal={this.state.monthlyGoal}
                />
                </Row>
                {(this.state.goalType > 0) && 
                    <Row>
                    <GoalForm
                    percent={this.state.percent}
                    monthlyGoal={this.state.monthlyGoal}
                    handleInputChange={this.handleInputChange}
                />
                <GoalSlider 
                sliderComplete={this.sliderComplete}
                goalType={this.state.goalType}
                />
                </Row>}
                <Row>
                <Col s={6}
                    offset="s3"
                >
                {(this.state.monthlyGoal > 0) && <LineGraph monthlyGoal={this.state.monthlyGoal}/>}
                </Col>
                </Row>
                <Footer />
                </div>
            </div>
        )
    };
};

export default Demo;