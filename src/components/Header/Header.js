import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>THis is header file </h2>
            <img className="logo" src={logo} alt="Logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="iInventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;