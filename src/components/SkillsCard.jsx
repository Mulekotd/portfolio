import { Card, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const subSkillVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
};

const SkillInfo = ({ title = '', skills = [{ name: '', subSkills: [] }] }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggle = (name) => {
    setExpandedSkill((prev) => (prev === name ? null : name));
  };

  return (
    <Card className="glass-card skills-column d-flex flex-column p-4 h-100">
      <h3 className="skills-title">{title}</h3>
      <ul className="d-flex flex-column gap-2 mb-0">
        {skills.map(({ name, subSkills = [] }, index) => (
          <li
            key={index}
            className="skills-item"
            onClick={() => subSkills.length > 0 && toggle(name)}
            style={subSkills.length > 0 ? { cursor: "pointer" } : undefined}
          >
            <span className="d-flex align-items-center gap-1">
              {name}
              {subSkills.length > 0 && (
                <motion.span
                  animate={{ rotate: expandedSkill === name ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: "black", display: "inline-block", fontSize: "0.7em" }}
                >
                  &#5125;
                </motion.span>
              )}
            </span>
            <AnimatePresence initial={false}>
              {subSkills.length > 0 && expandedSkill === name && (
                <motion.ul
                  className="d-flex flex-column gap-1 mt-1 ps-3"
                  style={{ listStyle: "disc", overflow: "hidden" }}
                  variants={subSkillVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {subSkills.map((subSkill, idx) => (
                    <li style={{ cursor: "default" }} key={idx}>
                      {subSkill}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export const SkillsCard = () => {
  const { t } = useTranslation();

  const skillsInfo = [
    {
      title: t("home.softSkills"),
      skills: [
        { name: t("skills.adaptability") },
        { name: t("skills.curiosity") },
        { name: t("skills.teamwork") },
        { name: t("skills.communication") }
      ]
    },
    {
      title: t("home.hardSkills"),
      skills: [
        { name: "NoSQL", subSkills: ["Firebase"] },
        {
          name: "SQL",
          subSkills: ["PostgreSQL", "MySQL"],
        },
        { name: "React.js", subSkills: ["Material UI", "Redux", "Zod"] },
        { name: "Node.js", subSkills: ["Express"] },
        { name: "Docker" },
      ]
    }
  ];

  return (
    <motion.section
      className="skills-grid"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      {skillsInfo.map((item) => (
        <SkillInfo
          key={item.title}
          title={item.title}
          skills={item.skills}
        />
      ))}
    </motion.section>
  );
}