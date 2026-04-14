import { Container, Row, Col } from "react-bootstrap";

import { ProjectCard } from "/src/components/ProjectCard";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import { sites } from "/src/utils/helpers.js";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Container as="main" className="main-shell projects-layout">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="page-header"
      >
        <h1>{t("projects.title")}</h1>
        <p>{t("projects.subtitle")}</p>
      </motion.div>

      <Row className="g-4">
        {sites.map(({ image, title, url }) => (
          <Col key={url} xl={3} lg={4} md={6} sm={12}>
            <ProjectCard
              image={image}
              title={title}
              url={url}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
