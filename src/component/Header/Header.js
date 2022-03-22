import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-style'>
            <img src={logo} ></img>
            <div className='manu-item'>
                <a href='/Order'>Order</a>
                <a href='/Order Review'>Order Review</a>
                <a href='/Manage Inventory'>Manage Inventory</a>
           </div>
        </nav>
    );
};

export default Header;