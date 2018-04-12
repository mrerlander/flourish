import React, { Component } from "react";
import Header from '../component/header';
import Form from '../component/form';
import Footer from '../component/footer';
import PieChart from '../component/pieChart';

class Demo extends Component {

    constructor(){
        super();
        this.state={
            email: "",
            fixed: 0,
            variable: 0,
            revenue: 0,
            goal: 0,
        }
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
          [name]: value
        });
    }

    render(){
        return (
            <div>
                <Header />
                <Form 
                    handleInputChange={this.handleInputChange}
                />
                <PieChart 
                    fixed={this.state.fixed}
                    variable={this.state.variable}
                    revenue={this.state.revenue}
                />
                <Footer />
            </div>
        )
    };
};

export default Demo;