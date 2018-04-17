import React from "react";
import Header from '../component/header';
import Footer from '../component/footer';
import {Row, Col, CardPanel, Button} from 'react-materialize';
import {Link} from 'react-router-dom';

const HowItWorks = props => (
    <div>
                <Header />
                <div className="container">
                <Row id="how-it-works">
                <Col s={12}>
                <CardPanel>
                <h4>How it Works</h4>
                <h5>1. Connect your business' bank account</h5>
                <p>To use Flourish, you need to connect your business' checking account. This allows Flourish to analyze your business' income and spending, and find money it can safely set aside for your business based on your cash flow.
                    We use 128-bit bank-level security, and we don't store your bank login.</p>
                <h5>2. Flourish saves for you</h5>
                    <p>Every day, Flourish tries to move some money from your business' checking account to your Flourish account. Flourish never transfers more than your business can afford, so you don't have to worry about over-drafting your account. 
                        In fact, we have a no-overdraft guarantee.</p>
                <h5>3. Access your savings anytime</h5>
                    <p>We know you're saving for good reasons – a new location, a new employee, new equipment or even just a rainy day. When you need your savings, send Flourish a text message. Flourish will transfer the money from your Flourish savings back to your business' checking account next business day.</p>

                    <p>Flourish allows unlimited transfers and has no account minimums.</p>
                </CardPanel>
                </Col>
                <Link
                    to='/demo' 
                    className='white-text'>
                        <Button
                            large 
                            waves='light'>
                            Try it out!
                        </Button>
                </Link>
                </Row>
                </div>
                <Footer />
                </div>
)

export default HowItWorks;