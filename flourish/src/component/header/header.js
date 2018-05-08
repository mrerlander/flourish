import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import './header.css';


const Header = () => (
    <Navbar className='teal darken-4' brand='Flourish' right>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/howitworks'>How it Works</NavLink></li>
        <li><NavLink to='/contactus'>Contact Us</NavLink></li>
    </Navbar>
);

export default Header;