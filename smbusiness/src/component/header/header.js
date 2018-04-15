import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './header.css';


const Header = () => (
    <Navbar className='teal darken-4' brand='Flourish' right>
        <NavItem href='/'>About</NavItem>
        <NavItem href='/demo'>Demo</NavItem>
        <NavItem href='#'>Contact</NavItem>
    </Navbar>
);

export default Header;