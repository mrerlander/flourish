import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Header = () => (
    <Navbar className='light-blue' brand='Flourish' right>
        <NavItem href='/'>About</NavItem>
        <NavItem href='/demo'>Demo</NavItem>
        <NavItem href='#'>Contact</NavItem>
    </Navbar>
);

export default Header;