import React from "react";

import { Navbar, NavbarBrand, Container, Row } from "reactstrap";

const Header = props => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <Row>
          <NavbarBrand href="/">Gerador de Assinaturas</NavbarBrand>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
