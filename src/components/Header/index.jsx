import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const navbarStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "20px"
};

const linkStyle = {
  textDecoration: "none",
  color: "#5a5a5a"
};

const activeLinkStyle = {
  color: "#979797"
};

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" style={navbarStyle}>João Pedro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                style={location.pathname === "/" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projetos"
                style={location.pathname === "/projetos" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
              >
                Projetos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contato"
                style={location.pathname === "/contato" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
              >
                Contato
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;