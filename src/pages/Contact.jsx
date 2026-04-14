import { FaEnvelope, FaPhone } from 'react-icons/fa';

import { Card, Container } from "react-bootstrap";

import { SocialMedias } from "/src/components/SocialMedias";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  
  const email = "joaopedro.gama0675@gmail.com";
  const phoneNumber = "+55 (21) 97138-9552";

  return (
    <Container
      as="main"
      className="main-shell contact-layout"
      style={{ minHeight: "calc(100dvh - 78px)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.42 }}
        className="w-100"
      >
        <Card className="glass-card text-center my-0 mx-auto w-100 contact-card">
          <p className="mb-3 title text-uppercase">{t("contact.title")}</p>

          <div className="d-flex flex-column gap-2 align-items-center w-auto">
            <div className="contact-row"><FaEnvelope className="me-2" /> <span>{email}</span></div>
            <div className="contact-row"><FaPhone className="me-2" /> <span>{phoneNumber}</span></div>
          </div>

          <hr className="my-4" />

          <SocialMedias />
        </Card>
      </motion.div>
    </Container>
  );
}
