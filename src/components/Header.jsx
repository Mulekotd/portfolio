import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const normalizedCurrentLanguage = currentLanguage === "en" ? "en-US" : currentLanguage;

  const navLinks = [
    { label: t("common.navHome"), to: "/" },
    { label: t("common.navProjects"), to: "/projects" },
    { label: t("common.navContact"), to: "/contact" },
  ];

  return (
    <Navbar as="header" className="app-navbar px-3 px-md-4" expand="lg">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <Navbar.Brand as={Link} to="/" className="navbar-brand brand-highlight">
          <span className="text-light">{t("common.name")}</span>
          <small className="text-light">{t("common.roles")}</small>
        </Navbar.Brand>
      </motion.div>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto align-items-lg-center gap-2" style={{ overflow: "hidden" }}>
          {navLinks.map(({ label, to }) => (
            <Nav.Item key={to}>
              <Nav.Link
                as={Link}
                to={to}
                className={location.pathname === to ? "nav-link nav-link-modern active" : "nav-link nav-link-modern"}
              >
                {label}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Nav.Item>
            <div className="language-switch" aria-label={t("common.language")}>
              <button
                className={normalizedCurrentLanguage === "pt-BR" ? "active" : ""}
                onClick={() => i18n.changeLanguage("pt-BR")}
                type="button"
              >
                PT
              </button>
              <button
                className={normalizedCurrentLanguage === "en-US" ? "active" : ""}
                onClick={() => i18n.changeLanguage("en-US")}
                type="button"
              >
                EN
              </button>
            </div>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
