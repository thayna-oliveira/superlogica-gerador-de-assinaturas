import React from 'react';

import Container from '../Container/';

const Navbar = ({ logo, alt }) => (
    <div className="nav">
        <Container>
            <a href="https://superlogica.com" target="_blank">
                <img src={logo} alt={alt} className="logo" />
            </a>
        </Container>
    </div>
);

export default Navbar;