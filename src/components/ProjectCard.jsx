import { Card, Image } from "react-bootstrap";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { useTranslation } from "react-i18next";

export const ProjectCard = ({ image = { alt: '', src: '' }, title, url }) => {
  const { t } = useTranslation();

  return (
    <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} scale={1.01} glareEnable glareMaxOpacity={0.12}>
      <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 180, damping: 16 }}>
        <Card className="project-card rounded d-flex flex-column align-items-center overflow-hidden w-100 h-100">
          <div className="project-card-image-wrap">
            <Image
              className="project-card-image"
              alt={image.alt}
              src={image.src}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="project-card-body">
            <p className="project-card-title mb-1">{title}</p>
            <a className="project-card-link" href={url} target="_blank" rel="noreferrer">
              {t("projects.viewProject")}
            </a>
          </div>
        </Card>
      </motion.div>
    </Tilt>
  );
};
