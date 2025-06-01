import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Projetos", to: "/projects" },
    { label: "Contato", to: "/contact" },
  ];

  return (
    <Navbar as="header" className="px-4" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        João Pedro
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav style={{ overflow: "hidden" }}>
          {navLinks.map(({ label, to }) => (
            <Nav.Item key={to}>
              <Nav.Link
                as={Link}
                to={to}
                className={location.pathname === to ? "nav-link active" : "nav-link"}
              >
                {label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
