import React from "react";

import { Navbar, NavbarBrand, Container, Row } from "reactstrap";

const Header = props => {
  return (
    <Navbar light expand="md">
      <Container>
        <Row>
          
          <NavbarBrand href="/"><img className="logo" src={props.logo} alt="Gerador de Assinaturas"></img> Gerador de Assinaturas</NavbarBrand>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
