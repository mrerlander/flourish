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
            goal: 0
        }
    };

    render(){
        return (
            <div>
                <Header />
                <Form />
                <PieChart />
                <Footer />
            </div>
        )
    };
};

export default Demo;