import { Card } from "react-bootstrap";
import { useState } from "react";

const SkillInfo = ({ title = '', skills = [{ name: '', subSkills: [] }] }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <Card className="container shadow-lg d-flex flex-column align-items-center p-3 h-100 vw-45">
      <h3>{title}</h3>
      <ul className="d-flex flex-column gap-2">
        {skills.map(({ name, subSkills = [] }, index) => (
          <li
            key={index}
            style={{ cursor: "default" }}
            onMouseEnter={() => subSkills.length > 0 && setHoveredSkill(name)}
            onMouseLeave={() => subSkills.length > 0 && setHoveredSkill(null)}
          >
            {name}
            {subSkills.length > 0 && (
              <ul
                className={`d-flex flex-column gap-2 sub-skills ${hoveredSkill === name ? "show" : ""
                  }`}
              >
                {subSkills.map((subSkill, idx) => (
                  <li style={{ cursor: "default" }} key={idx}>
                    {subSkill}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export const SkillsCard = () => {
  const skillsInfo = [
    {
      title: "Soft Skills",
      skills: [
        { name: "Sei lidar com mudanças repentinas de rotina" },
        { name: "Vontade de aprender mais" },
        { name: "Trabalho bem em equipe" },
        { name: "Boa comunicação" }
      ]
    },
    {
      title: "Hard Skills",
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
    <Card className="container d-flex flex-column flex-md-row gap-3 gap-md-4 w-100 h-auto bg-transparent">
      {skillsInfo.map((item) => (
        <SkillInfo
          key={item.title}
          title={item.title}
          skills={item.skills}
        />
      ))}
    </Card>
  );
}