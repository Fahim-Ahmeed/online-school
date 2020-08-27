import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>BEST Online School</h2>
            <nav >
                <a href="#home">Home</a>
                <a href="#top">Top-sell</a>
                <a href="#about">About</a>
            </nav>
        </div>
    );
};

export default Header;