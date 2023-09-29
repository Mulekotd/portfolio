import React from 'react';
import { Card } from 'react-bootstrap';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const card = {
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  textAlign: 'center'
};

const title = {
  fontWeight: 'bold',
  fontSize: '24px',
  textTransform: 'uppercase',
  marginBottom: '16px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontSize: '18px',
  marginRight: '12px',
  marginLeft: '12px'
};

export default function Contact() {
  return (
    <main className="d-flex mt-4" id="canvas_container">
      <Card style={card}>
        <p style={title}>Redes Sociais</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://www.instagram.com/mulekotd/"
            style={linkStyle}
            aria-label="Siga-me no Instagram"
          >
            <AiFillInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/mulekotd/"
            style={linkStyle}
            aria-label="Conecte-se comigo no LinkedIn"
          >
            <BsLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Mulekotd"
            style={linkStyle}
            aria-label="Veja meu GitHub"
          >
            <BsGithub /> GitHub
          </a>
        </div>

        <p className="mt-4" style={title}>
          Telefone
        </p>
        <span>
          <em>Celular:</em> (21) 97138-9552
        </span>
        <span>
          <em>Fixo:</em> (21) 3254-3592
        </span>
      </Card>
    </main>
  );
}