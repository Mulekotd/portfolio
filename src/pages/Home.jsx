import { Container } from "react-bootstrap";

import { AboutCard } from "/src/components/AboutCard";
import { DevelopmentCard } from "/src/components/DevelopmentCard";
import { SkillsCard } from "/src/components/SkillsCard";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container as="main" className="main-shell home-layout">
      <motion.div
        className="bg-orb bg-orb-a"
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="bg-orb bg-orb-b"
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 17, repeat: Infinity }}
      />
      <AboutCard />
      <SkillsCard />
      <DevelopmentCard />
    </Container>
  );
}
