import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

import React from "react";
import { Link, useLocation } from "react-router-dom";

const navbarStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "20px",
};

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" style={navbarStyle}>
          João Pedro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav style={{ overflow: "hidden" }}>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projetos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contato
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
