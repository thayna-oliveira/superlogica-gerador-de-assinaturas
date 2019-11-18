import React from 'react';

const Navbar = ({ logo, alt }) => (
    <div className="nav">
        <div className="container">
            <a href="https://superlogica.com" target="_blank">
                <img src={logo} alt={alt} className="logo" />
            </a>
        </div>
    </div>
);

export default Navbar;