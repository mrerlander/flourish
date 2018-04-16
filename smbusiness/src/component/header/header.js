import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './header.css';


const Header = () => (
    <Navbar className='teal darken-4' brand='Flourish' right>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/howitworks'>How it Works</NavItem>
        <NavItem href='contactus'>Contact Us</NavItem>
    </Navbar>
);

export default Header;