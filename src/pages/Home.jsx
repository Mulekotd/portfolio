import { Container } from "react-bootstrap";

import { AboutCard } from "/src/components/AboutCard";
import { DevelopmentCard } from "/src/components/DevelopmentCard";
import { SkillsCard } from "/src/components/SkillsCard";

export default function Home() {
  return (
    <Container as="main" className="d-flex flex-column gap-5 p-4">
      <AboutCard />
      <SkillsCard />
      <DevelopmentCard />
    </Container>
  );
}
