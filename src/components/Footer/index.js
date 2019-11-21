import React from "react";

import Container from "../Container/";

const Footer = ({ year, text }) => (
    <div className="footer">
        <Container>
            <p className="text-center text-white m-0">
                © {year} {text}
            </p>
        </Container>
    </div>
);

export default Footer;
