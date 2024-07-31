import { Card, Image, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { HiBadgeCheck } from "react-icons/hi";
import {
  profile,
  profileImage,
  title,
  container,
  content,
  skillsContainer,
  skillsContent,
  image,
  devContainer,
  devContent,
  buttonStyle,
} from "./styles";

import React from "react";
import { getAge, greetingMessage } from "../../utils";
import { perfil, etc, etc1, etc2, vitec, vitec1, vitec2 } from "../../utils";

export default function Home() {
  return (
    <Card
      as="main"
      className="d-flex flex-column gap-5 p-4"
      id="canvas_container"
    >
      <Card
        className="container bd-highlight d-flex flex-row align-items-center gap-4"
        style={container}
      >
        <Card style={profile}>
          <Image alt="perfil" src={perfil} style={profileImage} />
        </Card>
        <Card className="d-flex flex-collumn p-4" style={content}>
          <h2 style={title}>Sobre Mim</h2>
          <p>
            {greetingMessage()}, eu me chamo João Pedro Silverio Gama tenho{" "}
            {getAge()} anos e possuo experiência em Desenvolvimento Web
            Full-Stack.
          </p>
          <h2 style={title}>Resumo</h2>
          <p>
            Natural de São Gonçalo sempre fui interessado na área de TI. Para
            alcança os meus objetivos, em 2020 ingressei no Instituto Federal do
            Rio de Janeiro - Campus Niterói, onde finalizei o curso Técnico em
            Informática no começo do ano de 2023.
          </p>
        </Card>
      </Card>
      <Card className="container d-flex flex-row gap-4" style={skillsContainer}>
        <Card
          className="container d-flex flex-column align-items-center p-3"
          style={skillsContent}
        >
          <h3>Soft Skills</h3>
          <ul className="d-flex flex-column gap-2">
            <li>Sei lidar com mudanças repentinas de rotina</li>
            <li>Vontade de aprender mais</li>
            <li>Trabalho bem em equipe</li>
            <li>Boa comunicação</li>
          </ul>
        </Card>
        <Card
          className="container d-flex flex-column align-items-center p-3"
          style={skillsContent}
        >
          <h3>Hard Skills</h3>
          <ul className="d-flex flex-column gap-2">
            <li>PostgreSQL</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Docker</li>
            <li>PHP</li>
          </ul>
        </Card>
      </Card>
      <Card
        style={devContainer}
        className="container d-flex flex-column gap-2 p-4"
      >
        <Card className="d-flex flex-column gap-2" style={container}>
          <p style={title}>Desenvolvimento</p>
          <div className="d-flex flex-row align-items-start gap-2">
            <h5>Semana de Educação, Tecnologia, Ciência e Cultura</h5>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip">Baixar Certificação</Tooltip>}
            >
              <Button href={etc} download style={buttonStyle}>
                <HiBadgeCheck color="green" size={18} />
              </Button>
            </OverlayTrigger>
          </div>
          <p>
            Dentro do IFRJ, participei de eventos que moldaram de diversas
            maneiras meu caráter sendo um desses a semana ETC onde desempenhei o
            papel de palestrante e monitor de uma sala temática, aberta ao
            público externo, de jogos desenvolvidos no âmbito da instituição.
          </p>
          <div
            className="container d-flex flex-start justify-content-between p-0"
            style={devContent}
          >
            <Image alt="etc1" src={etc1} style={image} />
            <Image alt="etc2" src={etc2} style={image} />
          </div>
        </Card>
        <Card className="d-flex flex-column" style={container}>
          <div className="d-flex flex-row align-items-start gap-2">
            <h5>#Mostra IFRJ</h5>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip">Baixar Certificação</Tooltip>}
            >
              <Button href={vitec} download style={buttonStyle}>
                <HiBadgeCheck color="green" size={18} />
              </Button>
            </OverlayTrigger>
          </div>
          <p>
            Além do acontecimento citado anteriormente, participei também da
            apresentação do projeto de extensão Vitrines Tecnológicas, cujo
            atuei durante 2022. Essa é uma plataforma web contendo um portfólio
            de produtos e serviços panteados resultantes de projetos de pesquisa
            e inovação. Essa Vitrine visa promover a visibilidade perante o
            público interno e externo da instituição, bem como obter parcerias e
            financiamentos.
          </p>
          <div
            className="container d-flex flex-start justify-content-between p-0"
            style={devContent}
          >
            <Image alt="vitec1" src={vitec1} style={image} />
            <Image alt="vitec2" src={vitec2} style={image} />
          </div>
        </Card>
      </Card>
    </Card>
  );
}
