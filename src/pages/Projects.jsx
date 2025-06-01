import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "/src/components/ProjectCard";

import { sites } from "/src/utils/helpers.js";

export default function Projects() {
  return (
    <Container as="main" className="p-4">
      <Row className="g-4">
        {sites.map(({ image, title, url }) => (
          <Col key={url} lg={4} md={6} sm={12}>
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
