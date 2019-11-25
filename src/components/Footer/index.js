import React from "react";

import { Container, Row } from "reactstrap";

const Footer = ({ year, text }) => (
  <div className="footer">
    <Container>
      <Row>
        <div className="text-center">
          © {year} {text}
        </div>
      </Row>
    </Container>
  </div>
);

export default Footer;
