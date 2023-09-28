import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { HiBadgeCheck } from 'react-icons/hi'

//static images handling
const perfil = new URL('/src/assets/images/perfil.jpg', import.meta.url).href
const etc1 = new URL('/src/assets/images/semana_etc (1).jpg', import.meta.url).href
const etc2 = new URL('/src/assets/images/semana_etc (2).jpg', import.meta.url).href
const vitec1 = new URL('/src/assets/images/vitrines_tec (1).jpg', import.meta.url).href
const vitec2 = new URL('/src/assets/images/vitrines_tec (2).jpg', import.meta.url).href

//static download handling
const etc = new URL('/src/assets/downloads/Certificado Exposição de Jogos.pdf', import.meta.url).href
const vitec = new URL('/src/assets/downloads/certificado-artigo-821610-9maoY.pdf', import.meta.url).href

function getAge(birthday) {
  var birthday = new Date("May 20, 2005 00:00:00");
  var year = new Date().getFullYear() - birthday.getFullYear();
  var month = new Date().getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && new Date().getDate() < birthday.getDate())) {
    year--;
  }
  return year; 
}
  
const greetingMessage = () => {
  let h = new Date().toLocaleTimeString("pt-BR", {hour: "numeric", hour12: false});
  if (h >= 0 && h <= 5) { 
    return "Boa madrugada";
  } else if (h >= 6 && h < 12) { 
    return "Bom dia";
  } else if (h >= 12 && h < 18) { 
    return "Boa tarde";
  } else if (h >= 18 && h <= 23) { 
    return "Boa noite";
  }
}

const profile = {
  width: "210px",
  height: "200px",
  overflow: "hidden",
  borderRadius: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const profileImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
}

const title = {
  fontWeight: "bold",
  fontSize: "24px",
  textTransform: "uppercase"
}

const aboutContainer = {
  border: "none"
}

const aboutContent = {
  marginLeft: "24px",
  width: "100%",
  objectFit: "cover",
  border: "none"
}

const skillsContainer = {
  width: "100%",
  height: "auto", 
  border: "none"
}

const skillsContent = {
  height: "100%",
  width: "50%",
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
}

const image = {
  height: "100%",
  width: "50%",
  gap: "10px"
}

const devContainer = {
  height: "auto",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
}

const devContent = {
  height: "360px",
  display: "flex",
  justifyContent: "space-around"
}

const badge = {
  marginLeft: "12px"
}

export default function Home() {
  return (
    <main
    className="d-flex flex-column mt-4"
    id="canvas_container"
    >
      <Card
      className="container bd-highlight d-flex flex-row p-4"
      style={aboutContainer}
      >
        <Card
        style={profile}
        >
          <Image
            alt="perfil"
            src={perfil}
            style={profileImage}
          />  
        </Card>
        <Card
        className="d-flex flex-collumn p-4"
        style={aboutContent}
        >
          <p style={title}>Sobre Mim</p>
          <p>
            {greetingMessage()}, eu me chamo João Pedro Silverio Gama tenho {getAge()} anos e possuo experiência
            em Desenvolvimento Web Full-Stack.
          </p>

          <p style={title}>Resumo</p>
          <p>
            Natural de São Gonçalo sempre fui interessado na área de TI. Para alcança os meus objetivos, em
            2020 ingressei no Instituto Federal do Rio de Janeiro - Campus Niterói, onde finalizei o curso
            Técnico em Informática no começo do ano de 2023.
          </p>
        </Card>
      </Card>

      <Card
      className="container d-flex flex-row"
      style={skillsContainer}
      >
        <Card
        className="container d-flex flex-column align-items-center p-3 m-4"
        style={skillsContent}
        >
          <h3>Soft Skills</h3>

          <ul
          className="mt-2"
          >
            <li className="mt-2">Sei lidar com mudanças repentinas de rotina</li>
            <li className="mt-2">Vontade de aprender mais</li>
            <li className="mt-2">Trabalho bem em equipe</li>
            <li className="mt-2">Boa comunicação</li>
          </ul>
        </Card>
        <Card
        className="container d-flex flex-column align-items-center p-3 m-4"
        style={skillsContent}
        >
          <h3>Hard Skills</h3>

          <ul
          className="mt-2"
          >
            <li className="mt-2">PostgreSQL</li>
            <li className="mt-2">JavaScript</li>
            <li className="mt-2">React.js</li>
            <li className="mt-2">Node.js</li>
            <li className="mt-2">Docker</li>
            <li className="mt-2">PHP</li>
          </ul>
        </Card>
      </Card>

      <Card
      style={devContainer}
      className="container p-4 mt-4 mb-4"
      >
        <p style={title}>Desenvolvimento</p>

        <div className="d-flex flex-row align-items-baseline">
          <h5>Semana de Educação, Tecnologia, Ciência e Cultura</h5>
          <div className="d-flex flex-row align-items-center" style={badge}>
            <HiBadgeCheck />
            <a href={etc} download={true}>Certificado</a>
          </div>
        </div>
        <p>
          Dentro do IFRJ, participei de eventos que moldaram de diversas maneiras meu caráter sendo um desses a semana ETC
          onde desempenhei o papel de palestrante e monitor de uma sala temática, aberta ao público externo, de jogos desenvolvidos
          no âmbito da instituição.
        </p>
        <div className="container gap-4" style={devContent}>
          <img style={image} alt="etc1" src={etc1} />
          <img style={image} alt="etc2" src={etc2} />
        </div>

        <div className="d-flex flex-row align-items-baseline">
          <h5 className="mt-4">#Mostra IFRJ</h5>
          <div className="d-flex flex-row align-items-center" style={badge}>
            <HiBadgeCheck />
            <a href={vitec} download={true}>Certificado</a>
          </div>
        </div>
        
        <p>
          Além do acontecimento citado anteriormente, participei também da apresentação do projeto de extensão
          Vitrines Tecnológicas, cujo atuei durante 2022. Essa é uma plataforma web contendo um portfólio de
          produtos e serviços panteados resultantes de projetos de pesquisa e inovação. Essa Vitrine visa promover
          a visibilidade perante o público interno e externo da instituição, bem como obter parcerias e financiamentos.
        </p>
        <div className="container gap-4" style={devContent}>
          <img style={image} alt="vitec1" src={vitec1} />
          <img style={image} alt="vitec2" src={vitec2} />
        </div>
      </Card>
    </main>       
  )
}
