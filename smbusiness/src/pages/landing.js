import React from "react";
import Header from '../component/header';
import Footer from '../component/footer';

const Landing = () => (
    <div>
        <Header />
        <input type="text" name="email" placeholder="Enter your email here"></input>
        <input type="submit"></input>
        <Footer />
    </div>
)

export default Landing;