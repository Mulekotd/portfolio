import { Card } from "react-bootstrap";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const technicalSkills = [
  {
    name: "Frontend",
    skills: ["Next.js", "React.js", "Redux", "Zustand", "Tailwind CSS", "SPA Architecture", "Component Design System"]
  },
  {
    name: "Backend",
    skills: ["Express.js", "Fastify", "Nest.js", "Django", "FastAPI", "RESTful API Design"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "Firebase", "Data Modeling", "Query Optimization"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD (Github Actions, Jenkins)", "AWS", "Azure", "NGINX", "Monitoring & Logging"]
  },
  {
    name: "AI / Machine Learning",
    skills: ["LLM Integration (OpenAI, Ollama, API-based & local models)", "Prompt Engineering", "Embeddings", "Context Optimization", "Model Optimization (latency, cost, quantization)"]
  },
  {
    name: "Architectures",
    skills: ["Client-server", "Model-View-Controller", "Microservices", "Layers"]
  }
];

export const SkillsCard = () => {
  const { t } = useTranslation();
  const softSkills = [
    t("skills.adaptability"),
    t("skills.curiosity"),
    t("skills.teamwork"),
    t("skills.communication")
  ];

  return (
    <motion.section
      className="skills-section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <Card className="glass-card skills-card">
        <Card.Body>
          <section className="skills-group" aria-labelledby="technical-skills-title">
            <h3 className="skills-title" id="technical-skills-title">{t("home.hardSkills")}</h3>
            <div className="technical-skills-grid">
              {technicalSkills.map((group) => (
                <article className="technical-skill-card" key={group.name}>
                  <h4>{group.name}</h4>
                  <div className="skill-chips">
                    {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="skills-group soft-skills-group" aria-labelledby="soft-skills-title">
            <h3 className="skills-title" id="soft-skills-title">{t("home.softSkills")}</h3>
            <div className="soft-skills-list">
              {softSkills.map((skill) => <span className="soft-skill" key={skill}>{skill}</span>)}
            </div>
          </section>
        </Card.Body>
      </Card>
    </motion.section>
  );
};
