import { Container } from "react-bootstrap";

import { AboutCard } from "/src/components/AboutCard";
import { DevelopmentCard } from "/src/components/DevelopmentCard";
import { SkillsCard } from "/src/components/SkillsCard";

export default function Home() {
  return (
    <Container as="main" className="main-shell home-layout">
      <AboutCard />
      <SkillsCard />
      <DevelopmentCard />
    </Container>
  );
}
