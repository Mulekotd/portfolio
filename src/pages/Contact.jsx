import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Card, Container } from "react-bootstrap";
import { SocialMedias } from "/src/components/SocialMedias";

export default function Contact() {
  const email = "joaopedro.gama0675@gmail.com";
  const phoneNumber = "+55 (21) 97138-9552";

  return (
    <Container
      as="main"
      className="p-4"
      style={{ minHeight: "calc(100dvh - 56px)" }}
    >
      <Card
        className="text-center my-0 mx-auto w-100"
        style={{
          maxWidth: "460px",
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
        }}
      >
        <p className="mb-3 title text-uppercase">
          Informações de Contato
        </p>

        <div className="d-flex flex-column gap-1 align-items-center w-auto">
          <div className="d-flex flex-row align-items-center"><FaEnvelope className="me-2" /> <span>{email}</span></div>
          <div className="d-flex flex-row align-items-center"><FaPhone className="me-2" /> <span>{phoneNumber}</span></div>
        </div>

        <hr className="my-4" />
        
        <SocialMedias />
      </Card>
    </Container>
  );
}
